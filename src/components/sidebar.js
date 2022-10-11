import {NavLink} from "react-router-dom";
import Ethereum from "../assets/ethereum.svg";
import Avax from "../assets/avalanche.svg";
import Logo from "../assets/logo.svg";
import LogoWhite from "../assets/logo-white.svg";
import React, {useState, useEffect, useCallback} from "react";
import {useWeb3React} from "@web3-react/core";
// import {handleSwitchNetwork} from "../functions/hooks";
import {injected} from "../functions/connectors";
import NotConnected from "../assets/notconnected.svg";
import Connected from "../assets/connected.svg";
import SubmitInfo from "./submit-info/SubmitInfo";
import Crown from "../assets/crown.png";
import RightArrow from "../assets/rightarrow.svg";
import {useEagerConnect, useInactiveListener} from "../functions/hooks";
import axios from "axios";
import WalletModal from "./WalletModal";
import Logout from "../assets/logout.svg";

const activateLasers = () => {
    window.$.alert("Coming Soon!");
};

const Sidebar = (props) => {
    const [activeBtn, setActiveBtn] = useState("avax");
    const [activeLink, setActiveLink] = useState("news");
    const [location, setlocation] = useState("news");
    const [networkId, setNetworkId] = useState(1);

    let chainId = parseInt(props.network)

    const [avatar, setAvatar] = useState("/assets/img/person.svg");

    const {active, account} = useWeb3React();
    const triedEager = useEagerConnect();
    useInactiveListener(!triedEager);

    const fetchAvatar = async () => {
        const response = await fetch(
            `https://api-image.dyp.finance/api/v1/avatar/${account}`
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                data.avatar
                    ? setAvatar(data.avatar)
                    : setAvatar("/assets/img/person.svg");
            })
            .catch(console.error);

        return response;
    };

    useEffect(() => {
        const logout = localStorage.getItem("logout");
        if (logout !== "true") {
            fetchAvatar().then();
        }
    }, [account]);

    useEffect(() => {
        const fetchInterval = setInterval(
            () => setlocation(window.location.pathname),
            1000
        );
    });

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
                    <img className="logo-white" src={LogoWhite} alt="Image"/>
                    <img className="logo-black" src={Logo} alt="Image"/>
                </a>
            </div>
            <div className="premiumposition">
                <div className="menu-cat-one" style={{marginTop: "2rem"}}>
                    <div className="walletwrapper">
                        <div
                            className="top-right-header"
                            style={{
                                background: props.isConnected
                                    ? chainId === 1
                                        ? "linear-gradient(87.56deg, #1D91D0 9.37%, #32B1F7 93.57%)"
                                        : "linear-gradient(87.56deg, #FC4F36 9.37%, #E30613 93.57%)"
                                    : "rgba(255, 255, 255, 0.3)",
                            }}
                        >
                            <WalletModal
                                show={props.show}
                                handleClose={props.hideModal}
                                handleConnection={props.handleConnection}
                            />
                            <div className="home-menu">
                                <a href="#" id="wallet">
                                    <img
                                        src={!props.isConnected ? NotConnected : Connected}
                                        alt="Image"
                                    />
                                    {/* <i style={{color: '#fff'}} className='fas fa-wallet'></i> */}
                                    {!props.isConnected ? (
                                        <span
                                            style={{
                                                color: "#6B7A99",
                                            }}
                                            className="notconnect-text"
                                        >
                      Wallet not connected
                    </span>
                                    ) : (
                                        // <span>test</span>
                                        <span
                                            style={{
                                                color: "#fff",
                                            }}
                                            className="connect-text"
                                        >
                      Connected!
                    </span>
                                    )}
                                    {props.isConnected && (
                                        <span onClick={props.logout}><img
                                            src={Logout}
                                            alt=""
                                            style={{
                                                transform: "rotate(180deg)",
                                                height: 25,
                                                marginLeft: 10,
                                            }}

                                        /><span style={{color: '#fff'}}>Logout</span></span>

                                    )}
                                </a>
                                {!props.isConnected && (
                                    <button
                                        className="connectwalletbtn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // injected.activate(injected, undefined, true);
                                            props.showModal();
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
                                border: chainId === 1
                                        ? "1px solid #1486C3"
                                        : "1px solid #E84142"
                            }}
                        >
                            <a
                                href="javascript:void(0)"
                                className="hoverNetwork"
                                style={{
                                    background: chainId === 1
                                            ? "#1D91D0"
                                            : "transparent"
                                }}
                                onClick={() => {
                                    setActiveBtn("eth");
                                    props.handleSwitchNetwork(1);
                                }}
                            >
                                <img src={Ethereum} alt="Image not found"/>
                                <span
                                    style={{
                                        color: chainId === 1
                                                ? "#fff"
                                                : "#6B7A99"
                                    }}
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
                                    background: chainId === 43114
                                            ? "#E84142"
                                            : "transparent"
                                }}
                                onClick={() => {
                                    setActiveBtn("avax");
                                    props.handleSwitchNetwork(43114);
                                }}
                            >
                                <img src={Avax} alt="Image not found"/>
                                <span
                                    style={{
                                        color: chainId === 43114
                                                ? "#fff"
                                                : "#6B7A99"
                                    }}
                                >
                  Avalanche
                </span>
                            </a>
                        </h6>
                    </div>
                    <ul style={{width: "fit-content", margin: "auto"}}>
                        <div
                            className="row m-auto align-items-center twolinks-wrapper"
                            style={{width: "fit-content"}}
                        >
                            <li
                                className={
                                    location.includes("pool-explorer")
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
                                        location.includes("pool-explorer") ? "activelink" : ""
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
                                            location.includes("pool-explorer") &&
                                            props.theme === "theme-white"
                                                ? "/assets/img/search.svg"
                                                : location.includes("pool-explorer") &&
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
                                    location.includes("pair-explorer")
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
                                        location.includes("pair-explorer") ? "activelink" : ""
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
                                            location.includes("pair-explorer") &&
                                            props.theme === "theme-white"
                                                ? "/assets/img/compass.svg"
                                                : location.includes("pair-explorer") &&
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
                                    location.includes("locker") ? "activenavlink" : "navlinks"
                                }
                            >
                                <NavLink
                                    to="/locker"
                                    onClick={() => {
                                        setActiveLink("lock");
                                    }}
                                    className={location.includes("locker") ? "activelink" : ""}
                                    style={{
                                        flexDirection: "column",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 20,
                                    }}
                                >
                                    <img
                                        src={
                                            location.includes("locker") &&
                                            props.theme === "theme-white"
                                                ? "/assets/img/locker-active.svg"
                                                : location.includes("locker") &&
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
                                    location.includes("news") ? "activenavlink" : "navlinks"
                                }
                            >
                                <NavLink
                                    to="/news"
                                    onClick={() => {
                                        setActiveLink("news");
                                    }}
                                    className={location.includes("news") ? "activelink" : ""}
                                    style={{
                                        flexDirection: "column",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 20,
                                    }}
                                >
                                    <img
                                        src={
                                            location.includes("news") && props.theme === "theme-white"
                                                ? "/assets/img/news-active.svg"
                                                : location.includes("news") &&
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
                    <ul style={{width: "fit-content", margin: "auto"}}>
                        {String(props.appState.coinbase).toLowerCase() ==
                        window.config.metamask_admin_account.toLowerCase() && (
                            <li>
                                <NavLink to="/admin">
                                    <i className="fas fa-user-cog" alt="Image"/>
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
                                    location.includes("info") ? "activenavlink" : "navlinks"
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
                                    className={location.includes("info") ? "activelink" : ""}
                                    style={{
                                        flexDirection: "column",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 20,
                                    }}
                                >
                                    <img
                                        src={
                                            location.includes("info") && props.theme === "theme-white"
                                                ? "/assets/img/info-active.svg"
                                                : location.includes("info") &&
                                                props.theme === "theme-dark"
                                                ? "/assets/img/info-white.svg"
                                                : "/assets/img/info-passive.svg"
                                        }
                                        alt="Image"
                                    />
                                    <span className="sidebar-link">Submit form</span>
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
                                            activeLink === "rocket" && props.theme === "theme-white"
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
                            style={{width: "fit-content", borderRadius: "0px 0px 8px 8px"}}
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
                                        chainId === 1
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
                                            activeLink === "buydyp" && props.theme === "theme-white"
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
                                    location.includes("account") ? "activenavlink" : "navlinks"
                                }
                            >
                                <NavLink
                                    exact
                                    to="/account"
                                    onClick={() => {
                                        setActiveLink("account");
                                    }}
                                    className={location.includes("account") ? "activelink" : ""}
                                    style={{
                                        flexDirection: "column",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 20,
                                    }}
                                >
                                    <img
                                        src={
                                            avatar.includes("thumbnails")
                                                ? avatar
                                                : location.includes("account") &&
                                                props.theme === "theme-white"
                                                ? "/assets/img/person-active.svg"
                                                : location.includes("account") &&
                                                props.theme === "theme-dark"
                                                    ? "/assets/img/person-white.svg"
                                                    : "/assets/img/person.svg"
                                        }
                                        style={{borderRadius: "50%"}}
                                        alt="Image"
                                    />
                                    <span className="sidebar-link">Account</span>
                                </NavLink>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <NavLink className="upgrade-text" to="/account">
                <div className="premium-wrapper">
                    <div style={{padding: 15}}>
                        <div className="row m-0 pb-2 upper-wrapper">
                            <div style={{maxWidth: 110}}>
                                <h3 className="premium-title">Upgrade to Premium</h3>
                                <span className="premium-subtitle">
                  Get additional benefits & features
                </span>
                            </div>
                            <div>
                                <img src={Crown} alt="" className="crown"/>
                            </div>
                        </div>
                        Upgrade today <img src={RightArrow} alt=""/>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Sidebar;
