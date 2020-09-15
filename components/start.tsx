import React from 'react';
import { Flex, Button, Stack } from '@chakra-ui/core';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Box,
} from '@chakra-ui/core';
export default function Start(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex width={['100%']} height={['100vh']} align="center" justify="center">
        <Flex align="center" justify="center">
          <Stack spacing={5}>
            <Box>Try to beat the high score!</Box>
            <Button
              onClick={() => props.setView('play')}
              variantColor="blue"
              variant="outline"
              _hover={{ border: '1px solid blue' }}
              _focus={{ outline: 'none' }}
            >
              Start
            </Button>
            <Button
              onClick={() => onOpen()}
              color="gold"
              variant="outline"
              _hover={{ border: '1px solid yellow' }}
              _focus={{ outline: 'none' }}
            >
              Highscore
            </Button>
          </Stack>
        </Flex>
        <Modal isCentered isOpen={isOpen} onClose={onClose} closeOnEsc>
          <ModalContent
            border="5px solid gold"
            backgroundColor="black"
            borderRadius="10px"
            height="600px"
            opacity={1}
          >
            <ModalHeader backgroundColor="gold" width="100%" textAlign="center">
              Highscore
            </ModalHeader>
            <ModalBody></ModalBody>
            <ModalFooter backgroundColor="gold" width="100%" textAlign="center">
              <Button
                variant="unstyled"
                m="auto"
                size="sm"
                onClick={onClose}
                _focus={{ outline: 'none' }}
                _hover={{ color: 'black' }}
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
