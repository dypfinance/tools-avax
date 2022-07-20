import { NavLink } from "react-router-dom";
import Ethereum from "../assets/ethereum.svg";
import Avax from "../assets/avalanche.svg";
import Logo from '../assets/logo.svg'
import LogoWhite from '../assets/logo-white.svg'
import React, { useState } from "react";

const activateLasers = () => {
  window.$.alert("Coming Soon!");
};
const Sidebar = (props) => {
  const [activeBtn, setActiveBtn] = useState("avax");
  const [activeLink, setActiveLink] = useState("");
  return (<div
    onClick={props.toggleMobileSidebar}
    className={`sidebar ${props.isOpenInMobile ? "open" : ""}`}
  >
    <div className="close-sidebar">
      <i className="fas fa-arrow-left"></i>
    </div>
    <div className="logo">
      <a href="/">
        <img
          className="logo-white"
          src={LogoWhite}
          alt="Image"
        />
        <img className="logo-black" src={Logo} alt="Image" />
      </a>
    </div>

    <div className="menu-cat-one">
      <h6 className="networks">
        <a href="https://tools.dyp.finance/" className="hoverNetwork" style={{ background: activeBtn === "eth" ? "#1D91D0" : "#EFF0F6" }}
          onClick={() => {
            setActiveBtn("eth");
          }}>
          <img src={Ethereum} alt="Image not found" />
          <span style={{ color: activeBtn === "eth" ? "#fff" : ""  }}>Ethereum</span>
        </a>
        <a
          href="javascript:void(0)"
          className="hoverNetwork"
          style={{
            padding: "4px 11px 0",
            background: activeBtn === "avax" ? "#E84142" : "#EFF0F6",
          }}
          onClick={() => {
            setActiveBtn("avax");
          }}
        >
        <img src={Avax} alt="Image not found" />
          <span style={{ color: activeBtn === "avax" ? "#fff" : ""  }}>Avalanche</span>
        </a>
      </h6>

      <ul>
        <li>
        <NavLink
              exact
              to="/pool-explorer"
              onClick={() => {
                setActiveLink("explorer");
              }}
              className={activeLink === "explorer" ? "activelink" : ""}
            >
              <img
                src={
                  activeLink === "explorer"
                    ? "/assets/img/search.svg"
                    : "/assets/img/search-passive.svg"
                }
                alt="Image"
              />
              <span className="sidebar-link">Explorer</span>
            </NavLink>
        </li>
        <li>
        <NavLink
              to="/pair-explorer"
              onClick={() => {
                setActiveLink("pair");
              }}
              className={activeLink === "pair" ? "activelink" : ""}
            >
              <img
                src={
                  activeLink === "pair"
                    ? "/assets/img/compass.svg"
                    : "/assets/img/compass-passive.svg"
                }
                alt="Image"
              />
              <span className="sidebar-link">Pair Explorer</span>
            </NavLink>
        </li>
        {/* <li>
          <NavLink to="/big-swap-explorer">
            <i className="fas fa-exchange-alt" alt="Image" />
            <span className="sidebar-link">Big Swap Explorer</span>
          </NavLink>
        </li> */}
        <li>
        <NavLink
              to="/locker"
              onClick={() => {
                setActiveLink("lock");
              }}
              className={activeLink === "lock" ? "activelink" : ""}
            >
              <img
                src={
                  activeLink === "lock"
                    ? "/assets/img/locker-active.svg"
                    : "/assets/img/locker-passive.svg"
                }
                alt="Image"
              />
              <span className="sidebar-link">DYP Locker</span>
            </NavLink>
        </li>
        {/* <li>
          <NavLink to="/top-tokens">
            <i className="fab fa-ethereum" alt="Image" />
            <span className="sidebar-link">Top Tokens</span>
          </NavLink>
        </li> */}
      </ul>
    </div>
    <div className="menu-cat-two m-0">
      {/* <h6>Others</h6> */}
      <ul>
        {String(props.appState.coinbase).toLowerCase() ==
          window.config.metamask_admin_account.toLowerCase() && (
            <li>
              <NavLink to="/admin">
                <i className="fas fa-user-cog" alt="Image" />
                <span className="sidebar-link">Admin</span>
              </NavLink>
            </li>
          )}
        {/* <li>
          <NavLink to="/farms">
            <i className="fas fa-seedling" />
            <span className="sidebar-link">Yields</span>
          </NavLink>
        </li> */}

<li
            onClick={() => {
              setActiveLink("rocket");
            }}
            className={activeLink === "rocket" ? "activelink" : ""}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dyp.finance/launchpad"
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
          <li
            onClick={() => {
              setActiveLink("info");
            }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={window.config.submission_form_link}
              className={activeLink === "info" ? "activelink" : ""}
            >
              <img
                src={
                  activeLink === "info"
                    ? "/assets/img/info-active.svg"
                    : "/assets/img/info-passive.svg"
                }
                alt="Image"
              />
              <span className="sidebar-link">Submit Info</span>
            </a>
          </li>

        {/* <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.pangolin.exchange/#/swap?outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
          >
            <img src="/assets/img/cart.svg" alt="Image" />
            <span className="sidebar-link">Buy DYP</span>
          </a>
        </li> */}
       <div className="d-flex align-items-center" style={{gap: 15}}>
          <span className="sidebar-link">Change theme</span>
          <div
            className={`${
              props.theme == "theme-dark" ? "active-toggle" : ""
            } toggle-button-wrapper`}
            onClick={props.toggleTheme}
          >
            <a href="javascript:void(0)">
              <div>
                <div className="toggle-circle"></div>
              </div>
            </a>
          </div>
          </div>
      </ul>
    </div>
  </div>)
};

export default Sidebar;
