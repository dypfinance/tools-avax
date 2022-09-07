import React, { useState, useEffect } from "react";
import Carousel from "better-react-carousel";
import Clock from "../news/assets/clock.svg";
import { NavLink } from "react-router-dom";

const LatestNews = ({ theme }) => {
  const [newsData, setNewsData] = useState([]);
  const [votes, setVotes] = useState([]);

  const fetchNewsdata = async () => {
    const result = await fetch(`https://news-manage.dyp.finance/api/news`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNewsData(data);
      })
      .catch(console.error);

    return result;
  };

  const fetchVotingdata = async () => {
    const test = await fetch(`https://news-manage.dyp.finance/api/v1/votes/all`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setVotes(data.Data);
      })
      .catch(console.error);

    return test;
  };

  useEffect(() => {
    fetchNewsdata().then();
    fetchVotingdata().then();
  },[]);
  const newsArray = [
    {
      title:
        "DYP Staking dApp Launches on BNB Chain, LPs to earn Passive Income in ETH, DYP, or BNB",
      id: 36,
      link: "https://crypto.news/dyp-protocol-staking-dapp-binance-smart-chain-bsc-lp-passive-income-eth-dyp-bnb/",
      date: "2021-04-07",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 36).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 36).down : 0,
      image:
        "https://crypto.news/app/uploads/2021/04/DeFi-Yield-Protocol-Community-Update%E2%80%8A%E2%80%94%E2%80%8AStaking-Pools-Tutorial-on-Binance-Smart-Chain.jpg",
      content: `<h3><b>DYP Staking Service on the Binance Smart Chain (BSC)</b></h3><br/><br/>
        The DYP staking service launch on the low-fee, high throughput BSC platform is a step in the right direction. It comes after a code audit by Blockchain Consilium. <br/><br/>
        DYP Staking services were launched in early Q1 2021 and have grown in stature over time, attracting yield farmers who have cumulatively earned over $14.8 million since activation.<br/><br/>
        There will be four staking options for each pool in the BSC with monthly rewards ranging from 30k to 100k DYP depending on the lock-up period ranging from three days to three months chosen by liquidity providers staking their liquidity tokens. <br/><br/>
        LPs can stake their liquidity tokens, received from providing liquidity at their selected DYP pool on PancakeSwap, to the DYP/WBNB, DYP/BUSD, and DYP/ETH pools. <br/><br/>
        The DYP protocol aims to reward liquidity providers with ETH coins and has integrated an anti-manipulation feature to transparently convert rewards into ETH without a noticeable impact on Ethereum prices.<br/><br/>
        <h3><b>Launch on BSC a Step in the Right Direction</b></h3><br/><br/>
        Launching on the BSC platform is expected to spark even more activity. Notably, BSC is part of the burgeoning Binance ecosystem comprising the Binance Chain, a DEX, CeFi products, and an exchange offering crypto-to-crypto, crypto-to-fiat, and derivative trading, on top of other exciting services.<br/><br/>
        Uniquely, through the DYP protocol, liquidity providers can trustlessly earn ETH, BNB, or DYP easily without risks. <br/><br/>
        Here, all a user has to do is to provide liquidity to any of the supported protocols. After that, the platform will convert those rewards in DYP to ETH/BNB coins before disbursing them to LPs wallets. <br/><br/>
        For faster onboarding, the DYP protocol has made its interface easy to use. It is simplified, making it easy for both new and experienced yield farmers to participate.<br/><br/>
        <h3><b>Yield Farming DYP in the BSC</b></h3><br/><br/>
        As aforementioned, DYP liquidity providers have cumulatively earned over $14.8 million since launch. <br/><br/>
        Tokens were distributed to LPs in Uniswap, which has grown almost 20X with over $19 million in various DYP pools in Uniswap. <br/><br/>
        Therefore, the extension to PancakeSwap would help build DYP Protocol’s liquidity besides opening up even more developments in the future. <br/><br/>
        To jump-start activity and presence in BSC, DYP Protocol has deposited $510k of liquidity to PancakeSwap. <br/><br/>
        From there, users can choose to provide liquidity to any of the three pools: DYP/BNB, DYP/ETH, and DYP/BUSD, on PancakeSwap and stake their LP tokens with the option of being paid in the DYP Protocol’s token DYP, BNB—the native currency of the Binance Ecosystem, or ETH.<br/><br/>
        To get started, users can obtain DYP tokens from DYP Protocols on PancakeSwap to supply liquidity and earn LP tokens. However, those with DYP tokens in Ethereum can easily swap them to BEP-20 tokens on the BSC through the recently created bridge. The BSC is compatible with the EVM. Therefore, transactions can be executed straight from MetaMask. <br/><br/>
        During conversion, the DYP Protocol recommends swappers to save the transaction hash for quick resolution whenever network issues arise. Also, users can swap a maximum of 10k DYP tokens every 24 hours. <br/><br/>
        <h3><b>Price Stabilization Feature using the more Liquid BNB</b></h3><br/><br/>
        Apart from the anti-manipulation feature that safeguards the conversion of rewards to ETH, the DYP Protocol has taken steps to cushion against unexpected DYP volatility. <br/><br/>
        Accordingly, there will be a trigger set at -2.5 percent. If this is exceeded, then the maximum amount of DYP tokens that won’t affect prices will be converted to BNB. <br/><br/>
        In that regard, all BSC pools’ DYP rewards will be automatically converted to BNB before being distributed to BNB, ETH, or DYP as per the LP’s selected means of receiving rewards. <br/><br/>
        Also, assuming LPs don’t claim DYP rewards, the protocol’s governance will vote to either distribute these rewards to owners or burn them.<br/><br/>
        <h3><b>DYP Protocol Features in the Pipeline</b></h3><br/><br/>
        In April, the DYP Protocol plans to launch DYP Tools. The team is waiting for the completion of GETH Node synchronization. <br/><br/>
        At the same time, the DYP Earn Vault is ready to launch, just awaiting audit results. <br/><br/>
        Other products set for release include DYP NFT dApp, which is still in development, and a planned overhaul of DYP Protocol’s user interface.<br/>
        `,
      
    },
    {
      title: "DeFi Yield Protocol Takes Yield Farming to the Next Level",
      id: 37,
      link: "https://www.newsbtc.com/press-releases/defi-yield-protocol-takes-yield-farming-to-the-next-level/",
      date: "2020-07-12",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 37).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 37).down : 0,
      image:
        "https://www.newsbtc.com/wp-content/uploads/2020/10/dyp-img.png",
    content: `DeFi, short for Decentralized Finance is the new fad in cryptocurrency industry, thanks to the development of blockchain technology and its applications. As new DeFi products hit the market, people are finding attractive investment opportunities with significant profit-making potential. Yield farming is one such example where crypto investors can lock their assets over a certain period of time to earn returns, and doing so in the cryptocurrency space theoretically means, the whole mechanism is democratic and everyone has an equal opportunity to reap profits.<br/><br/>
        The introduction of Bitcoin back in 2008 was hailed as a landmark moment as it signified a shift in the financial power centers, allowing individuals to stay in complete control of their funds without having to rely on banking and financial institutions. However, in reality, the changes envisioned haven’t completely materialized even after a decade. Similarly, most of the existing DeFi applications are skewed, favoring the ones with fortune, proven recently by Sushi dump brought about SushiSwap’s anonymous founder Chef Nomi swapping his SUSHI token for ETH.<br/><br/>
        However, that is not going to be the case anymore as DeFi Yield Protocol (DYP) helps prevent the whale advantage in DeFi. Further, the anti-manipulation feature implemented by the protocol ensures all pool rewards viz., DYP/ETH, DYP/USDC. DYP/USDT and DYP/WBTC are converted from DYP to ETH and distributed among liquidity providers at 00:00 UTC every day. By doing so, it prevents manipulation of DYP price by whales for their benefit.<br/><br/>
        The conversion of pool rewards from DYP to ETH is handled by a smart contract. With each pool generating around 69,120 tokens in rewards, the total number of tokens converted to ETH each day stands at around 276,480. However, in the event of DYP price fluctuating beyond 2.5% in value, the smart contract swaps only as many tokens to ETH as possible without affecting the token’s price and distribute them. Any DYP leftover will be distributed as part of the next day’s rewards. The protocol continues the rollover process for a maximum duration of one week, by the end of which, if there are still undistributed DYP left, will either be distributed among token holders or burnt based on the outcome of a governance vote. All smart contracts implemented within DYP protocol are thoroughly audited and secured to deny access to those planning to take advantage of the system.<br/><br/>
        <h3><b>Combining DeFi Yield Farming with ETH Mining</b></h3><br/><br/>
        The DeFi Yield Protocol contributes to the crypto ecosystem with more than just yield farming. It does so with the help of its own mining farm, set up with an investment of over $1 million. Those joining the zero-fee ETH mining pool set up by DYP team stand to receive a 10% monthly bonus of the ETH monthly income earned in the form of DYP tokens airdrop. A total of 5 million DYP will be distributed to the miners as the protocol works on boosting their numbers in its mining pool to at least 200,000.<br/><br/>
        Participants in the DeFi Yield Protocol ETH mining pool also provide liquidity to participating pools, earning more ETH from DYP rewards as well as DYP Earn Vault – an automated yield farming contract that maximizes returns by moving providers’ funds through the most profitable platforms. 75% of profits generated by Earn Vault will be distributed among the liquidity providers, whereas the remaining 25% will be used to buyback DYP tokens with the intention of enhancing liquidity and maintaining token price stability.<br/><br/>
        <h3><b>DYP Crowdsale</b></h3><br/><br/>
        Crypto investors and enthusiasts can be part of the revolutionary DeFi protocol by joining the Crowdsale whitelist and acquiring DYP tokens. The minimum and maximum contributions to participate in DYP is set at 0.5 ETH and 100 ETH respectively.<br/><br/>
        Access the DYP Crowdsale Whitelist Application at – <a href='https://crowdsale.dyp.finance/' target='_blank'><u>https://crowdsale.dyp.finance/</u></a><br/>
        `,
     
    },
    {
      title:
        "DeFi Yield Protocol: The First Manipulation Free DeFi platform in BSC and ETH",
      id: 40,
      link: "https://techbullion.com/defi-yield-protocol-the-first-manipulation-free-defi-platform-in-bsc-and-eth/",
      date: "2021-04-10",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 40).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 40).down : 0,
      image:
        "https://techbullion.com/wp-content/uploads/2021/04/DYP-cast-your-vote-1.jpg",
      content: `SHARE TWEET SHARE EMAIL 
        What do we call a Defi platform providing its users’ rewards in ETH and BNB? Defi yield protocol. DYP is a one-of-a-kind Defi platform instituted in 2020 to create more opportunities for its users. It’s probably the first platform to pay its users’ pool rewards in ETH.<br/><br/>
        DYP helps users earn rewards from providing liquidity, staking and mining Ethereum. In a recent release on their Medium page, DYP announced the further steps taken to increase the platform’s reach. <br/><br/>
        According to the release, DYP will launch its new DYP earn vault, DYP tools, DYP NFT DApp, and the new user interface. The first two, i.e, the tools and earn vault will be released shortly. <br/><br/>
        Additionally, DYP provides additional opportunities to earn more income in staking, yield farming, etc. As of the latest release, DYP has already distributed 7064 ETH worth over $14.87 million since the launch of the staking Dapp a few months ago. <br/><br/>
        Moreover, DYP is now accessible in both the Binance Smart Chain and the Ethereum Chain. There are currently over 4 PancakeSwap based pools that every investor is allowed to participate in depending on the value of stake and the profits they need. Additionally, DYP institutes a BSC link, the BSC-DYP bridge, which will help transfer DYP between the ETH and BSC networks. <br/><br/>
        Apart from the advancements made recently, DYP had other features since its launch to help protect users and interact with the community.<br/><br/>
        <h3><b>DYP is the First Manipulation Free Platform</b></h3><br/><br/>
        Manipulation has been a cause of severe losses in the crypto world, with decentralized exchange users losing fortunes to whales. The most recent heavy manipulation was in SushiSwap, where the founder made an exit scam affecting the Defi and Crypto markets. <br/><br/>
        However, Defi yield protocol boasts being the first platform to introduce tools for adequate prevention of crypto price manipulation. Foremost, everyone from a small investor to a whale can participate in providing liquidity. Therefore, liquidity provision is not left to only a few people.<br/><br/>
        The platform converts all DYP earned during the day into ETH and BNB currencies. This conversion happens every 24 hours. Converting the DYP tokens into another currency helps protect the price of the DYP token from fraudulent people. <br/><br/>
        If at some point the price of the DYP falls by over 2.5%, Defi yield protocol converts the maximum number of DYP possible into ETH. As they convert the DYP, they avoid indirectly affecting the price of the token. <br/><br/>
        The remaining unconverted DYP is used within seven days to pay rewards to pool investors. If any DYP remains after the seven days, the community will vote on whether to burn or distribute the tokens through DAO governance. <br/><br/>
        <h3><b>DYP for the Community</b></h3><br/><br/>
        The idea of Defi’s introduction was to introduce complete decentralization of financial services while keeping the community in mind. DYP works well with the community and for the community. <br/><br/>
        Foremost, the platform has its native token DYP, whose holders can participate in the project’s governance. The holders will help vote for decisions like adding new pools, burning or redistributing tokens, governance initiatives, partnerships, etc.<br/><br/>
        Moreover, DYP interacts with the community by educating them via social networks and providing analysis tools. Their Twitter page is active to help investors in all their decision-making.<br/><br/>
        It’s so common for beginner investors to make investment mistakes by choosing poorly performing projects. The reason for their poor choices is due to lack of proper research skills.<br/><br/>
        However, the DYP network introduces DYP tools which boasts of several features for utter simplicity and community involvement. DYP tools will host features like a pair explorer, pool explorer, Bigswap explorer, etc.<br/><br/>
        Other features for the community include excellent liquidity data, a locker, a trust score, and complete decentralization. All these features instituted in the platform will attract many investors, boost DYP token price and demand.<br/><br/>
        It’s time for investors to use DYP, which is  available both in the Ethereum blockchain and BSC chain via PancakeSwap. <br/>
        `,
      
    },
    {
      title: "DYP.Finance: A Unique Yield Farming Platform",
      id: 41,
      link: "https://www.cryptocompare.com/coins/guides/dypfinance-a-unique-yield-farming-platform/",
      date: "2020-11-16",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 41).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 41).down : 0,
      image: "https://www.cryptocompare.com/media/37459277/img_0834.jpg",
       content: `The cryptocurrency industry has experienced rapid growth in the past decade since the advent of Bitcoin. The first cryptocurrency opened the financial world to a world of possibilities using decentralized ledger technology (blockchain).<br/><br/>
      This development has given rise to a new sector of finance that has experienced a massive boom in 2020 named decentralized finance (DeFi). As of 2019, there was only $275 million worth of total locked-in value of crypto assets in the DeFi economy.  2020 gave rise to massive adoption of DeFi with the total locked-in value rising multiple folds to its current value of $11 billion+.<br/><br/>
      However, it is important that you understand the core values of DeFi as several platforms have sprung up in recent months.  Decentralized finance platforms operate decentralized governance based on blockchain technology and decentralized information feeds which determine interest rates and currency values.<br/><br/>
      Since there are tons of DeFi projects in the market, it is easy to get lost looking for the right protocol with potential. DYP.Finance is one of the few that operates based on the right ideals and follows excellent financial protocols to govern its platform.<br/><br/>
      <h4><b>Built on an Ethereum Smart Contract</b></h4><br/><br/>
      Smart contracts are the major driving force behind DeFi and DYP is built on one of the best smart contracts protocols available, ‘’Ethereum’’.  The Ethereum smart contract network provides immutability and security for the DeFi protocol.<br/><br/>
      Ethereum is the industry leader in the DeFi industry and DYP team has vast experience on the blockchain and has been mining Ethereum since 2017. The DeFi platform was built using popular programming languages including HTML5, CSS3, Bootstrap, and Ethereum Solidity protocol.<br/><br/>
      Ethereum has the biggest DeFi market in the blockchain industry and provides DYP with a massive community of DeFi enthusiasts. Using Ethereum technology, DYP has been able to build a DeFi protocol that enables anyone to get involved with yield farming.<br/><br/>
      You can easily provide liquidity on the DYP platform and get rewards for the first time in ETH. DYP takes care of the complex details by maintaining token price stability and providing other features for DeFi end users.<br/><br/>
      Also, DYP has taken steps to audit the smart contracts and codes used on its protocol to ensure maximum security for users. This is an important factor in the DeFi industry as the presence of bugs in smart contracts poses a risk for DeFi platforms. Yam finance is a major example that saw its value drop by 99% after a bug in its smart contract prevented a governance vote from occurring. 
      DYP has no problems with codes properly audited and features in place to prevent such occurrence on its protocol.<br/><br/>
      <h4><b> A truly decentralized protocol</b></h4><br/><br/>
      DeFi Yield protocol aims to change the way decentralized finance is perceived by ensuring equity in the control of funds on its platform. 
      A major concern by DeFi critics is that whales have the power to take control of a DeFi network with the recent controversy of SushiSwap a major example.<br/><br/>
      DYP takes care of this concern by integrating a DYP anti-manipulation feature that ensures that the rewards from supported tokens (DYP/ETH, DYP/USDC, DYP/USDT, and DYP/WBTC POOL)  are automatically converted from DYP to ETH at 00.00 UTC. 
      In addition, rewards are automatically distributed to liquidity providers on the platform in a fair and transparent manner. Thus ensuring that no whale would be able to manipulate the price of DYP to their advantage.  This after all is the major purpose of decentralized finance.<br/><br/>
      Also if the price of DYP is affected by more than -2.5 then the maximum DYP amount that does not affect the price will be swapped to ETH, with the remaining amount distributed in the next day rewards. After seven days, if they are still undistributed DYP rewards, a governance vote will be held on whether the remaining DYP are distributed to token holders or burnt.<br/><br/>
      <h4><b>Unique Token for Yield Farming and Mining Pools</b></h4><br/><br/>
      DYP Finance offers a utility token that enables users to interact with the features on the DYP smart contract. Ethereum miners can join the DYP mining pool and get rewarded monthly with a 10% bonus from the ETH monthly income earned by the pool. <br/><br/>
      Also five million DYP will be distributed to miners as an incentive to join the pool and grow the DYP platform over a period of time. Users can also stake their crypto assets to earn DYP via an automated yield farming contract.<br/><br/>
      The automated Earn Vault will distribute 75% of profits to liquidity providers while the 25% left will be used to buy back their protocol token to add liquidity and maintain token price stability. DYP was able to sell 570,000 DYP tokens worth 2,821.71 ETH during the Whitelisting & Presale round which shows the interest within the DeFi circle.<br/><br/>
      <h4><b>Finally</b></h4><br/><br/>
      It's not too late to join DYP finance as the DeFi platform is currently offering a Public Crowdsale offering. You can visit the sales page at <a href='https://crowdsale.dyp.finance' target='_blank'><u>https://crowdsale.dyp.finance</u></a> and make an application to purchase DYP tokens. The minimum amount to participate in DYP is 0.5 ETH and the maximum contribution is 100 ETH.
      DYP tokens can be withdrawn to supported wallets which includes MetaMask and TrustWallet.<br/>
      `,
      
    },
  ];
  return (
    <div className="latestnews-wrapper">
      <Carousel
        cols={1}
        rows={1}
        gap={10}
        loop
        showDots={true}
        autoplay={4000}
        hideArrow={true}
        scrollSnap={true}
      >
        {newsArray.length > 0 &&
          newsArray.slice(0, 5).map((item, key) => {
            return (
              <Carousel.Item key={key}>
                <NavLink to={`/news/${item.id}`} onClick={()=>{window.location.assign(`/news/${item.id}`)}}>
                <div
                  style={{
                    display: item.title?.includes("http") ? "none" : "block",
                    padding: "20px 10px 0px",
                  }}
                >
                  <div className="single-related-news-wrapper">
                    <div
                      className="latestnews-item"
                      style={{ gap: 10 }}
                    >
                      <div className="d-flex flex-column" style={{ gap: 15 }}>
                        <h6
                          className="related-subnews-title"
                          onClick={() => {}}
                        >
                          {item.title}
                        </h6>
                        <div className="news-bottom-wrapper justify-content-between">
                          <div className="like-wrapper">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.25 5H7.875C7.565 5 7.2975 5.1875 7.185 5.4575L6.0525 8.1025C6.02 8.1875 6 8.2775 6 8.375V9C6 9.275 6.225 9.5 6.5 9.5H9.0925L8.76 11.0875C8.7525 11.125 8.7475 11.165 8.7475 11.205C8.7475 11.36 8.81 11.5 8.9125 11.6025L9.31 12L11.78 9.53C11.915 9.395 12 9.2075 12 9V5.75C12 5.335 11.665 5 11.25 5Z"
                                fill="#FC4F36"
                              />
                              <path
                                d="M0.75 7L4.125 7C4.435 7 4.7025 6.8125 4.815 6.5425L5.9475 3.8975C5.98 3.8125 6 3.7225 6 3.625L6 3C6 2.725 5.775 2.5 5.5 2.5L2.9075 2.5L3.24 0.9125C3.2475 0.875 3.2525 0.835 3.2525 0.795C3.2525 0.64 3.19 0.5 3.0875 0.3975L2.69 -2.89369e-07L0.22 2.47C0.0849999 2.605 3.67831e-07 2.7925 3.49691e-07 3L6.55671e-08 6.25C2.92866e-08 6.665 0.335 7 0.75 7Z"
                                fill="#FC4F36"
                              />
                            </svg>
                            <span>
                             {" "} {Number(item.upvote) - Number(item.downvote)}
                            </span>
                          </div>

                          <div className="date-wrapper">
                            <img src={Clock} alt="" style={{ width: "auto" }} />
                            <h6 className="date-content">
                              {item.date}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <img
                        src={item.image}
                        alt=""
                        className="latestnews-image"
                      />
                    </div>
                  </div>
                </div>
                </NavLink>
              </Carousel.Item>
            );
          })}
      </Carousel>

      <div></div>
    </div>
  );
};

export default LatestNews;
