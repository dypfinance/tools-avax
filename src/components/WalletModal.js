import React from "react";
import Modal from "./general/Modal";
import OutsideClickHandler from "react-outside-click-handler";

const WalletModal = ({ handleClose, show, handleConnection }) => {
  return (
      
    <Modal visible={show} onModalClose={handleClose} maxWidth={420}>
        <OutsideClickHandler onOutsideClick={handleClose}>
      <div className="walletmodal-wrapper">
        <div className="sc-jwKygS bFQpTL">
          <h3>Connect to a wallet</h3>
        </div>
        <div>
          <div className="row flex-column" style={{gap: 20}}>
            <button
              onClick={handleConnection}
              id="connect-METAMASK"
              className="walletbutton"
            >
              
                <div color="#E8831D" className="justify-content-between d-flex w-100 align-items-center">
                <span>MetaMask</span>  
                <img src="/images/wallets/metamask.svg" alt="Icon" />
              </div>
            </button>
            <button
              onClick={handleConnection}
              id="connect-METAMASK"
              className="walletbutton"
            >
              
                <div color="#E8831D" className="justify-content-between d-flex w-100 align-items-center">
                  <span>Coinbase</span>
                <img src="/images/wallets/coinbase.png" alt="Icon" />
              </div>
            </button>
            <button
              onClick={handleConnection}
              id="connect-COIN98"
              className="walletbutton"
            >
                <div color="#E8831D" className="justify-content-between d-flex w-100 align-items-center">
                 <span>Coin98</span> 
                <img src="/images/wallets/coin98.svg" alt="Icon" />
              </div>
            </button>
            <button
              onClick={handleConnection}
              id="connect-COIN98"
              className="walletbutton"
            >
             
                <div color="#E8831D" className="justify-content-between d-flex w-100 align-items-center">
                 <span>Trust Wallet</span> 
                <img src="/images/wallets/trustwallet.svg" alt="Icon" />
              </div>
            </button>
            <button
              onClick={handleConnection}
              id="connect-COIN98"
              className="walletbutton"
            >
             
                <div color="#E8831D" className="justify-content-between d-flex w-100 align-items-center">
                  <span>SafePal</span>
                <img src="/images/wallets/safepal.svg" alt="Icon" />
              </div>
            </button>
          </div>
        </div>
      </div>
  
    </OutsideClickHandler>
      </Modal>
  );
};

export default WalletModal;
