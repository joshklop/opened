import { TezosToolkit } from "@taquito/taquito";
import './ConnectButton.css';

function DisconnectButton({
                            wallet,
                            setPublicToken,
                            setUserAddress,
                            setUserBalance,
                            setWallet,
                            setTezos,
                            setBeaconConnection
                          }) {
  const disconnectWallet = async () => {
    //window.localStorage.clear();
    setUserAddress("");
    setUserBalance(0);
    setWallet(null);
    const tezosTK = new TezosToolkit("https://api.tez.ie/rpc/granadanet");
    setTezos(tezosTK);
    setBeaconConnection(false);
    setPublicToken(null);
    console.log("disconnecting wallet");
    if (wallet) {
      await wallet.client.removeAllAccounts();
      await wallet.client.removeAllPeers();
      await wallet.client.destroy();
    }
  };

  return (
    <button className="Connect-button" onClick={disconnectWallet}>
      Disconnect Wallet
    </button>
  );
};

export default DisconnectButton;
