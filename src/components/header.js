import { NavLink } from "react-router-dom";

import getFormattedNumber from "../functions/get-formatted-number";
import React, { useEffect, useState } from "react";

const Header = ({toggleMobileSidebar, toggleTheme, theme}) => {
 
  const [gasPrice, setGasprice] = useState()
  const [ethPrice, setEthprice] = useState()
  const [chainId, setChainId] = useState(1)

  const checkNetworkId = () => {
    if(window.ethereum) {
window.ethereum.request({ method: "net_version" })
      .then((data) => {
        setChainId(Number(data))
        fetchData()
      })
      .catch(console.error);
    }
    else {
      setChainId(1)
    }
  }


  const [hotpairs, setHotpairs] = useState([])

   const fetchData= async()=> {
    if (chainId === 1) {
      await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      )
        .then((res) => res.json())
        .then((data) =>setEthprice(data.ethereum.usd ))
        .catch(console.error);

      await fetch(
        "https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=0cb24df6d59351fdfb85e84c264c1d89dada314bbd85bbb5bea318f7f995"
      )
        .then((res) => res.json())
        .then((data) =>setGasprice(data.fast / 10 )) 
        .catch(console.error);
    }

    if (chainId === 43114) {
      await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=usd"
      )
        .then((res) => res.json())
        .then((data) =>setEthprice(data["avalanche-2"]["usd"] ))
        .catch(console.error);

      await fetch("https://api.dyp.finance/api/bridged_on_avalanche")
        .then((res) => res.json())
        .then((data) => setGasprice(data ))
        .catch(console.error);
    }
  }

  const refreshHotPairs = async () => {
    window.$.get(
      `${
        chainId === 1
          ? "https://app-tools.dyp.finance"
          : "https://app-tools-avax.dyp.finance"
      }/api/hot-pairs`
    )
      // window.$.get(`${API_BASEURL}/api/hot-pairs`)
      .then(({ hotPairs }) => {
        setHotpairs( hotPairs );
      })
      .catch(console.error);
  };

  const ethereum = window.ethereum

  function handleChainChanged() {
    // We recommend reloading the page, unless you must do otherwise
    window.location.reload()
  }

  useEffect(()=>{
    fetchData().then()
    refreshHotPairs().then()
    checkNetworkId()
  ethereum?.on('chainChanged', handleChainChanged)
  ethereum?.on('accountChanged', handleChainChanged)
  
  }, [chainId])

  return (
    
    <header className="header-wrap" style={{ paddingLeft: "2rem", zIndex: 777 }}>
      <div className="header-left">
        <div>
          <img
            src={
              chainId === 1
                ? "https://dyp.finance/img/eth.svg"
                : chainId == 43114
                ? "https://dyp.finance/img/farms/avax-yield.png"
                : ""
            }
            alt="Image not found"
            style={{ width: "20px", marginRight: "5px" }}
          />
          <a href="#">
            {chainId === 1
              ? "ETH:"
              : chainId === 43114
              ? "AVAX"
              : ""}
            <span>${getFormattedNumber(ethPrice, 2)}</span>
          </a>
        </div>
        {chainId === 1 ? (
          <div className="dropdown">
            <img src="/assets/img/icon-1.svg" alt="Image" />
            <span>{getFormattedNumber(gasPrice, 0)} GWEI</span>
            <ul>
              <li>
                <a href="#">
                  Low: <span>271</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Medium: <span>891</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Fast: <span>123</span>
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown bridged">
            <span>Bridged on Avalanche</span>
            <span>{getFormattedNumber(gasPrice, 2)} usd</span>
          </div>
        )}
      </div>
      <div className="header-center">
        <div onClick={toggleMobileSidebar} className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="header-right">
        <div style={{ whiteSpace: "nowrap" }} className="">
          <ul>
            <marquee>
              {hotpairs.map((hotPair, i) => (
                <li
                  key={i}
                  style={{ display: "inline-block", paddingRight: "2rem" }}
                >
                  <NavLink to={`/pair-explorer/${hotPair.pair_address}`}>
                    #{i + 1} {hotPair.pair_name}
                  </NavLink>
                </li>
              ))}
            </marquee>
          </ul>
        </div>
      </div>
      <div className="d-flex align-items-center" style={{ gap: 15 }}>
            {/* <span className="sidebar-link">Change theme</span> */}
            <div
              className={`${
                theme == "theme-white" ? "" : "active-toggle"
              } toggle-button-wrapper`}
              onClick={toggleTheme}
            >
              <a href="javascript:void(0)">
                <div>
                  <div className="toggle-circle"></div>
                </div>
              </a>
            </div>
          </div>
    </header>
  );
};

export default Header;
