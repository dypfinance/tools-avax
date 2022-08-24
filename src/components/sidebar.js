import { NavLink } from "react-router-dom";
import Ethereum from "../assets/ethereum.svg";
import Avax from "../assets/avalanche.svg";
import Logo from "../assets/logo.svg";
import LogoWhite from "../assets/logo-white.svg";
import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { handleSwitchNetwork } from "../functions/hooks";
import { injected } from "../functions/connectors";
import NotConnected from "../assets/notconnected.svg";
import Connected from "../assets/connected.svg";
import SubmitInfo from "./submit-info/SubmitInfo";
import Crown from "../assets/crown.png";
import RightArrow from "../assets/rightarrow.svg";
import { useEagerConnect, useInactiveListener } from "../functions/hooks";
import axios from "axios";

const activateLasers = () => {
  window.$.alert("Coming Soon!");
};
const Sidebar = (props) => {
  const [activeBtn, setActiveBtn] = useState("avax");
  const [activeLink, setActiveLink] = useState("news");
  const [avatar, setAvatar] = useState("/assets/img/person.svg");

  const { chainId, active, account } = useWeb3React();
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);


  const fetchAvatar = async()=>{
    const response = await fetch(`https://api-image.dyp.finance/api/v1/avatar/${account}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.avatar ? setAvatar(data.avatar) : setAvatar("/assets/img/person.svg");
    })
    .catch(console.error);

  return response;
  }

  useEffect(()=>{
    fetchAvatar().then()
  })

  
  
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
                {!active ? (
                  <span
                    style={{
                      color: "#6B7A99",
                    }}
                    className="notconnect-text"
                  >
                    Wallet not connected
                  </span>
                ) : (
                  <span
                    style={{
                      color: "#fff",
                    }}
                    className="connect-text"
                  >
                    Connected!
                  </span>
                )}
              </a>
              {!active && (
                <button
                  className="connectwalletbtn"
                  onClick={(e) => {
                    e.preventDefault();
                    // injected.activate(injected, undefined, true);
                    props.handleConnection();
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
        <ul style={{ width: "fit-content", margin: "auto" }}>
          <div
            className="row m-auto align-items-center twolinks-wrapper"
            style={{ width: "fit-content" }}
          >
            <li
              className={
                window.location.href.includes("pool-explorer")
                  ? "activenavlink"
                  : "navlinks"
              }
            >
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
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <img
                  src={
                    window.location.href.includes("pool-explorer") &&
                    props.theme === "theme-white"
                      ? "/assets/img/search.svg"
                      : window.location.href.includes("pool-explorer") &&
                        props.theme === "theme-dark"
                      ? "/assets/img/search-white.svg"
                      : "/assets/img/search-passive.svg"
                  }
                  alt="Image"
                />
                <span className="sidebar-link">Explorer</span>
              </NavLink>
            </li>
            <li
              className={
                window.location.href.includes("pair-explorer")
                  ? "activenavlink"
                  : "navlinks"
              }
            >
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
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <img
                  src={
                    window.location.href.includes("pair-explorer") &&
                    props.theme === "theme-white"
                      ? "/assets/img/compass.svg"
                      : window.location.href.includes("pair-explorer") &&
                        props.theme === "theme-dark"
                      ? "/assets/img/compass-white.svg"
                      : "/assets/img/compass-passive.svg"
                  }
                  alt="Image"
                />
                <span className="sidebar-link">Pair Explorer</span>
              </NavLink>
            </li>
          </div>
          <div
            className="row m-auto align-items-center twolinks-wrapper"
            style={{
              width: "fit-content",
              borderRadius: 0,
              borderTop: "none",
              borderBottom: "none",
            }}
          >
            <li
              className={
                window.location.href.includes("locker")
                  ? "activenavlink"
                  : "navlinks"
              }
            >
              <NavLink
                to="/locker"
                onClick={() => {
                  setActiveLink("lock");
                }}
                className={
                  window.location.href.includes("locker") ? "activelink" : ""
                }
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <img
                  src={
                    window.location.href.includes("locker") &&
                    props.theme === "theme-white"
                      ? "/assets/img/locker-active.svg"
                      : window.location.href.includes("locker") &&
                        props.theme === "theme-dark"
                      ? "/assets/img/locker-white.svg"
                      : "/assets/img/locker-passive.svg"
                  }
                  alt="Image"
                />
                <span className="sidebar-link">DYP Locker</span>
              </NavLink>
            </li>
            <li
              className={
                window.location.href.includes("news")
                  ? "activenavlink"
                  : "navlinks"
              }
            >
              <NavLink
                to="/news"
                onClick={() => {
                  setActiveLink("news");
                }}
                className={
                  window.location.href.includes("news") ? "activelink" : ""
                }
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <img
                  src={
                    window.location.href.includes("news") &&
                    props.theme === "theme-white"
                      ? "/assets/img/news-active.svg"
                      : window.location.href.includes("news") &&
                        props.theme === "theme-dark"
                      ? "/assets/img/news-white.svg"
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
        <ul style={{ width: "fit-content", margin: "auto" }}>
          {String(props.appState.coinbase).toLowerCase() ==
            window.config.metamask_admin_account.toLowerCase() && (
            <li>
              <NavLink to="/admin">
                <i className="fas fa-user-cog" alt="Image" />
                <span className="sidebar-link">Admin</span>
              </NavLink>
            </li>
          )}
          <div
            className="row m-auto align-items-center twolinks-wrapper"
            style={{
              width: "fit-content",
              borderRadius: 0,
              borderBottom: "none",
            }}
          >
            <li
              className={
                window.location.href.includes("info")
                  ? "activenavlink"
                  : "navlinks"
              }
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
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <img
                  src={
                    window.location.href.includes("info") &&
                    props.theme === "theme-white"
                      ? "/assets/img/info-active.svg"
                      : window.location.href.includes("info") &&
                        props.theme === "theme-dark"
                      ? "/assets/img/info-white.svg"
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
              className="navlinks"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dyp.finance/launchpad"
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
                className={activeLink === "rocket" ? "activelink" : ""}
              >
                <img
                  src={
                    activeLink === "rocket" &&
                    props.theme === "theme-white"
                      ? "/assets/img/rocket-active.svg"
                      : activeLink === "rocket" &&
                        props.theme === "theme-dark"
                      ? "/assets/img/rocket-white.svg"
                      : "/assets/img/rocket-passive.svg"
                  }
                  alt="Image"
                />
                <span className="sidebar-link">Launchpad</span>
              </a>
            </li>
          </div>
          <div
            className="row m-auto align-items-center twolinks-wrapper"
            style={{ width: "fit-content", borderRadius: "0px 0px 8px 8px" }}
          >
            <li
              className="navlinks"
              onClick={() => {
                setActiveLink("buydyp");
              }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  window.ethereum?.chainId === "0x1"
                    ? "https://app.uniswap.org/#/swap?outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                    : "https://app.pangolin.exchange/#/swap?outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
                }
                className={activeLink === "buydyp" ? "activelink" : ""}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <img
                  src={
                    activeLink === "buydyp" &&
                    props.theme === "theme-white"
                      ? "/assets/img/cart.svg"
                      : activeLink === "buydyp" &&
                        props.theme === "theme-dark"
                      ? "/assets/img/cart-white.svg"
                      : "/assets/img/cart-passive.svg"
                  }
                  alt="Image"
                />
                <span className="sidebar-link">Buy DYP</span>
              </a>
            </li>
            <li
              className={
                window.location.href.includes("account")
                  ? "activenavlink"
                  : "navlinks"
              }
            >
              <NavLink
                exact
                to="/account"
                onClick={() => {
                  setActiveLink("account");
                }}
                className={
                  window.location.href.includes("account") ? "activelink" : ""
                }
                style={{
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <img
                  src={
                    avatar.includes('thumbnails') ? avatar :
                     window.location.href.includes("account") &&
                    props.theme === "theme-white"
                      ? "/assets/img/person-active.svg"
                      :  window.location.href.includes("account") &&
                        props.theme === "theme-dark"
                      ? "/assets/img/person-white.svg"
                      : "/assets/img/person.svg"
                  }
                  style={{borderRadius: '50%'}}

                  alt="Image"
                />
                <span className="sidebar-link">Account</span>
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
      <div className="premium-wrapper">
        <div style={{ padding: 15 }}>
          <div className="row m-0 pb-2 upper-wrapper">
            <div style={{ maxWidth: 110 }}>
              <h3 className="premium-title">Upgrade to Premium</h3>
              <span className="premium-subtitle">
                Get additional benefits & features
              </span>
            </div>
            <div>
              <img src={Crown} alt="" className="crown" />
            </div>
          </div>
          <NavLink className="upgrade-text" to="/account">
            Upgrade today <img src={RightArrow} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
