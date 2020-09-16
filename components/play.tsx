import React, { useState, useEffect } from 'react';
import { Flex, Button, Box, Text, Stack, Input } from '@chakra-ui/core';
import { BiHomeAlt } from 'react-icons/bi';
import { useToast } from '@chakra-ui/core';
import CountUp from 'react-countup';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/core';

export default function Play(props: any) {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(2);
  const [level, setLevel] = useState(1);
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState(0);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const generateNumbers = () => {
    setIsResetting(false);
    const num1 = Math.floor(Math.random() * level * 2 + 1);
    const num2 = Math.floor(Math.random() * (level + 1) * 2 + 1);
    setNumber1(num1);
    setNumber2(num2);
    setAnswer(num1 + num2);
    setIsResetting(true);
  };

  const handleKeyDown = (e: any) => {
    if (Number(e.key) >= 0 && Number(e.key) <= 9) {
      handleChange(e);
    }
  };

  useEffect(() => {
    getHighscore('add');
  }, []);

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
          <Box
            m={3}
            color="red.500"
            p={3}
            // border="1px solid red"
            borderRadius="5px"
          >
            wrong
          </Box>
        ),
      });
      setInput('');
    } else {
      toast({
        position: 'top',
        duration: 500,
        render: () => (
          <Box
            m={3}
            color="green.500"
            p={3}
            // border="1px solid gold"
            borderRadius="5px"
          >
            correct
          </Box>
        ),
      });
      const newScore = score + 10;
      setScore(newScore);
      // if (newScore > highscore) setHighscore(newScore);
      setLevel(level + 1);
      setInput('');
      generateNumbers();
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
    onOpen();
  };

  const handleGoHome = () => {
    if (score > highscore) {
      props.setIsNewHighscore(true);
      props.setNewscore(score);
      props.setView('highscore');
      // addHighscore();
    } else {
      props.setView('home');
    }
  };

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
        {/* <Flex align="center" justify="center" direction="column">
          <Box m="2" textAlign="center" fontSize="12px">
            Score
          </Box>
          <Box fontSize="22px" textAlign="center">
            {score}
          </Box>
        </Flex> */}
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
            {/* <Flex m={10} align="center" justify="center" direction="column">
              <Box fontSize="12px" color="yellow" textAlign="center">
                level
              </Box>
              <Box fontSize="22px" color="yellow" textAlign="center">
                {level}
              </Box>
            </Flex> */}
            <Flex align="center" justify="center" direction="column">
              <Box m="2" textAlign="center" fontSize="12px">
                Score
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
              <Stack isInline>
                <Box width="100px" textAlign="center" fontSize="40px">
                  {isResetting && <Box className="bounce"> {number1}</Box>}
                </Box>
                <Box width="100px" textAlign="center" fontSize="40px">
                  +
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
                type="number"
                value={input}
                onChange={(e: any) => {}}
              />
            </Flex>
          </Stack>
        </Flex>
        <Modal isCentered isOpen={isOpen} onClose={onClose} closeOnEsc>
          <ModalContent
            border="5px solid gold"
            backgroundColor="black"
            borderRadius="10px"
            height="200px"
            opacity={1}
          >
            <ModalBody m={10} textAlign="center">
              Do you want to quit?
            </ModalBody>
            <ModalFooter backgroundColor="gold" width="100%" textAlign="center">
              <Button
                variant="unstyled"
                m="auto"
                size="sm"
                color="black"
                onClick={() => handleGoHome()}
                _focus={{ outline: 'none' }}
                _hover={{ color: 'grey' }}
              >
                Yes
              </Button>
              <Button
                variant="unstyled"
                m="auto"
                size="sm"
                color="black"
                onClick={onClose}
                _focus={{ outline: 'none' }}
                _hover={{ color: 'grey' }}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}
