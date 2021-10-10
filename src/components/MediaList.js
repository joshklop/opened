import MediaFile from './MediaFile.js'

function MediaList({files}) {
return (
    <ul>
      {
        files.map(file => (
          <MediaFile key={file.name} file={file} />
        ))
      }
    </ul>
  )
}

export default MediaList;
