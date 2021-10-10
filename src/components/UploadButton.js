import {useRef} from 'react';
import './UploadButton.css';

function UploadButton({files, setFiles}) {
  const fileInput = useRef(null);

  async function onChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      setFiles([...files, ...e.target.files]);
    }
  }

  return (
    <div>
      <input type="file" name="pdf" ref={fileInput} onChange={onChange} style={{display: 'none'}}/>
      <button type="button" className="Upload-button" onClick={() => fileInput.current.click()}>
        Upload PDF
      </button>
    </div>
  )
}

export default UploadButton;
