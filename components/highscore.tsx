import React, { useState, useEffect, KeyboardEvent } from 'react';
import { Flex, Button, Stack, Box, Input, Collapse } from '@chakra-ui/core';
import IHighScores from './interfaces/ihighscores';
import IHighscoreProps from './interfaces/ihighscoreprops';
import IHighScore from './interfaces/ihighscore';
import IScoreBoard from './interfaces/iscoreboard';

export default function Highscore(props: IHighscoreProps) {
  const [username, setUsername] = useState('');
  const [highscores, setHighscores] = useState(new Array(10));
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState('');

  const handleSave = () => {
    addHighscore(props.newScore, username, props.mode);
  };

  useEffect(() => {
    getHighscores(props.mode);
  }, []);

  const getHighscores = (mode: String) => {
    fetch(`/api/gethighscores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mode,
      }),
    })
      .then((res) => res.json())
      .then((data: IHighScores) => {
        if (data.success) {
          if (data.data.length > 0) {
            setMessage('');
            setHighscores(data.data);
          } else {
            setMessage('no data found');
          }
          setShow(true);
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while getting messages:${err.message}`
        );
      });
  };

  const addHighscore = (score: Number, username: String, mode: String) => {
    fetch(`/api/addhighscore`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        score,
        username,
        mode,
      }),
    })
      .then((res) => res.json())
      .then((data: IHighScores) => {
        if (data.success) {
          setHighscores(data.data);
          props.setIsNewHighscore(false);
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while getting messages:${err.message}`
        );
      });
  };

  const convertDate = (date: Date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  };

  const handleView = (mode: String) => {
    setShow(false);
    setHighscores([]);
    getHighscores(mode);
    // setShow(false);
  };
  return (
    <>
      <Flex width={['100%']} height={['100vh']} align="center" justify="center">
        <Flex
          // p={10}
          align="center"
          justify="center"
          border="5px solid gold"
          borderRadius="10px"
        >
          <Stack spacing={2} height="600px" maxWidth="360px">
            <Box
              height="35px"
              textAlign="center"
              backgroundColor="gold"
              color="black"
            >
              Highscore
            </Box>
            <Flex
              align="center"
              justify="space-between"
              direction="row"
              pb={3}
              borderBottom="3px solid gold"
            >
              <Button
                width="75px"
                textAlign="center"
                variant="ghost"
                size="sm"
                m={1}
                onClick={() => handleView('add')}
                _hover={{ border: 'none', color: 'grey' }}
                _focus={{
                  outline: 'none',
                  backgroundColor: 'gold',
                  color: 'black',
                }}
                _active={{ outline: 'none', color: 'gold' }}
              >
                add
              </Button>
              <Button
                width="75px"
                textAlign="center"
                variant="ghost"
                size="sm"
                m={1}
                onClick={() => handleView('subtract')}
                _hover={{ border: 'none', color: 'grey' }}
                _focus={{
                  outline: 'none',
                  backgroundColor: 'gold',
                  color: 'black',
                }}
                _active={{ outline: 'none', color: 'gold' }}
              >
                subtract
              </Button>
              <Button
                width="75px"
                textAlign="center"
                variant="ghost"
                size="sm"
                m={1}
                onClick={() => handleView('multiply')}
                _hover={{ border: 'none', color: 'grey' }}
                _focus={{
                  outline: 'none',
                  backgroundColor: 'gold',
                  color: 'black',
                }}
                _active={{ outline: 'none', color: 'gold' }}
              >
                multiply
              </Button>
              <Button
                width="75px"
                textAlign="center"
                variant="ghost"
                size="sm"
                m={1}
                onClick={() => handleView('divide')}
                _hover={{ border: 'none', color: 'grey' }}
                _focus={{
                  outline: 'none',
                  backgroundColor: 'gold',
                  color: 'black',
                }}
                _active={{ outline: 'none', color: 'gold' }}
              >
                divide
              </Button>
            </Flex>
            <Box height="485px">
              <Flex align="center" justify="space-evenly" direction="row" p={2}>
                <Box width="75px" textAlign="center">
                  score
                </Box>
                <Box width="120px" textAlign="center" mx={5}>
                  username
                </Box>
                <Box width="150px" textAlign="center">
                  date
                </Box>
              </Flex>
              <Collapse mt={4} isOpen={show}>
                {props.isNewHighscore && (
                  <Flex
                    align="center"
                    justify="space-evenly"
                    direction="row"
                    p={2}
                  >
                    <Box width="75px" textAlign="center">
                      {props.newScore}
                    </Box>
                    <Input
                      autoFocus
                      width="120px"
                      variant="unstyled"
                      textAlign="center"
                      mx={5}
                      maxLength={8}
                      borderBottom="1px solid white"
                      value={username}
                      onKeyDown={(e: KeyboardEvent) => {
                        if (
                          e.key === 'Enter' &&
                          (e.target as HTMLInputElement).value.trim().length > 0
                        ) {
                          handleSave();
                        }
                      }}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUsername(e.target.value.trim())
                      }
                    />
                    <Box width="150px" textAlign="center">
                      {convertDate(new Date())}
                    </Box>
                  </Flex>
                )}
                {highscores.length > 0
                  ? highscores.map((highscore: IScoreBoard, index: Number) => {
                      if (props.isNewHighscore && index > 9) return;
                      return (
                        <Flex
                          key={highscore._id}
                          align="center"
                          justify="space-evenly"
                          direction="row"
                          p={2}
                        >
                          <Box width="75px" textAlign="center">
                            {highscore.score}
                          </Box>
                          <Box mx={5} width="120px" textAlign="center">
                            {highscore.username}
                          </Box>
                          <Box width="150px" textAlign="center">
                            {convertDate(highscore.createdAt)}
                          </Box>
                        </Flex>
                      );
                    })
                  : !props.isNewHighscore && (
                      <Flex
                        align="center"
                        justify="center"
                        direction="column"
                        p={2}
                      >
                        <Box textAlign="center">{message}</Box>
                      </Flex>
                    )}
              </Collapse>
            </Box>
            <Flex
              align="center"
              justify="space-evenly"
              direction="row"
              backgroundColor="gold"
            >
              {props.isNewHighscore && (
                <Button
                  onClick={() => handleSave()}
                  variant="ghost"
                  color="black"
                  _hover={{ border: 'none', color: 'grey' }}
                  _focus={{ outline: 'none' }}
                >
                  Save
                </Button>
              )}
              <Button
                onClick={() => {
                  props.setIsNewHighscore(false);
                  props.setView('home');
                }}
                variant="ghost"
                color="black"
                _hover={{ border: 'none', color: 'grey' }}
                _focus={{ outline: 'none' }}
              >
                Cancel
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
