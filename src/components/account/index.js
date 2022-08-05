import React from "react";
import getFormattedNumber from "../../functions/get-formatted-number";
import { NavLink } from "react-router-dom";
import Error from "../../assets/error.svg";
import Fire from './fire.png'

const { BigNumber } = window;

export default class Subscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinbase: "",
      selectedSubscriptionToken: Object.keys(
        window.ethereum.chainId === "0x1"
          ? window.config.subscriptioneth_tokens
          : window.config.subscription_tokens
      )[0],
      tokenBalance: "",
      price: "",
      formattedPrice: "",
      favorites: [],
      selectedFile: null,
      image: "",
      lockActive: false,
      status: "",
      loadspinner: false,
      loadspinnerSub: false,

    };
  }

  componentDidMount() {
    window
      .getFavorites()
      .then((favorites) => this.setState({ favorites }))
      .catch(console.error);

    if (window.isConnectedOneTime) {
      this.onComponentMount();
    } else {
      window.addOneTimeWalletConnectionListener(this.onComponentMount);
    }
    console.log(this.state.selectedSubscriptionToken);
    this.setState({
      selectedSubscriptionToken: Object.keys(
        window.ethereum.chainId === "0x1"
          ? window.config.subscriptioneth_tokens
          : window.config.subscription_tokens
      )[0],
    });
  }
  componentWillUnmount() {
    window.removeOneTimeWalletConnectionListener(this.onComponentMount);
  }

  onComponentMount = async () => {
    this.setState({ coinbase: await window.getCoinbase() });
    this.handleSubscriptionTokenChange(this.state.selectedSubscriptionToken);
  };

  handleSubscriptionTokenChange = async (tokenAddress) => {
    let tokenDecimals =
      window.ethereum.chainId === "0x1"
        ? window.config.subscriptioneth_tokens[tokenAddress]?.decimals
        : window.config.subscription_tokens[tokenAddress]?.decimals;
    this.setState({
      selectedSubscriptionToken: tokenAddress,
      tokenBalance: "",
      formattedPrice: "",
      price: "",
    });
    let price =
      window.ethereum.chainId === "0x1"
        ? await window.getEstimatedTokenSubscriptionAmountETH(tokenAddress)
        : await window.getEstimatedTokenSubscriptionAmount(tokenAddress);
    price = new BigNumber(price).times(1.1).toFixed(0);

    let formattedPrice = getFormattedNumber(
      price / 10 ** tokenDecimals,
      tokenDecimals
    );
    let tokenBalance = await window.getTokenHolderBalance(
      tokenAddress,
      this.state.coinbase
    );
    this.setState({ price, formattedPrice, tokenBalance });
  };

  handleApprove = async (e) => {
    e.preventDefault();

    let tokenContract = await window.getContract({
      address: this.state.selectedSubscriptionToken,
      ABI: window.ERC20_ABI,
    });
    this.setState({ loadspinner: true });


    await tokenContract.methods
      .approve(
        window.ethereum.chainId === "0x1"
          ? window.config.subscriptioneth_address
          : window.config.subscriptioneth_address,
        this.state.price
      )
      .send()
      .then(() => {
        this.setState({ lockActive: true });
        this.setState({ loadspinner: false });
      })
      .catch((e) => {
        this.setState({ status: "An error occurred. Please try again" });
        this.setState({ loadspinner: false });
      });
  };

  handleSubscribe = async (e) => {
    e.preventDefault();
    console.log("handleSubscribe()");
    let subscriptionContract = await window.getContract({
      key:
        window.ethereum.chainId === "0x1" ? "SUBSCRIPTIONETH" : "SUBSCRIPTION",
    });
  
        this.setState({ loadspinnerSub: true });
   

    await subscriptionContract.methods
      .subscribe(this.state.selectedSubscriptionToken, this.state.price)
      .send({ from: await window.getCoinbase() })
      .then(() => {
        this.setState({ loadspinnerSub: false });
      })
      .catch((e) => {
        this.setState({ status: "An error occurred. Please try again" });
        this.setState({ loadspinnerSub: false });
      });
  };

  handleUnsubscribe = async (e) => {
    e.preventDefault();
    let subscriptionContract = await window.getContract({
      key:
        window.ethereum.chainId === "0x1" ? "SUBSCRIPTIONETH" : "SUBSCRIPTION",
    });
    await subscriptionContract.methods
      .unsubscribe()
      .send({ from: await window.getCoinbase() })
      .then(() => {
        // this.setState({ loadspinner: false });
      })
      .catch((e) => {
        this.setState({ status: "An error occurred. Please try again" });
        // this.setState({ loadspinner: false });
      });
  };

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  GetSubscriptionForm = () => {
    let tokenDecimals =
      window.ethereum.chainId === "0x1"
        ? window.config.subscriptioneth_tokens[
            this.state.selectedSubscriptionToken
          ]?.decimals
        : window.config.subscription_tokens[
            this.state.selectedSubscriptionToken
          ]?.decimals;

    return (
      <div>
        <h4 style={{ fontSize: "1.2rem" }} className="d-block mb-3">
          SUBSCRIBE TO DYP TOOLS PREMIUM
        </h4>
        <form onSubmit={this.handleSubscribe}>
          <div className="row m-0" style={{ gap: 40 }}>
            <div className="accout-left-wrapper">
              <p
                className="account-left-text mb-4"
                style={{ fontSize: ".8rem", maxWidth: "600px" }}
              >
                <span className="account-left-title">
                  <i className="fas fa-info-circle mr-1"></i>DYP TOOLS Premium
                </span>
                <br />
                The subscription tokens will be used to buy and lock DYP worth
                ~$75, once unsubscribed the DYP will be unlocked and sent to
                your wallet.
              </p>
            </div>
            <div className="account-right-wrapper">
                <img src={Fire} alt=''  className="fire"/>
              <span className="account-left-title">
                DYP TOOLS Premium benefits
              </span>
              <ul
                style={{
                  fontSize: ".8rem",
                  lineHeight: 1.5,
                  maxWidth: "430px",
                }}
                className="account-left-text mb-4"
              >
                <li>
                  <i className="fas fa-check"></i> Access to manual research
                  info for projects.
                </li>
                <li>
                  <i className="fas fa-check"></i> Early access to new features
                  released in the future.
                </li>
                <li>
                  <i className="fas fa-check"></i> Guaranteed allocation to
                  presales of new projects launched using our LaunchPad.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <strong
              style={{ fontSize: "1.2rem" }}
              className="d-block mb-3 mt-5"
            >
              Avatar profile
            </strong>
            <div className="inputfile-wrapper">
              <img src={this.state.image} alt="your image" />
              <input
                type="file"
                id="group_image"
                value={this.state.selectedFile}
                onChange={this.onImageChange}
              />
              <div
                className="removebtn"
                type=""
                onClick={() => this.setState({ image: "" })}
              >
                Remove
              </div>
            </div>
          </div>
          {!this.props.appState.isPremium ? (
            <div>
              <div className="row m-0" style={{ gap: 100 }}>
                <div
                  className="form-group"
                  style={{ maxWidth: 490, width: "100%" }}
                >
                  <p>Select Subscription Token</p>
                  <div className="row m-0">
                    {Object.keys(
                      window.ethereum.chainId === "0x1"
                        ? window.config.subscriptioneth_tokens
                        : window.config.subscription_tokens
                    ).map((t, i) => (
                      <span className="radio-wrapper">
                        <input
                          type="radio"
                          key={t}
                          value={t}
                          name={"tokensymbol"}
                          checked={t == this.state.selectedSubscriptionToken}
                          disabled={!this.props.appState.isConnected}
                          onChange={
                            (e) =>
                              this.handleSubscriptionTokenChange(e.target.value)
                            // console.log(e.target)
                          }
                        />
                        {window.ethereum.chainId === "0x1"
                          ? window.config.subscriptioneth_tokens[t]?.symbol
                          : window.config.subscription_tokens[t]?.symbol}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <div>
                    <p>Token Amount</p>
                    <span className="subscription-subtitle">
                      Subcription token amount
                    </span>
                    <div
                      className="align-items-center row m-0"
                      style={{ gap: 40 }}
                    >
                      <input
                        style={{ width: "266px", height: 42 }}
                        disabled
                        onChange={(e) => {
                          let amount = new window.BigNumber(e.target.value);
                          amount = amount.times(1e18).toFixed(0);
                          this.setState({ amount });
                        }}
                        value={this.state.formattedPrice}
                        type="number"
                        placeholder="Subscription Token Amount"
                        className="form-control"
                      />
                      <div className="d-flex flex-column">
                        <span className="balance-placeholder">Balance:</span>
                        <span className="balance-text">
                          {getFormattedNumber(
                            this.state.tokenBalance / 10 ** tokenDecimals,
                            6
                          )}
                        </span>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
              <button
                disabled={!this.props.appState.isConnected}
                onClick={this.handleApprove}
                className="btn v1"
                style={{
                  background:
                    "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)",
                  width: 230,
                }}
                type="button"
              >
               {this.state.loadspinner === true ? (
                        <>
                          <div
                            className="spinner-border "
                            role="status"
                            style={{ height: "1.5rem", width: "1.5rem" }}
                          ></div>
                        </>
                      ) : (
                        "APPROVE"
                      )}
              </button>
              <button
                disabled={!this.props.appState.isConnected}
                className="btn v1 ml-2"
                type="submit"
                style={{
                  background:
                    this.state.lockActive === false
                      ? "#C4C4C4"
                      : "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)",
                  width: 230,
                  pointerEvents:
                    this.state.lockActive === false ? "none" : "auto",
                }}
              >
                {this.state.loadspinnerSub === true ? (
                        <>
                          <div
                            className="spinner-border "
                            role="status"
                            style={{ height: "1.5rem", width: "1.5rem" }}
                          ></div>
                        </>
                      ) : (
                        "SUBSCRIBE"
                      )}
              </button>
              {this.state.status !== "" && (
                <div className="status-wrapper">
                  <p style={{ color: "#E30613" }}>
                    <img src={Error} alt="" /> {this.state.status}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <p>
                <i className="fas fa-check-circle"></i> Premium Member
              </p>
              <p>
                DYP Locked in Subscription:{" "}
                {getFormattedNumber(
                  this.props.appState.subscribedPlatformTokenAmount / 1e18,
                  6
                )}{" "}
                DYP
              </p>
              <button
                disabled={!this.props.appState.isConnected}
                onClick={this.handleUnsubscribe}
                className="btn v1"
                type="button"
              >
                UNSUBSCRIBE
              </button>
            </div>
          )}
        </form>
        <strong style={{ fontSize: "1.2rem" }} className="d-block mb-3 mt-5">
          MY FAVORITES
        </strong>
        <div className="row m-0" style={{ gap: 30 }}>
          {this.state.favorites.map((lock, index) => {
            return (
              <NavLink
                className="l-clr-purple"
                to={`/pair-explorer/${lock.id}`}
              >
                <div style={{ position: "relative", width: "260px" }}>
                  <div
                    className="d-flex table-wrapper"
                    style={{
                      background:
                        "linear-gradient(30.97deg, #E30613 18.87%, #FC4F36 90.15%)",
                    }}
                  >
                    <div key={index} className="pair-locks-wrapper">
                      <div className="row-wrapper">
                        <span className="left-info-text">ID</span>
                        <span className="right-info-text">{index + 1}</span>
                      </div>
                      <div className="row-wrapper">
                        <span className="left-info-text">Pair Address</span>
                        <span className="right-info-text">
                          ...{lock.id.slice(35)}
                        </span>
                      </div>
                      <div className="row-wrapper">
                        <span className="left-info-text">Tokens</span>
                        <span className="right-info-text">
                          {lock.token0.symbol}/{lock.token1.symbol}
                        </span>
                      </div>
                      <div className="row-wrapper">
                        <span className="left-info-text">Total liquidity</span>
                        <span className="right-info-text">
                          {getFormattedNumber(lock.reserveUSD, 2)}
                        </span>
                      </div>
                      <div className="row-wrapper">
                        <span className="left-info-text">
                          Pooled {lock.token0.symbol}
                        </span>
                        <span className="right-info-text">
                          {getFormattedNumber(lock.reserve0, 2)}
                        </span>
                      </div>
                      <div className="row-wrapper">
                        <span className="left-info-text">
                          Pooled {lock.token1.symbol}
                        </span>
                        <span className="right-info-text">
                          {getFormattedNumber(lock.reserve1, 2)}
                        </span>
                      </div>
                      <div className="row-wrapper">
                        <span className="left-info-text">LP Holders</span>
                        <span className="right-info-text">
                          {lock.liquidityProviderCount}
                        </span>
                      </div>
                      <div className="row-wrapper">
                        <span className="left-info-text">
                          Pair transactions:
                        </span>
                        <span className="right-info-text">{lock.txCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="locker">
        <div className="table-title px-3">
          <h2 style={{ display: "block", color: `var(--preloader-clr)` }}>
            Account &amp; Premium Subscription
          </h2>

          <p>Get DYP Tools Premium Subscription</p>
        </div>
        <div className="l-table-wrapper-div p-4">
          <div className="mb-4">{this.GetSubscriptionForm()}</div>
        </div>
      </div>
    );
  }
}
