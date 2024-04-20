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
    Image
  } from '@chakra-ui/react';
import placeholderImage from './placeholder-article.png';
import NotesTitleEditable from './NotesTitleEditable';
import TagFeature from './TagFeature';

function GeneratedNotes() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
        <Button onClick={onOpen}>Open</Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
          <Image src={placeholderImage}></Image>
          <TagFeature/>
          <NotesTitleEditable/>
          </DrawerBody>

          <DrawerFooter>
            <Button type='submit' form='my-form' margin-right='2px'> {/*fix*/}
              Save
            </Button>
            <Button type='submit' form='my-form'>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default GeneratedNotes;
