import React, { useState, useRef } from "react";
import SingleNews from "./singleNews";
import MainNews from "./mainNews";
import PressRealease from "./PressRelease";
import OtherNews from "./OtherNews";
import OwlCarousel from "react-owl-carousel";
import NewsModal from "./NewsModal";

const News = ({ theme }) => {
  const newsArray = [
    {
      date: "22",
      id: 0,
      month: "Jun",
      title: "📣 DYPians, get ready for the next step!",
      link: "https://twitter.com/dypfinance/status/1539620413461958656",
      imageSrc:
        "https://pbs.twimg.com/media/FV3UaozWYAE8y_F?format=jpg&name=small",
      year: "2022",
      content: {
        imageSrc:
          "https://pbs.twimg.com/media/FV3UaozWYAE8y_F?format=jpg&name=small",
        title: "📣 DYPians, get ready for the next step!",
        content:
          "Starting from today, 22 June 2022, 09:00 AM PT, $DYP will be available for trading on @Coinbase & @CoinbaseExch. You can choose from #DYP-USD & #DYP-USDT pairs.",
      },
    },
    {
      date: "14",
      id: 1,
      month: "Jun",
      title: "Metaverse, the next step for DYP!",
      link: "https://dypfinance.medium.com/metaverse-the-next-step-for-dyp-4c6586a1e3f0",
      imageSrc:
        "https://miro.medium.com/max/1400/1*VKmKepkkPCmkMcF_0kU5Dg.jpeg",
      year: "2022",
      content: {
        imageSrc:
          "https://miro.medium.com/max/1400/1*VKmKepkkPCmkMcF_0kU5Dg.jpeg",
        title: "Metaverse, the next step for DYP!",
        content: `Metaverse is an online 3D universe that combines multiple virtual spaces with endless possibilities which allows users to meet, socialize, play and even work. <br/><br/>
        The closest metaverse experience that is out there is provided by video games with developers that expanded the gaming universe, creating in-game complex ecosystems with different types of utility tokens and valuable collectibles like NFTs. <br/><br/>
        The metaverse is powered by virtual reality and each user will have its own avatar or character. Let’s take a quick example: with the help of a VR headset you will connect to a blockchain-based game, use your avatar and check your crypto portfolio inside a metaverse platform. <br/><br/>
        Although it may seem like a movie scenario, we assure you that the future is closer than you think.<br/><br/>
        <b>Check out what the team has planned for you!</b><br/><br/>
        As we said in our previous articles, after CAWS minting is over, the next step is <b>a metaverse platform and a V.R. play-to-earn game</b> where you can use your NFT as a companion in your adventure or to check your crypto portfolio.<br/><br/>
        The game that we are currently developing will give you the opportunity to search for treasures, upgrade your character and also your cat, meet and interact with other users using a chatbox and much more.<br/><br/>
        <b>The Metaverse Mining play-to-earn game is a feature-rich RPG</b> where players can explore through endless mines, hunting for rewards, special items and digital currency.<br/><br/>
        The game features the main character and a cat (NFT) which will start the journey together to mine on different lands with different difficulty levels. Is it to be emphasized that the cat will not be a blocking point for the players to have at the first moment since they will have <b>the possibility to purchase a CAWS NFT in the Open World section.</b><br/><br/>
        What makes this <b>experience unique</b> is that almost all <i>items in the game are decentralized, using the power of innovative blockchain technology</i>. That means <b>players truly own their game assets</b> as they can freely trade them with other players, sell them for real-world value, and use them across different mines.<br/><br/>
        Our play-to-earn will have <b>different gameplay modes</b>, like:<br/><br/>
        <ul><li><b>• Campaign</b> or <b>Multiplayer</b> and other sections like Inventory, where you will view the warehouse and item inventory collected</li><li><b>• Credit Store,</b> where you will be able to buy DYP or iDYP for game use</li><li><b>• News</b></li><li><b>• Leaderboard</b> where you will be able to see the players rank and rewards.</li></ul><br/>
        ...and many more.<br/><br/>
        To give you that amazing VR experience we will prepare for you an <b>Open World that will include multiple features like:</b><br/><br/>
        <ul><li><b>• Mall</b>— here you will have access to different shops and purchase gear, tools, consumable items etc.</li><li><b>• Forge</b>— you will be able to forge different items.</li><li><b>• Casino</b>— this will be a special place where you will be able to hang out, talk to other players and, of course, play with them different games.</li><li><b>• NFT Marketplace</b>— Players can view different NFTs available and even purchase them.</li>
        <li><b>• DYP Shop</b>— will allow you to access DYP’s products: Buyback, Vault, YieldFarming, Stake DYP, Referral, Bridge etc.</li><li><b>• NPC</b>—  as in non player characters, will be all over the map and you will be able to interact with them and get all kinds of rewards.</li><li><b>• Trade Section</b>—  here you will be able to sell or buy different items from other players.</li><li><b>• Advertising Module</b>—  this section will be used for showing advertisement banners through the Open World.</li></ul>
        <img src='https://miro.medium.com/max/1400/1*CuSl1FG65e_xR7t-Cct5gg.jpeg'/><br/><br/>
        Now that we certainly got your attention, let’s see what other cool things we have prepared for our DYPians. For those of you that have <b>a CAWS NFT things will get super exciting.</b> Your cat avatar will help you in your quests to find different rewards or dig faster for your treasures.<br/><br/>
        Also, in a world full of dangerous creatures, your cat will protect you against rats, snakes, spiders, scorpions and many more. Another awesome thing that <b>you will benefit from will be your cat’s instincts:</b><br/><br/>
        <ul><li>• The ability <b>to sense</b> incoming dangers ahead</li><li>• <b>Hearing </b>— the cat can hear noises from far away, such as rocks collapsing nearby or storms approaching</li><li>• <b>Visibility</b>— the cat has night vision and it will help you in the dark.</li><li>• <b>Orientation</b>— the cat can find its way in the mine if you are lost.</li><li>• <b>Smell</b>— your cat character will be able to smell toxic gasses and warn you.</li></ul><br/><br/>
        These are just <i><b>some of the advantages that your CAWS character will give you in our future play-to-earn game.</b></i> Makes you think about it, doesn’t it?
        Things will get more exciting once you will start to get experience and upgrade your character and your pet from beginner up to expert level.<br/><br/>
        Last but not least, we will have a Ballance section where you will be able <b>to deposit DYP and iDYP to your wallets, withdraw rewards or transfer credits inside the game.</b><br/><br/>
        Now that you know a little bit about the things that we are developing, we hope you are as excited as we are for the amazing things that are coming.`,
      },
    },
    {
      date: "31",
      id: 2,
      month: "May",
      title: "Game season it’s officially open! 👉🏽 #CAWS Adventures is here!",
      link: "https://twitter.com/dypfinance/status/1531613663450251264",
      imageSrc:
        "https://pbs.twimg.com/media/FUFifRpX0AEoGYt?format=jpg&name=small",
      year: "2022",
      content: {
        imageSrc:
          "https://pbs.twimg.com/media/FUFifRpX0AEoGYt?format=jpg&name=small",
        title: "Game season it’s officially open! 👉🏽 #CAWS Adventures is here!",
        content:
          '🙀 Are you ready for a #GameFi Experience? Great! <br/><br/> Game season it’s officially open! 👉🏽 #CAWS Adventures is here. <br/> Connect your wallet and start the adventure!<br/> 😼 Don’t forget: you need to hold a CAWS #NFT in order to play. Game on DYPians! <br/><br/> <a href="https://game.dyp.finance/"  target="_blank">game.dyp.finance</a>',
      },
    },
    {
      date: "27",
      id: 3,
      month: "May",
      title: "Check out our new website!",
      link: "https://twitter.com/dypfinance/status/1530181037766189059",
      imageSrc:
        "https://pbs.twimg.com/media/FTxLMb9WIAE0fA7?format=jpg&name=medium",
      year: "2022",
      content: {
        imageSrc:
          "https://pbs.twimg.com/media/FTxLMb9WIAE0fA7?format=jpg&name=medium",
        title: "Check out our new website!",
        content:
          '🔥 That special moment is finally here! <br/><br> 🧐 Check out our new website. An upgraded UI version with new cool features 👉 an easier and more interactive way to stay connected to our platform! <br/><br/>This is DeFi Yield Protocol! ⤵️ <br/><br/><a href="https://dyp.finance/" target="_blank">dyp.finance</a>',
      },
    }
  ];

  const press_highlight = [
    {
      title: "Yield farming platform announces it’s expanding to Avalanche",
      link: "https://cointelegraph.com/news/yield-farming-platform-announces-it-s-expanding-to-avalanche",
      date: "JUL 08, 2021",
      imageSrc:
        "https://images.cointelegraph.com/images/717_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDcvMDczNDU5ZWMtYjUwYi00MmRjLWJjNWMtZmJkZDc3NDdlZjg0LmpwZWc=.jpg",
    },
    {
      title: "DeFi Yield Protocol (DYP) Continues to Expand Its Ecosystem",
      link: "https://news.bitcoin.com/defi-yield-protocol-dyp-continues-to-expand-its-ecosystem/",
      date: "Jun 28, 2021",
      imageSrc:
        "https://static.news.bitcoin.com/wp-content/uploads/2021/06/dyp.jpg",
    },
    {
      title:
        "DYP Protocol Staking dApp Launches on Binance Smart Chain (BSC), LPs to earn Passive Income in ETH, DYP, or BNB",
      link: "https://crypto.news/dyp-protocol-staking-dapp-binance-smart-chain-bsc-lp-passive-income-eth-dyp-bnb/",
      date: "April 7, 2021",
      imageSrc:
        "https://crypto.news/app/uploads/2021/04/DeFi-Yield-Protocol-Community-Update%E2%80%8A%E2%80%94%E2%80%8AStaking-Pools-Tutorial-on-Binance-Smart-Chain.jpg",
    },
    {
      title: "DeFi Yield Protocol Takes Yield Farming to the Next Level",
      link: "https://www.newsbtc.com/press-releases/defi-yield-protocol-takes-yield-farming-to-the-next-level/",
      date: "July 12, 2020",
      imageSrc:
        "https://www.newsbtc.com/wp-content/uploads/2020/10/dyp-img.png",
    },
    {
      title:
        "DeFi Yield Protocol Could Be a Massive Boost for Yield Farmers and the DeFi Space",
      link: "https://www.cryptocompare.com/coins/guides/defi-yield-protocol-could-be-a-massive-boost-for-yield-farmers-and-the-defi-space/",
      date: "13 Nov, 2020",
      imageSrc: "https://www.cryptocompare.com/media/37459245/graph.jpg",
    },
    {
      title:
        "DeFi Yield Protocol (DYP) Eliminates the Risks of Whale Interference",
      link: "https://coindoo.com/defi-yield-protocol-dyp-eliminates-the-risks-of-whale-interference/",
      date: "Aug 6, 2021",
      imageSrc:
        "https://coindoo.com/wp-content/uploads/2020/11/DeFi-Yield-Protocol-DYP.jpg",
    },
    {
      title:
        "DeFi Yield Protocol: The First Manipulation Free DeFi platform in BSC and ETH",
      link: "https://techbullion.com/defi-yield-protocol-the-first-manipulation-free-defi-platform-in-bsc-and-eth/",
      date: " Apr 10, 2021",
      imageSrc:
        "https://techbullion.com/wp-content/uploads/2021/04/DYP-cast-your-vote-1.jpg",
    },
    {
      title: "DYP.Finance: A Unique Yield Farming Platform",
      link: "https://www.newsbtc.com/news/company/dyp-finance-a-unique-yield-farming-platform/",
      date: " Apr 10, 2020",
      imageSrc: "https://www.newsbtc.com/wp-content/uploads/2020/11/5.jpg",
    },
    {
      title: "DYP.Finance: A Unique Yield Farming Platform",
      link: "https://www.cryptocompare.com/coins/guides/dypfinance-a-unique-yield-farming-platform/",
      date: "Nov 16, 2020",
      imageSrc: "https://www.cryptocompare.com/media/37459277/img_0834.jpg",
    },
    {
      title:
        "DeFi Yield Protocol (DYP) Launches Staking Pools on Binance Smart Chain",
      link: "https://u.today/defi-yield-protocol-dyp-launches-staking-pools-on-binance-smart-chain?amp",
      date: "Apr 12, 2021",
      imageSrc:
        "https://u.today/sites/default/files/styles/736x/public/2021-04/7180.jpg",
    },
    {
      title: "DYP Launches Staking DApp on Binance Smart Chain (BSC)n",
      link: "https://blockonomi.com/dyp-staking-app-binance-smart-chain/",
      date: "Apr 15, 2021",
      imageSrc:
        "https://blockonomi-9fcd.kxcdn.com/wp-content/uploads/2021/02/defi-yield-770x515.jpg",
    },
    {
      title:
        "DeFi Yield Protocol (DYP) Witnesses Massive Growth Following Binance Smart Chain Integration",
      link: "https://news.bitcoin.com/defi-yield-protocol-dyp-witnesses-massive-growth-following-binance-smart-chain-integration/",
      date: "Apr 9, 2021",
      imageSrc:
        "https://static.news.bitcoin.com/wp-content/uploads/2021/04/RuCUQmM6-dyp-7-prill-1-1280x720.jpg",
    },
    {
      title: "DeFi Yield Protocol (DYP): All in One Platform Yielding Benefits",
      link: "https://cryptopotato.com/defi-yield-protocol-dyp-all-in-one-platform-yielding-benefits/",
      date: "Nov 30, 2020",
      imageSrc:
        "https://cryptopotato.com/wp-content/uploads/2020/11/defiyieldprotocol_cover.jpg",
    },
    {
      title: "DYP Launches Staking DApp on Binance Smart Chain (BSC)",
      link: "https://techbullion.com/dyp-launches-staking-dapp-on-binance-smart-chain-bsc/",
      date: "Apr 19, 2021",
      imageSrc:
        "https://techbullion.com/wp-content/uploads/2021/04/DYP-Launches-Staking-DApp-DYPFinance.jpg",
    },
    {
      title:
        "Earn compound yields on Binance Smart Chain using DeFi Yield Protocol (DYP)",
      link: "https://coincodex.com/article/11092/earn-compound-yields-on-binance-smart-chain-using-defi-yield-protocol-dyp/",
      date: "Apr 21, 2021",
      imageSrc:
        "https://coincodex.com/en/resources/images//admin/news/earn-compound-yields/image1.jpg:resizeboxcropjpg?1050x590",
    },
    {
      title: "DYP.Finance – Stake DeFi Tokens and Get Paid in ETH",
      link: "https://techbullion.com/dyp-finance-stake-defi-tokens-and-get-paid-in-eth/",
      date: "Dec 19, 2020",
      imageSrc:
        "https://techbullion.com/wp-content/uploads/2020/12/Defi-Yield-Protocol.jpg",
    },
    {
      title: "DeFi Yield Protocol (DYP) Staking and Governance is Now Live",
      link: "https://medium.com/the-capital/defi-yield-protocol-dyp-staking-and-governance-is-now-live-e18c0f14a442",
      date: "Dec 19, 2020",
      imageSrc: "https://miro.medium.com/max/1400/1*5KQd_ryoVCcom5cXTnEfmg.png",
    },
    {
      title: "DeFi Yield Protocol Launches Staking and Governance dApp",
      link: "https://u.today/defi-yield-protocol-launches-staking-and-governance-dapp",
      date: "Dec 21, 2020",
      imageSrc:
        "https://u.today/sites/default/files/styles/736x/public/2020-12/5825.jpg",
    },
    {
      title: "DYP Launches Staking and Governance DAPP",
      link: "https://news.bitcoin.com/dyp-launches-staking-and-governance-dapp/",
      date: "Dec 22, 2020",
      imageSrc:
        "https://static.news.bitcoin.com/wp-content/uploads/2020/12/pArZKqh3-photo5406875453978952719.jpg",
    },
    {
      title: "DeFi Yield Protocol Debuts New Staking And Governance DApp",
      link: "https://bitcoinist.com/defi-yield-protocol-debuts-new-staking-and-governance-dapp/",
      date: "Dec 23, 2020",
      imageSrc:
        "https://bitcoinist.com/wp-content/uploads/2020/11/Yield-Farming.jpg",
    },
    {
      title: "DeFi Projects That Offer Top Staking Rewards in 2021",
      link: "https://hackernoon.com/defi-projects-that-offer-top-staking-rewards-in-2021-7fs34qs",
      date: "Dec 24, 2020",
      imageSrc:
        "https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F7LrDe0NwaTW40HBSsVuBSPeo2yd2-1p2p31oo.jpeg&w=3840&q=75",
    },
    {
      title:
        "DeFi Yield Protocol Launches Staking and Governance Dapp, DYP Holders Earn Ethereum",
      link: "https://www.newsbtc.com/news/company/defi-yield-protocol-launches-staking-and-governance-dapp-dyp-holders-earn-ethereum/",
      date: "Dec 24, 2020",
      imageSrc:
        "https://www.newsbtc.com/wp-content/uploads/2020/12/Epey0x_XcAUpVUq.jpg",
    },
    {
      title:
        "The DeFi Yield Protocol (DYP) Looks Poised to take DeFi to Next Level",
      link: "https://crypto.news/defi-yield-protocol-dyp/",
      date: "Dec 24, 2020",
      imageSrc: "https://crypto.news/app/uploads/2020/12/DYP-staking.jpg",
    },
    {
      title:
        "DeFi Yield Protocol (DYP) Provides a New Level of Transparency to the Market",
      link: "https://www.bitcoininsider.org/article/100387/defi-yield-protocol-dyp-provides-new-level-transparency-market",
      date: "Dec 24, 2020",
      imageSrc:
        "https://www.bitcoininsider.org/sites/default/files/styles/scale_900px/public/field/image/defi_yield_protocol.webp?itok=2ehPm3JM",
    },
    {
      title:
        "DeFi Yield Protocol Liquidity Providers Earn $25,000 in ETH per Day Staking DYP",
      link: "https://www.cryptocompare.com/coins/guides/defi-yield-protocol-liquidity-providers-earn-25-000-in-eth-per-day-staking-dyp/",
      date: "Dec 28, 2020",
      imageSrc:
        "https://www.cryptocompare.com/media/37621945/photo_2020-12-23-172208.jpeg",
    },
    {
      title:
        "Tackling Volatility Issues for Liquidity Providers with DeFi Yield Protocol (DYP)",
      link: "https://cryptopotato.com/tackling-volatility-issues-for-liquidity-providers-with-defi-yield-protocol-dyp/",
      date: "Jan 5, 2021",
      imageSrc:
        "https://www.bitcoininsider.org/sites/default/files/styles/scale_900px/public/field/image/defi_yield_protocol.webp?itok=2ehPm3JM",
    },
    {
      title: "5 DeFi Projects You Should Know About in 2021",
      link: "https://hackernoon.com/5-defi-projects-you-should-know-about-in-2021-irq347a",
      date: "Jan 16, 2021",
      imageSrc:
        "https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F7LrDe0NwaTW40HBSsVuBSPeo2yd2-tsg3140.jpeg&w=1200&q=75",
    },
    {
      title:
        "DeFi Yield Protocol: The First Manipulation Free DeFi platform in BSC and ETH",
      link: "https://www.bitcoininsider.org/article/110411/defi-yield-protocol-first-manipulation-free-defi-platform-bsc-and-eth",
      date: "Jan 16, 2021",
      imageSrc:
        "https://www.bitcoininsider.org/sites/default/files/styles/scale_900px/public/field/image/defi-yield-protocol.webp?itok=9O5edgCR",
    },
    {
      title: "DYP Maximizing the Benefits of Yield Farming Protocols",
      link: "https://coindoo.com/dyp-maximizing-the-benefits-of-yield-farming-protocols/",
      date: "Aug 6, 2021",
      imageSrc:
        "https://coindoo.com/wp-content/uploads/2020/12/Stake-and-Learn.jpg",
    },
    {
      title: "PR: How to Use DYP to Earn Big DeFi ROIs",
      link: "https://coingape.com/how-to-use-dyp-to-earn-big-defi-rois/",
      date: "Dec 23, 2020",
      imageSrc:
        "https://cdn.coingape.com/wp-content/uploads/2020/12/23193423/IMG_4770-min.jpg",
    },
  ];

  const owlCarouselOptions = {
    loop: true,
    margin: 0,
    center: false,
    nav: false,
    dots: true,
    autoplay: false,
    rewind: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      960: {
        items: 1,
      },
      1200: {
        items: 1,
      },
      1920: {
        items: 1,
      },
    },
  };

  const otherNews = [
    {
      title: "Gate.io $DYP Lock-up ＆ Earn #3",
      id: 4,
      imageSrc:
        "https://pbs.twimg.com/media/FTG42MYWQAImetj?format=jpg&name=large",
      date: "May 19, 2022",
      link: "https://twitter.com/gate_io/status/1527204993052426241",
      content: {
        imageSrc: 'https://pbs.twimg.com/media/FTG42MYWQAImetj?format=jpg&name=large',
        title: 'Gate.io $DYP Lock-up ＆ Earn #3',
        content: `🔒#Gateio $DYP Lock-up ＆ Earn #3 @dypfinance <br/><br/> 
        🔷Token: $DYP <br/> 🔶Term: 7 days<br/> ⚡️Annual Interest Rate:150%<br/> 🕘Start: May 21, 8:00:00 UTC<br/>
        ➡️Try out: <a href='https://www.gate.io/zh/hodl/1263?ch=hodl_twi0516' target='_blank'><u>gate.io</u></a><br/>
        ➡️Check more: <a href='https://www.gate.io/zh/article/26591?ch=en_sm_0522' target='_blank'><u>gate.io</u></a>`,
      }
    },
    {
      date: "22",
      id: 5,
      month: "Feb",
      title: "V.R. is the next step for #DYP.",
      link: "https://twitter.com/dypfinance/status/1496072467814756353",
      imageSrc:
        "https://pbs.twimg.com/media/FMMd6vBXoAMb_je?format=jpg&name=4096x4096",

      year: "2022",
      content: {
        imageSrc:
          "https://pbs.twimg.com/media/FMMd6vBXoAMb_je?format=jpg&name=4096x4096",
        title: "V.R. is the next step for #DYP.",
        content:
          "🔜 V.R. is the next step for #DYP. <br/><br> 🔥 ⚡️ Find out more about the #Metaverse play-to-earn game that we are developing. <br/><br/> 👉<a href='https://dypfinance.medium.com/how-defi-yield-protocol-is-changing-the-future-in-crypto-earnings-59d7774f570d' target='_blank'>How DeFi Yield Protocol is changing the future in the crypto world.</a>",
      },
    },
    {
      date: "11",
      id: 6,
      month: "Jan",
      title: "Cats and Watches Society Whitelist!",
      link: "https://twitter.com/dypfinance/status/1480623073208549380",
      imageSrc: "https://dyp.finance/img/nft/roadmap_caws.jpg",

      year: "2022",
      content: {
        imageSrc: "https://dyp.finance/img/nft/roadmap_caws.jpg",
        title: "Cats and Watches Society Whitelist!",
        content:
          "🔥Join Cats and Watches Society #NFTs Whitelist 🎉One Brand New Rolex Daytona Ceramic 116500LN worth $40k Giveaway <br/><br> 🔥 To win the watch: <br/><br/> <ul><li>✅Join <a href='http://dyp.finance/whitelist' target='_blank'>dyp.finance/whitelist</a></li><li>✅Mint one #NFT once available</li><li>✅Like & Retweet this post</li><li>✅Join <a href='http://discord.gg/dypcaws' target='_blank'>discord.gg/dypcaws</li><li>✅Tag 3 friends</li></ul>",
      },
    },
    {
      date: "11",
      id: 7,
      month: "Jan",
      title: "It's raining $KNC on KyberSwap for $DYP!",
      link: "https://twitter.com/KyberNetwork/status/1480850588980051969",
      imageSrc: "https://miro.medium.com/max/1400/1*gmCDk8UdGNrpI4USFHYyJA.png",
      year: "2022",
      content: {
        imageSrc:
          "https://miro.medium.com/max/1400/1*gmCDk8UdGNrpI4USFHYyJA.png",
        title: "It's raining $KNC on KyberSwap for $DYP!",
        content:
          "🌧It's raining $KNC on KyberSwap for @dypfinance $DYP! <br/><br> 💰Phase 2: $100K for DYP-WAVAX liquidity providers <br/><br/> 👉🏽Tue 11 Jan, 9.30pm GMT+8 <br/> <br/> ➡️Details: <a href ='https://bit.ly/3fikKjr' target ='_blank'>bit.ly/3fikKjr</a> <br/><br/>",
      },
    },
    {
      date: "10",
      id: 8,
      month: "May",
      title: "New smart contract for DYP staking!",
      link: "https://twitter.com/dypfinance/status/1524075021379022848",
      imageSrc:
        "https://pbs.twimg.com/media/FSKsEt2XMAA-ZUX?format=jpg&name=medium",
      year: "2022",
      content: {
        imageSrc:
          "https://pbs.twimg.com/media/FSKsEt2XMAA-ZUX?format=jpg&name=medium",
        title: "New smart contract for DYP staking!",
        content:
          'The game has changed! ⤵️ <br/><br> 💰 Stake your #DYP and earn 25% APR in #ETH, #AVAX or #BNB. <br/><br/>This new smart contract is available on all blockchains: ETH, BSC & C-CHAIN 👉🏽 no impermanent loss. <br/><br/>It all starts today! ⚡️<br/><br/>🔛<a href="https://dyp.finance/stakev2" target="_blank">dyp.finance/stakev2</a>',
      },
    },
    {
      date: "14",
      id: 9,
      month: "Apr",
      title: "Gate.io support for DYP on BNB Chain and C-CHAIN!",
      link: "https://twitter.com/dypfinance/status/1514627082025852936",
      imageSrc:
        "https://pbs.twimg.com/media/FQUJHzJXEA0kQ7h?format=jpg&name=medium",

      year: "2022",
      content: {
        imageSrc:
          "https://pbs.twimg.com/media/FQUJHzJXEA0kQ7h?format=jpg&name=medium",
        title: "Gate.io support for DYP on BNB Chain and C-CHAIN!",
        content:
          "Now check this out! 🔊 <br/><br> Starting from today you can trade $DYP on Gate.io also on #BSC/BEP20 and #AVAX/C-CHAIN - no bridge required. 💥 <br/><br/>And this is only the beginning! 🚀",
      },
    },
    {
      date: "4",
      id: 10,
      month: "Mar",
      title: "March - DYP Vault is ready for action!",
      link: "https://twitter.com/dypfinance/status/1499761913001136136",
      imageSrc:
        "https://pbs.twimg.com/media/FNA4t82WUAUfX9z?format=jpg&name=medium",

      year: "2022",
      content: {
        imageSrc:
          "https://pbs.twimg.com/media/FNA4t82WUAUfX9z?format=jpg&name=medium",
        title: "March - DYP Vault is ready for action!",
        content:
          "📢 It's official! ⚡️ #DYP Vault is ready for action. <br/><br> 🔥 Check out our contracts with no lock time, deposit your #crypto and let us do the rest. 🚀 <br/><br/> 👉<a href='https://dyp.finance/vault-new' target='_blank'><u>dyp.finance/vault-new</u><a/><br/><br/>👏 Doing #crypto is easy with $DYP!",
      },
    },
    {
      date: "15",
      id: 11,
      month: "Dec",
      title: "Staking, Farming, and Buyback V2 ETH",
      link: "https://twitter.com/dypfinance/status/1471162808041713665",
      imageSrc:
        "https://miro.medium.com/max/1400/1*uQCbsnPYwQdlQ8Wdtrgojg.jpeg",
      year: "2021",
      content: {
        imageSrc:
          "https://miro.medium.com/max/1400/1*uQCbsnPYwQdlQ8Wdtrgojg.jpeg",
        title: "Staking, Farming, and Buyback V2 ETH",
        content:
          "We are excited to announce that the new pools for staking, buyback, and farming have been launched on #Ethereum <br/><br> Join staking if you are holding #DYP or buyback & farming if you are holding WETH, WBTC, USDC, USDT, LINK or #iDYP and earn #ETH as rewards👇<br/><br/>  <a href ='https://dyp.finance/earnv2' target ='_blank'><u>dyp.finance/earnv2</u></a>",
      },
    },
    {
      date: "08",
      id: 12,
      month: "Dec",
      title: "Staking, Farming, and Buyback V2 AVAX",
      link: "https://twitter.com/dypfinance/status/1468652091799482378",
      imageSrc:
        "https://miro.medium.com/max/1400/1*edJgopIexXunb7eiy4KTvA.jpeg",
      year: "2021",
      content: {
        imageSrc:
          "https://miro.medium.com/max/1400/1*edJgopIexXunb7eiy4KTvA.jpeg",
        title: "Staking, Farming, and Buyback V2 AVAX",
        content:
          "We are excited to announce that the new pools for staking, buyback, and farming have been launched on #Avalanche <br/><br> Join staking if you are holding #DYP or buyback & farming if you are holding #AVAX, USDC, WETH, #PNG, or WBTC, and earn #AVAX as rewards👇 <br/><br/>  <a href ='https://dyp.finance/earnv2' target ='_blank'><u>dyp.finance/earnv2</u></a>",
      },
    },
    {
      date: "20",
      id: 13,
      month: "Nov",
      title: "Staking, Farming, and Buyback V2 BSC",
      link: "https://twitter.com/dypfinance/status/1462032099708391428",
      imageSrc:
        "https://miro.medium.com/max/1400/1*5hnErea6YNBD8id8I5cm2A.jpeg",
      year: "2021",
      content: {
        imageSrc:
          "https://miro.medium.com/max/1400/1*5hnErea6YNBD8id8I5cm2A.jpeg",
        title: "Staking, Farming, and Buyback V2 BSC",
        content:
          "We are excited to announce that the new pools for staking, buyback, and farming have been launched on #BinanceSmartChain <br/><br> Join staking if you are holding #DYP or buyback & farming if you are holding WBNB, BTCB, ETH, BUSD, CAKE and earn #BNB as rewards👇 <br/><br/>  <a href ='https://dyp.finance/earnv2' target ='_blank'>dyp.finance/earnv2</a>",
      },
    },
    {
      date: "5",
      id: 14,
      month: "Oct",
      title: "It's raining $DYP + $KNC!",
      link: "https://twitter.com/KyberNetwork/status/1445210348944912388",
      imageSrc: "https://miro.medium.com/max/1400/1*iM7ctAGi7pD0k_MmMuUWjg.png",
      year: "2021",
      content: {
        imageSrc:
          "https://miro.medium.com/max/1400/1*iM7ctAGi7pD0k_MmMuUWjg.png",
        title: "It's raining $DYP + $KNC!",
        content:
          "🌧It's raining $DYP + $KNC! <br/><br> @dypfinance and Kyber are enhancing $DYP liquidity on KyberDMM DEX - the best venue for LPs to deposit and earn! <br/><br/>  💰$300K for DYP-WAVAX liquidity providers! <br/><br/> Details: <a href='' target='_blank'>DeFi Yield Protocol Enhances DYP Token Liquidity on Avalanche with KyberSwap!</a> <br/><br/> Visit: <a href='https://dmm.exchange/#/about' target='_blank'>dmm.exchange/#/about</a>",
      },
    },
    {
      date: "21",
      id: 15,
      month: "Sep",
      title: "DeFi Yield Protocol $DYP is coming to @0xPolygon!",
      link: "https://twitter.com/dypfinance/status/1440337326077472771",
      imageSrc: "https://miro.medium.com/max/1400/1*nYEM2TrjWAzBTxc-sNATUg.png",
      year: "2021",
      content: {
        imageSrc:
          "https://miro.medium.com/max/1400/1*nYEM2TrjWAzBTxc-sNATUg.png",
        title: "DeFi Yield Protocol $DYP is coming to @0xPolygon!",
        content: `<i>This integration enables DeFi users to benefit from DeFi Yield Protocol’s unique products while taking advantage of Polygon’s full-stack scaling solution, and application performance.</i><br/><br/>
        The team at DeFi Yield Protocol is continuing to explore ways of making the ecosystem bigger and better through adding more promising blockchain networks. DeFi Yield Protocol currently supports the Ethereum, Binance Smart Chain, and Avalanche networks. <br/><br/>
        Today marks yet another level of expansion for our DeFi ecosystem, as we’re expanding to Polygon to implement its network and technology on the DeFi Yield Protocol.<br/><br/>
        DeFi Yield Protocol’s expansion to Polygon is set for completion in November 2021 and will initially launch with five products: DYP Farming, DYP Staking, DYP Buyback, DYP Tools, and DYP NFTs.<br/><br/>
        <a href='https://tools.dyp.finance/' target='_blank'><u>DYP Tools</u> </a>provides advanced features, such as Decentralized Score, Unique Community Trust Vote System, DYP Locker, Yield Farm Data, and LaunchPad. This integration allows users to make informed decisions.<br/><br/>
        <a href='https://nft.dyp.finance/' target='_blank'><u>DYP NFTs</u> </a>will be a marketplace that allows artists to mint, trade, feature and sell their creative work to the network of users on Polygon with low fees, and application performance.<br/><br/>
        <b>About DYP’s Anti-Manipulation feature</b><br/><br/>
        DeFi Yield Protocol (DYP) works to curb the influence of large whale users. The protocol employs an anti-manipulation feature that aims to limit the market impact on users.<br/><br/>
        Anti-manipulation aims to maintain stability, fair access to liquidity, and provide a secure and simplified DeFi platform for users of all sizes.<br/><br/>
        <b>Polygon Overview</b><br/><br/>
        Polygon (formerly known as Matic Network) is a protocol and framework that enhances the building of and interconnectivity between Ethereum and other compatible networks. Its full-stack scaling solution provides more efficient payment and lending solutions, token swaps, and application performance.<br/><br/>
        It was mainly designed to attract users to its platform by solving the inefficiencies experienced by users and developers on Ethereum by offering superior user experience and security.<br/><br/>
        Polygon operates using a Proof-of-Stake (PoS) Commit Chain mechanism to help increase adoption for Ethereum and has already attracted over 500 dApps to its growing ecosystem. These special chains operate as transaction networks and work alongside blockchains to confirm clusters of transactions before transferring data back to the main chain.<br/><br/>
        MATIC is the protocol’s native token that helps power and secure the underlying network, while also serving as the main form of payment for transaction fees and access for developers to build dApps.<br/><br/>
        <b>About Polygon</b><br/><br/>
        <b><a href='https://polygon.technology/' target='_blank'><u>Polygon</u></a>is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development.</b>Its core component is Polygon SDK, a modular, flexible framework that supports <b>building and connecting</b> Secured Chains like Optimistic Rollups, zkRollups, Validium, etc, and Standalone Chains like Polygon POS, designed for flexibility and independence. Polygon’s scaling solutions have seen widespread adoption with 500+ Dapps, ~567M+ txns, and ~6M+ daily txns.<br/><br/>
        If you’re an Ethereum Developer, you’re already a Polygon developer! Leverage Polygon’s fast and secure txns for your Dapp, get started <a href='https://docs.polygon.technology/' target='_blank'><u>here.</u></a><br/><br/>
        <b><a href='https://polygon.technology/' target='_blank'><u>Website</u></a>|<a href='https://twitter.com/0xPolygon/' target='_blank'><u>Twitter</u></a>|<a href='https://twitter.com/0xPolygontech' target='_blank'><u>Ecosystem Twitter</u> </a>|<a href='https://twitter.com/_PolygonStudios' target='_blank'> <u>Studios Twitter</u> </a>|<a href='https://www.reddit.com/r/0xpolygon/' target='_blank'> <u>Reddit</u> </a>|<a href='https://discord.com/invite/XvpHAxZ' target='_blank'> <u>Discord</u> </a>|<a href='https://t.me/polygonofficial' target='_blank'> <u>Telegram</u> </a>|<a href='https://www.instagram.com/0xpolygon/' target='_blank'> <u>Instagram</u> </a></b><br/><br/>
        <b>About DeFi Yield Protocol</b><br/><br/>
        The DeFi Yield Protocol (DYP) is a unique platform offering solutions for yield farming, staking, NFTs, and enabling users to leverage the advanced trading tools of the DYP. What makes the DYP a unique yield farming aggregator?<br/><br/>
        The DYP has made history in the DeFi space by becoming the first and only protocol that employs an anti-manipulation feature, aiming to limit the market impact on users.<br/><br/>
        Anti-manipulation targets to keep stability, fair access to liquidity, and supply a secure and simplified DeFi platform for users of all sizes.<br/><br/>
        The central feature of the DYP is the decentralized tool dashboard. It provides advanced features, including Decentralized Score, Unique Community Trust Vote System, DYP Locker, Yield Farm Data, and Launch Pad, allowing users to make informed decisions.<br/><br/>
        <b><a href='https://dyp.finance/' target='_blank'><u>Website</u></a>|<a href='https://t.me/dypannouncements' target='_blank'><u>Announcements</u></a>|<a href='https://discord.com/invite/kYDT6pc' target='_blank'><u>Discord</u> </a>|<a href='https://twitter.com/dypfinance' target='_blank'> <u>Twitter</u> </a>|<a href='https://t.me/dypfinance' target='_blank'> <u>Telegram</u> </a>|<a href='https://github.com/dypfinance' target='_blank'> <u>GitHub</u> </a>|<a href='https://www.youtube.com/channel/UC6Wrn8A-pq79srb9OC-ufXw' target='_blank'> <u>YouTube</u> </a>|<a href='https://www.instagram.com/dyp.finance/' target='_blank'> <u>Instagram</u> </a></b><br/><br/>

        `,
      },
    },
    {
      date: "10",
      id: 16,
      month: "Sep",
      title: "DeFi Yield Protocol (DYP) is on DeFi Pulse!",
      link: "https://twitter.com/defipulse/status/1436388557896159235",
      imageSrc: "https://dyp.finance/img/defipulse.png",
      year: "2021",
      content: {
        imageSrc: "https://dyp.finance/img/defipulse.png",
        title: "DeFi Yield Protocol (DYP) is on DeFi Pulse!",
        content:
          "🎊🎊NEW LISTING 🎊🎊<br/><br> @dypfinance anis now listed in our #DeFi rankings at #120 with $198k Total Value Locked <a href='https://www.defipulse.com/address-tag/defi-yield-protocol' target='_blank'><u>DeFi Pulse</u></a> <br/><br/>  DeFi Yield Protocol (DYP) is a platform that offers solutions for yield farming, staking, NFTs, and trading tools.",
      },
    },
    {
      date: "11",
      id: 17,
      month: "Aug",
      title: "DeFi Yield Protocol will be integrated with Coin98 Wallet!",
      link: "https://twitter.com/dypfinance/status/1425400583012425730?s=20",
      imageSrc:
        "https://miro.medium.com/max/1400/1*gimouGn5M4Mp6t8opTsNLw.jpeg",
      year: "2021",
      content: {
        imageSrc:
          "https://miro.medium.com/max/1400/1*gimouGn5M4Mp6t8opTsNLw.jpeg",
        title: "DeFi Yield Protocol will be integrated with Coin98 Wallet!",
        content: `We’re excited to announce that <a href='https://dyp.finance/' target='_blank'><u>DeFi Yield Protocol</u></a> will be integrated with <a href='https://coin98.com/' target='_blank'><u>Coin98 Wallet</u></a>, a non-custodial wallet used to store, manage, trade, swap multi-chain, multi-source digital assets.<br/><br/>
        <a href='https://coin98.com/' target='_blank'><u>Coin98 Wallet</u></a> is now one of the supported wallets on <a href='https://dyp.finance/' target='_blank'><u>DeFi Yield Protocol</u></a>, enabling users to add liquidity to DeFi Yield Protocol’s <a href='https://dyp.finance/earn' target='_blank'><u>farming pools</u></a> as well as easily trade with the high speed, low fee advantages of the Avalanche, Binance Smart Chain or Ethereum Network. The <a href='https://dyp.finance/earn' target='_blank'><u>Stake</u></a>, <a href='https://dyp.finance/earn' target='_blank'><u>Buyback</u></a> and <a href='https://dyp.finance/earn' target='_blank'><u>Vault</u></a> products on DeFi Yield Protocol
         are also available for all <a href='https://coin98.com/' target='_blank'><u>Coin98 Wallet</u></a> users to access. Also, <a href='https://tools.dyp.finance/' target='_blank'><u>DYP Tools</u></a> (a decentralized tool dashboard that provides advanced features, such as Decentralized Score, Unique Community Trust Vote System, DYP Locker, Yield Farm Data, and LaunchPad, allowing users to make informed decisions) and <a href='https://nft.dyp.finance/' target='_blank'><u>NFT dApp</u></a> (the NFT dApp by Defi Yield Protocol acts as a marketplace and a gallery where users can mint, buy, sell and trade NFTs for a fixed price) are available for all <a href='https://coin98.com/' target='_blank'><u>Coin98 Wallet</u></a> users. <br/><br/>
        We believe that this integration will drive more users to explore various opportunities and offerings of the <a href='https://dyp.finance/' target='_blank'><u>DeFi Yield Protocol</u></a> Ecosystem.<br/><br/>
        <a href='https://coin98.com/' target='_blank'><u>Coin98 Wallet</u></a> is also integrating DeFi Yield Protocol into the dApp Browser for both iOS and Android users. Also, the Coin98 users will be able to easily trade, hold and make use of DeFi Yield Protocol token with Coin98 Wallet. <br/><br/>
        <b>About DeFi Yield Protocol</b><br/><br/>
        The DeFi Yield Protocol (DYP) is a unique platform offering solutions for yield farming, staking, NFTs, and enabling users to leverage the advanced trading tools of the DYP. What makes the DYP a unique yield farming aggregator?<br/><br/>
        The DYP has made history in the DeFi space by becoming the first and only protocol that employs an anti-manipulation feature, aiming to limit the market impact on users.<br/><br/>
        Anti-manipulation targets to keep stability, fair access to liquidity, and supply a secure and simplified DeFi platform for users of all sizes.<br/><br/>
        The central feature of the DYP is the decentralized tool dashboard. It provides advanced features, including Decentralized Score, Unique Community Trust Vote System, DYP Locker, Yield Farm Data, and Launch Pad, allowing users to make informed decisions.<br/><br/>
        <b><a href='https://dyp.finance/' target='_blank'><u>Website</u></a>|<a href='https://t.me/dypannouncements' target='_blank'><u>Announcements</u></a>|<a href='https://discord.com/invite/kYDT6pc' target='_blank'><u>Discord</u> </a>|<a href='https://twitter.com/dypfinance' target='_blank'> <u>Twitter</u> </a>|<a href='https://t.me/dypfinance' target='_blank'> <u>Telegram</u> </a>|<a href='https://github.com/dypfinance' target='_blank'> <u>GitHub</u> </a>|<a href='https://www.youtube.com/channel/UC6Wrn8A-pq79srb9OC-ufXw' target='_blank'> <u>YouTube</u> </a></b><br/><br/>
        <b>About Coin98 Wallet</b>
        Coin98 Wallet is a non-custodial wallet used to store, manage, trade, swap multi-chain, multi-source digital assets. It supports the most popular chains, including Ethereum, Binance Smart Chain, Solana, Polkadot, Kusama, HECO Chain, Near, Avalanche X-Chain & C-Chain, Celo, BandChain, Kava, Terra, Cosmos, ThorChain, Fantom, Polygon, Persistence, XDai, Kardiachain, Ronin. Coin98 Wallet has both the Mobile App and the Extension version that act as a gateway, connecting users to the DeFi world.<br/><br/>
        <b><a href='https://apps.apple.com/us/app/coin98-wallet/id1561969966' target='_blank'><u>iOS</u></a>|<a href='https://play.google.com/store/apps/details?id=coin98.crypto.finance.media' target='_blank'><u>Android</u></a>|<a href='https://chrome.google.com/webstore/detail/coin98-wallet/aeachknmefphepccionboohckonoeemg' target='_blank'><u>Extension</u> </a>|<a href='https://twitter.com/coin98_wallet' target='_blank'> <u>Twitter</u> </a>|<a href='https://coin98.com/wallet' target='_blank'> <u>Website</u> </a>|<a href='https://docs.coin98.com/' target='_blank'> <u>Docs</u> </a>|<a href='https://t.me/coin98_wallet' target='_blank'> <u>Telegram</u> </a>|<a href='https://www.facebook.com/groups/676418929362725' target='_blank'> <u>Facebook</u> </a></b><br/><br/>
        `,
      },
    },
    {
      date: "22",
      id: 18,
      month: "Jul",
      title: "DeFi Yield Protocol strategic integration with Aircoins.io",
      link: "https://dypfinance.medium.com/defi-yield-protocol-strategic-integration-with-aircoins-io-augmented-reality-app-666209ce08e",
      imageSrc:
        "https://miro.medium.com/max/1400/1*h95JYnco1tuL3IGB0TAjsg.jpeg",
      year: "2021",
      content: {
        imageSrc:
          "https://miro.medium.com/max/1400/1*h95JYnco1tuL3IGB0TAjsg.jpeg",
        title: "DeFi Yield Protocol strategic integration with Aircoins.io",
        content: `<a href='https://dyp.finance/' target='_blank'><u>DeFi Yield Protocol</u></a> has entered the metaverse! With the vision to get DYP out to more people we have successfully integrated DYP token to Aircoins.io Augmented Reality App. Players will be able to earn DYP tokens in Augmented Reality (AR) around the world. A global treasure hunt with DYP in AR, bringing adoption to blockchain and decentralized finance through mobile gaming.<br/><br/>
        More than 2 Billion people around the world play mobile games. It is estimated that by the end of 2022 app gaming revenues will reach $125B. In the chart see top world revenue generating game apps. Popular AR mobile game Pokémon Go alone has generated $5B in sales.<br/><br/>
        Aircoins.io is currently the largest coin Augmented Reality AR App in the world with +30 Million digital AR experiences since launch in 2017. Customizable geo-based treasure hunts allowing DYP benefits to be distributed in AR all round the world!<br/><br/>
        Aircoins is targeting the mobile gaming market as it is estimated to reach $180 billion by 2022 and digital advertising to reach $244 Billion by 2022. According to Infoholic Research, the “AR Gaming Market” is expected to reach $284.93 billion by 2023, growing at a CAGR of 152.7% during the forecast period 2017–2023.<br/><br/>
        What really differentiates Aircoins is that our game assets are backed on the blockchain compared to most other games where the in-game currencies and collectibles are fully centralized, and assets are lost when game version are updated or not cross compatible with other consoles.<br/><br/>
        •The Aircoins App has been in the App stores since 2017<br/><br/>
        •More than 70,000 active users and 800,000 Map requests a month<br/><br/>
        •Aircoins integrates Blockchain technology to take advantage of Bitcoin, Ethereum and NFT markets<br/><br/>
        Blockchain technology can create a modern age in gaming and to encourage real market acceptance. Blockchain recently became a movement that fuels creativity, allows faster global adoption with allow for alternative decentralized finance capabilities.
        <b>About DeFi Yield Protocol</b><br/><br/>
        The DeFi Yield Protocol (DYP) is a unique platform offering solutions for yield farming, staking, NFTs, and enabling users to leverage the advanced trading tools of the DYP. What makes the DYP a unique yield farming aggregator?<br/><br/>
        The DYP has made history in the DeFi space by becoming the first and only protocol that employs an anti-manipulation feature, aiming to limit the market impact on users.<br/><br/>
        Anti-manipulation targets to keep stability, fair access to liquidity, and supply a secure and simplified DeFi platform for users of all sizes.<br/><br/>
        The central feature of the DYP is the decentralized tool dashboard. It provides advanced features, including Decentralized Score, Unique Community Trust Vote System, DYP Locker, Yield Farm Data, and Launch Pad, allowing users to make informed decisions.<br/><br/>
        <b><a href='https://dyp.finance/' target='_blank'><u>Website</u></a>|<a href='https://t.me/dypannouncements' target='_blank'><u>Announcements</u></a>|<a href='https://discord.com/invite/kYDT6pc' target='_blank'><u>Discord</u> </a>|<a href='https://twitter.com/dypfinance' target='_blank'> <u>Twitter</u> </a>|<a href='https://t.me/dypfinance' target='_blank'> <u>Telegram</u> </a>|<a href='https://github.com/dypfinance' target='_blank'> <u>GitHub</u> </a>|<a href='https://www.youtube.com/channel/UC6Wrn8A-pq79srb9OC-ufXw' target='_blank'> <u>YouTube</u> </a></b><br/><br/>
        <b>About Aircoins</b><br/><br/>
        There’s no easier way for someone to get involved in cryptocurrency than by downloading Aircoins. It’s a fun and interactive way to learn about various cryptocurrency projects in the space. Merging cryptocurrency with mobile gaming, augmented reality and digital advertising, players are incentivized by collecting digital assets.<br/>
        We have a very enthusiastic community that genuinely enjoys finding & collecting coins on our platform. What’s even more encouraging is the amazing photos and testimonials we receive from users all around the world.
        <b><a href='https://www.aircoins.io/' target='_blank'><u>Website</u></a>|<a href='https://play.google.com/store/apps/details?id=com.aircoinscorp.aircoins' target='_blank'><u>Download Android App </u></a>|<a href='https://apps.apple.com/us/app/aircoins-treasure-hunt-in-ar/id1411209889?ls=1' target='_blank'><u>Download Apple iOS App </u> </a>|<a href='https://twitter.com/Aircoins_App' target='_blank'> <u>Twitter</u> </a>|<a href='https://t.me/aircoins' target='_blank'> <u>Telegram</u> </b><br/><br/>

        `,
      },
    },
    {
      date: "14",
      id: 19,
      month: "Jul",
      title: "Pangolin partners with DeFi Yield Protocol (DYP)",
      link: "https://dypfinance.medium.com/pangolin-partners-with-defi-yield-protocol-dyp-a-unique-cross-chain-platform-b52b7e93e0a9",
      imageSrc:
        "https://miro.medium.com/max/1400/1*e2gdKr1KM3QlpGPewZu-gw.jpeg",
      year: "2021",
      content: {
        imageSrc:
          "https://miro.medium.com/max/1400/1*e2gdKr1KM3QlpGPewZu-gw.jpeg",
        title: "Pangolin partners with DeFi Yield Protocol (DYP)",
        content: `As a premier DEX on Avalanche Network, Pangolin strives to build partnerships with platforms across all blockchain networks. Therefore we are excited to announce our partnership with DeFi Yield Protocol (DYP), a cross-chain yield farming and DeFi platform. <br/><br/>
        The DeFi Yield Protocol (DYP) is a unique platform that offers solutions for yield farming, staking, and enabling users to leverage the advanced trading tools of the DYP. DeFi Yield Protocol offers Farming, Staking, NFT Marketplace, and a custom bridge. DYP originated on Ethereum, expanded to Binance Smart Chain, and is now looking to build on Avalanche Network. <br/><br/>
        With our partnership with DeFi Yield Protocol, Pangolin is excited to work together to bring users and liquidity from other networks onto Avalanche and into Pangolin. The AVAX/DYP pair in Pangolin already has over $500k in liquidity just one week after DYP launched their app on Avalanche. Also, by launching DYP Tools that provide advanced features, such as Decentralized Score, Unique Community Trust Vote System, DYP Locker, Yield Farm Data, and LaunchPad, we allow users to make informed decisions.<br/><br/>
        In the near future, Pangolin will partner with more projects and platforms that are making an impact in the DeFi space.<br/><br/>
        <b>About DeFi Yield Protocol</b><br/><br/>
        The DeFi Yield Protocol (DYP) is a unique platform that offers solutions for yield farming, staking, and enabling users to leverage the advanced trading tools of the DYP.<br/><br/>
        The core feature of the DYP is the decentralized tool dashboard (DYP Tools). It provides advanced features, such as Decentralized Score, Unique Community Trust Vote System, DYP Locker, Yield Farm Data, and LaunchPad, allowing users to make informed decisions.<br/><br/>
        <b><a href='https://dyp.finance/' target='_blank'><u>Website</u></a>|<a href='https://t.me/dypannouncements' target='_blank'><u>Announcements</u></a>|<a href='https://discord.com/invite/kYDT6pc' target='_blank'><u>Discord</u> </a>|<a href='https://twitter.com/dypfinance' target='_blank'> <u>Twitter</u> </a>|<a href='https://t.me/dypfinance' target='_blank'> <u>Telegram</u> </a>|<a href='https://github.com/dypfinance' target='_blank'> <u>GitHub</u> </a>|<a href='https://www.youtube.com/channel/UC6Wrn8A-pq79srb9OC-ufXw' target='_blank'> <u>YouTube</u> </a></b><br/><br/>
        <b>About Pangolin Exchange</b><br/><br/>
        Pangolin Exchange is a community-driven decentralized exchange (DEX) with fast-settlement, low fees, and a democratic process. Built on the Avalanche Network. Pangolin brings you the best trading opportunities.
        <b><a href='https://pangolin.exchange/' target='_blank'><u>Website</u></a>|<a href='https://twitter.com/pangolindex' target='_blank'><u>Twitter</u></a>|<a href='https://discord.com/invite/PARrDYYbfw' target='_blank'><u>Discord</u></a>|<a href='https://github.com/pangolindex' target='_blank'><u>GitHub</u></a>|<a href='https://pangolin.exchange/litepaper/' target='_blank'><u>Documentation</u></a>|<a href='https://t.me/pangolindex' target='_blank'><u>Telegram</u></a>|<a href='https://www.linkedin.com/company/74288656/admin/' target='_blank'><u>LinkedIn</u></a>|<a href='https://www.reddit.com/r/PangolinExchange/' target='_blank'><u>Reddit</u></a>|<a href='https://www.youtube.com/channel/UClJJTG4FRL4z3AOf-ZWXZLw' target='_blank'><u>YouTube</u></a></b>
        `,
      },
    },
    {
      date: "08",
      id: 20,
      month: "Jul",
      title: "DeFi Yield Protocol Avalanche Bridge Tutorial",
      link: "https://dypfinance.medium.com/defi-yield-protocol-avalanche-bridge-tutorial-9404d827a4a",
      imageSrc: "https://dyp.finance/img/avalanche.jpg",
      year: "2021",
      content: {
        imageSrc: "https://dyp.finance/img/avalanche.jpg",
        title: "DeFi Yield Protocol Avalanche Bridge Tutorial",
        content: `The Bridge will help you swap DYP tokens between Ethereum Network and Avalanche Network. In this tutorial I will show you the exact steps for swapping DYP tokens from Ethereum Network to Avalanche Network.<br/><br/>
        1. You need to visit <a href='https://avax-bridge.dyp.finance/' target='_blank'><u>https://avax-bridge.dyp.finance/</u></a><br/>
        2. Now, you should click ‘’CONNECT WALLET’’ and log into your MetaMask wallet.<br/>
        <img src='https://miro.medium.com/max/1400/1*qRrSIYWtrtVXdBXniUsBFg.jpeg' alt=''/><br/>
        3.  You need to choose Ethereum Network from the MetaMask menu.<br/>
        <img src='https://miro.medium.com/max/1400/1*QVyexomoQYU4DqAGLgGeeA.jpeg' alt=''/> <br/>
        4.  Now, you need to input the amount of tokens that you want to swap from Ethereum to Avalanche Network. In my case, it will be 1 DYP tokens. Next, you need to click Approve and wait for the transaction to be confirmed. Once the transaction is confirmed, you need to click Deposit and again wait for the transaction to be confirmed.<br/>
        <img src='https://miro.medium.com/max/1400/1*NpYd9_j_JFD6lz9zg3lePg.jpeg' alt =''/> <br/>
        5.  After the deposit is confirmed, you will get your transaction hash for the deposit. After 12 confirmations on the Ethereum Network, you will be able to withdraw the DYP tokens to your Avalanche Wallet.<br/><br/>
        <i>Note:</i>For the Avalanche wallet you will have the same public address like the one from the Ethereum Network, that means you will use the same MetaMask wallet and withdraw the tokens to the same public address.<br/>
        <img src='https://miro.medium.com/max/1400/1*GuF4wHdMCNyvZxu4c2BeDw.jpeg' alt =''/> <br/>
        6.  Now, you need to change the Network from Ethereum to AVAX in order to complete the swap.<br/>
        <img src='https://miro.medium.com/max/1400/1*gNcEuggt0gCKQtiKhFGG5g.jpeg' alt =''/> <br/>
        7.  After you have changed the network you need to wait for the transaction to be confirmed and click withdraw.<br/>
        <img src='https://miro.medium.com/max/1400/1*B6oBxskkZ6RqZZGJagMdUw.jpeg' alt =''/> <br/>
        8.  Once the transaction has been confirmed on Ethereum Network, the WITHDRAW button will be enabled.<br/>
        <img src='https://miro.medium.com/max/1400/1*dSzMb-FmmpkEmwyuY9nFdQ.jpeg' alt =''/> <br/>
        9.  You need to click WITHDRAW and confirm the transaction in order to receive the DYP tokens on your Avalanche wallet. Once the transaction has been confirmed on Avalanche Network, you will be able to see the tokens on your balance.<br/>
        <img src='https://miro.medium.com/max/1400/1*sN12atazT_2llpLb6TBTZA.jpeg' alt =''/> <br/><br/>
        <i>Note</i><br/><br/>
        •We recommend on saving the transaction hash in case you have network issues, to be able to make the withdraw later.<br/><br/>
        •Please note that the maximum amount that you can swap per wallet every 24 hours is maximum 10,000 DYP tokens.<br/><br/>
        •In order to swap DYP tokens from the Avalanche to the Ethereum Network, you need to follow the same steps.<br/><br/>
        <b>About DeFi Yield Protocol</b><br/><br/>
        The DeFi Yield Protocol (DYP) is a unique platform offering solutions for yield farming, staking, NFTs, and enabling users to leverage the advanced trading tools of the DYP. What makes the DYP a unique yield farming aggregator?<br/><br/>
        The DYP has made history in the DeFi space by becoming the first and only protocol that employs an anti-manipulation feature, aiming to limit the market impact on users.<br/><br/>
        Anti-manipulation targets to keep stability, fair access to liquidity, and supply a secure and simplified DeFi platform for users of all sizes.<br/><br/>
        The central feature of the DYP is the decentralized tool dashboard. It provides advanced features, including Decentralized Score, Unique Community Trust Vote System, DYP Locker, Yield Farm Data, and Launch Pad, allowing users to make informed decisions.<br/><br/>
        <b><a href='https://dyp.finance/' target='_blank'><u>Website</u></a>|<a href='https://t.me/dypannouncements' target='_blank'><u>Announcements</u></a>|<a href='https://discord.com/invite/kYDT6pc' target='_blank'><u>Discord</u> </a>|<a href='https://twitter.com/dypfinance' target='_blank'> <u>Twitter</u> </a>|<a href='https://t.me/dypfinance' target='_blank'> <u>Telegram</u> </a>|<a href='https://github.com/dypfinance' target='_blank'> <u>GitHub</u> </a>|<a href='https://www.youtube.com/channel/UC6Wrn8A-pq79srb9OC-ufXw' target='_blank'> <u>YouTube</u> </a></b><br/><br/>
       
        `,
      },
    },
    {
      date: "05",
      id: 21,
      month: "Jul",
      title: "Getting Started with the DeFi Yield Protocol NFT Marketplace",
      link: "https://dypfinance.medium.com/getting-started-with-the-defi-yield-protocol-nft-marketplace-a518356f47f",
      imageSrc:
        "https://miro.medium.com/max/1400/1*qnQkO4ajXw33Ox7PLSV77w.jpeg",
      year: "2021",
      content: {
        imageSrc:
          "https://miro.medium.com/max/1400/1*qnQkO4ajXw33Ox7PLSV77w.jpeg",
        title: "Getting Started with the DeFi Yield Protocol NFT Marketplace",
        content: `<a href='https://nft.dyp.finance/'><u>DeFi Yield Protocol’s NFT Marketplace</u></a> is a new platform for creators and collectors to mint and trade NFTs. Everyone can now create non-fungible tokens and experience the benefits of unique, digital ownership rights on the Ethereum network. All it takes is a few minutes of your time, a small fee, and something you feel is worth transforming it into an NFT.<br/><br/>
        NFTs are the collectible cards of today’s world. Instead, they are unique and exist on the blockchain. With the rise in the popularity of NFTs, every blockchain project wants to add an NFT marketplace to its platform. However, creating a thriving NFT marketplace requires robust integration with an underlying protocol.<br/><br/>
        DeFi Yield Protocol has launched its new NFT Marketplace to help any user (artist or not) mint and sell their works of art.<br/><br/>
        <b>What is the DeFi Yield Protocol NFT Marketplace?</b><br/><br/>
        <a href='https://nft.dyp.finance/'><u>DeFi Yield Protocol’s NFT Marketplace</u></a> is a platform that allows you to trade and create non-fungible tokens. You can mint your own NFTs on Ethereum, soon it is also going to be available on Avalanche and Binance Smart Chain. The users will be able to even transfer between the blockchains. Collectors can buy NFTs from its inbuilt marketplace for a fixed price, later also the auction will be available. The lower transaction costs and the environmentally friendly approach of the DYP’s NFT dApp distinguish it from other dApps. When you sell the collectible on the marketplace, you will be charged a 0.30% payment.<br/><br/>
        <b>How to create your own NFT</b><br/><br/>
        One of the most exciting features for creators on the DeFi Yield Protocol NFT marketplace is minting non-fungible tokens. Although other platforms let you create NFTs, DeFi Yield Protocol is one of the easiest and cheapest platforms allowing you to quickly mint non-fungible tokens.
Within five minutes, you can have your collectibles live and ready to trade. You can also deposit and withdraw the tokens to a compatible wallet or another marketplace.<br/><br/>
Before you can start creating, buying, or selling NFTs on <a href='https://nft.dyp.finance/'><u>DeFi Yield Protocol’s NFT Marketplace</u></a>, you’ll need to open a MetaMask wallet. If you already have a wallet on MetaMask, there’s no need to open a new one. You’ll also need some cryptocurrency on the MetaMask wallet (DYP and ETH) if you want to create or purchase NFTs.<br/><br/>
<b>Minting an NFT</b><br/><br/>
Begin by clicking on the [Connect Wallet] from the <a href='https://nft.dyp.finance/'><u>DeFi Yield Protocol’s NFT Marketplace</u></a> homepage<br/><br/>
<img src='https://miro.medium.com/max/1400/1*aoukc4A8nP70_rdIcfNFwA.jpeg' alt=''/> <br/>
Continue by clicking on the [Create NFT] from the DeFi Yield Protocol NFT Marketplace homepage.<br/>
<img src='https://miro.medium.com/max/1400/1*4yYB16EuTSRtcCThPCCDgg.jpeg' alt=''/> <br/>
After uploading the image, gif, or file you want to turn into an NFT, you can start filling in your non-fungible token’s details like:<br/>
-Name<br/>
- Description<br/>
- Categories<br/>
Make sure you have enough DYP and ETH for the fee and click [Create]. You will need 10 DYP tokens and some ETH for the Ethereum network fees.<br/>
<img src='https://miro.medium.com/max/1400/1*Xhb-4qJTgxpyQpbkcYPftA.jpeg' alt=''/> <br/>
After you have click Create and confirmed the transaction, you will need to stay on the page; don’t reload or press back button! You will be automatically redirected to your account page once we’ve worked out everything!<br/>
<img src='https://miro.medium.com/max/1400/1*wW-t7e_a9cszPfEllnjHZQ.jpeg' alt=''/> <br/>
After the transaction is confirmed, you will be redirected to your account page. Your NFT has been created, now you need to click List to place the NFT for sale; before we place the NFT for sale, we will update our account page, you can modify:<br/>
- Artist Name<br/>
- Avatar<br/>
- Artist Bio<br/>
<img src='https://miro.medium.com/max/1400/1*LAm_PklfgxPLv8lJwhTjVg.jpeg' alt=''/> <br/>

We have successfully updated our account page and now the users can see the name, avatar, and bio under the seller’s profile. Please note that all these transactions are free of charge, you will just need to sign the transactions.<br/>
<img src='https://miro.medium.com/max/1400/1*Sbag_ybSIbj131GryKyajg.jpeg' alt=''/> <br/>
To sell an NFT, head to your [Collections] and click the NFT you want to list. Click the [List] button to customize your sale.<br/>
<img src='https://miro.medium.com/max/1400/1*Q-DzlRL18iDQc1VlPxNCig.jpeg' alt=''/> <br/>
After you have clicked the [List] button you will choose what cryptocurrency you would like to receive as payment, DYP or ETH. Once you have chosen the selling currency you will then see a [Price] field where you can choose how much you want to sell the NFT for.<br/>
<img src='https://miro.medium.com/max/1400/1*1eV07_L01zkrVuT_uNNClw.jpeg' alt=''/> <br/>
<img src='https://miro.medium.com/max/1400/1*Nh8rck73ybYm3vKfiiZtUw.jpeg' alt=''/> <br/>
Once the transaction has been confirmed you will see the NFT placed for sale in your account and on our Marketplace. Please note that if you want to change the price of the NFT or remove it from sale, you just need to click the [Unlist] button.<br/>
<img src='https://miro.medium.com/max/1400/1*MU2Jjgfd5o_Qwz7jN_vLnQ.jpeg' alt=''/> <br/>
<img src='https://miro.medium.com/max/1400/1*EUUcCjp3eCQg0RHkyFT4yg.jpeg' alt=''/> <br/>
Now that DeFi Yield Protocol offers its own NFT Marketplace, is a monumental achievement for the DYP ecosystem as it will open various opportunities for the artists and the art world.<br/><br/>

<b>About DeFi Yield Protocol</b><br/><br/>
        The DeFi Yield Protocol (DYP) is a unique platform offering solutions for yield farming, staking, NFTs, and enabling users to leverage the advanced trading tools of the DYP. What makes the DYP a unique yield farming aggregator?<br/><br/>
        The DYP has made history in the DeFi space by becoming the first and only protocol that employs an anti-manipulation feature, aiming to limit the market impact on users.<br/><br/>
        Anti-manipulation targets to keep stability, fair access to liquidity, and supply a secure and simplified DeFi platform for users of all sizes.<br/><br/>
        The central feature of the DYP is the decentralized tool dashboard. It provides advanced features, including Decentralized Score, Unique Community Trust Vote System, DYP Locker, Yield Farm Data, and Launch Pad, allowing users to make informed decisions.<br/><br/>
        <b><a href='https://dyp.finance/' target='_blank'><u>Website</u></a>|<a href='https://t.me/dypannouncements' target='_blank'><u>Announcements</u></a>|<a href='https://discord.com/invite/kYDT6pc' target='_blank'><u>Discord</u> </a>|<a href='https://twitter.com/dypfinance' target='_blank'> <u>Twitter</u> </a>|<a href='https://t.me/dypfinance' target='_blank'> <u>Telegram</u> </a>|<a href='https://github.com/dypfinance' target='_blank'> <u>GitHub</u> </a>|<a href='https://www.youtube.com/channel/UC6Wrn8A-pq79srb9OC-ufXw' target='_blank'> <u>YouTube</u> </a></b><br/><br/>
       
        
        `,
      },
    },
    {
      date: "22",
      id: 22,
      month: "Jun",
      title: "DeFi Yield Protocol launches NFT dApp V1",
      link: "https://dypfinance.medium.com/defi-yield-protocol-launches-nft-dapp-v1-a796b19aaabb",
      imageSrc:
        "https://miro.medium.com/max/1400/1*lkIkivLimWQL_eT2pfd64A.jpeg",
      year: "2021",
      content: {
        imageSrc:
          "https://miro.medium.com/max/1400/1*lkIkivLimWQL_eT2pfd64A.jpeg",
        title: "DeFi Yield Protocol launches NFT dApp V1",
        content: `NFTs are the collectible cards of today’s world. Instead, they are unique and exist on the blockchain. With the rise in the popularity of NFTs, every blockchain project wants to add an NFT marketplace to its platform. However, creating a thriving NFT marketplace requires robust integration with an underlying protocol.<br/><br/>
        DeFi Yield Protocol, a decentralized platform with an aim to create a transparent, unbiased, and reliable network, is launching its <a href='https://nft.dyp.finance/' target='_blank'><u>NFT dApp V1</u></a>.<br/><br/>
        <b>About the NFT dApp</b><br/><br/>
        <a href='https://dyp.finance/' target='_blank'><u>DeFi Yield Protocol</u></a> is a Yield Farming protocol that aims to mitigate the whale manipulation found on other platforms. The latest addition of the NFT dApp will add value to the already invaluable ecosystem and provide new use cases for the community.<br/><br/>
        This NFT dApp will be launched on the Ethereum network, which will act as the de-facto platform for artists to trade, mint, sell, buy and auction their unique digital assets. The lower transaction costs and the environmentally friendly approach of the DYP’s <a href='https://nft.dyp.finance/' target='_blank'><u>NFT dApp</u></a> distinguish it from other dApps.<br/><br/>
        This release will be a monumental achievement for the DYP ecosystem as it will open up various opportunities for the artists and the art world.
        <b>The UI of DYP’s NFT dApp</b><br/>
        The NFT dApp by Defi Yield Protocol acts as a marketplace and a gallery where users can mint, buy, sell and trade NFTs for a fixed price. Every NFT will be associated with an image, title, description, ID, and some tags. Users can either search for a particular NFT using the ID or browse in the gallery using the artist’s name and profile picture.<br/><br/>
        The app will contain the following elements:<br/><br/>
        •<b>Marketplace List Page:</b>On this page, all the listings will be displayed along with their price and the option to purchase them.<br/><br/>
        •<b>Create Page:</b>Artists and users can upload their artwork here as a JPG file with the item’s description to create an NFT. By paying the creation fee to the admin wallet, users will be able to see their minted NFTs in their wallets.<br/><br/>
        •<b>My Account Page:</b>My account page will allow the users to see their Ether and NFT balance, the tokens they own or are listed for sale. They can also unlist their tokens here to take them out of the Marketplace List Page.<br/><br/>
        •<b>Non-Fungible Token Details Page:</b>On the marketplace list page, when users click on an NFT, they will be redirected to this page to see all the info about the NFT, such as artists’ name, title, description, etc.<br/><br/><br/>
        <b>The Launch NFT Collection by Nidia Toska</b><br/>
        Prior to the launch of the dApp, DYP has collaborated with <a href='https://www.instagram.com/nidia_art/' target='_blank'><u>Nidia Toska</u></a>, a renowned fashion illustrator and designer, to create the first collection to be listed on the marketplace. <a href='https://www.instagram.com/nidia_art/' target='_blank'><u>Nidia Toska</u></a> is a prominent fashion designer who has worked with celebrities such as Kim Kardashian, Paris Hilton, GQ magazine, and more. Over the years, she has developed an impressive portfolio and is confident with her work.<br/><br/>
        Nidia takes inspiration from what’s happening in the industry and creates a masterpiece loved by everyone. When she is not working on designing a new piece for someone, she spends hours creating illustrations that she shares on her Instagram channel. It was only a hobby for Nidia, but she gained followers when Kim Kardashian reshared a portrait of hers drawn by Nidia.<br/><br/>
        Nidia is so confident that she draws all her artwork freehand on an iPad. Every artwork is unique and cannot be imitated, which makes the NFT collection even more special.<br/><br/><br/>
        <b>About DeFi Yield Protocol</b>
        The <a href='https://dyp.finance/' target='_blank'><u>DeFi Yield Protocol (DYP)</u></a> is a unique platform that allows virtually any user to provide liquidity and uses an anti-manipulation feature.<br/><br/>
        DYP provides various products, and the NFT dApp will be the latest addition to the ecosystem. Apart from that, the company offers:<br/><br/>
        • DYP Vault<br/>
        • DYP Farms<br/>
        • DYP Staking<br/>
        • DYP Referral<br/>
        • DYP Bridge<br/><br/>
        Visit DeFi Yield Protocol’s website for more information about the launch.<br/><br/><br/><br/>
        <b>For more information, please visit us:</b><br/>
        • <a href='https://dyp.finance/' target='_blank'><u>Official website</u></a><br/>
        • <a href='https://github.com/dypfinance' target='_blank'><u>DYP Github</u></a><br/>
        • <a href='https://twitter.com/dypfinance' target='_blank'><u>Twitter</u></a><br/>
        • <a href='https://t.me/dypfinance' target='_blank'><u>Telegram</u></a><br/>
        • <a href='https://t.me/dypannouncements' target='_blank'><u>Telegram Announcements</u></a><br/>
        • <a href='https://discord.com/invite/kYDT6pc' target='_blank'><u>Discord</u></a><br/>

        `,
      },
    },
    {
      date: "22",
      id: 23,
      month: "Jun",
      title: "DeFi Yield Protocol Integrates Chainlink",
      link: "https://dypfinance.medium.com/defi-yield-protocol-integrates-chainlink-price-feeds-to-secure-yield-farming-data-on-ethereum-and-3fe85062a0e5",
      imageSrc:
        "https://miro.medium.com/max/1400/1*lut5I2B3ZEnaIULOfGnDVw.jpeg",
      year: "2021",
      content: {
        imageSrc:
          "https://miro.medium.com/max/1400/1*lut5I2B3ZEnaIULOfGnDVw.jpeg",
        title: "DeFi Yield Protocol Integrates Chainlink",
        content: `We’re excited to announce that DeFi Yield Protocol, a unique platform that allows any user to provide liquidity has integrated <a href='https://data.chain.link/' target='_blank'><u>Chainlink Price Feeds</u></a> on the Ethereum and Binance Smart Chain mainnet. By integrating Chainlink’s industry-leading decentralized oracle network, DeFi Yield Protocol has access to high-quality, tamper-proof price feeds needed to provide the exact value in USD. This will provide our users with strong assurances that all the values are provided in a fully decentralized manner and cannot be manipulated.<br/><br>
        Our initial integration involves the use of the following Chainlink Price Feeds: ETH-USD and BNB-USD. We chose Chainlink as our go-to oracle solution because its infrastructure is seamless to integrate and time-tested in production. Chainlink already secures leading DeFi protocols responsible for billions of dollars in smart contract value, maintaining robust security and high availability even amidst unexpected events, such as exchange downtime, flash crashes, and <a href='https://blog.chain.link/flash-loans/' target='_blank'><u>data manipulation attacks via flash loans.</u></a><br/><br/>
        DeFi Yield Protocol is a unique platform that allows any user to provide liquidity and uses an anti-manipulation feature.<br/><br/>
        The core feature of DeFi Yield Protocol is the decentralized tools dashboard (DYP Tools). DYP Tools provide a liquidity locker for any DeFi project, a unique voting system, and at the same time protect the DeFi community by providing a decentralized trust score for all the DeFi projects.<br/><br/>
        In order to secure our ETH and BNB data values in a decentralized manner, we needed access to fresh asset prices that are supplied directly on-chain in a highly reliable manner. Fair market asset prices should reflect a volume-weighted average from all trading environments, so we need to make use of an oracle to fetch aggregated price data off-chain and deliver it on-chain to be consumed by our application.<br/><br/>
        After reviewing various oracle solutions, we integrated Chainlink Price Feeds because they provide a multitude of critical features such as:<br/><br/>
        • <b>High-Quality Data</b> — Chainlink Price Feeds source data from numerous premium data aggregators, ensuring broad market coverage through price data that’s aggregated from hundreds of exchanges, weighted by volume, and cleaned of outliers and wash trading. Chainlink’s data aggregation model generates accurate global market prices that are inherently resistant to inaccuracies or manipulation of any single or small set of exchanges.<br/><br/>
        • <b>Secure Node Operators</b> — Chainlink Price Feeds are secured by independent, security-reviewed, and Sybil-resistant oracle nodes run by leading blockchain DevOps teams, data providers, and traditional enterprises. Chainlink nodes have a strong track record of reliability, even during high gas prices and infrastructure outages.<br/><br/>
        • <b>Decentralized Network</b> — Chainlink Price Feeds are decentralized at the data source, oracle node, and oracle network levels, generating strong protections against downtime and tampering by either the data provider or oracle network.<br/><br/>
        • <b>Reputation System</b> — Chainlink provides a robust reputation framework and set of on-chain monitoring tools that allow users to independently verify the historical and real-time performance of node operators and oracle networks.<br/><br/><br>
        In the near future we plan on using Chainlink for providing additional price feeds for all of our farming, staking, and vault pools. Also, we want to integrate Chainlink services on DYP Tools to provide a better experience for all the users.<br/><br/>
        "Without doubt Chainlink is the most powerful and reliable Oracle when it comes to High-Quality Data, Secure Node Operators, Decentralized Network, and Reputation System. From the beginning we have put the security and transparency for our project in the first place. By integrating Chainlink services we manage to add more security and transparency to our whole ecosystem. This is one of the most important tasks for any DeFi platform! We look forward on adding more with Chainlink!"<br/><br/>
        Mihai Nicusor Busica — CEO DeFi Yield Protocol<br/><br/>
        <b>About Chainlink</b><br/><br/>
        Chainlink is the industry standard oracle network for powering hybrid smart contracts. Chainlink Decentralized Oracle Networks provide developers with the largest collection of high-quality data sources and secure off-chain computations to expand the capabilities of smart contracts on any blockchain. Managed by a global, decentralized community, Chainlink currently secures billions of dollars in value for smart contracts across decentralized finance (DeFi), insurance, gaming, and other major industries.<br/><br/>
        Chainlink is trusted by hundreds of organizations, from global enterprises to projects at the forefront of the blockchain economy, to deliver definitive truth via secure, reliable oracle networks. To learn more about Chainlink, visit <a href='https://chain.link/' target='_blank'><u>chain.link</u></a>, subscribe to the <a href='https://pages.chain.link/subscribe' target='_blank'><u>Chainlink newsletter</u></a>, and follow <a href='https://twitter.com/chainlink' target='_blank'><u>@chainlink</u></a> on Twitter. To understand the full vision of the Chainlink Network, read the <a href='https://chain.link/whitepaper' target='_blank'><u>Chainlink 2.0 whitepaper</u></a>.<br/><br/>
        <b>About DeFi Yield Protocol</b><br/><br/>
        The DeFi Yield Protocol (DYP) is a unique platform offering solutions for yield farming, staking, NFTs, and enabling users to leverage the advanced trading tools of the DYP. What makes the DYP a unique yield farming aggregator?<br/><br/>
        The DYP has made history in the DeFi space by becoming the first and only protocol that employs an anti-manipulation feature, aiming to limit the market impact on users.<br/><br/>
        Anti-manipulation targets to keep stability, fair access to liquidity, and supply a secure and simplified DeFi platform for users of all sizes.<br/><br/>
        The central feature of the DYP is the decentralized tool dashboard. It provides advanced features, including Decentralized Score, Unique Community Trust Vote System, DYP Locker, Yield Farm Data, and Launch Pad, allowing users to make informed decisions.<br/><br/>
        <b><a href='https://dyp.finance/' target='_blank'><u>Website</u></a> | <a href='https://t.me/dypannouncements' target='_blank'><u>Announcements</u></a> | <a href='https://discord.com/invite/kYDT6pc' target='_blank'><u>Discord</u> </a> | <a href='https://twitter.com/dypfinance' target='_blank'> <u>Twitter</u> </a>|<a href='https://t.me/dypfinance' target='_blank'> <u>Telegram</u> </a>|<a href='https://github.com/dypfinance' target='_blank'> <u>GitHub</u> </a>|<a href='https://www.youtube.com/channel/UC6Wrn8A-pq79srb9OC-ufXw' target='_blank'> <u>YouTube</u> </a></b><br/><br/>
        `,
      },
    },
    {
      title: "Gate.io $DYP Lock-up ＆ Earn #2",
      id: 24,
      imageSrc:
        "https://pbs.twimg.com/media/FRVwHCUXwAMuR2r?format=jpg&name=large",
      date: "Apr 27, 2022",
      link: "https://twitter.com/gate_io/status/1519243718141874177",
      content: {
        imageSrc: 'https://pbs.twimg.com/media/FRVwHCUXwAMuR2r?format=jpg&name=large',
        title: 'Gate.io $DYP Lock-up ＆ Earn #2',
        content: `🔒#Gate.io $DYP Lock-up ＆ Earn #2 @dypfinance <br/><br/> 
        🕘Launch Time: May 1, 8:00:00 UTC<br/><br/>Win an estimated reward of 100% P.A.!<br/><br/>
        ➡️Purchase: <a href='https://www.gate.io/zh/hodl/1231?ch=en_sm_0422' target='_blank'><u>gate.io</u></a><br/>
        ➡️Details: <a href='https://www.gate.io/zh/article/26346?ch=en_sm_0422' target='_blank'><u>gate.io</u></a><br/>
        ➡️Telegram: <a href='https://t.me/gateio_hodl_en' target='_blank'><u>gate.io</u></a><br/>

        `,
      }
    },
    {
      title: "10 #ETH Giveaway",
      id: 25,
      imageSrc:
        "https://pbs.twimg.com/media/FQpLyBBXMAE8AsS?format=jpg&name=large",
      date: "Apr 18, 2022",
      link: "https://twitter.com/dypfinance/status/1516108338685165569",
      content: {
        imageSrc: 'https://pbs.twimg.com/media/FQpLyBBXMAE8AsS?format=jpg&name=large',
        title: '10 #ETH Giveaway',
        content: `🚨 Attention #CAWS holders! <br/><br/> 
        We would like to announce a raffle of 10 #ETH to our community!<br/><br/>To enter:<br/><br/>
        ✅ Hold at least one CAWS at the time token id #2500 is minted! <br/>
        ✅ The more CAWS held, the more chances to win!<br/>
        💰 Prizes:<br/>
        1 x 2.5 ETH<br/>
        2 x 1.5 ETH<br/>
        9 x 0.5 ETH<br/>
        `,
      }
    },
    {
      title: "Gate.io $DYP Lock-up ＆ Earn #1",
      id: 26,
      imageSrc:
        "https://pbs.twimg.com/media/FQXlDOEWQAErq1G?format=jpg&name=large",
      date: "Apr 15, 2022",
      link: "https://twitter.com/gate_io/status/1514868696069595139",
      content: {
        imageSrc: 'https://pbs.twimg.com/media/FQXlDOEWQAErq1G?format=jpg&name=large',
        title: 'Gate.io $DYP Lock-up ＆ Earn #1',
        content: `🔒#Gate.io $DYP Lock-up ＆ Earn #1  @dypfinance<br/><br/> 
        🕘Launch Time: Apr 18, 8:00:00 UTC<br/><br/>
        🔶Term: 14 days <br/>
        🔶Handling Fee: $0<br/>
        ⚡️APR: 100%<br/><br/>
        ➡️Purchase:<a href='https://www.gateio.pro/hodl/1213' target='_blank'><u>gate.io</u></a><br/>
        ➡️Details:<a href='https://www.gate.io/zh/article/26195?ch=en_sm_0422' target='_blank'><u>gate.io</u></a><br/>
        ➡️Telegram:<a href='https://t.me/gateio_hodl_en' target='_blank'><u>gate.io</u></a><br/>

        `,
      }
    },
    {
      title: "KyberDMM Joint Liquidity Mining on Avalanche.",
      id: 27,
      imageSrc: "https://miro.medium.com/max/1400/1*GRqMiBZbPRrxqWcshIwU8A.png",
      date: "Sep 19, 2021",
      link: "https://twitter.com/dypfinance/status/1439562983663968262?s=20",
      content: {
        imageSrc: 'https://miro.medium.com/max/1400/1*GRqMiBZbPRrxqWcshIwU8A.png',
        title: 'KyberDMM Joint Liquidity Mining on Avalanche.',
        content: `<h3>We've submitted a proposal to launch one of the first joint liquidity mining programs for the @KyberNetwork #KyberDMM on @avalancheavax featuring $DYP and $KNC rewards!</h3><br/><br/>
        <b>1. Project Introduction</b><br/>
        The DeFi Yield Protocol (DYP) is a unique platform that offers solutions for yield farming, staking, NFTs, and enabling users to leverage the advanced trading tools of the DYP. What makes the DYP a unique yield farming aggregator? The DYP made history in the DeFi space by becoming the first and only protocol to reward users in Ethereum.<br/>
        The protocol employs an anti-manipulation feature that aims to limit the market impact on users’ converting rewards into ETH and other native platform tokens. Anti-manipulation aims to maintain stability, fair access to liquidity, and provide a secure and simplified DeFi platform for users of all sizes.
        The core feature of the DYP is the decentralized tool dashboard. It provides advanced features, such as Decentralized Score, Unique Community Trust Vote System, DYP Locker, Yield Farm Data, and LaunchPad, allowing investors to make informed decisions that maximize yields and reduce risks.<br/>
        <b>DeFi Yield Protocol is a multi-chain platform available on Ethereum, Binance Smart Chain, and Avalanche. Since launch our users have earned 8791 ETH, 7195 BNB, and 11438 AVAX worth $34,648,092.</b><br/>
        What is the use case of DYP token? DYP serves as the fuel for all products in the DeFi Yield Protocol ecosystem and it could be used in the following use cases:<br/><br/>
        Transaction fees for NFTs smart contract operations<br/>
        Staking on Ethereum Network<br/>
        Yield Farming on Ethereum, Binance Smart Chain, and Avalanche<br/>
        Part of the DYP Earn Vault Strategies<br/>
        Community voting for decentralized Governance<br/>
        DYP Referral System<br/>
        Subscription tokens for DYP Tools Premium<br/>
        DYP Locker fulfil security for smart contracts by locking their liquidity; DYP is the token used for the liquidity lock<br/>
        DYP Launchpad v1.0 will offer multiple tiers based on amount of locked DYP<br/><br/>
        This is just scratching the surface, though. Ultimately, DYP is a requirement for entering the DeFi Yield Protocol ecosystem and unlocking an unprecedented level of security for projects and individual asset holders.<br><br/><br/>
        <b>2. Proposal Summary, Motivation, and Key Details</b><br/>
        DeFi Yield Protocol is proposing a joint liquidity program with Kyber on the Avalanche network.<br/><br/>
        As part of this program, users will be able to provide liquidity to the upcoming DYP-WAVAX pair on KyberDMM to receive dedicated LP tokens. These tokens can be staked to earn dual rewards in both DYP and KNC at a 2:1 ratio.<br/><br/>
        With the incentivized pool, KyberDMM will become a primary location for DYP trading on Avalanche. Another important aspect of the collaboration will be the integration of DYP Tools with KyberDMM for Ethereum, Binance Smart Chain, and Avalanche networks.<br/><br/>
        <b>Motivation:</b><br/><br/>
        DeFi Yield Protocol has been already integrated with Avalanche and launched a couple of products including yield farming with AVAX rewards, buyback program, bridge, and DYP Tools. The integration with Avalanche also includes DYP NFTs and LaunchPad, these products are expected to be launched in the next 30 days. <b>Since the launch of the DYP Farming on Avalanche that happened two months ago, we have paid to the farmers 11438 AVAX worth $830,170. Also, in just one-month DYP worth $370,425.35 has been bought using the Buyback program on Avalanche.</b><br/>
        DYP Tools launch on Avalanche took place just two weeks ago and we have at least 1000 unique users each week from Avalanche network.<br/><br/>
        With this program we will attract more DeFi users found within the Kyber community, with DYP-KNC reward distribution. Our goal is to expand both Kyber and DeFi Yield Protocol ecosystems.<br/><br/><br/>
        <b>3. KNC Amount Requested</b><br/>
        USD $100k in KNC incentives<br/><br/>
        <b>4. Project Contribution Amount</b><br/>
        DeFi Yield Protocol will provide $200k worth of DYP rewards for 8 weeks, in addition to seeding the initial liquidity at a level between $400k and $600k, depending on market conditions at the time of pool creation. The pair will be DYP-WAVAX.<br/><br/>
        <b>5. Network</b><br/>Avalanche<br/><br/>
        <b>6. Token pair option</b><br/>Others<br/><br/>
        <b>7. Vesting Schedule</b><br/>No vesting<br/><br/>
        <b>8. Campaign Duration</b><br/>2 months<br/><br/>
        <b>9. Project Details</b><br/>
        Contact: <a href="mailto:contact@dyp.finance" target='_blank'><u>contact@dyp.finance</u></a><br/>
        Website: <a href="https://dyp.finance/" target='_blank'><u>dyp.finance</u></a><br/>
        GitHub: <a href="https://github.com/dypfinance" target='_blank'><u>DYP - GitHub</u></a><br/>
        Twitter: <a href="https://twitter.com/dypfinance" target='_blank'><u>twitter.com/dypfinance</u></a><br/>
        Medium: <a href="https://dypfinance.medium.com/" target='_blank'><u>dypfinance.medium.com</u></a><br/>
        YouTube: <a href="https://www.youtube.com/c/DeFiYieldProtocol" target='_blank'><u>DYP - Youtube</u></a><br/>
        LinkedIn: <a href="https://www.linkedin.com/company/defi-yield-protocol/" target='_blank'><u>DYP - LinkedIn</u></a><br/>
        Telegram: <a href="https://t.me/dypfinance" target='_blank'><u>DYP - Telegram</u></a><br/>
        Telegram Announcements: <a href="https://t.me/dypannouncements" target='_blank'><u>Telegram: Contact @dypannouncements</u></a><br/>
        Discord: <a href="https://discord.com/invite/kYDT6pc" target='_blank'><u>DeFi Yield Protocol</u></a><br/>
        Governance: <a href="https://dyp.finance/vote" target='_blank'><u>DeFi Yield Protocol</u></a><br/>
        Logo: <a href="https://drive.google.com/drive/folders/1cxSk2BjmPPuIFC7Yao_RTBf6eSo6gDmo" target='_blank'><u>Colour Logo Version - Google Drive</u></a><br/>
        Contract Address: 0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17<br/>
        Uniswap Analytics: <a href="https://v2.info.uniswap.org/token/0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17" target='_blank'><u>Uniswap Info</u></a><br/>
        Pangolin Analytics: <a href="https://info.pangolin.exchange/#/token/0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17" target='_blank'><u>Pangolin Analytics</u></a><br/>
        CoinMarketCap: <a href="https://coinmarketcap.com/currencies/defi-yield-protocol/" target='_blank'><u>DeFi Yield Protocol price today, DYP to USD live, marketcap and chart | CoinMarketCap</u></a><br/>
        CoinGecko: <a href="https://www.coingecko.com/en/coins/defi-yield-protocol" target='_blank'><u>DeFi Yield Protocol price, DYP chart, market cap, and info | CoinGecko</u></a><br/>

        `,
      }
    },
    {
      title: "@dypfinance is extending its liquidity mining campaign.",
      id: 28,
      imageSrc:
        "https://pbs.twimg.com/media/E_bHfp3UYAEHsbt?format=jpg&name=4096x4096",
      date: "Sep 16, 2021",
      link: "https://twitter.com/hummingbot_io/status/1438559792927178755?s=20",
      content: {
        imageSrc: 'https://pbs.twimg.com/media/E_bHfp3UYAEHsbt?format=jpg&name=4096x4096',
        title: '12-week extension for DYP Liquidity Mining Campaign!',
        content: `
        DYP is extending its campaign on <b>KuCoin</b> for another <b>12-weeks</b>. We will continue payouts in the <b>DYP</b> token from <b>September 14, 2021 to September 20, 2021</b> but for the remaining weeks, payouts will be in <b>USDT</b> beginning on <b>September 21, 2021</b>.<br/><br/>
        <h3>Campaign Terms</h3><br/><br/>
        • Start Date: September 21, 2021 00:00 UTC<br/>
        • Trading Pair: DYP/ETH and  DYP/USDT<br/>
        • Weekly Rewards: 625 USDT per pair<br/>
        • Reward token: USDT<br/>
        • Maximum Spread: 2.00%<br/><br/><br/>
        <h3>About DeFi Yield Protocol (DYP)</h3><br/><br/>
        DeFi Yield Protocol is a unique platform that allows any user to provide liquidity, receive rewards in ETH or BNB for the first time since DeFi started, and use an anti-manipulation feature to convert the rewards into ETH or BNB without overly affecting the price. In other words, any person can provide liquidity and earn ETH or BNB with minimum risks.<br/><br/>
        DeFi Yield Protocol is the FIRST and the ONLY yield farming aggregator that is rewarding the liquidity providers in Ethereum (for the Ethereum Network) or BNB/ETH/DYP (for the Binance Smart Chain Network). In order to lower the risk of DYP price volatility, all pool rewards are automatically converted from DYP to ETH/BNB by the smart contract, and ETH/BNB/DYP is distributed as a reward to the liquidity providers. The users can choose between three different types of rewards: ETH, BNB, or DYP.<br/><br/>
        The yield farming is available on both Ethereum (ETH, WBTC, USDC, USDT pools on Uniswap) and Binance Smart Chain (BNB, ETH, BUSD pools on PancakeSwap) Networks. The liquidity providers can earn up to 231.64% APY according to DeFi Yield Protocol. It also has a Bridge that will help the users swap DYP tokens between Ethereum Network and Binance Smart Chain Network.<br/><br/>
        *For full terms of the campaign, please see <a href='https://support.hummingbot.io/hc/en-us/sections/900002130663-Campaigns' target='_blank'><u>liquidity mining campaign terms</u></a>. To learn more about liquidity mining, see below:<br/>
        • <a href='https://miner.hummingbot.io/' target='_blank'><u>Hummingbot Miner’s app</u></a><br/>
        • <a href='https://support.hummingbot.io/hc/en-us/sections/900002130663-Campaigns' target='_blank'><u>Hummingbot liquidity mining rewards and terms</u></a><br/>
        • <a href='https://hummingbot.io/academy/' target='_blank'><u>Hummingbot Academy</u></a><br/>
        • <a href='https://support.hummingbot.io/hc/en-us/sections/900001100046-Frequently-Asked-Questions' target='_blank'><u>Liquidity mining FAQs</u></a><br/>
        • <a href='https://discord.com/invite/hummingbot' target='_blank'><u>24/7 support</u></a><br/>
        <b>Important notes and disclaimers</b><br/><br/>
        Please review the <a href='https://hummingbot.io/liquidity-mining-policy/' target='_blank'><u>Liquidity Mining Policy</u></a> for the full disclaimer, including policies related to the use of Hummingbot.<br/><br/>
        The content of this Site does not constitute investment, financial, legal, or tax advice: none of the information contained on this Site constitutes a recommendation, solicitation, or offer to buy or sell any digital assets, securities, options, or other financial instruments or other assets, or to provide any investment advice or service.<br/><br/>
        <b>No guarantee of profit</b>: CoinAlpha does not claim that liquidity mining and participation in liquidity mining campaigns will be profitable, however measured, for the user. Liquidity mining yields are a measure of rewards compared to assets used for liquidity mining, excluding any gains or losses incurred from the underlying trading strategy.<br/><br/>
        1. <b>Eligibility requirements:</b> participation in liquidity mining is subject to eligibility requirements as specified in the <a href='https://hummingbot.io/en/liquidity-mining-policy/' target='_blank'><u>liquidity mining policy</u></a>.<br/>
        2. <b>Campaign terms subject to change:</b> terms may be modified over the course of the campaign. We will announce any changes, if any, on our <a href='https://discord.com/invite/hummingbot' target='_blank'><u>discord</u></a> and <a href='https://www.reddit.com/r/Hummingbot/' target='_blank'><u>reddit</u></a>; the most up to date terms will also be posted on the <a href='https://support.hummingbot.io/hc/en-us/sections/900002130663-Campaigns' target='_blank'><u>liquidity mining campaign terms</u></a> and the <a href='https://miner.hummingbot.io/' target='_blank'><u>miners app</u></a>.<br/>

        `,
      }
    },
    {
      title: "New $PNG reward pools are ready for pre-deposits!",
      id: 29,
      imageSrc:
        "https://pbs.twimg.com/media/E9NFwuPVoAQMtdw?format=png&name=900x900",
      date: "Aug 20, 2021",
      link: "https://twitter.com/pangolindex/status/1428563006481260547?s=20",
      content: {
        title: 'New $PNG reward pools are ready for pre-deposits!',
        imageSrc: 'https://pbs.twimg.com/media/E9NFwuPVoAQMtdw?format=png&name=900x900',
        content: `<h3>💰New $PNG reward pools are ready for pre-deposits!</h3><br/><br>
        ⏰Rewards start Friday at 1pm UTC<br/><br/>$QI $DYP $WALBT<br/><br/>
        🚀AVAX-QI 1x<br/>🚀PNG-QI 5x<br/>🚀AVAX-DYP 1x <br/>🚀PNG-DYP 5x<br/>🚀AVAX-WALBT 1x<br/>🚀PNG-WALBT 5x<br/><br/>
        ⏬ <a href='https://app.pangolin.exchange/#/png/1' target='_blank'><u>app.pangolin.exchange</u></a>`,
      }
    },
    {
      title: "Listing Celebration to @coin98_wallet: Win $2500 in $DYP",
      id: 30,
      imageSrc:
        "https://pbs.twimg.com/media/E9D1hZDXsAAqXGu?format=jpg&name=medium",
      date: "Aug 18, 2021",
      link: "https://twitter.com/dypfinance/status/1427912209762603008?s=20",
      content: {
        title: 'Listing Celebration to @coin98_wallet: Win $2500 in $DYP',
        imageSrc: 'https://pbs.twimg.com/media/E9D1hZDXsAAqXGu?format=jpg&name=medium',
        content: `<h3>Listing Celebration to @coin98_wallet: Win $2500 in $DYP</h3><br/><br>
       1️⃣ Follow <a href='https://twitter.com/dypfinance' target='_blank'><u>@dypfinance</u></a> and <a href='https://twitter.com/coin98_wallet' target='_blank'><u>@coin98_wallet</u></a><br/><br/>
       2️⃣ Join <a href='https://t.me/dypfinance' target='_blank'><u>t.me/dypfinance</u></a> & <a href='https://t.me/coin98wallet' target='_blank'>t.me/coin98wallet<u><br/>
       3️⃣ Retweet, like & tag 3 friends<br/>4️⃣ Comment QR Screenshot Coin98 $DYP address<br/><br/>
       🎁 100 lucky winners will receive $25 each!`,
      }
    },
    {
      title: "Aircoins is excited to announce newest partner with DYP",
      id: 31,
      imageSrc:
        "https://pbs.twimg.com/media/E8DDO9nWEAcEyxA?format=jpg&name=medium",
      date: "Aug 05, 2021",
      link: "https://twitter.com/AIRCOINS_App/status/1423352145697546241",
      content: {
        title: 'Aircoins is excited to announce newest partner with DYP',
        imageSrc: 'https://pbs.twimg.com/media/E8DDO9nWEAcEyxA?format=jpg&name=medium',
        content: `Aircoins is excited to announce our newest partner @dypfinance!<br/><br>
        To Celebrate: $1000 in DYP up for grabs!<br/> $750 in $DYP for the best DYP AR photos<br/>$250 in $DYP drawing for following both <br/>
        @AIRCOINS_App and @dypfinance and retweeting this.<br/>Contest ends August 12th<br/>`
      }
    },
    {
      title: "Pangolin hosting a giveaway with Defi Yield Protocol",
      id: 32,
      imageSrc:
        "https://pbs.twimg.com/media/E74VgYqUcAEnsON?format=jpg&name=large",
      date: "Jul 12, 2021",
      link: "https://twitter.com/pangolindex/status/1422604691251163142",
      content: {
        title: 'Pangolin hosting a giveaway with Defi Yield Protocol',
        imageSrc: 'https://pbs.twimg.com/media/E74VgYqUcAEnsON?format=jpg&name=large',
        content: `<h3>💸✨$1,000 Giveaway✨💸</h3><br/><br>
        💰We are hosting a giveaway with @dypfinance - 5 lucky winners will get $200!💰<br/> To Enter:<br/>
        ⚡️Follow <a href='https://twitter.com/pangolindex' target='_blank'><u>@pangolindex</u></a> and <a href='https://twitter.com/dypfinance' target='_blank'><u>@dypfinance</u></a><br/>
        ✈️Join the Pangolin and DYP #telegram<br/>💻Join the Pangolin and DYP #discord<br/>👪Tag 3 friends + ♻️retweet`
      }
    },
    {
      title: "DeFi Yield Protocol NFT Creative Competition is LIVE!",
      id: 33,
      imageSrc:
        "https://miro.medium.com/max/1400/1*h95JYnco1tuL3IGB0TAjsg.jpeg",
      date: "Jul 12, 2021",
      link: "https://dypfinance.medium.com/defi-yield-protocol-nft-creative-competition-is-live-9d28528fef08",
      content: {
        title: 'DeFi Yield Protocol NFT Creative Competition is LIVE!',
        imageSrc: 'https://miro.medium.com/max/1400/1*h95JYnco1tuL3IGB0TAjsg.jpeg',
        content: `To celebrate the launch of NFT Marketplace, the creative competition will officially begin! We invite global NFT creators to use their imagination, compete in terms of creativity, and participate in the creative contest to share DYP tokens worth US $50,000.<br/><br/>
        The contest will begin today, and it will end when at least 1000 NFTs have been created.<br/><br/>
        <b>Rules:</b>
        ✅ Follow <a href='https://twitter.com/dypfinance' target='_blank'><u>@dypfinance</u></a> on Twitter<br/>
        ✅ Retweet <a href='https://twitter.com/dypfinance/status/1414541027248050178?s=20' target='_blank'><u>this post</u></a> with #DeFiYieldProtocol #NFT hashtag<br/>
        ✅ Create your unique NFT on DeFi Yield Protocol <a href='https://nft.dyp.finance/' target='_blank'><u>NFT Marketplace</u></a><br/>
        ✅ Tweet your NFT artwork with the hashtag #DYP #NFT<br/><br/>
        <b>Prizes:</b><br/><br/><br/>
        • 1 Winner of $10,000<br/>
        • 2 Winners of $5000 each<br/>
        • 5 Winners of $2000 each<br/>
        • 50 Winners of $200 each<br/>
        • 100 Winners of $100 each<br/><br/><br/>
        <b><i>Note:</i></b><br/><br/>
        1. The winners will be chosen based on the NFT quality, social media activity earned by their tweet containing there NFT, and a community vote.<br/>
        2. Prizes will be distributed within 10 days of the campaign ending.<br/>
        3. The competition activity on the platform will undergo rigorous inspection during the activity. For any malicious acts conducted during the period, including manipulations, bulk registration of accounts, etc., the platform will cancel the qualification of the participants.<br/>
        4. The current campaign is available only for the NFT dApp on Ethereum Network, you will need DYP on Ethereum Network to create NTFs.<br/>
        <b>About DeFi Yield Protocol</b><br/><br/>
        The DeFi Yield Protocol (DYP) is a unique platform offering solutions for yield farming, staking, NFTs, and enabling users to leverage the advanced trading tools of the DYP. What makes the DYP a unique yield farming aggregator?<br/><br/>
        The DYP has made history in the DeFi space by becoming the first and only protocol that employs an anti-manipulation feature, aiming to limit the market impact on users.<br/><br/>
        Anti-manipulation targets to keep stability, fair access to liquidity, and supply a secure and simplified DeFi platform for users of all sizes.<br/><br/>
        The central feature of the DYP is the decentralized tool dashboard. It provides advanced features, including Decentralized Score, Unique Community Trust Vote System, DYP Locker, Yield Farm Data, and Launch Pad, allowing users to make informed decisions.<br/><br/>
        <b><a href='https://dyp.finance/' target='_blank'><u>Website</u></a> | <a href='https://t.me/dypannouncements' target='_blank'><u>Announcements</u></a> | <a href='https://discord.com/invite/kYDT6pc' target='_blank'><u>Discord</u> </a> | <a href='https://twitter.com/dypfinance' target='_blank'> <u>Twitter</u> </a>|<a href='https://t.me/dypfinance' target='_blank'> <u>Telegram</u> </a>|<a href='https://github.com/dypfinance' target='_blank'> <u>GitHub</u> </a>|<a href='https://www.youtube.com/channel/UC6Wrn8A-pq79srb9OC-ufXw' target='_blank'> <u>YouTube</u> </a></b><br/><br/>
        `
      }
    },
  ];

  const owlCarouselOptionsPress = {
    loop: true,
    margin: 0,
    center: false,
    nav: false,
    dots: true,
    autoplay: false,
    rewind: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      960: {
        items: 1,
        slideBy: 1,
      },
      1200: {
        items: 2,
        slideBy: 2,
      },
      1920: {
        items: 2,
        slideBy: 2,
      },
    },
  };

  const carousel = useRef();
  const carousel2 = React.createRef();
  const newsPerRow = 4;
  const [activeClass, setActiveClass] = useState("latestnews");
  const [showModal, setShowModal] = useState(false);
  const [activeNews, setActiveNews] = useState([]);

  const [next, setNext] = useState(newsPerRow);

  const loadMore = () => {
    setNext(next + newsPerRow);
  };

  const handleNewsClick = (id) => {
    carousel.current.to(id, 500);
  };

  const handleSingleNewsUpdate = (id) => {
    setActiveNews(newsArray[id]);
  };

  return (
    <>
      <div className="news-wrapper">
        <h1 className="news-title">Popular News</h1>
        <div className="row m-0 main-news-content-wrapper">
          <div
            className="brand-wrapper banner-wrapper news-left-wrapper"
          >
            <OwlCarousel
              ref={carousel}
              className="owl-carousel owl-theme brand-slider"
              {...owlCarouselOptions}
            >
              {newsArray.length > 0 &&
                newsArray.map((item, key) => {
                  return (
                    <div className="" key={key}>
                      <MainNews
                        image={item.imageSrc}
                        title={item.title}
                        link={item.link}
                        year={item.year}
                        month={item.month}
                        day={item.date}
                        theme={theme}
                        onShowModalClick={() => {
                          setShowModal(true);
                          setActiveNews(newsArray[key]);
                        }}
                        
                      />
                    </div>
                  );
                })}
            </OwlCarousel>
          </div>

          <div className="singlenews-side">
            <div className="button-wrapper">
              <h6
                className={
                  activeClass === "latestnews"
                    ? "activebutton"
                    : "passivebutton"
                }
                onClick={() => {
                  setActiveClass("latestnews");
                }}
              >
                Latest news
              </h6>
              <h6
                className={
                  activeClass !== "latestnews"
                    ? "activebutton"
                    : "passivebutton"
                }
                onClick={() => {
                  setActiveClass("toprated");
                }}
              >
                Top voted
              </h6>
            </div>
            {newsArray.length > 0 &&
              newsArray.slice(0, 4).map((item, key) => {
                return (
                  <div className="banner-item" key={key}>
                    <SingleNews
                      image={item.imageSrc}
                      title={item.title}
                      link={item.link}
                      year={item.year}
                      month={item.month}
                      day={item.date}
                      theme={theme}
                      onNewsClick={(e) => {
                        handleNewsClick(key);
                        e.stopPropagation();
                      }}
                      onClick={()=>handleSingleNewsUpdate(key)}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="press-release-wrapper">
        <h1 className="news-title" style={{ paddingLeft: 20 }}>
          Press Realese
        </h1>
        <div
          className="brand-wrapper banner-wrapper"
          style={{ display: "flex" }}
        >
          <OwlCarousel
            ref={carousel2}
            className="owl-carousel owl-theme brand-slider"
            {...owlCarouselOptionsPress}
          >
            {press_highlight.length > 0 &&
              press_highlight.map((item, key) => {
                return (
                  <div
                    className="banner-item"
                    key={key}
                    style={{ background: "none" }}
                  >
                    <PressRealease
                      image={item.imageSrc}
                      title={item.title}
                      link={item.link}
                      date={item.date}
                    />
                  </div>
                );
              })}
          </OwlCarousel>
        </div>
      </div>
      <div className="press-release-wrapper" style={{ paddingTop: 0 }}>
        <h1
          className="news-title"
          style={{ paddingLeft: 20, paddingBottom: 20 }}
        >
          Other News
        </h1>
        <div className="row m-0 othernews-row-wrapper" style={{ rowGap: 10 }}>
          {otherNews.length > 0 &&
            otherNews?.slice(0, next)?.map((item, key) => {
              return (
                <div
                  className="banner-item"
                  key={key}
                  style={{ background: "none" }}
                >
                  <OtherNews
                    image={item.imageSrc}
                    title={item.title}
                    link={item.link}
                    date={item.date}
                    theme={theme}
                    onOtherNewsClick={() => {
                      setActiveNews(otherNews[key]);
                      setShowModal(true);
                    }}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-center">
          {next < otherNews?.length && (
            <button onClick={() => loadMore()} className="load-more-btn">
              Load more
            </button>
          )}
        </div>
      </div>
      {showModal === true && (
        <NewsModal
          visible={showModal}
          modalId="#newsmodal"
          onModalClose={() => {
            setShowModal(false);
            setActiveNews([]);
          }}
          title={activeNews.content.title}
          image={activeNews.content.imageSrc}
          content={activeNews.content.content}
        />
      )}
    </>
  );
};

export default News;
