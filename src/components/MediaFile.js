import {useState} from 'react';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import './MediaFile.css';

function MediaFile({file}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }

  function onNextClick() {
    if (pageNumber < numPages)
      setPageNumber(pageNumber + 1);
  } 

  function onPrevClick() {
    if (pageNumber > 1)
      setPageNumber(pageNumber - 1);
  }

  return (
    <li className='list-item'>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className='document'>
          <Page key={`page_${pageNumber}`} pageNumber={pageNumber} />
      </Document>
      <span> 
        <button type='button' onClick={onPrevClick} className='next-prev-button'>Prev</button>
        <span className='page-numbers'>{pageNumber} of {numPages}</span>
        <button type='button' onClick={onNextClick} className='next-prev-button'>Next</button>
      </span>
    </li>
  )
}

export default MediaFile;
