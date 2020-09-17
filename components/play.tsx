import React, { useState, useEffect } from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import CountUp from 'react-countup';
import {
  Flex,
  Button,
  Box,
  Stack,
  Input,
  useToast,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Badge,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/core';

export default function Play(props: any) {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(2);
  const [level, setLevel] = useState(1);
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState(0);
  const [prevAnswers, setPrevAnswers] = useState([] as any);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [symbol, setSymbol] = useState('+');
  const [time, setTime] = useState(100);
  const [isActive, setIsActive] = useState(false);
  const [modalCategory, setModalCategory] = useState('ready');
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure(true);
  const prevAnsDisplayNumber = 5;

  const generateNumbers = () => {
    setIsResetting(false);
    const num1 = Math.floor(Math.random() * level * 2 + 1);
    const num2 = Math.floor(Math.random() * (level + 1) * 2 + 1);
    setNumber1(num1);
    setNumber2(num2);

    switch (props.mode) {
      case 'add':
        setNumber1(num1);
        setNumber2(num2);
        setAnswer(num1 + num2);
        break;
      case 'subtract':
        if (num2 > num1) {
          setNumber1(num2);
          setNumber2(num1);
          setAnswer(num2 - num1);
        } else {
          setNumber1(num1);
          setNumber2(num2);
          setAnswer(num1 - num2);
        }
        break;
      case 'multiply':
        setAnswer(num1 * num2);
        break;
      case 'divide':
        setNumber1(num1 * num2);
        setNumber2(num2);
        setAnswer(num1);
        break;
      default:
        setNumber1(num1);
        setNumber2(num2);
        setAnswer(num1 + num2);
        break;
    }
    setIsResetting(true);
  };

  useEffect(() => {
    switch (props.mode) {
      case 'add':
        setSymbol('+');
        break;
      case 'subtract':
        setSymbol('-');
        break;
      case 'multiply':
        setSymbol('×');
        break;
      case 'divide':
        setSymbol('÷');
        break;
      default:
        setSymbol('+');
        break;
    }
  }, []);

  const handleKeyDown = (e: any) => {
    if (Number(e.key) >= 0 && Number(e.key) <= 9) {
      handleChange(e);
    }
  };

  useEffect(() => {
    getHighscore(props.mode);
  }, []);

  useEffect(() => {
    let timer = null as any;
    if (isActive) {
      timer = setInterval(() => {
        if (time > 0) setTime(time - 0.1);
        if (time <= 0) {
          setTime(0);
          gameOver();
          clearInterval(timer);
        }
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, time]);

  useEffect(() => {
    generateNumbers();
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleChange = (e: any) => {
    const tempInput = Number(input.concat(e.key));
    if (tempInput.toString().length < answer.toString().length) {
      setInput(tempInput.toString());
    } else if (tempInput !== answer) {
      toast({
        position: 'top',
        duration: 500,
        render: () => (
          <Box m={3} color="red.500" p={3} borderRadius="5px">
            wrong
          </Box>
        ),
      });
      if (prevAnswers.length >= prevAnsDisplayNumber) prevAnswers.pop();
      setPrevAnswers([
        { color: 'red.500', answer: `${number1} + ${number2} ≠ ${tempInput}` },
        ...prevAnswers,
      ]);
      setInput('');
    } else {
      setIsActive(false);
      setTime(100);
      toast({
        position: 'top',
        duration: 500,
        render: () => (
          <Box m={3} color="green.500" p={3} borderRadius="5px">
            correct
          </Box>
        ),
      });
      const newScore = score + 10;
      setScore(newScore);
      setLevel(level + 1);
      if (prevAnswers.length >= prevAnsDisplayNumber) prevAnswers.pop();
      setPrevAnswers([
        {
          color: 'green.500',
          answer: `${number1} + ${number2} = ${tempInput}`,
        },
        ...prevAnswers,
      ]);
      setInput('');
      generateNumbers();
      setIsActive(true);
    }
  };

  const getHighscore = (mode: string) => {
    fetch(`/api/gethighscore`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mode,
      }),
    })
      .then((res) => res.json())
      .then((data: any) => {
        if (data.success) {
          setHighscore(data.data.score);
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while getting messages:${err.message}`
        );
      });
  };

  const handleHomeBtnClick = () => {
    setIsActive(false);
    setModalCategory('gohome');
    onOpen();
  };

  const handleGoHome = () => {
    if (score > highscore) {
      props.setIsNewHighscore(true);
      props.setNewscore(score);
      props.setView('highscore');
    } else {
      props.setView('home');
    }
  };

  const gameOver = () => {
    setIsActive(false);
    setModalCategory('gameover');
    onOpen();
  };

  let sliderColor = null;
  switch (true) {
    case time > 80:
      sliderColor = 'green';
      break;
    case time > 60:
      sliderColor = 'blue';
      break;
    case time > 40:
      sliderColor = 'yellow';
      break;
    case time > 20:
      sliderColor = 'orange';
      break;
    default:
      sliderColor = 'red';
  }

  const restart = () => {
    setModalCategory('ready');
  };

  const play = () => {
    setScore(0);
    setLevel(1);
    setTime(100);
    setIsActive(true);
    setInput('');
    onClose();
  };

  let modalElement = null;
  switch (modalCategory) {
    case 'gohome':
      modalElement = (
        <>
          <ModalBody m={10} textAlign="center">
            Do you want to quit?
          </ModalBody>
          <Flex
            align="center"
            justify="space-evenly"
            direction="row"
            backgroundColor="gold"
          >
            <Button
              variant="ghost"
              size="sm"
              color="black"
              onClick={() => handleGoHome()}
              _focus={{ outline: 'none' }}
              _hover={{ color: 'grey' }}
            >
              Yes
            </Button>
            <Button
              variant="ghost"
              size="sm"
              color="black"
              onClick={() => {
                setIsActive(true);
                onClose();
              }}
              _focus={{ outline: 'none' }}
              _hover={{ color: 'grey' }}
            >
              Close
            </Button>
          </Flex>
        </>
      );
      break;
    case 'gameover':
      modalElement = (
        <>
          <ModalBody m={10} textAlign="center">
            Game Over
          </ModalBody>
          <Flex
            align="center"
            justify="space-evenly"
            direction="row"
            backgroundColor="gold"
          >
            <Button
              variant="ghost"
              size="sm"
              color="black"
              onClick={() => handleGoHome()}
              _focus={{ outline: 'none' }}
              _hover={{ color: 'grey' }}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              size="sm"
              color="black"
              onClick={() => {
                restart();
              }}
              _focus={{ outline: 'none' }}
              _hover={{ color: 'grey' }}
            >
              Restart
            </Button>
          </Flex>
        </>
      );
      break;
    case 'ready':
      modalElement = (
        <>
          <ModalBody m={10} textAlign="center">
            <Button
              variant="ghost"
              size="sm"
              m={5}
              color="black"
              width="100px"
              backgroundColor="gold"
              onClick={() => play()}
              _focus={{ outline: 'none' }}
              _hover={{ color: 'grey' }}
            >
              Start
            </Button>
          </ModalBody>
        </>
      );
      break;
  }

  return (
    <>
      <Flex width={['100%']} align="center" justify="space-between">
        <Flex align="center" justify="center" direction="column">
          <Box m="2">
            <Button
              color="gold"
              fontSize="32px"
              variant="ghost"
              _hover={{ color: 'white' }}
              _active={{ bg: 'none' }}
              _focus={{ outline: 'none' }}
              onClick={() => handleHomeBtnClick()}
            >
              <BiHomeAlt />
            </Button>
          </Box>
        </Flex>
        <Flex align="center" justify="center" direction="column">
          <Box m="2" textAlign="center" fontSize="12px">
            Highscore
          </Box>
          <Box fontSize="22px" textAlign="center">
            {highscore}
          </Box>
        </Flex>
      </Flex>
      <Flex width={['100%']} height={['100%']} align="center" justify="center">
        <Flex align="center" justify="center">
          <Stack spacing={20}>
            <Flex align="center" justify="center" direction="column">
              <Box m="2" textAlign="center" fontSize="12px">
                {score > highscore ? (
                  <Badge variantColor="green">new highscore</Badge>
                ) : (
                  'Score'
                )}
              </Box>
              <Box fontSize="22px" textAlign="center">
                {isResetting && (
                  <Box className="bounce">
                    <CountUp
                      start={score > 0 ? score - 10 : 0}
                      end={score}
                      duration={1}
                    />
                  </Box>
                )}
              </Box>
            </Flex>
            <Flex align="center" justify="center" direction="row">
              <Slider
                color={sliderColor}
                defaultValue={100}
                value={time}
                size="sm"
                width="200px"
              >
                <SliderTrack />
                <SliderFilledTrack />
                <SliderThumb />
              </Slider>
            </Flex>
            <Flex align="center" justify="center" direction="row">
              <Stack isInline>
                <Box width="100px" textAlign="center" fontSize="40px">
                  {isResetting && <Box className="bounce"> {number1}</Box>}
                </Box>
                <Box width="100px" textAlign="center" fontSize="40px">
                  {symbol}
                </Box>
                <Box width="100px" textAlign="center" fontSize="40px">
                  {isResetting && <Box className="bounce"> {number2}</Box>}
                </Box>
                <Box width="100px" textAlign="center" fontSize="40px">
                  =
                </Box>
              </Stack>
            </Flex>
            <Flex align="center" justify="center" direction="row">
              <Input
                autoFocus
                variant="unstyled"
                textAlign="center"
                fontSize="32px"
                // type="number"
                pattern="[0-9]*"
                value={input}
                onChange={(e: any) => {}}
              />
            </Flex>
            <Flex align="center" justify="center" direction="column">
              {prevAnswers.length > 0 && (
                <>
                  <Box width="200px" textAlign="center" fontSize="16px" m={5}>
                    previous answers
                  </Box>
                  <Box width="200px" textAlign="center" fontSize="24px">
                    {prevAnswers.map((answer: any, index: number) => {
                      return (
                        <Box
                          key={index}
                          color={answer.color}
                          fontSize={`${24 - index * 2}px`}
                        >
                          {answer.answer}
                        </Box>
                      );
                    })}
                  </Box>
                </>
              )}
            </Flex>
          </Stack>
        </Flex>
        <Modal
          isCentered
          isOpen={isOpen}
          onClose={onClose}
          closeOnEsc={false}
          closeOnOverlayClick={false}
        >
          <ModalContent
            border="5px solid gold"
            backgroundColor="black"
            borderRadius="10px"
            height="175px"
            opacity={1}
          >
            {modalElement}
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}
