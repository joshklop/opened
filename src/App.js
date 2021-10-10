import {useState} from 'react';
import './App.css';
import UploadButton from './components/UploadButton.js';
import MediaList from './components/MediaList.js';

function App() {
  const [files, setFiles] = useState([]);
  return (
    <div className='App'>
      <header className='App-header'>
        OpenEd
      </header>
      <UploadButton files={files} setFiles={setFiles}/>
      <MediaList files={files} />
    </div>
  );
}

export default App;
