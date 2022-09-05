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
      title: "DeFi Yield Protocol (DYP) Continues to Expand Its Ecosystem",
      id: 35,
      link: "https://news.bitcoin.com/defi-yield-protocol-dyp-continues-to-expand-its-ecosystem/",
      date: "Jun 28, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 35).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 35).down : 0,
      imageSrc:
        "https://static.news.bitcoin.com/wp-content/uploads/2021/06/dyp.jpg",
      content: {
        title: "DeFi Yield Protocol (DYP) Continues to Expand Its Ecosystem",
        imageSrc:
          "https://static.news.bitcoin.com/wp-content/uploads/2021/06/dyp.jpg",
        content: `DeFi Yield Protocol has emerged as one of the fastest-growing crypto projects with an expanding ecosystem. DYP allows DeFi users to leverage advanced trading tools to earn yield on their assets while taking advantage of the unique DYP Tools decentralized application.<br/><br/>
        DYP has attracted the attention of many within the crypto space due to its features that include its unique Anti-manipulation system. The anti-manipulation feature ensures the stability of DYP tokens by automatically converting DYP rewards to Ether (ETH) or BNB by 00:00 UTC daily and distributing rewards to liquidity providers.<br/><br/>
        <h4>Key Developments in DYP Ecosystem</h4><br/><br/>
        The DYP team continues to develop the ecosystem with major partnerships and integrations into its infrastructure. Some of the high profile developments include:<br/><br/>
        <b>Chainlink Integration</b><br/><br/>
        DYP recently revealed that it has integrated Chainlink Price Feeds on its Ethereum and Binance Smart Chain mainnet. The integration will provide DYP with access to high-quality, tamper-proof price feeds needed to provide the exact value in USD for the rewards paid in ETH and BNB to the liquidity providers via farming pools. Chainlink data feeds will also ensure that DYP values are provided in a fully decentralized way that cannot be manipulated.<br/><br/>
        According to DYP, the choice of Chainlink is due to its seamless solution that has been tried and tested within the DeFi sector. Chainlink is the choice of several leading DeFi protocols and has proven to be valuable in maintaining the stability and security of smart contracts.<br/><br/>
        DYP will also use Chainlink in the future to provide additional price feeds for all the farming, staking, and vault pools on its platform.<br/><br/>
        <b>Avalanche integration</b><br/><br/>
        DYP is also set to expand its ecosystem by building integration with DeFi protocol Avalanche. The expansion will enable users to leverage DYP advanced trading tools on Avalanche. DYP will initially launch three products: DYP Farming, DYP Tools, and DYP NFTs.<br/><br/>
        As part of the integration, DYP Farming platform will launch a DYP/AVAX pair on Pangolin enabling users to stake their tokens for the different duration (3,30,60,90 days). Rewards are delivered to users in their choice of PNG, AVAX, or wrapped ETH daily.<br/><br/>
        DYP will also launch its unique NFT marketplace ‘’DYP NFTs’’ on Avalanche. The Marketplace will enable artists and creators to mint, trade, and sell their digital artwork to the Avalanche community at low fees and eco-friendly technology.<br/><br/>
        <h4>Ethereum and Binance Smart Chain Pools</h4><br/><br/>
        DYP has achieved several milestones and became the first protocol to offer users yield rewards in ETH or BNB. Since its launch in 2020, DYP has paid out 8,455.24 ETH and 4,622.56 BNB worth over $20 million to liquidity providers.<br/><br/>
        It is also one of the few yield farming platforms that allows users to stake on both Ethereum and Binance Smart Chain Network. Yield farmers can easily stake DYP tokens on one of the supported staking pools. Each pool has four different staking options with rewards starting 20% APR up to 35% APR, depending on the lock time.<br/><br/>
        The DYP Earn Vault also provides an alternative means for users to earn impressive yields. The Vault is an automated yield farming contract with Compound Protocol integration and support for ETH, WBTC, USDC, USDT, and DAI markets.<br/><br/>
        The interest from Compound is entirely distributed to the users. A substantial proportion of the profits (75%) is converted ETH and distributed to the liquidity providers, whereas the remainder (25%) is used to buy back our protocol token and burn it.<br/><br/>
        <h4>DYP Tools</h4><br/><br/>
        DYP has developed a unique decentralized tools dashboard called DYP tools that is the first of its kind in the DeFi sector. DYP Tools increase the use cases for DYP Token and the entire DeFi ecosystem. The tool dashboard serves as a liquidity locker for any DeFi project and protects the DeFi community by providing a decentralized trust score for all DeFi.<br/><br/>
        DYP continues to trail the blaze in the DeFi space, and the launch of the DYP Tools is expected to lead to an adoption of the DYP token and its project within the crypto space.<br/><br/>

        
        `,
      },
    },
    {
      title:
        "DYP Staking dApp Launches on BNB Chain, LPs to earn Passive Income in ETH, DYP, or BNB",
      id: 36,
      link: "https://crypto.news/dyp-protocol-staking-dapp-binance-smart-chain-bsc-lp-passive-income-eth-dyp-bnb/",
      date: "April 7, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 36).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 36).down : 0,
      imageSrc:
        "https://crypto.news/app/uploads/2021/04/DeFi-Yield-Protocol-Community-Update%E2%80%8A%E2%80%94%E2%80%8AStaking-Pools-Tutorial-on-Binance-Smart-Chain.jpg",
      content: {
        title:
          "DYP Staking dApp Launches on BNB Chain, LPs to earn Passive Income in ETH, DYP, or BNB",
        imageSrc:
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
    },
    {
      title: "DeFi Yield Protocol Takes Yield Farming to the Next Level",
      id: 37,
      link: "https://www.newsbtc.com/press-releases/defi-yield-protocol-takes-yield-farming-to-the-next-level/",
      date: "July 12, 2020",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 37).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 37).down : 0,
      imageSrc:
        "https://www.newsbtc.com/wp-content/uploads/2020/10/dyp-img.png",
      content: {
        title: "DeFi Yield Protocol Takes Yield Farming to the Next Level",
        imageSrc:
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
    },
    {
      title:
        "DeFi Yield Protocol Could Be a Massive Boost for Yield Farmers and the DeFi Space",
      id: 38,
      link: "https://www.cryptocompare.com/coins/guides/defi-yield-protocol-could-be-a-massive-boost-for-yield-farmers-and-the-defi-space/",
      date: "13 Nov, 2020",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 38).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 38).down : 0,
      imageSrc: "https://www.cryptocompare.com/media/37459245/graph.jpg",
      content: {
        title:
          "DeFi Yield Protocol Could Be a Massive Boost for Yield Farmers and the DeFi Space",
        imageSrc: "https://www.cryptocompare.com/media/37459245/graph.jpg",
        content: `Since February 2020, we have seen a steady growth of the blockchain space and, most significantly, decentralized finance. While DeFi isn't entirely new, the network's growth has been more aggressive this year than it has ever been. The distribution of COMP governance token and the introduction of yield farming protocols around June this year has made DeFi the most engaging conversation in the blockchain space, no doubt.<br/><br/>
      Decentralized finance has only grown this much because of the control and ease it offers users. By allowing users to utilize traditional banking and financing services like lending, borrowing, and saving, an overwhelming sense of trust has been birthed over the past few months. Even more captivating is that many users now earn more than 100% of their capital, mostly by offering liquidity through yield farming protocols.<br/><br/>
      <h3><b>DeFi Yield Protocol (DYP)</b></h3><br/><br/>
      Over the past couple of months, we have also seen a contrast between different DeFi protocols and what might set a precedent for the DeFi ecosystem's longevity as a whole. The <a href='https://dyp.finance/#/home' target='_blank'><u>DeFi yield protocol (DYP)</u></a> is a unique protocol that allows virtually any user to provide liquidity, earn DYP tokens as yield while maintaining the token price. Unlike some DeFi user interface, the DYP interface is quite simplified, accommodating new and expert yield farmers.<br/><br/>
      <h3><b>What Makes the DYP Staking Pool Unique?</b></h3><br/><br/>
      DYP developers, together with a blockchain company, developed the unique DYP staking. The DYP staking allows users to stake dAPP through the Ethereum smart contract that is front-end integrated with Metamask and Trustwallet. By studying some flaws of the DeFi ecosystem, DYP aims to tackle them head on and give users the best experience in open finance.<br/><br/>
      One of the many arguments against the operability of defi revolves around “whales” controlling the network. One of such examples is the infamous Sushi dump where the anonymous founder dumped all of his Sushi tokens for ethereum. To prevent a whale attack, DYP developed an anti-manipulation feature that automatically converts all pool rewards from DYP to ETH at 00:00 UTC everyday. The system then distributes the rewards to liquidity providers. This manipulation feature ensures that the pool’s liquidity is fair to every participant.<br/><br/>
      Besides preventing whales through the anti-manipulating feature, the smart contract also maintains the DYP token price. If the DYP price fluctuates beyond 2.5% in value, rather than swapping all 276,480 DYP tokens for ETH at 00:00 UTC, the smart contract only swaps as many DYP tokens to ETH that doesn’t affect the price of the token. The leftover DYP is then distributed in the next day’s rewards. If there are still leftover DYP tokens, the DYP governance votes on whether to distribute them to token holders or burn the tokens from circulation.<br/><br/>
      The decentralized network is essentially an open space regulated by a smart contract, and the greatest risk in yield farming today is still a smart contract bug. To prevent the risk of a smart contract bug on their network, DYP ensures all their smart contract codes are <a href='https://github.com/dypfinance/contract-security-audit' target='_blank'><u> audited.</u></a><br/><br/>
      <h3><b>DYP Yield Farming and the Ethereum Mining Network</b></h3><br/><br/>
      As the Ethereum network continues to increase in size and number, there's a corresponding need for mining on the network. The DYP team has been committed to Ethereum mining for more than three years and have invested more than $1m on their <a href='https://ethermine.org/miners/0x910090Ea889B64B4e722ea4b8fF6D5e734dFb38F/dashboard' target='_blank'><u>mining farm</u></a>. Not only is the team heavily invested in Ethereum mining, but the DYP team has also shown its willingness to allow many more users to <a href='https://ethermine.org/miners/0x910090Ea889B64B4e722ea4b8fF6D5e734dFb38F/dashboard' target='_blank'><u>participate.</u></a><br/><br/>
      To reward users, every ethereum miner address that interacts with the DYP smart contract will earn a monthly bonus of 10% in DYP of the ETH income earned monthly. Essentially what this means is; if ETH price is $400 and DYP price is $2, if you earn 1ETH monthly, you also get a monthly airdrop of 10% (20 DYP tokens worth $40). To claim the airdrop tokens, users will need to join their Ethereum mining pool with a 0% fee, meaning users will also earn more monthly.<br/><br/>
      DYP also has an automatic earn vault that moves a participant’s funds around using the best yield farming strategies. The automatic earn vault will distribute 75% of the earnings among the liquidity providers and 25% to buy back DYP tokens. Ultimately this promotes liquidity in the pool and maintains the price of the token.<br/><br/>
      <h3><b>DYP Crowdsale</b></h3><br/><br/>
      When the decentralized finance ecosystem seeks a balance while setting a precedent for its mainstream adoption, DYP is actively laying a foundation from its public crowdsale. During the whitelisting and presale round, 570,000 DYP tokens worth 2,821.71 ETH have been sold. For a chance to participate in this unique protocol, join the public crowdsale at <a href='https://crowdsale.dyp.finance/' target='_blank'><u>https://crowdsale.dyp.finance/</u></a> <br/>
      `,
      },
    },
    {
      title:
        "DeFi Yield Protocol (DYP) Eliminates the Risks of Whale Interference",
      id: 39,
      link: "https://coindoo.com/defi-yield-protocol-dyp-eliminates-the-risks-of-whale-interference/",
      date: "Aug 6, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 39).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 39).down : 0,
      imageSrc:
        "https://coindoo.com/wp-content/uploads/2020/11/DeFi-Yield-Protocol-DYP.jpg",
      content: {
        title:
          "DeFi Yield Protocol (DYP) Eliminates the Risks of Whale Interference",
        imageSrc:
          "https://coindoo.com/wp-content/uploads/2020/11/DeFi-Yield-Protocol-DYP.jpg",
        content: `DeFi Yield Protocol (DYP) is a new type of DeFi platform that seeks to change the way you earn through liquidity on Ethereum smart contracts. Keenly, the developers behind this next-gen platform <a href='https://www.newsbtc.com/news/company/dyp-finance-a-unique-yield-farming-platform/' target='_blank'><u>introduce</u></a> several anti-manipulation features to eliminate the risk of whales hijacking the network. These systems help ensure that the rewards earned from the network’s liquidity are fairly distributed to all participants.<br/><br/>
        <h3><b>Benefits of DeFi Yield Protocol (DYP)</b></h3><br/><br/>
        DYP introduces a number of crucial benefits to the sector that help new and experienced investors secure higher ROIs. Here are the most notable features that are sure to attract investors.<br/><br/>
        <b>Anti Manipulation</b><br/><br/>
        At the core of DYP is a desire to provide all network users a fair chance to earn rewards. It’s no secret that whales can wreak havoc on the market. A perfect example of recent whale interference is the <a href='https://news.bitcoin.com/sushiswap-founder-reportedly-exit-scams-as-sushi-token-price-tanks/' target='_blank'><u>Sushi Swap fiasco</u></a>. Sadly, the founder traded all of his tokens for Ethereum and crashed the value of the project in seconds. It’s exactly this scenario DYP seeks to eliminate.<br/><br/>
        In its quest to remove these concerns, the developers created a system that ensures equity in the control of funds on the platform. Impressively, this protocol serves as both a token price stability mechanism and an integrating <a href=https://cointelegraph.com/press-releases/defi-yield-protocol-your-new-defi-gem-with-anti-manipulation-feature' target='_blank'><u>anti-manipulation feature.</u></a><br/><br/> 
        <b>Earn Vault</b><br/><br/>
        DYP introduces the Earn Vault protocol that distributes 75% of profits to liquidity providers. The remaining 25% goes into a token buyback system designed to add liquidity and maintain token price stability. Every day at 00:00 UTC, the smart contract automatically attempts to convert 276,480 DYP over to ETH.<br/><br/>
        If for whatever reason, this isn’t possible because the price of DYP is affected by more than -2.5, the system will proceed to trade the maximum amount of DYP to not drop the token’s value. From there the remaining amount gets distributed in the following days.<br/><br/>
        <b>Transparency</b><br/><br/>
        DYP rewards are automatically distributed to liquidity providers. The platform removes all human intervention. DYP smart contracts provide a fair and transparent distribution for network participants. Additionally, the entire network is built on decentralization. Users gain the ability to vote on important updates via a governance system.<br/><br/>
        <b>Maximum Security</b><br/><br/>
        DYP places an emphasis on digital security. The platform guarantees the stability of its coding against hackers via regular audits of its smart contracts and system protocols. Faulty coding has already cost DeFi investors millions. DYP users gain an extra layer of confidence due to these audits.<br/><br/>
        <h3><b>How Does DeFi Yield Protocol (DYP) Work?</b></h3><br/><br/>
        DYP is a DeFi network that is built atop the Ethereum blockchain. Ethereum is the top DeFi blockchain in the world currently. The developers leveraged Ethereum’s full potential. Specifically, DYP was built utilizing a variety of popular programming languages including HTML5, CSS3, Bootstrap, and Solidity.<br/><br/>
        <b>DYP Mining Pool</b><br/><br/>
        Impressively, participants in the DYP mining pool receive a 10% bonus from the ETH monthly income earned by the pool. Developers intend to jumpstart this pool with five million DYP tokens. These tokens are to be distributed to miners as an incentive to join the pool following the platform’s launch.<br/><br/>
        <b>Variety of Pools</b><br/><br/>
        As part of their inclusive strategy, DYP <a href='https://cryptoadventure.com/defi-yield-protocol-dyp-a-unique-manipulation-resistant-defi-platform/' target='_blank'><u>introduces</u></a> support for a variety of staking pools including DYP/ETH, DYP/USDC, DYP/USDT, and DYP/WBTC POOL. This selection ensures that users always have access to valuable liquidity when they desire to trade their assets. Savvy investors can even stake across multiple pools to maximize their returns on the platform. <br/><br/>
        <b>Yield Farming</b><br/><br/>
        DYP users can stake their crypto assets to earn DYP via an automated yield farming contract. Yield farming is another popular DeFi protocol that continues to find its way into most top-notch platforms. Yield farming removes banks from the lending equation and replaces them with a decentralized network of users.  <br/><br/>
        When you yield farm your crypto, you agree to lock your assets into smart contracts also called liquidity pools. The main purpose of these pools is to allow other crypto users to take out short term loans. The borrowers then repay the loans plus interest. All of the profits feedback into the interest-earning liquidity pool. In turn, this creates even more profits.<br/><br/>
        One of the best parts of Yield Farming is that it doesn’t necessarily matter when your loan gets repaid. The liquidity pool earns so much profit that you’re repaid on time regardless of when your loan is repaid. Other profits and new liquidity is used to ensure your timely repayment. <br/><br/>
        <b>DYP Token</b><br/><br/>
        The DYP token is an ERC-20-based digital asset that functions as the main governance and utility token for the network. The token can be used to pay fees, stake in pools, send and receive payments, and vote on vital network upgrades. Additionally, all rewards are paid out in DYP tokens. <br/><br/>
        ERC-20 tokens enjoy the broadest range of interoperability in the crypto sector. These token users have a variety of wallets, exchanges, games, and other unique financial tools at their disposal. There are over 200,000 ERC-20 tokens in circulation today with more entering weekly. <br/><br/>
        <b>Governance</b> <br/><br/>
        DYP features a decentralized governance system that allows regular users to participate in the direction of the platform’s development. Updates, new token additions, and whether or not to distribute or burn DYP token rewards are all matters that users vote on. <br/><br/>
        <h3><b>DeFi Yield Protocol (DYP) Presale and Token Sale</b></h3><br/><br/>
        The DYP token sale is currently underway. Notably, the platform already sold 570,000 DYP tokens (2,821.71 ETH) during its Whitelisting & Presale round. This level of early participation signals major interests in the market. The minimum amount to participate in DYP’s crowdsale is 0.5 ETH and the maximum contribution is 100 ETH. <br/><br/>
        <h3><b>DeFi Yield Protocol (DYP) – Keeping to the Principles of DeFi</b></h3><br/><br/>
        DYP’s introduction of anti-manipulation protocols helps to further the overall goal of DeFi, to remove centralized powers from finance and instead, share the profits amongst users. DYP accomplishes this goal with its innovative pool reward distribution and token stability system. For these reasons, DYP is sure to see more adoption in the coming months.<br/>
        `,
      },
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
                              {item.month} {item.date}, {item.year}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <img
                        src={item.imageSrc}
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
