import {useState} from 'react';
import './App.css';
import UploadButton from './components/UploadButton.js';
import MediaList from './components/MediaList.js';
import ConnectButton from './components/ConnectWallet';
import DisconnectButton from './components/DisconnectWallet';

import { TezosToolkit } from '@taquito/taquito';

function App() {
  const [filesUploaded, setFilesUploaded] = useState(false);
  const [files, setFiles] = useState([]);

  const [Tezos, setTezos] = useState(
    new TezosToolkit("https://api.tez.ie/rpc/granadanet")
  );
  const [publicToken, setPublicToken] = useState("");
  const [wallet, setWallet] = useState(null);
  const [userAddress, setUserAddress] = useState("");
  const [userBalance, setUserBalance] = useState(0);
  const [copiedPublicToken, setCopiedPublicToken] = useState(false);
  const [beaconConnection, setBeaconConnection] = useState(false);

  return (
    <div className='App'>
      <header className='App-header'>
        OpenEd
      </header>
      <UploadButton files={files} setFiles={setFiles}/>
      <form>
        <input type='text'/>
        <input type='submit'/>
      </form>
      <MediaList files={files} />
      {
        beaconConnection 
          ? <DisconnectButton
              wallet={wallet}
              setPublicToken={setPublicToken}
              setUserAddress={setUserAddress}
              setUserBalance={setUserBalance}
              setWallet={setWallet}
              setTezos={setTezos}
              setBeaconConnection={setBeaconConnection}
            />
          : <ConnectButton             
              Tezos={Tezos}
              setPublicToken={setPublicToken}
              setWallet={setWallet}
              setUserAddress={setUserAddress}
              setUserBalance={setUserBalance}
              setBeaconConnection={setBeaconConnection}
              wallet={wallet}
            />
      }
    </div>
  );
}

export default App;
