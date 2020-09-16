import React, { useState, useEffect } from 'react';
import { Flex, Button, Stack, Box, Input } from '@chakra-ui/core';

export default function Highscore(props: any) {
  const [username, setUsername] = useState('');
  const [highscores, setHighscores] = useState(new Array(10));

  const handleSave = () => {
    // props.setView('home');
    addHighscore(props.newScore, username, props.mode);
  };

  useEffect(() => {
    getHighscores('add');
  }, []);

  const getHighscores = (mode: string) => {
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
      .then((data: any) => {
        if (data.success) {
          setHighscores(data.data);
        }
      })
      .catch((err) => {
        console.error(
          `Something wrong happened while getting messages:${err.message}`
        );
      });
  };

  const addHighscore = (score: number, username: string, mode: string) => {
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
      .then((data: any) => {
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
          <Stack spacing={5} height="600px">
            <Box
              height="35px"
              textAlign="center"
              backgroundColor="gold"
              color="black"
            >
              Highscore
            </Box>
            <Box height="485px">
              {props.isNewHighscore && (
                <Flex
                  align="center"
                  justify="space-evenly"
                  direction="row"
                  p={2}
                >
                  <Box width="100px" textAlign="center">
                    {props.newScore}
                  </Box>
                  <Input
                    autoFocus
                    width="150px"
                    variant="unstyled"
                    textAlign="center"
                    mx={5}
                    maxLength={8}
                    borderBottom="1px solid white"
                    value={username}
                    onKeyDown={(e: any) => {
                      if (
                        e.key === 'Enter' &&
                        e.target.value.trim().length > 0
                      ) {
                        handleSave();
                      }
                    }}
                    onChange={(e: any) => setUsername(e.target.value.trim())}
                  />
                  <Box>{convertDate(new Date())}</Box>
                </Flex>
              )}
              {highscores.map((highscore: any) => {
                return (
                  <Flex
                    key={highscore._id}
                    align="center"
                    justify="space-evenly"
                    direction="row"
                    p={2}
                  >
                    <Box width="100px" textAlign="center">
                      {highscore.score}
                    </Box>
                    <Box mx={5} width="150px" textAlign="center">
                      {highscore.username}
                    </Box>
                    <Box>{convertDate(highscore.createdAt)}</Box>
                  </Flex>
                );
              })}
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
                onClick={() => props.setView('home')}
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
