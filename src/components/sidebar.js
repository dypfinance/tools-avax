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
          <NavLink exact to="/pool-explorer">
            <img src="/assets/img/search.svg" alt="Image" />
            <span className="sidebar-link">Pool Explorer</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/pair-explorer">
            <img src="/assets/img/compass.svg" alt="Image" />
            <span className="sidebar-link">Pair Explorer</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/big-swap-explorer">
            <i className="fas fa-exchange-alt" alt="Image" />
            <span className="sidebar-link">Big Swap Explorer</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/locker">
            <i className="fas fa-lock" alt="Image" />
            <span className="sidebar-link">DYP Locker</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/top-tokens">
            <i className="fab fa-ethereum" alt="Image" />
            <span className="sidebar-link">Top Tokens</span>
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="menu-cat-two">
      <h6>Others</h6>
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
        <li>
          <NavLink to="/farms">
            <i className="fas fa-seedling" />
            <span className="sidebar-link">Yields</span>
          </NavLink>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dyp.finance/launchpad"
          >
            <i className="fas fa-rocket" />
            <span className="sidebar-link">LaunchPad</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={window.config.submission_form_link}
          >
            <i className="far fa-file-alt" />
            <span className="sidebar-link">Submit Info</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.pangolin.exchange/#/swap?outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"
          >
            <img src="/assets/img/cart.svg" alt="Image" />
            <span className="sidebar-link">Buy DYP</span>
          </a>
        </li>
        <li onClick={props.toggleTheme} className="change-clr">
          <a href="javascript:void(0)">
            <i
              className={`fas fa-${props.theme == "theme-white" ? "moon" : "sun"
                }`}
            />
            <span className="sidebar-link">Change theme</span>
          </a>
        </li>
      </ul>
    </div>
  </div>)
};

export default Sidebar;
