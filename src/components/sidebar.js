import { NavLink } from "react-router-dom";
import Ethereum from "../assets/ethereum.svg";
import Avax from "../assets/avalanche.svg";
import Logo from "../assets/logo.svg";
import LogoWhite from "../assets/logo-white.svg";
import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { handleSwitchNetwork } from "../functions/hooks";
import { injected } from "../functions/connectors";
import NotConnected from "../assets/notconnected.svg";
import Connected from "../assets/connected.svg";
import SubmitInfo from "./submit-info/SubmitInfo";

const activateLasers = () => {
  window.$.alert("Coming Soon!");
};
const Sidebar = (props) => {
  const [activeBtn, setActiveBtn] = useState("avax");
  const [activeLink, setActiveLink] = useState("news");
  const { chainId, active, account } = useWeb3React();

  return (
    <div
      onClick={props.toggleMobileSidebar}
      className={`sidebar ${props.isOpenInMobile ? "open" : ""}`}
    >
      <div className="close-sidebar">
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className="logo">
        <a href="/news">
          <img className="logo-white" src={LogoWhite} alt="Image" />
          <img className="logo-black" src={Logo} alt="Image" />
        </a>
      </div>

      <div className="menu-cat-one" style={{ marginTop: "2rem" }}>
        <div className="walletwrapper">
          <div
            className="top-right-header"
            style={{
              background: account
                ? window.ethereum?.chainId === "0x1"
                  ? "linear-gradient(87.56deg, #1D91D0 9.37%, #32B1F7 93.57%)"
                  : "linear-gradient(87.56deg, #FC4F36 9.37%, #E30613 93.57%)"
                : "#fff",
            }}
          >
            <div className="home-menu">
              <a href="#" id="wallet">
                <img src={!active ? NotConnected : Connected} alt="Image" />
                {/* <i style={{color: '#fff'}} className='fas fa-wallet'></i> */}
                <span
                  style={{
                    color: !active ? "#6B7A99" : "#fff",
                  }}
                >
                  {!active ? "Wallet not connected" : "Connected!"}
                </span>
              </a>
              {!active && (
                <button
                  className="connectwalletbtn"
                  onClick={(e) => {
                    e.preventDefault();
                    injected.activate();
                    window.connectWallet();
                  }}
                >
                  Connect
                </button>
              )}
            </div>
          </div>
          <h6
            className="networks row m-0"
            style={{
              border: chainId === 1 ? "1px solid #1486C3" : "1px solid #E84142",
            }}
          >
            <a
              href="javascript:void(0)"
              className="hoverNetwork"
              style={{ background: chainId === 1 ? "#1D91D0" : "transparent" }}
              onClick={() => {
                setActiveBtn("eth");
                handleSwitchNetwork("0x1");
              }}
            >
              <img src={Ethereum} alt="Image not found" />
              <span
                style={{ color: chainId === 1 ? "#fff" : "#6B7A99" }}
                className="network-text"
              >
                Ethereum
              </span>
            </a>
            <a
              href="javascript:void(0)"
              className="hoverNetwork"
              style={{
                padding: "4px 11px 0",
                background: chainId === 43114 ? "#E84142" : "transparent",
              }}
              onClick={() => {
                setActiveBtn("avax");
                handleSwitchNetwork("0xa86a");
              }}
            >
              <img src={Avax} alt="Image not found" />
              <span style={{ color: chainId === 43114 ? "#fff" : "#6B7A99" }}>
                Avalanche
              </span>
            </a>
          </h6>
        </div>
        <ul style={{width: 'fit-content', margin: 'auto'}}>
          <div className="row m-auto align-items-center" style={{width: 'fit-content'}}>
            <li className="navlinks">
              <NavLink
                exact
                to="/pool-explorer"
                onClick={() => {
                  setActiveLink("explorer");
                }}
                className={
                  window.location.href.includes("pool-explorer")
                    ? "activelink"
                    : ""
                }
                 style={{flexDirection: 'column', display: 'flex', alignItems: 'center'}}
              >
                <img
                  src={
                    window.location.href.includes("pool-explorer")
                      ? "/assets/img/search.svg"
                      : "/assets/img/search-passive.svg"
                  }
                  alt="Image"
                />
                <span className="sidebar-link">Explorer</span>
              </NavLink>
            </li>
            <li className="navlinks">
              <NavLink
                to="/pair-explorer"
                onClick={() => {
                  setActiveLink("pair");
                }}
                className={
                  window.location.href.includes("pair-explorer")
                    ? "activelink"
                    : ""
                }
                style={{flexDirection: 'column', display: 'flex', alignItems: 'center'}}
              >
                <img
                  src={
                    window.location.href.includes("pair-explorer")
                      ? "/assets/img/compass.svg"
                      : "/assets/img/compass-passive.svg"
                  }
                  alt="Image"
                />
                <span className="sidebar-link">Pair Explorer</span>
              </NavLink>
            </li>
          </div>
          <div className="row m-auto align-items-center" style={{width: 'fit-content'}}>
          <li className="navlinks">
              <NavLink
                to="/locker"
                onClick={() => {
                  setActiveLink("lock");
                }}
                className={
                  window.location.href.includes("locker") ? "activelink" : ""
                }
                style={{flexDirection: 'column', display: 'flex', alignItems: 'center'}}
              >
                <img
                  src={
                    window.location.href.includes("locker")
                      ? "/assets/img/locker-active.svg"
                      : "/assets/img/locker-passive.svg"
                  }
                  alt="Image"
                />
                <span className="sidebar-link">DYP Locker</span>
              </NavLink>
            </li>
            <li className="navlinks">
              <NavLink
                to="/news"
                onClick={() => {
                  setActiveLink("news");
                }}
                className={
                  window.location.href.includes("news") ? "activelink" : ""
                }
                style={{flexDirection: 'column', display: 'flex', alignItems: 'center'}}
              >
                <img
                  src={
                    window.location.href.includes("news")
                      ? "/assets/img/news-active.svg"
                      : "/assets/img/news-passive.svg"
                  }
                  alt="Image"
                />
                <span className="sidebar-link">News</span>
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
      <div className="menu-cat-two m-0">
        {/* <h6>Others</h6> */}
        <ul style={{width: 'fit-content', margin: 'auto'}}>
          {String(props.appState.coinbase).toLowerCase() ==
            window.config.metamask_admin_account.toLowerCase() && (
            <li>
              <NavLink to="/admin">
                <i className="fas fa-user-cog" alt="Image" />
                <span className="sidebar-link">Admin</span>
              </NavLink>
            </li>
          )}
         <div className="row m-auto align-items-center" style={{width: 'fit-content'}}>
         <li className="navlinks"
              onClick={() => {
                setActiveLink("info");
              }}
            >
              <NavLink
                to="/submit-info"
                onClick={() => {
                  setActiveLink("info");
                }}
                className={
                  window.location.href.includes("info") ? "activelink" : ""
                }
                style={{flexDirection: 'column', display: 'flex', alignItems: 'center'}}
              >
                <img
                  src={
                    window.location.href.includes("info")
                      ? "/assets/img/info-active.svg"
                      : "/assets/img/info-passive.svg"
                  }
                  alt="Image"
                />
                <span className="sidebar-link">Submit Info</span>
              </NavLink>
            </li>
            <li
              onClick={() => {
                setActiveLink("rocket");
              }}
              className={activeLink === "rocket" ? "activelink" : "navlinks"}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dyp.finance/launchpad"
                style={{flexDirection: 'column', display: 'flex', alignItems: 'center'}}
              >
                <img
                  src={
                    activeLink === "rocket"
                      ? "/assets/img/rocket-active.svg"
                      : "/assets/img/rocket-passive.svg"
                  }
                  alt="Image"
                />
                <span className="sidebar-link">LaunchPad</span>
              </a>
            </li>
          </div>
          <div className="row m-auto align-items-center" style={{width: 'fit-content'}}>
          <li className="navlinks"
              onClick={() => {
                setActiveLink("buydyp");
              }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.uniswap.org/#/swap?outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                className={activeLink === "buydyp" ? "activelink" : ""}
                style={{flexDirection: 'column', display: 'flex', alignItems: 'center'}}
              >
                <img
                  src={
                    activeLink === "buydyp"
                      ? "/assets/img/cart.svg"
                      : "/assets/img/cart-passive.svg"
                  }
                  alt="Image"
                />
                <span className="sidebar-link">Buy DYP</span>
              </a>
            </li>
            <li className="navlinks">
              <NavLink
                exact
                to="/account"
                onClick={() => {
                  setActiveLink("account");
                }}
                className={
                  window.location.href.includes("account") ? "activelink" : ""
                }
                style={{flexDirection: 'column', display: 'flex', alignItems: 'center'}}
              >
                <img
                  src={
                    window.location.href.includes("account")
                      ? "/assets/img/person-active.svg"
                      : "/assets/img/person.svg"
                  }
                  alt="Image"
                />
                <span className="sidebar-link">Account</span>
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
