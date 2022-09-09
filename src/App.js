// import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import GoogleAnalyticsReporter from "./functions/analytics";
import PoolExplorer from "./components/pool-explorer";
import PairExplorer from "./components/pair-explorer";
import BigSwapExplorer from "./components/big-swap-explorer";
import TopTokens from "./components/top-tokens";
import Locker from "./components/locker";
import Account from "./components/account";
import Admin from "./components/admin";
import Farms from "./components/farms";
import News from "./components/news/news";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Footer from "./components/Footer/footer";
import { Route } from "react-router-dom";
import SubmitInfo from "./components/submit-info/SubmitInfo";
import { Switch } from "react-router-dom";
import { RedirectPathToNewsOnly } from "./functions/redirects";
import getSyncStats from "./functions/get-indexing-status";
import getFormattedNumber from "./functions/get-formatted-number";

const API_BASEURL = window.config.api_baseurl;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "theme-white",
      ethPrice: "...",
      gasPrice: "...",
      isMinimized: false && window.innerWidth >= 992,
      isOpenInMobile: false,
      isConnected: false,
      chainId: undefined,
      coinbase: null,
      network: "avalanche",
      subscribedPlatformTokenAmount: "...",
      isPremium: false,
      hotPairs: [],
      networkId: "1",
      chain: "1",
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  checkNetworkId() {
   let chain = localStorage.getItem('network')
   if(chain === '1') {
    this.setState({
      networkId: '1'
    })
   }
   if(chain === '43114') {
    this.setState({
      networkId: '43114'
    })
   }
  }

  switchNetwork = (networkData)=> {
    if (networkData === "1") {
      localStorage.setItem("network", "1");
      this.setState({
        networkId: '1'
      })
      window.location.reload()
      console.log(window.location.href)
      if(window.location.href.includes('pair-explorer')) {
        
          window.location.assign("/pair-explorer/0x76911e11fddb742d75b83c9e1f611f48f19234e4")
        
      }
    }

    if (networkData === "43114") {
      localStorage.setItem("network", "43114");
      this.setState({
        networkId: '43114'
      })
      window.location.reload()
      if(window.location.href.includes('pair-explorer')) {
        
        window.location.assign('/pair-explorer/0x497070e8b6c55fd283d8b259a6971261e2021c01')      
    }

    }
  }

  refreshSubscription = async () => {
    if (!this.state.isConnected) return;

    // // detect Network account change
    // window.ethereum?.on('chainChanged', function(networkId){
    //   console.log('networkChanged',networkId);
    //   const chainId = async() => await window.web3.eth.getChainId();
    //   if (chainId == '1') {
    //     this.setState({isNetwork: 'ethereum'})
    //   }
    //   else{
    //     this.setState({isNetwork: 'binance'})
    //   }
    // }.bind(this))

    let coinbase = this.state.coinbase;

    let subscribedPlatformTokenAmount;
    if (this.state.networkId === "1") {
      await window.subscriptionPlatformTokenAmountETH(coinbase);
      let isPremium = Number(subscribedPlatformTokenAmount) > 0;
      this.setState({ subscribedPlatformTokenAmount, isPremium });
    }

    if (this.state.networkId === "43114") {
      await window.subscriptionPlatformTokenAmount(coinbase);
      let isPremium = Number(subscribedPlatformTokenAmount) > 0;
      this.setState({ subscribedPlatformTokenAmount, isPremium });
    }
  };

  handleConnection = async () => {
    let isConnected = this.state.isConnected;
    try {
      localStorage.setItem("logout", "false");
      isConnected = await window.connectWallet();
    } catch (e) {
      this.setState({ show: false });
      window.alertify.error(String(e) || "Cannot connect wallet!");
      return;
    }
    this.setState({ isConnected, coinbase: await window.getCoinbase() });
    this.setState({ show: false });
    return isConnected;
  };

  refreshHotPairs = async () => {
    window.$.get(
      `${
        this.state.networkId === "1"
          ? "https://app-tools.dyp.finance"
          : "https://app-tools-avax.dyp.finance"
      }/api/hot-pairs`
    )
      // window.$.get(`${API_BASEURL}/api/hot-pairs`)
      .then(({ hotPairs }) => {
        this.setState({ hotPairs });
      })
      .catch(console.error);
  };

  componentDidMount() {
    // console.log(this.state.networkId);
    // getSyncStats()
    // .then((syncStatus) => {
    // let m = window.alertify.message(
    //   `Syncing ${getFormattedNumber(
    //     syncStatus.latestBlock.number
    //   )} of ${getFormattedNumber(syncStatus.chainHeadBlock.number)} blocks`
    // );
    //   let m = window.alertify.message(
    //     `Warning: The data on this site has only synced to Avalanche block ${getFormattedNumber(
    //       syncStatus.latestBlock.number
    //     )} (out of ${getFormattedNumber(
    //       syncStatus.chainHeadBlock.number
    //     )}). Please check back soon.`
    //   );
    //   m.ondismiss = (f) => false;
    //   m.element.style.lineHeight = 1.7;
    // })
    // .catch(console.error);
    // window.connectWallet().then();
    // if(window.ethereum) {
    // console.log(this.state.coinbase)
    // }
    this.checkConnection();
    this.checkNetworkId();
    this.refreshHotPairs();
    const chain = localStorage.getItem('network')
    
    if(chain === null) {
    localStorage.setItem( 'network',"1");

    }
    
    // localStorage.setItem( 'network',"1");
    // this.subscriptionInterval = setInterval(this.refreshSubscription, 5e3);
  }

  checkConnection() {
    const logout = localStorage.getItem("logout");
    if (logout !== "true") {
      window.ethereum
        ?.request({ method: "eth_accounts" })
        .then((data) => {
          this.setState({
            isConnected: data.length === 0 ? false : true,
            coinbase: data.length === 0 ? undefined : data[0],
          });
          if (data.length === 0) {
            localStorage.setItem("logout", "true");
          }
        })
        .catch(console.error);
    } else {
      this.setState({
        isConnected: false,
      });
    }
  }

  logout = () => {
    localStorage.setItem("logout", "true");
    this.checkConnection();
  };
  componentWillUnmount() {
    // clearInterval(this.subscriptionInterval);
  }

  toggleTheme = () => {
    let toBeAdded = {
      "theme-dark": "theme-white",
      "theme-white": "theme-dark",
    };
    let { theme } = this.state;
    document.body.classList.add(toBeAdded[theme]);
    document.body.classList.remove(theme);
    this.setState({ theme: toBeAdded[theme] });
  };

  toggleNetwork = (network) => {
    console.log("aaa");
    // this.setState({ network: network });
  };

  toggleMinimizeSidebar = () => {
    const f = () => window.dispatchEvent(new Event("resize"));
    this.setState({ isMinimized: !this.state.isMinimized }, () => f());
    f();
    let newInterval = setInterval(f, 16);
    setTimeout(() => clearInterval(newInterval), 1000);
  };

  toggleMobileSidebar = () => {
    this.setState({ isOpenInMobile: !this.state.isOpenInMobile });
  };

  render() {
    document.addEventListener("touchstart", { passive: true });
    return (
      <div
        className={`page_wrapper ${this.state.isMinimized ? "minimize" : ""}`}
      >
        <Route component={GoogleAnalyticsReporter} />

        <div className="body_overlay"></div>
        <div className="minimize-wrap">
          <div onClick={this.toggleMinimizeSidebar} className="minimize_btn">
            <span className=""></span>
          </div>
        </div>
        <Header
          toggleTheme={this.toggleTheme}
          theme={this.state.theme}
          toggleMobileSidebar={this.toggleMobileSidebar}
          isOpenInMobile={this.state.isOpenInMobile}
        />
        <div className="content-wrapper">
          <Sidebar
            appState={this.state}
            theme={this.state.theme}
            isConnected={this.state.isConnected}
            handleConnection={this.handleConnection}
            toggleMobileSidebar={this.toggleMobileSidebar}
            isOpenInMobile={this.state.isOpenInMobile}
            showModal={this.showModal}
            hideModal={this.hideModal}
            show={this.state.show}
            checkConnection={this.checkConnection}
            logout={this.logout}
            switchNetwork={this.switchNetwork}
           
          />
          <div className="right-content">
            <Switch>
              <Route
                exact
                path="/pool-explorer"
                render={() => (
                  <PoolExplorer
                    theme={this.state.theme}
                    network={this.state.network}
                    handleConnection={this.handleConnection}
                    isConnected={this.state.isConnected}
                    appState={this.state}
                  />
                )}
              />
              <Route
                exact
                path="/news/:news_id?"
                render={(props) => (
                  <News
                    theme={this.state.theme}
                    isPremium={this.state.isPremium}
                    key={props.match.params.news_id}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/big-swap-explorer"
                render={() => (
                  <BigSwapExplorer
                    theme={this.state.theme}
                    network={this.state.network}
                  />
                )}
              />
              <Route
                exact
                path="/pair-explorer/:pair_id?"
                render={(props) => (
                  // to do
                  <PairExplorer
                    appState={this.state}
                    isPremium={this.state.isPremium}
                    key={props.match.params.pair_id}
                    theme={this.state.theme}
                    {...props}
                  />
                )}
              />

              <Route
                exact
                path="/submit-info"
                render={() => <SubmitInfo theme={this.state.theme} />}
              />

              <Route
                exact
                path="/top-tokens"
                render={() => <TopTokens theme={this.state.theme} />}
              />
              <Route
                exact
                path="/account"
                render={() => (
                  <Account appState={this.state} theme={this.state.theme} />
                )}
              />
              <Route
                exact
                path="/locker/:pair_id?"
                render={(props) => (
                  <Locker
                    handleConnection={this.handleConnection}
                    isConnected={this.state.isConnected}
                    key={props.match.params.pair_id}
                    theme={this.state.theme}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/admin"
                render={(props) => (
                  <Admin
                    handleConnection={this.handleConnection}
                    isConnected={this.state.isConnected}
                    appState={this.state}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/farms"
                render={(props) => (
                  <Farms
                    handleConnection={this.handleConnection}
                    isConnected={this.state.isConnected}
                    appState={this.state}
                    {...props}
                  />
                )}
              />
              <Route component={RedirectPathToNewsOnly} />
            </Switch>

            <Footer />
          </div>
        </div>
        {/* <div className="popup-modal show">
            <div className="popup-header">
                <div className="popup-header-item">
                    <p>Market Cap</p>
                    <span>$31,454,888.99</span>
                </div>
                <div className="popup-header-item">
                    <p>Circ. Supply</p>
                    <span>$31,454,888.99 DYP</span>
                </div>
            </div>
            <div className="popup-body">
                <div className="popup-body-item">
                    <p>1 ETH: </p>
                    <span>5130.9083947 DYP</span>
                </div>
                <div className="popup-body-item">
                    <p> Pool Created:</p>
                    <span>6/9/20 18:54 </span>
                </div>
                <div className="popup-body-item">
                    <p>Fully Diluted Market Cap: </p>
                    <span>$31,454,888.99 </span>
                </div>
                <div className="popup-body-item">
                    <p>Total Supply: </p>
                    <span>31,454,888.99 DYP </span>
                </div>
                <div className="popup-body-item">
                    <p>Pooled DYP: </p>
                    <span> 2.96%</span>
                </div>
            </div>
            <div className="popup-total">
                <h6>Liquidity Bonded</h6>
                <p>$47,085.00</p>
            </div>
            <div className="popup-close">
                <button type="button">Close</button>
            </div>
        </div> */}
      </div>
    );
  }
}

export default App;
