import React from 'react';
import {
  Flex,
  Button,
  Stack,
  SimpleGrid,
  Modal,
  ModalContent,
  useDisclosure,
  Box,
  PseudoBox,
} from '@chakra-ui/core';
import IMainProps from './interfaces/imainprops';

export default function Home(props: IMainProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const play = (mode: string) => {
    props.setMode(mode);
    props.setView('play');
  };

  return (
    <>
      <Flex width={['100%']} height={['100vh']} align="center" justify="center">
        <Flex align="center" justify="center">
          <Stack spacing={5}>
            <Box>Try to beat the high score!</Box>
            <Button
              onClick={() => onOpen()}
              variantColor="blue"
              variant="outline"
              _hover={{ border: '1px solid blue' }}
              _focus={{ outline: 'none' }}
            >
              Start
            </Button>
            <Button
              onClick={() => props.setView('highscore')}
              color="gold"
              variant="outline"
              _hover={{ border: '1px solid yellow' }}
              _focus={{ outline: 'none' }}
            >
              Highscore
            </Button>
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
            backgroundColor="black"
            borderRadius="10px"
            height="600px"
            opacity={1}
          >
            <Flex
              width={['100%']}
              height={['100vh']}
              align="center"
              justify="center"
            >
              <Flex
                align="center"
                justify="center"
                border="5px solid gold"
                borderRadius="10px"
              >
                <Stack spacing={5} height="600px" width="360px">
                  <Box
                    height="35px"
                    textAlign="center"
                    backgroundColor="gold"
                    color="black"
                  >
                    Select Mode
                  </Box>
                  <Box height="485px">
                    <SimpleGrid columns={2} spacing={5}>
                      <PseudoBox
                        ml={3}
                        border="1px solid gold"
                        borderRadius="5px"
                        height="230px"
                        _hover={{
                          border: '1px solid blue',
                          backgroundImage:
                            'url(../../static/images/math-ss-add-001.gif)',
                          backgroundSize: '100%',
                          color: 'black',
                          cursor: 'pointer',
                        }}
                        onClick={() => play('add')}
                      >
                        <Flex
                          height="100%"
                          width="100%"
                          align="center"
                          justify="center"
                        >
                          Add
                        </Flex>
                      </PseudoBox>
                      <PseudoBox
                        mr={3}
                        border="1px solid gold"
                        borderRadius="5px"
                        height="230px"
                        _hover={{
                          border: '1px solid blue',
                          backgroundImage:
                            'url(../../static/images/math-ss-subtract-001.gif)',
                          backgroundSize: '100%',
                          color: 'black',
                          cursor: 'pointer',
                        }}
                        onClick={() => play('subtract')}
                      >
                        <Flex
                          height="100%"
                          width="100%"
                          align="center"
                          justify="center"
                        >
                          Subtract
                        </Flex>
                      </PseudoBox>
                      <PseudoBox
                        ml={3}
                        border="1px solid gold"
                        borderRadius="5px"
                        height="230px"
                        _hover={{
                          border: '1px solid blue',
                          backgroundImage:
                            'url(../../static/images/math-ss-multiply-001.gif)',
                          backgroundSize: '100%',
                          color: 'black',
                          cursor: 'pointer',
                        }}
                        onClick={() => play('multiply')}
                      >
                        <Flex
                          height="100%"
                          width="100%"
                          align="center"
                          justify="center"
                        >
                          Multiply
                        </Flex>
                      </PseudoBox>
                      <PseudoBox
                        mr={3}
                        border="1px solid gold"
                        borderRadius="5px"
                        height="230px"
                        _hover={{
                          border: '1px solid blue',
                          backgroundImage:
                            'url(../../static/images/math-ss-divide-001.gif)',
                          backgroundSize: '100%',
                          color: 'black',
                          cursor: 'pointer',
                        }}
                        onClick={() => play('divide')}
                      >
                        <Flex
                          height="100%"
                          width="100%"
                          align="center"
                          justify="center"
                        >
                          Divide
                        </Flex>
                      </PseudoBox>
                    </SimpleGrid>
                  </Box>
                  <Flex
                    align="center"
                    justify="space-evenly"
                    direction="row"
                    backgroundColor="gold"
                  >
                    <Button
                      onClick={() => onClose()}
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
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}
