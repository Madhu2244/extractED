/* eslint-disable react/prop-types */
import NotesSidebar from "./NotesSidebar";
import Notes from './Notes';

function NotesPage({ setResponseMessage, responseMessage, setStep }) {
    return (
      <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
        <div style={{ flex: 1, overflowY: 'auto', height: '100vh' }}>
            <Notes 
              responseMessage={responseMessage}
            />
        </div>
        <div>
          <NotesSidebar
            setResponseMessage={setResponseMessage}
            responseMessage={responseMessage}
            setStep={setStep}
          />
        </div>
      </div>
    );
}

export default NotesPage;
