import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import { FaPencil } from 'react-icons/fa6';

function NotesTitleEditable() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px'}}>
      <FaPencil style={{ marginRight: '8px', color: 'purple' }} />
      <Editable defaultValue={'Lesson Title: Auto Generated'}>
        <EditablePreview />
        <EditableInput style={{ border: '1px solid #ccc', borderRadius: '4px' }} />
      </Editable>   
    </div>
  );
}

export default NotesTitleEditable;
