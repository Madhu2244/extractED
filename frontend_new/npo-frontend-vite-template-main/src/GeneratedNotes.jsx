import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Image,
    Tag, Flex, Icon
} from '@chakra-ui/react';
import placeholderImage from './placeholder-article.png';
import NotesTitleEditable from './NotesTitleEditable';
import { MdSettings } from "react-icons/md"; // Changed from MdEdit to MdSettings

function GeneratedNotes() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen}>Open</Button>
            <Drawer isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Notes Menu</DrawerHeader>
                    <DrawerBody>
                        <Image src={placeholderImage}></Image>
                        <Tag variant="solid" colorScheme="purple" marginTop="4" marginRight="2">
                            <Flex align="center">
                                Subject Tag
                                <Icon as={MdSettings} ml={2} /> {/* Changed Icon to Settings cog */}
                            </Flex>
                        </Tag>
                        <Tag variant="solid" colorScheme="purple" marginTop="4" marginRight="2">
                            <Flex align="center">
                                Work Tag
                                <Icon as={MdSettings} ml={2} /> {/* Changed Icon to Settings cog */}
                            </Flex>
                        </Tag>
                        <NotesTitleEditable />
                    </DrawerBody>

                    <DrawerFooter style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button type='submit' form='my-form' margin-right='4px' width="calc(50% - 2px)">
                            Save Note
                        </Button>
                        <Button type='submit' form='my-form' colorScheme="purple" width="calc(50% - 2px)">
                            Generate Quiz
                        </Button>
                    </DrawerFooter>

                </DrawerContent>
            </Drawer>
        </>
    );
}

export default GeneratedNotes;
