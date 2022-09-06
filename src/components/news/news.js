import React, { useState, useRef, useEffect } from "react";
import SingleNews from "./singleNews";
import MainNews from "./mainNews";
import PressRealease from "./PressRelease";
import OtherNews from "./OtherNews";
import NewsModal from "./NewsModal";
import axios from "axios";
import ToolTip from "./ToolTip";
import OutsideClickHandler from "react-outside-click-handler";
import * as _ from "lodash";
import { useWeb3React } from "@web3-react/core";
import Carousel from "better-react-carousel";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";


const News = ({ theme, isPremium }) => {
  const responsive1 = [
    {
      breakpoint: 1220,
      cols: 2,
      rows: 1,
      gap: 1,
      loop: true,
      autoplay: 4000,
      showDots: true,
      
    },
  ];

  const carousel = useRef();

  const newsPerRow = 4;
  const [activeClass, setActiveClass] = useState("latestnews");
  const [showModal, setShowModal] = useState(false);
  const [newsItemId, setnewsItemId] = useState(-1);
  const [downvotes, setDownvotes] = useState(0);
  const [votes, setVotes] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [activeNews, setActiveNews] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [isParam, setIsParam] = useState(true);
  const [isConnected, setIsConnected] = useState();
  const { account, chainId, active } = useWeb3React();
  const [finalNewsData, setFinalNewsData] = useState([]);

  const [next, setNext] = useState(newsPerRow);

  const loadMore = () => {
    setNext(next + newsPerRow);
  };

  const handleSingleNewsUpdate = (id) => {
    setActiveNews(finalNewsData[id]);
    setShowModal(true);
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

  useEffect(() => {
    if (account !== undefined) {
      setIsConnected(true);
    } else setIsConnected(false);
  });

  useEffect(() => {
    fetchVotingdata().then();
   
  }, [showModal, newsItemId]);
  
  const { news_id } = useParams();

  const handleSelectOtherNews = (key) => {
    const search = (obj) => obj.end?.id == key;
    const index = finalNewsData.findIndex(search);
    setActiveNews(finalNewsData[index]);
    
  };

  const handleSelectPressNews = (key) => {
    
    if(finalNewsData.length > 0) {
      const search = (obj) => obj.id == key;
    const index = finalNewsData.findIndex(search);
    
    setActiveNews(finalNewsData[index]);
    }
    
  };

  const handleDisplayNewsFromParam = () => {
    if (news_id != undefined && isParam === true) {
      
      window.scrollTo(0, 0);
      setShowModal(true);
      handleSelectPressNews(parseInt(news_id));
    }
  };

  useEffect(() => {
    if (activeNews.date !== undefined) {
      setIsParam(false);
    } else {
      if(finalNewsData.length > 0)
     { fetchNewsdata();
       handleDisplayNewsFromParam();}
    }
  },[finalNewsData.length, newsData.length, news_id]);

  const newsArray = [
    {
      date: "22",
      id: 0,
      month: "Jun",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 0).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 0)?.down : 0,
      title: "📣 DYPians, get ready for the next step!",
      link: "https://twitter.com/dypfinance/status/1539620413461958656",
      image:
        "https://pbs.twimg.com/media/FV3UaozWYAE8y_F?format=jpg&name=small",
      year: "2022",
        content:
          "Starting from today, 22 June 2022, 09:00 AM PT, $DYP will be available for trading on @Coinbase & @CoinbaseExch. You can choose from #DYP-USD & #DYP-USDT pairs.",
      
    },
    {
      date: "14",
      id: 1,
      month: "Jun",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 1).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 1)?.down : 0,
      title: "Metaverse, the next step for DYP!",
      link: "https://dypfinance.medium.com/metaverse-the-next-step-for-dyp-4c6586a1e3f0",
      image:
        "https://miro.medium.com/max/1400/1*VKmKepkkPCmkMcF_0kU5Dg.jpeg",
      year: "2022",
      
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
    {
      date: "31",
      id: 2,
      month: "May",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 2).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 2)?.down : 0,
      title: "Game season it’s officially open! 👉🏽 #CAWS Adventures is here!",
      link: "https://twitter.com/dypfinance/status/1531613663450251264",
      image:
        "https://pbs.twimg.com/media/FUFifRpX0AEoGYt?format=jpg&name=small",
      year: "2022",
   
        content:
          '🙀 Are you ready for a #GameFi Experience? Great! <br/><br/> Game season it’s officially open! 👉🏽 #CAWS Adventures is here. <br/> Connect your wallet and start the adventure!<br/> 😼 Don’t forget: you need to hold a CAWS #NFT in order to play. Game on DYPians! <br/><br/> <a href="https://game.dyp.finance/"  target="_blank">game.dyp.finance</a>',
     
    },
    {
      date: "27",
      id: 3,
      month: "May",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 3).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 3)?.down : 0,
      title: "Check out our new website!",
      link: "https://twitter.com/dypfinance/status/1530181037766189059",
      image:
        "https://pbs.twimg.com/media/FTxLMb9WIAE0fA7?format=jpg&name=medium",
      year: "2022",

        content:
          '🔥 That special moment is finally here! <br/><br> 🧐 Check out our new website. An upgraded UI version with new cool features 👉 an easier and more interactive way to stay connected to our platform! <br/><br/>This is DeFi Yield Protocol! ⤵️ <br/><br/><a href="https://dyp.finance/" target="_blank">dyp.finance</a>',
    
    },
    {
      title: "Gate.io $DYP Lock-up ＆ Earn #3",
      id: 4,
      image:
        "https://pbs.twimg.com/media/FTG42MYWQAImetj?format=jpg&name=large",
      date: "19 May 2022",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 4).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 4)?.down : 0,
      link: "https://twitter.com/gate_io/status/1527204993052426241",

        content: `🔒#Gateio $DYP Lock-up ＆ Earn #3 @dypfinance <br/><br/> 
      🔷Token: $DYP <br/> 🔶Term: 7 days<br/> ⚡️Annual Interest Rate:150%<br/> 🕘Start: May 21, 8:00:00 UTC<br/>
      ➡️Try out: <a href='https://www.gate.io/zh/hodl/1263?ch=hodl_twi0516' target='_blank'><u>gate.io</u></a><br/>
      ➡️Check more: <a href='https://www.gate.io/zh/article/26591?ch=en_sm_0522' target='_blank'><u>gate.io</u></a>`,
      
    },
    {
      date: "22",
      id: 5,
      month: "Feb",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 5).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 5)?.down : 0,
      title: "V.R. is the next step for #DYP.",
      link: "https://twitter.com/dypfinance/status/1496072467814756353",
      image:
        "https://pbs.twimg.com/media/FMMd6vBXoAMb_je?format=jpg&name=4096x4096",

      year: "2022",
  
        content:
          "🔜 V.R. is the next step for #DYP. <br/><br> 🔥 ⚡️ Find out more about the #Metaverse play-to-earn game that we are developing. <br/><br/> 👉<a href='https://dypfinance.medium.com/how-defi-yield-protocol-is-changing-the-future-in-crypto-earnings-59d7774f570d' target='_blank'><u>How DeFi Yield Protocol is changing the future in the crypto world.</u></a>",
     
    },
    {
      date: "11",
      id: 6,
      month: "Jan",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 6).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 6)?.down : 0,
      title: "Cats and Watches Society Whitelist!",
      link: "https://twitter.com/dypfinance/status/1480623073208549380",
      image: "https://dyp.finance/img/nft/roadmap_caws.jpg",

      year: "2022",

        content:
          "🔥Join Cats and Watches Society #NFTs Whitelist 🎉One Brand New Rolex Daytona Ceramic 116500LN worth $40k Giveaway <br/><br> 🔥 To win the watch: <br/><br/> <ul><li>✅Join <a href='http://dyp.finance/whitelist' target='_blank'><u>dyp.finance/whitelist</u></a></li><li>✅Mint one #NFT once available</li><li>✅Like & Retweet this post</li><li>✅Join <a href='http://discord.gg/dypcaws' target='_blank'><u>discord.gg/dypcaws</u></li><li>✅Tag 3 friends</li></ul>",
    
    },
    {
      date: "11",
      id: 7,
      month: "Jan",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 7).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 7)?.down : 0,
      title: "It's raining $KNC on KyberSwap for $DYP!",
      link: "https://twitter.com/KyberNetwork/status/1480850588980051969",
      image: "https://miro.medium.com/max/1400/1*gmCDk8UdGNrpI4USFHYyJA.png",
      year: "2022",

        content:
          "🌧It's raining $KNC on KyberSwap for @dypfinance $DYP! <br/><br> 💰Phase 2: $100K for DYP-WAVAX liquidity providers <br/><br/> 👉🏽Tue 11 Jan, 9.30pm GMT+8 <br/> <br/> ➡️Details: <a href ='https://bit.ly/3fikKjr' target ='_blank'><u>bit.ly/3fikKjr</u></a> <br/><br/>",
    
    },
    {
      date: "10",
      id: 8,
      month: "May",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 8).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 8)?.down : 0,
      title: "New smart contract for DYP staking!",
      link: "https://twitter.com/dypfinance/status/1524075021379022848",
      image:
        "https://pbs.twimg.com/media/FSKsEt2XMAA-ZUX?format=jpg&name=medium",
      year: "2022",
        content:
          'The game has changed! ⤵️ <br/><br> 💰 Stake your #DYP and earn 25% APR in #ETH, #AVAX or #BNB. <br/><br/>This new smart contract is available on all blockchains: ETH, BSC & C-CHAIN 👉🏽 no impermanent loss. <br/><br/>It all starts today! ⚡️<br/><br/>🔛<a href="https://dyp.finance/stakev2" target="_blank"><u>dyp.finance/stakev2</u></a>',
     
    },
    {
      date: "14",
      id: 9,
      month: "Apr",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 9).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 9)?.down : 0,
      title: "Gate.io support for DYP on BNB Chain and C-CHAIN!",
      link: "https://twitter.com/dypfinance/status/1514627082025852936",
      image:
        "https://pbs.twimg.com/media/FQUJHzJXEA0kQ7h?format=jpg&name=medium",

      year: "2022",

        content:
          "Now check this out! 🔊 <br/><br> Starting from today you can trade $DYP on Gate.io also on #BSC/BEP20 and #AVAX/C-CHAIN - no bridge required. 💥 <br/><br/>And this is only the beginning! 🚀",
      
    },
    {
      date: "4",
      id: 10,
      month: "Mar",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 10).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 10)?.down : 0,
      title: "March - DYP Vault is ready for action!",
      link: "https://twitter.com/dypfinance/status/1499761913001136136",
      image:
        "https://pbs.twimg.com/media/FNA4t82WUAUfX9z?format=jpg&name=medium",

      year: "2022",

        content:
          "📢 It's official! ⚡️ #DYP Vault is ready for action. <br/><br> 🔥 Check out our contracts with no lock time, deposit your #crypto and let us do the rest. 🚀 <br/><br/> 👉<a href='https://dyp.finance/vault-new' target='_blank'><u>dyp.finance/vault-new</u><a/><br/><br/>👏 Doing #crypto is easy with $DYP!",
     
    },
    {
      date: "15",
      id: 11,
      month: "Dec",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 11).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 11)?.down : 0,
      title: "Staking, Farming, and Buyback V2 ETH",
      link: "https://twitter.com/dypfinance/status/1471162808041713665",
      image:
        "https://miro.medium.com/max/1400/1*uQCbsnPYwQdlQ8Wdtrgojg.jpeg",
      year: "2021",

        content:
          "We are excited to announce that the new pools for staking, buyback, and farming have been launched on #Ethereum <br/><br> Join staking if you are holding #DYP or buyback & farming if you are holding WETH, WBTC, USDC, USDT, LINK or #iDYP and earn #ETH as rewards👇<br/><br/>  <a href ='https://dyp.finance/earnv2' target ='_blank'><u>dyp.finance/earnv2</u></a>",
   
    },
    {
      date: "08",
      id: 12,
      month: "Dec",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 12).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 12).down : 0,
      title: "Staking, Farming, and Buyback V2 AVAX",
      link: "https://twitter.com/dypfinance/status/1468652091799482378",
      image:
        "https://miro.medium.com/max/1400/1*edJgopIexXunb7eiy4KTvA.jpeg",
      year: "2021",

        content:
          "We are excited to announce that the new pools for staking, buyback, and farming have been launched on #Avalanche <br/><br> Join staking if you are holding #DYP or buyback & farming if you are holding #AVAX, USDC, WETH, #PNG, or WBTC, and earn #AVAX as rewards👇 <br/><br/>  <a href ='https://dyp.finance/earnv2' target ='_blank'><u>dyp.finance/earnv2</u></a>",
    
    },
    {
      date: "20",
      id: 13,
      month: "Nov",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 13).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 13)?.down : 0,
      title: "Staking, Farming, and Buyback V2 BSC",
      link: "https://twitter.com/dypfinance/status/1462032099708391428",
      image:
        "https://miro.medium.com/max/1400/1*5hnErea6YNBD8id8I5cm2A.jpeg",
      year: "2021",

        content:
          "We are excited to announce that the new pools for staking, buyback, and farming have been launched on #BinanceSmartChain <br/><br> Join staking if you are holding #DYP or buyback & farming if you are holding WBNB, BTCB, ETH, BUSD, CAKE and earn #BNB as rewards👇 <br/><br/>  <a href ='https://dyp.finance/earnv2' target ='_blank'><u>dyp.finance/earnv2</u></a>",
      
    },
    {
      date: "5",
      id: 14,
      month: "Oct",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 14).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 14)?.down : 0,
      title: "It's raining $DYP + $KNC!",
      link: "https://twitter.com/KyberNetwork/status/1445210348944912388",
      image: "https://miro.medium.com/max/1400/1*iM7ctAGi7pD0k_MmMuUWjg.png",
      year: "2021",

        content:
          "🌧It's raining $DYP + $KNC! <br/><br> @dypfinance and Kyber are enhancing $DYP liquidity on KyberDMM DEX - the best venue for LPs to deposit and earn! <br/><br/>  💰$300K for DYP-WAVAX liquidity providers! <br/><br/> Details: <a href='' target='_blank'><u>DeFi Yield Protocol Enhances DYP Token Liquidity on Avalanche with KyberSwap!</u></a> <br/><br/> Visit: <a href='https://dmm.exchange/#/about' target='_blank'><u>dmm.exchange/#/about</u></a>",
    
    },
    {
      date: "21",
      id: 15,
      month: "Sep",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 15).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 15)?.down : 0,
      title: "DeFi Yield Protocol $DYP is coming to @0xPolygon!",
      link: "https://twitter.com/dypfinance/status/1440337326077472771",
      image: "https://miro.medium.com/max/1400/1*nYEM2TrjWAzBTxc-sNATUg.png",
      year: "2021",

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
    {
      date: "10",
      id: 16,
      month: "Sep",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 16).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 16)?.down : 0,
      title: "DeFi Yield Protocol (DYP) is on DeFi Pulse!",
      link: "https://twitter.com/defipulse/status/1436388557896159235",
      image: "https://dyp.finance/img/defipulse.png",
      year: "2021",
 
        content:
          "🎊🎊NEW LISTING 🎊🎊<br/><br> @dypfinance anis now listed in our #DeFi rankings at #120 with $198k Total Value Locked <a href='https://www.defipulse.com/address-tag/defi-yield-protocol' target='_blank'><u>DeFi Pulse</u></a> <br/><br/>  DeFi Yield Protocol (DYP) is a platform that offers solutions for yield farming, staking, NFTs, and trading tools.",
     
    },
    {
      date: "11",
      id: 17,
      month: "Aug",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 17).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 17)?.down : 0,
      title: "DeFi Yield Protocol will be integrated with Coin98 Wallet!",
      link: "https://twitter.com/dypfinance/status/1425400583012425730?s=20",
      image:
        "https://miro.medium.com/max/1400/1*gimouGn5M4Mp6t8opTsNLw.jpeg",
      year: "2021",

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
    {
      date: "22",
      id: 18,
      month: "Jul",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 18).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 18)?.down : 0,
      title: "DeFi Yield Protocol strategic integration with Aircoins.io",
      link: "https://dypfinance.medium.com/defi-yield-protocol-strategic-integration-with-aircoins-io-augmented-reality-app-666209ce08e",
      image:
        "https://miro.medium.com/max/1400/1*h95JYnco1tuL3IGB0TAjsg.jpeg",
      year: "2021",


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
    {
      date: "14",
      id: 19,
      month: "Jul",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 19).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 19)?.down : 0,
      title: "Pangolin partners with DeFi Yield Protocol (DYP)",
      link: "https://dypfinance.medium.com/pangolin-partners-with-defi-yield-protocol-dyp-a-unique-cross-chain-platform-b52b7e93e0a9",
      image:
        "https://miro.medium.com/max/1400/1*e2gdKr1KM3QlpGPewZu-gw.jpeg",
      year: "2021",

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
      <b><a href='https://pangolin.exchange/' target='_blank'><u>Website</u></a> | <a href='https://twitter.com/pangolindex' target='_blank'><u>Twitter</u></a> | <a href='https://discord.com/invite/PARrDYYbfw' target='_blank'><u>Discord</u></a> | <a href='https://github.com/pangolindex' target='_blank'><u>GitHub</u></a> | <a href='https://pangolin.exchange/litepaper/' target='_blank'><u>Documentation</u></a> | <a href='https://t.me/pangolindex' target='_blank'><u>Telegram</u></a> | <a href='https://www.linkedin.com/company/74288656/admin/' target='_blank'><u>LinkedIn</u></a> | <a href='https://www.reddit.com/r/PangolinExchange/' target='_blank'><u>Reddit</u></a> | <a href='https://www.youtube.com/channel/UClJJTG4FRL4z3AOf-ZWXZLw' target='_blank'><u>YouTube</u></a></b>
      `,
     
    },
    {
      date: "08",
      id: 20,
      month: "Jul",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 20).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 20)?.down : 0,
      title: "DeFi Yield Protocol Avalanche Bridge Tutorial",
      link: "https://dypfinance.medium.com/defi-yield-protocol-avalanche-bridge-tutorial-9404d827a4a",
      image: "https://dyp.finance/img/avalanche.jpg",
      year: "2021",

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
    {
      date: "05",
      id: 21,
      month: "Jul",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 21).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 21)?.down : 0,
      title: "Getting Started with the DeFi Yield Protocol NFT Marketplace",
      link: "https://dypfinance.medium.com/getting-started-with-the-defi-yield-protocol-nft-marketplace-a518356f47f",
      image:
        "https://miro.medium.com/max/1400/1*qnQkO4ajXw33Ox7PLSV77w.jpeg",
      year: "2021",


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
    {
      date: "22",
      id: 22,
      month: "Jun",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 22).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 22)?.down : 0,
      title: "DeFi Yield Protocol launches NFT dApp V1",
      link: "https://dypfinance.medium.com/defi-yield-protocol-launches-nft-dapp-v1-a796b19aaabb",
      image:
        "https://miro.medium.com/max/1400/1*lkIkivLimWQL_eT2pfd64A.jpeg",
      year: "2021",

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
    {
      date: "22",
      id: 23,
      month: "Jun",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 23).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 23)?.down : 0,
      title: "DeFi Yield Protocol Integrates Chainlink",
      link: "https://dypfinance.medium.com/defi-yield-protocol-integrates-chainlink-price-feeds-to-secure-yield-farming-data-on-ethereum-and-3fe85062a0e5",
      image:
        "https://miro.medium.com/max/1400/1*lut5I2B3ZEnaIULOfGnDVw.jpeg",
      year: "2021",

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
    {
      title: "Gate.io $DYP Lock-up ＆ Earn #2",
      id: 24,
      image:
        "https://pbs.twimg.com/media/FRVwHCUXwAMuR2r?format=jpg&name=large",
      date: "Apr 27, 2022",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 24).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 24).down : 0,
      link: "https://twitter.com/gate_io/status/1519243718141874177",


        content: `🔒#Gate.io $DYP Lock-up ＆ Earn #2 @dypfinance <br/><br/> 
      🕘Launch Time: May 1, 8:00:00 UTC<br/><br/>Win an estimated reward of 100% P.A.!<br/><br/>
      ➡️Purchase: <a href='https://www.gate.io/zh/hodl/1231?ch=en_sm_0422' target='_blank'><u>gate.io</u></a><br/>
      ➡️Details: <a href='https://www.gate.io/zh/article/26346?ch=en_sm_0422' target='_blank'><u>gate.io</u></a><br/>
      ➡️Telegram: <a href='https://t.me/gateio_hodl_en' target='_blank'><u>gate.io</u></a><br/>
      `,
    
    },
    {
      title: "10 #ETH Giveaway",
      id: 25,
      image:
        "https://pbs.twimg.com/media/FQpLyBBXMAE8AsS?format=jpg&name=large",
      date: "Apr 18, 2022",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 25).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 25).down : 0,
      link: "https://twitter.com/dypfinance/status/1516108338685165569",

        content: `🚨 Attention #CAWS holders! <br/><br/> 
      We would like to announce a raffle of 10 #ETH to our community!<br/><br/>To enter:<br/><br/>
      ✅ Hold at least one CAWS at the time token id #2500 is minted! <br/>
      ✅ The more CAWS held, the more chances to win!<br/>
      💰 Prizes:<br/>
      1 x 2.5 ETH<br/>
      2 x 1.5 ETH<br/>
      9 x 0.5 ETH<br/>
      `,
    
    },
    {
      title: "Gate.io $DYP Lock-up ＆ Earn #1",
      id: 26,
      image:
        "https://pbs.twimg.com/media/FQXlDOEWQAErq1G?format=jpg&name=large",
      date: "Apr 15, 2022",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 26).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 26).down : 0,
      link: "https://twitter.com/gate_io/status/1514868696069595139",

        content: `🔒#Gate.io $DYP Lock-up ＆ Earn #1  @dypfinance<br/><br/> 
      🕘Launch Time: Apr 18, 8:00:00 UTC<br/><br/>
      🔶Term: 14 days <br/>
      🔶Handling Fee: $0<br/>
      ⚡️APR: 100%<br/><br/>
      ➡️Purchase:<a href='https://www.gateio.pro/hodl/1213' target='_blank'><u>gate.io</u></a><br/>
      ➡️Details:<a href='https://www.gate.io/zh/article/26195?ch=en_sm_0422' target='_blank'><u>gate.io</u></a><br/>
      ➡️Telegram:<a href='https://t.me/gateio_hodl_en' target='_blank'><u>gate.io</u></a><br/>
      `,
   
    },
    {
      title: "KyberDMM Joint Liquidity Mining on Avalanche.",
      id: 27,
      image: "https://miro.medium.com/max/1400/1*GRqMiBZbPRrxqWcshIwU8A.png",
      date: "Sep 19, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 27).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 27).down : 0,
      link: "https://twitter.com/dypfinance/status/1439562983663968262?s=20",

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
    },
    {
      title: "@dypfinance is extending its liquidity mining campaign.",
      id: 28,
      image:
        "https://pbs.twimg.com/media/E_bHfp3UYAEHsbt?format=jpg&name=4096x4096",
      date: "Sep 16, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 28).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 28).down : 0,
      link: "https://twitter.com/hummingbot_io/status/1438559792927178755?s=20",

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
    
    },
    {
      title: "New $PNG reward pools are ready for pre-deposits!",
      id: 29,
      image:
        "https://pbs.twimg.com/media/E9NFwuPVoAQMtdw?format=png&name=900x900",
      date: "Aug 20, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 29).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 29).down : 0,
      link: "https://twitter.com/pangolindex/status/1428563006481260547?s=20",

        content: `<h3>💰New $PNG reward pools are ready for pre-deposits!</h3><br/><br>
      ⏰Rewards start Friday at 1pm UTC<br/><br/>$QI $DYP $WALBT<br/><br/>
      🚀AVAX-QI 1x<br/>🚀PNG-QI 5x<br/>🚀AVAX-DYP 1x <br/>🚀PNG-DYP 5x<br/>🚀AVAX-WALBT 1x<br/>🚀PNG-WALBT 5x<br/><br/>
      ⏬ <a href='https://app.pangolin.exchange/#/png/1' target='_blank'><u>app.pangolin.exchange</u></a>`,
      },
    
    {
      title: "Listing Celebration to @coin98_wallet: Win $2500 in $DYP",
      id: 30,
      image:
        "https://pbs.twimg.com/media/E9D1hZDXsAAqXGu?format=jpg&name=medium",
      date: "Aug 18, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 30).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 30).down : 0,
      link: "https://twitter.com/dypfinance/status/1427912209762603008?s=20",

        content: `<h3>Listing Celebration to @coin98_wallet: Win $2500 in $DYP</h3><br/><br>
     1️⃣ Follow <a href='https://twitter.com/dypfinance' target='_blank'><u>@dypfinance</u></a> and <a href='https://twitter.com/coin98_wallet' target='_blank'><u>@coin98_wallet</u></a><br/><br/>
     2️⃣ Join <a href='https://t.me/dypfinance' target='_blank'><u>t.me/dypfinance</u></a> & <a href='https://t.me/coin98wallet' target='_blank'><u>t.me/coin98wallet</u></a><br/>
     3️⃣ Retweet, like & tag 3 friends<br/>4️⃣ Comment QR Screenshot Coin98 $DYP address<br/><br/>
     🎁 100 lucky winners will receive $25 each!`,
      },
    
    {
      title: "Aircoins is excited to announce newest partner with DYP",
      id: 31,
      image:
        "https://pbs.twimg.com/media/E8DDO9nWEAcEyxA?format=jpg&name=medium",
      date: "Aug 05, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 31).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 31).down : 0,
      link: "https://twitter.com/AIRCOINS_App/status/1423352145697546241",

        content: `Aircoins is excited to announce our newest partner @dypfinance!<br/><br>
      To Celebrate: $1000 in DYP up for grabs!<br/> $750 in $DYP for the best DYP AR photos<br/>$250 in $DYP drawing for following both <br/>
      @AIRCOINS_App and @dypfinance and retweeting this.<br/>Contest ends August 12th<br/>`,
     
    },
    {
      title: "Pangolin hosting a giveaway with Defi Yield Protocol",
      id: 32,
      image:
        "https://pbs.twimg.com/media/E74VgYqUcAEnsON?format=jpg&name=large",
      date: "Jul 12, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 32).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 32).down : 0,
      link: "https://twitter.com/pangolindex/status/1422604691251163142",

        content: `<h3>💸✨$1,000 Giveaway✨💸</h3><br/><br>
      💰We are hosting a giveaway with @dypfinance - 5 lucky winners will get $200!💰<br/> To Enter:<br/>
      ⚡️Follow <a href='https://twitter.com/pangolindex' target='_blank'><u>@pangolindex</u></a> and <a href='https://twitter.com/dypfinance' target='_blank'><u>@dypfinance</u></a><br/>
      ✈️Join the Pangolin and DYP #telegram<br/>💻Join the Pangolin and DYP #discord<br/>👪Tag 3 friends + ♻️retweet`,
      
    },
    {
      title: "DeFi Yield Protocol NFT Creative Competition is LIVE!",
      id: 33,
      image:
        "https://miro.medium.com/max/1400/1*h95JYnco1tuL3IGB0TAjsg.jpeg",
      date: "Jul 12, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 33).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 33).down : 0,
      link: "https://dypfinance.medium.com/defi-yield-protocol-nft-creative-competition-is-live-9d28528fef08",

        content: `To celebrate the launch of NFT Marketplace, the creative competition will officially begin! We invite global NFT creators to use their imagination, compete in terms of creativity, and participate in the creative contest to share DYP tokens worth US $50,000.<br/><br/>
      The contest will begin today, and it will end when at least 1000 NFTs have been created.<br/><br/>
      <b>Rules:</b><br/>
      ✅ Follow <a href='https://twitter.com/dypfinance' target='_blank'><u>@dypfinance</u></a> on Twitter<br/>
      ✅ Retweet <a href='https://twitter.com/dypfinance/status/1414541027248050178?s=20' target='_blank'><u>this post</u></a> with #DeFiYieldProtocol #NFT hashtag<br/>
      ✅ Create your unique NFT on DeFi Yield Protocol <a href='https://nft.dyp.finance/' target='_blank'><u>NFT Marketplace</u></a><br/>
      ✅ Tweet your NFT artwork with the hashtag #DYP #NFT<br/><br/>
      <b>Prizes:</b><br/><br/>
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
     
    },
    {
      date: newsData[110]?.date.slice(0, 10),
      id: 34,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 34).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 34)?.down : 0,
      title: newsData[110]?.title,
      link: newsData[110]?.link,
      image: newsData[110]?.image,
      year: "",
        content: newsData[110]?.content,
    },
    {
      date: newsData[112]?.date.slice(0, 10),
      id: 35,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 35).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 35)?.down : 0,
      title: newsData[112]?.title,
      link: newsData[112]?.link,
      image: newsData[112]?.image,
      year: "",
        content: newsData[112]?.content,
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
      date: "July 12, 2020",
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
      date: newsData[113]?.date.slice(0, 10),
      id: 38,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 38).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 38)?.down : 0,
      title: newsData[113]?.title,
      link: newsData[113]?.link,
      image: newsData[113]?.image,
      year: "",
        content: newsData[113]?.content,
    },
    {
      date: newsData[90]?.date.slice(0, 10),
      id: 39,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 39).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 39)?.down : 0,
      title: newsData[90]?.title,
      link: newsData[90]?.link,
      image: newsData[90]?.image,
      year: "",
        content: newsData[90]?.content,
    },
    {
      title:
        "DeFi Yield Protocol: The First Manipulation Free DeFi platform in BSC and ETH",
      id: 40,
      link: "https://techbullion.com/defi-yield-protocol-the-first-manipulation-free-defi-platform-in-bsc-and-eth/",
      date: " Apr 10, 2021",
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
      date: "Nov 16, 2020",
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
    {
      date: newsData[80]?.date.slice(0, 10),
      id: 42,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 42).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 42)?.down : 0,
      title: newsData[80]?.title,
      link: newsData[80]?.link,
      image: newsData[80]?.image,
      year: "",
        content: newsData[80]?.content,
    },

    {
      date: newsData[88]?.date.slice(0, 10),
      id: 43,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 43).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 43)?.down : 0,
      title: newsData[88]?.title,
      link: newsData[88]?.link,
      image: newsData[88]?.image,
      year: "",
        content: newsData[88]?.content,
    },
    {
      title:
        "DeFi Yield Protocol (DYP) Witnesses Massive Growth Following Binance Smart Chain Integration",
      id: 44,
      link: "https://news.bitcoin.com/defi-yield-protocol-dyp-witnesses-massive-growth-following-binance-smart-chain-integration/",
      date: "Apr 9, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 44).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 44).down : 0,
      image:
        "https://static.news.bitcoin.com/wp-content/uploads/2021/04/RuCUQmM6-dyp-7-prill-1-1280x720.jpg",
     content: `<b>DeFi Yield Protocol (DYP) continues to attain popularity within the decentralized finance sector. Since the launch of the staking dAPP three months ago, DYP Protocol has experienced massive growth in its community.</b><br/><br/>
        <h3><b>DeFi Yield Protocol</b></h3><br/><br/>
        The yield farming platform has over $39 million locked in its ETH staking contract and has paid 7,064 ETH worth over $14 million to liquidity providers. DYP has also experienced a 20x increase in liquidity on popular decentralized exchange Uniswap. At the moment, more than $21,000,000 in liquidity on Uniswap on the DYP/ETH. DYP has also expanded its ecosystem with the integration of Binance Smart Chain (BSC) in February.<br/><br/>
        DeFi Yield Protocol (DYP) allows users that provide liquidity to earn decent returns. It also utilizes an anti-manipulation feature that prevents whales from manipulating the price of its native token, DYP.<br/><br/>
        This is by converting all DYP rewards into ETH daily and sending distributing it directly to holders wallets. This ensures that the liquidity protocol is sustainable and rewards are generated without affecting the price. Thus liquidity providers can provide liquidity providers and earn ETH with minimal risk.<br/><br/>
        This development was followed with the launch of a staking and governance dApp for users to provide liquidity on the Binance Smart Chain. The staking dApp enables users to add liquidity to one of the pools from PancakeSwape: DYP/BNB, DYP/ETH, and DYP/BUSD.<br/><br/>
        <img src='https://static.news.bitcoin.com/wp-content/uploads/2021/04/xFiFdeFs-dyp-7-prill2-760x428.jpg' alt=''/><br/><br/>
        Each pool has four different staking options with liquidity rewards ranging from 30,000 DYP to 100,000 DYP monthly. Also, the rewards depend on the lock time from a minimum of three up to 90 days.<br/><br/>
        Users can also choose between three different cryptocurrencies for rewards, including ETH, BNB, or DYP. In addition, DYP token is now available on BSC as well as Ethereum enabling cross-chain compatibility for users in the DYP ecosystem.<br/><br/>
        Like the Ethereum version of DYP, all pool rewards issued on DYP BSC are automatically converted to BNB by the smart contract and distributed to token holders. If the price of DYP is not affected by more than -2.5%, the maximum value of DYP that does not affect the price will be changed to BNB and added to the next day’s reward.<br/><br/>
        If this continues for seven days and there are undistributed DYP BSC rewards, a governance vote will be held to distribute to the token holders or burn the tokens from circulation.<br/><br/>
        <h3><b>DYP Ethereum/ Binance Smart Chain Bridge</b></h3><br/><br/>
        DeFi Yield Protocol (DYP) has launched a bridge that enables users to swap their DYP tokens between the Ethereum and Binance Smart Chain networks. The cross-platform bridge is designed to ensure easy conversion of assets from ERC-20 to Bep 20 tokens.<br/><br/>
        DYP holders are required to visit the bridge platform and follow a few steps to swap their tokens. The popular wallet MetaMask is supported on the <a href='https://bridge.dyp.finance/' target='_blank'><u>bridge platform</u></a>, and users will need to connect their wallets to the bridge. The maximum amount of DYP tokens that can be swapped per wallet in 24 hours is 10,000 DYP tokens.<br/><br/>
        It should be noted that this is a significant development for DYP protocol as it means that users can easily swap tokens across the two popular smart contract networks. The DeFi sector is expanding into cross-chain compatibility, and DYP protocol has adapted to this new trend.<br/><br/>
        <h3><b>More Developments Expected in Q2</b></h3><br/><br/>
        DYP protocol continues to expand, with the development team set to release more products in the second quarter of 2021. The long-awaited DYP Earn Vault is in the final stages and will be expected to launch once the security audit reports are confirmed.<br/><br/>
        DYP tools, a decentralized tools dashboard that provides information about DeFi projects, will also be launched in the second quarter of the year. Other products under development include a new user interface design and a DYP NFT dApp that will enable the creation and development of NFTs on its platform.<br/>

        `,
     
    },
    {
      title: "DeFi Yield Protocol (DYP): All in One Platform Yielding Benefits",
      id: 45,
      link: "https://cryptopotato.com/defi-yield-protocol-dyp-all-in-one-platform-yielding-benefits/",
      date: "Nov 30, 2020",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 45).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 45).down : 0,
      image:
        "https://cryptopotato.com/wp-content/uploads/2020/11/defiyieldprotocol_cover.jpg",
      content: `Yield farming is undoubtedly taking over the DeFi space since more crypto users have finally realized its merits. DeFi projects are in development as time provides users with diverse income earning services ranging from holding to exchanging or lending digital assets.<br/><br/>
        On that note, Ethereum plays an essential part in establishing and growing most of these tokens with top-notch features like smart contract advancements. The DeFi Yield Protocol (DYP) joins the community facilitating numerous functionalities under one roof. As it launches on December 15th, DYP plans to revolutionize the yielding investment sector and bring in as many investors as possible.<br/><br/>
        <h3><b>Anti-Manipulation Capabilities</b></h3><br/><br/>
        Whale manipulation has been a hand-in-hand concern of the growing DeFi space. A popular example came with SushiSwap – the DEX that was supposed to replace Uniswap. Its <a href='https://cryptopotato.com/sushi-crashing-over-50-as-sushiswaps-lead-developer-sells-his-tokens/' target='_blank'><u>creator</u></a> withdrew millions worth of tokens, essentially crashing the price of SUSHI to the ground.<br/><br/>
        The rewards converted are from the DYP token pools the platform supports, including DYP/USDT, DYP/USDC, DYP/ETH, and DYP/WBTC. Afterward, liquidity rewards are evenly allocated to liquidity providers. The move by DYP guarantees investors that no crypto whale will take over the token, thus ensuring utmost transparency.<br/><br/>
        <h3><b>Smart Contract Technology</b></h3><br/><br/>
        Smart contracts are basically self-executing codes that perform transactions under conditions pre-set by their developer.<br/><br/>
        DYP runs on Ethereum-based smart contracts, enabling investors to take part in <a href='https://cryptopotato.com/what-is-yield-farming-defis-hottest-trend-explained/' target='_blank'><u>yield farming</u></a>, an incentivized way of earning crypto by holding funds in a liquidity pool. Similar to other DeFi projects, DYP leverages Ethereum’s technology to maintain the ecosystem’s functionalities.<br/><br/>
        However, smart contracts are still in danger of bugs, oftentimes caused by a human error, as was the case with YAM Protocol. At DYP, venture capitalists don’t have anything to worry about because the DeFi platform conducts regular auditing procedures on the codes and contracts.<br/><br/>
        Auditing makes sure the contracts run smoothly while safeguarding investors from security threats arising from the bugs. Daily, the smart contract automatically exchanges the DYP tokens to ETH at 00.00 UTC.<br/><br/>
        This means that if the token’s price fluctuates beyond 2.5%, the unaffected DYP is exchanged to ETH while the remaining amount is allocated as rewards for the following day. After seven days, left-over tokens are either burnt or supplied to token holders based on the decisions of the DYP governance system.<br/><br/>
        <h3><b>Mining Pools and Integrated Earning Vaults</b></h3><br/><br/>
        The DYP team has engaged with Ethereum mining since 2017, accumulating a diverse knowledge of blockchain technology. To accelerate the growth of DYP, it hopes to distribute five million tokens to attract more investors to onboard the pool.<br/><br/>
        Furthermore, DYP offers a monthly 10% bonus for Ethereum miners who participate in the DYP mining pool. An automatic earning vault thereafter supplies 75% of profits to the liquidity providers, whereas the remaining 25% regulates the token’s price by re-purchasing DYP.<br/><br/>
        <h3><b>Token Allocation and How to Participate in the Crowdsale</b></h3><br/><br/>
        Crowdsales mainly aim at attracting mainstream investors to join the DYP community as it builds its foundation from scratch. The first pre-sale was productive as the DeFi-based platform managed to sell 570,000 tokens.<br/><br/>
        The maximum distribution of DYP across the market is 30 million, which apportions 75.3% to the public, 8.03% to the team, and investors get the remaining 16.67%. To receive the tokens, users need to make a minimum and maximum purchase of 0.5 ETH and 100 ETH, respectively, onto the crowd sale address.<br/><br/>
        Moreover, the crowd sale process will take place in four rounds, each carrying prices ranging from $2 to $2.50 per token. The first three rounds take place continuously once each round sells out all its tokens. 
        The fourth round kicks in only after the first three rounds complete their sale process before the DYP stake is set. To avoid inconveniences, investors are urged to use a digital wallet compatible with ERC-20 tokens such as Trust Wallet and Metamask.<br/><br/>
        <h3><b>Conclusion</b></h3><br/><br/>
        DYP’s method of stabilizing the token’s prices makes it stand out among other DeFi protocols.
        The platform also committed an amount exceeding $1 million on its mining farm to clearly observe the trader’s needs. Additionally, DYP operates with prominent programming languages, including Bootstrap, HTML5, and Ethereum Solidity Protocol. 
        Furthermore, the protocol is designed to protect investors from dumps as it applies the anti-manipulation feature to eliminate crafty whales.<br/>
        `,
     
    },
    {
      date: newsData[93]?.date.slice(0, 10),
      id: 46,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 46).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 46)?.down : 0,
      title: newsData[93]?.title,
      link: newsData[93]?.link,
      image: newsData[93]?.image,
      year: "",
        content: newsData[93]?.content,
    },
    {
      date: newsData[89]?.date.slice(0, 10),
      id: 47,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 47).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 47)?.down : 0,
      title: newsData[89]?.title,
      link: newsData[89]?.link,
      image: newsData[89]?.image,
      year: "",
        content: newsData[89]?.content,
    },
    {
      title: "DeFi Yield Protocol (DYP) Staking and Governance is Now Live",
      id: 48,
      link: "https://medium.com/the-capital/defi-yield-protocol-dyp-staking-and-governance-is-now-live-e18c0f14a442",
      date: "Dec 19, 2020",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 48).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 48).down : 0,
      image: "https://miro.medium.com/max/1400/1*5KQd_ryoVCcom5cXTnEfmg.png",
       content: `This week, DeFi Yield Protocol (DYP) <a href='https://twitter.com/dypfinance/status/1340047093591883776?s=21' target='_blank'><u>announced</u></a> the official launch of its staking and governance protocols. DYP is a next-gen DeFi platform that seeks to level the playing field between regular investors and whales. To this extent, the platform introduces some new strategies to push ROIs to the max while reducing investor’s exposure to risks. As such, the launch of the platform’s staking and governance Dapp is a critical step on its path to success.<br/><br/>
      <b>DYP Staking Pools</b><br/><br/>
      <a href='https://dyp.finance/earn' target='_blank'><u>DYP staking pools</u></a> allow anyone to provide liquidity to pools and earn rewards. DYP differs from the completion in that all rewards are paid out in Ethereum directly. This feature is an industry first that helps alleviate inflationary concerns while building additional value in the Ethereum network.<br/><br/>
      Additionally, all DYP staking pools feature integrated anti-manipulation protocols and 2.5% slippage. These systems reduce inflation and encourage token price stability in the market. Specifically, the protocol attempts to convert DYP rewards to ETH every day at 00:00 UTC. When the price of DYP is affected by more than -2.5%, the maximum DYP amount that does not affect the price will be swapped to ETH.<br/><br/>
      The <a href='https://cryptoadventure.com/defi-yield-protocol-dyp-a-unique-manipulation-resistant-defi-platform/' target='_blank'><u>anti-manipulation system</u></a> then takes the remaining amount and distributes it in the next day’s rewards. In this way, the protocol ensures that all pool rewards are automatically converted from DYP to ETH daily. Best of all, the system automatically distributes the rewards to the liquidity provider’s wallet. DYP currently supports multiple staking pools. Specifically, DYP/ETH, DYP/USDC, DYP/USDT, and DYP/WBTC pools are available at this time.<br/><br/>
      <b>Governance Dapp</b><br/><br/>
      The launch of DYP’s governance Dapp is another significant step for the platform. DYP features a decentralized governance mechanism that promotes transparency and fairness in the network. Anyone can vote on crucial issues and upgrades to the network.<br/><br/>
      Notably, the more DYP tokens you hold, the more votes you get. This strategy ensures that those who are financially vested in the network get their opinions heard. It also removes the risk of nefarious actors infiltrating the network.<br/><br/>

      <b>Deflationary Options</b><br/><br/>
      DYP leverages various deflationary protocols to promote token stability. Notably, these systems work in tandem with the decentralized governance model to provide a unique community-driven approach to the market. For example, DeFi Yield protocol (DYP) users vote on whether undistributed DYP rewards get distributed to the token holders or burned. They also vote on new liquidity pools, fees, and other vital upgrades.<br/>
      <b>Smart Contracts</b><br/><br/>
      The entire <a href='https://dyp.finance/' target='_blank' ><u>DYP ecosystem</u></a> features an autonomous design that relies on advanced smart contracts to eliminate the need for any human intervention. Keenly, the governance mechanism ensures that the DYP community writes the rules for the network. Smart contracts execute these rules, such as the payment of rewards to liquidity provides autonomously.<br/><br/>
      <b>DYP is Just Getting Started</b><br/><br/>
      DYP has an entire DeFi ecosystem in the works. The platform will support various other functionalities such as mining pools in the coming weeks. Impressively, DYP intends to reward miners monthly with a 10% bonus from the pool’s ETH monthly income.<br/><br/>
      Yield Farming is another advanced DeFi functionality the DYP users will enjoy. Farmers can stake their crypto assets to earn DYP via automated yield farming pools. The platform supports various farming pools, including DYP/ETH, DYP/USDC, DYP/USDT, and DYP/WBTC.<br/><br/>
      <b>DYP — Stake DeFi Tokens and Get Paid in Ethereum</b><br/><br/>
      DYP raises the bar with its new strategy. Paying out DeFi token stakers in Ethereum is sure to spur some interest in the market. Now, anyone can earn some free Ethereum by staking their tokens on DYP.<br/>
      `,
     
    },
    {
      title: "DeFi Projects That Offer Top Staking Rewards in 2021",
      id: 49,
      link: "https://hackernoon.com/defi-projects-that-offer-top-staking-rewards-in-2021-7fs34qs",
      date: "Dec 24, 2020",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 49).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 49).down : 0,
      image:
        "https://hackernoon.imgix.net/images/7LrDe0NwaTW40HBSsVuBSPeo2yd2-1p2p31oo.jpeg?auto=format&fit=max&w=1200",
      content: `The DeFi sector provides investors with exciting opportunities that were previously not possible. Every week, new products, features, and networks enter the market. Each platform promises better returns and a more comprehensive UX. However, not every DeFi platform pays out high staking rewards.<br/><br/>
        Rather than spending days combing through every new platform to determine the most profitable ones, professionals recommend you stick to reputable networks with proven results. These platforms have earned their reputations in the market through optimal ROIs and top-notch security. Here are the DeFi projects with top staking rewards in 2021.<br/><br/>
        <h3><b>MakerDAO</b></h3><br/><br/>
        <a href='https://makerdao.com/en/' target='_blank'><u>MakerDAO</u></a> made a name for itself by introducing blockchain technologies that allow borrowers to use volatile cryptocurrency as collateral for loans of stablecoins. Since its introduction, the network has grown to become one of the world’s largest Ethereum Dapps.<br/><br/>
        This decentralized lending protocol entered the market in December 2015 as the brainchild of CEO Rune Christensen. Interestingly, the network leverages a dual token strategy to accomplish its goals. The DAI stablecoin is the primary currency of the network. Users pay fees, collect rewards and lend out this stablecoin. The network provides both lenders and borrowers with DAI as a means of transparent collateral. Best of all, DAI holders earn interest on their savings when they use this network.<br/><br/>
        The second token in use in the MakerDAO ecosystem is the MKR governance token. MakerDAO is community-governed via a voting system. User’s votes are weighted depending on the amount of MKR tokens they possess. Consequently, everyone gets a say on future developments. Notably, MakerDAO recently made the <a href='https://www.forbes.com/companies/makerdao/?sh=3fa4220d32ee&ref=hackernoon.com' target='_blank'><u>“Forbes 50”</u></a> list for its innovative approach to DeFi.<br/><br/>
        <h3><b>Compound</b></h3><br/><br/>
        <a href='https://compound.finance/?ref=hackernoon.com' target='_blank'><u>Compound</u></a> is the network that launched the current yield farming craze. Compound first introduced its decentralized, blockchain-based protocol that allows you to lend and borrow crypto to the market in mid-summer 2020. The network's strategy was to offer users a small share of transaction fees for contributing liquidity to particular pools on Uniswap or Balancer.<br/><br/>
        Compound supports the borrowing and lending of a selection of cryptocurrencies at this time. Specifically, Dai (DAI), Ether (ETH), USD Coin (USDC), Ox (ZRX), Tether (USDT), Wrapped BTC (WBTC), Basic Attention Token (BAT), Augur (REP), and Sai (SAI) are available. Notably, anyone can borrow from the lending pools with interest and a deposit. <br/><br/>
        This deposit also works as collateral for your loan. It’s what's used to determine the total amount you can borrow as well. However, if the collateral’s value begins to drop, the protocol will automatically sell this deposit to cover your losses.<br/><br/>
        <h3><b>DeFi Yield Protocol - DYP.Finance</b></h3><br/><br/>
        DYP introduces several benefits to the market that make it a top contender in terms of ROIs. The platform includes a variety of notable features such as mining pools and yield farming protocols. Impressively, DYP is the only platform to pay all rewards out in ETH rather than DeFi tokens. This feature is a huge draw for users who often need to convert their rewards into ETH on DEXs such as Uniswap. The removal of this step also removes the fees and delays associated with the process. <br/><br/>
        DYP is all about stopping market manipulation. The platform's developers created a proprietary anti-manipulation system that automatically converts the DYP rewards into ETH every day at 00:00 UTC. The system monitors the price of DYP tokens to ensure this action doesn't drop the token’s value. If the token’s value shows more than a 2.5% drop, the conversion rate will adjust to prevent further losses.<br/><br/>
        Recently, DYP launched its decentralized governance system. This feature works in tandem with the network’s anti-manipulation protocol. Specifically, DYP token holders vote on whether to burn or redistribute the extra DYP tokens not converted in the anti-manipulation process. In this way, DYP provides its community with real token value control measures. <br/><br/>
        <h3><b>Synthetix (SNX)</b></h3><br/><br/>
        Earlier in July 2020, <a href='https://synthetix.io/?ref=hackernoon.com' target='_blank'><u>Synthetix</u></a> ranked at the seventh position in terms of market capitalization. However, the 2017 conceived protocol is continually growing to one of the best currently in existence. The project provides users with a synthetic asset issuance platform and a decentralized exchange platform. <br/><br/>
        Synthetic assets are commonly referred to as Synths, which are digital assets representing real assets such as physical goods, fiat currencies, stocks, or even cryptocurrencies. One of its significant features is the incentivized staking mechanism. It allows users to provide liquidity and maintain the platform. <br/><br/>
        The Synthetix ecosystem runs under the Synthetix Network Token (SNX), available on different exchange platforms. Users can deposit the tokens and use them in staking. In recent months, the SNX token has seen a surge, with its value shooting from $0.79 to $3.32 between June and July 2020. <br/><br/>
        It is forecasted that 250 million tokens will be minted by 2025. The platform remains protected from price swings through its high collateralization rate.<br/><br/>
        <h3><b>Yearn Finance</b></h3><br/><br/>
        <a href='https://yearn.finance/#/portfolio' target='_blank'><u>Yearn Finance</u></a> launched in February 2020 as a liquidity aggregator providing automated yield farming services. Andre Cronje created this open-source DeFi lending protocol to maximize ROIs via interoperability. Specifically, Yearn circulates your locked crypto to get the best interest rates. The network switches these funds between DeFi lending protocols like Compound, Aave, and dYdX.<br/><br/>
        The platform uses select smart contracts known as Vaults that allow users to utilize any asset as liquidity. This strategy permits investors to use liquidity as collateral and manage collateral safely to avoid a default. The network also enables you to lend and borrow stablecoins with interest. <br/><br/>
        Lastly, you can yield farm with these stablecoins directly from the platform’s interface. Lenders enjoy competitive rewards and the ability to reinvest their earnings into the other products offered by Yearn. As such, Yearn users get a high level of flexibility in the market. <br/><br/>
        <h3><b>What DeFi Projects offer the Top Staking Rewards in 2021?</b></h3><br/><br/>
        When it comes to determining the best staking rewards, a lot comes down to your strategy. DeFi is diverse, and you can earn profits in many different ways nowadays. These platforms excel in their efforts to provide new and exciting ways to increase your staking rewards.<br/>

        `,
      
    },
    {
      date: newsData[77]?.date.slice(0, 10),
      id: 50,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 50).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 50)?.down : 0,
      title: newsData[77]?.title,
      link: newsData[77]?.link,
      image: newsData[77]?.image,
      year: "",
        content: newsData[77]?.content,
    },

    {
      date: newsData[78]?.date.slice(0, 10),
      id: 51,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 51).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 51)?.down : 0,
      title: newsData[78]?.title,
      link: newsData[78]?.link,
      image: newsData[78]?.image,
      year: "",
        content: newsData[78]?.content,
    },
    {
      title:
        "Tackling Volatility Issues for Liquidity Providers with DeFi Yield Protocol (DYP)",
      id: 52,
      link: "https://cryptopotato.com/tackling-volatility-issues-for-liquidity-providers-with-defi-yield-protocol-dyp/",
      date: "Jan 5, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 52).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 52).down : 0,
      image:
        "https://www.bitcoininsider.org/sites/default/files/styles/scale_900px/public/field/image/defi_yield_protocol.webp?itok=2ehPm3JM",
     content: `The field of decentralized finance (DeFi) continues to expand, dismissing a lot of speculative notions that last year’s advance was a bubble-like move.<br/><br/>
        According to <a href='https://www.defipulse.com/' target='_blank'><u>data</u></a> from DeFi Pulse, the total value locked in various DeFi protocols exceeds $17.8 billion – an increase that continues in the new year of 2021. Leading the way are some established authorities in the field, though newcomers are also starting to play an important role.<br/><br/>
        However, over the past few months, the cryptocurrency market has entered a state of parabolic advance, causing severe volatility across the board. While the changes so far have been mostly positive, this volatility exposes certain risks to liquidity providers (LPs), perhaps the biggest of which is impermanent loss. <br/><br/>
        That said, DeFi Yield Protocol (DYP) brings forward an interesting concept that tries to tackle the challenges of substantial volatility and lower the risks for LPs as they play an integral role in the future development of the entire field.<br/><br/>
        <h3><b>What is DYP Protocol?</b></h3><br/><br/>
        DeFi Yield Protocol, as the name suggests, is a new protocol that attempts to change the way people earn through liquidity on Ethereum. 
        One of its primary focuses is to defy the argument that DeFi is a space where whales have the power to control the network. In all fairness, this is a strong argument, highlighted by a few events in the recent past.<br/><br/>
        Back in September, one DeFi protocol that gained tremendous popularity was Sushiswap. It promised to provide a solution for Liquidity Providers better than that of Uniswap, which is so far the established market leader when it comes to decentralized exchanges. However, at one point, the developer <a href='https://cryptopotato.com/sushi-crashing-over-50-as-sushiswaps-lead-developer-sells-his-tokens/' target='_blank'><u>sold all of his tokens</u></a>, causing mayhem across the board and crashing the price of the native token in an instant.<br/><br/>
        To prevent this, DYP has integrated an anti-manipulation feature that ensures that all of the pool rewards are automatically converted from DYP to ETH at 00:00 UTC. The system would automatically distribute the rewards to all of the LPs. 
        In essence, this feature is aimed at providing network fairness to all participants as no whale should be able to manipulate the prices of the native DYP token to their advantage.<br/><br/>
        <h3><b>How Does it Work?</b></h3><br/><br/>
        In order to maintain the price stability of the DYP token, the smart contract will automatically convert the DYP rewards to ETH at the time stated above. However, if the price of DYP is affected by more than -2.5%, then the maximum DYP amount that doesn’t affect the price will be swapped to ETH.<br/><br/>
        The remaining amount will remain and will be distributed with the rewards of the following days. In seven days’ time, if there’s still undistributed DYP rewards, the protocol’s governance will vote whether the remaining DYP will be distributed to the token holders (assuming an appropriate slippage tolerance of -2.5%) or it will be burned. Keep in mind that all burned tokens are also removed from circulation.<br/><br/>
        This is also a solution to reduce the risk of impermanent loss. It’s a grave challenge that riddles the DeFi space because when token prices are severely reduced, this impacts liquidity providers, causing them to incur substantial losses.<br/><br/>
        <h3><b>Upcoming Developments</b></h3><br/><br/>
        According to the official website, the DeFi Yield Protocol staking dApp is already live, and it enjoys a TVL of around $46 million at the time of this writing. 
        One of the scheduled events for the first quarter of 2021 is the launch of the DYP Earn Vault. This is an automated yield farming contract that will allow each user to deposit a particular token, for which the protocol itself will automate yield farming strategies by conveniently move the funds between the most profitable platforms.  
        From the generated profits, 75% will be converted to ETH and distributed to liquidity providers, while the remaining 25% will be used to buy back the protocol’s governance token and add liquidity.<br/><br/>
        <h3><b>Closing Words</b></h3><br/><br/>
        The challenges of whale manipulation and impermanent loss are among the most serious in the nascent DeFi space. 
        Solutions such as DeFi Yield Protocol are aimed at handling those problems and making the space more accessible to a larger pool of users. At the same time, its solutions are also intended to automate the yield farming process, providing optimal returns for liquidity providers, which are the cornerstone of the industry.<br/><br/>

        `,

    },
    {
      title: "5 DeFi Projects You Should Know About in 2021",
      link: "https://hackernoon.com/5-defi-projects-you-should-know-about-in-2021-irq347a",
      id: 53,
      date: "Jan 16, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 53).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 53).down : 0,
      image:
        "https://hackernoon.imgix.net/images/7LrDe0NwaTW40HBSsVuBSPeo2yd2-1p2p31oo.jpeg?auto=format&fit=max&w=1200",
       content: `The growth of Defi is remarkable, with the industry making great strides in the past few years. It's quite right to conclude that this industry is probably the next big thing in the financial world, primarily owing to the many use cases of the upcoming projects. <br/><br/>
        Decentralization of finance was the main idea in Defi's creation, and many of the platforms have lived up to that promise. However, with the strong surge in Defi, it's quite challenging for any investor to make conclusions about which project is worth their money. <br/><br/>
        You probably are that investor and wonder what Defi projects show unique features and maybe a potential to grow? Here are some of the most unique Defi projects you should check out for in 2021. <br/><br/>
        <h3><b>Kava</b></h3><br/><br/>
        <a href='https://www.kava.io/?ref=hackernoon.com' target='_blank'><u>Kava</u></a> is a Defi lending platform offering its users USDX stablecoins loans, thus introducing the crypto market's utmost flexibility. Like chainlink, Kava is known for its cross-chain capabilities and its vast array of stablecoin loans. There is a considerable probability that Kava will add bitcoin to its supported coins in the future. <br/><br/>
        As of the time of writing, coinmarketcap reports that Kava was among the best performing Defi platforms, with a $70 million market cap. 
        To ensure all the loans are well collateralized, Kava leverages a protocol dubbed 'collateralized debt position'. Among Kava's unique features include: <br/><br/>
        • Generous support for cross-chain assets.<br/><br/>
        • Provides a yield earning option where USDX stablecoins are minted and contributed to a Hard protocol.<br/><br/>
        • Provides Masternodes and staking opportunities and offers excellent rewards for top 100 validators.<br/><br/>
        • Autonomous system for burning coins to regulate supply thus increase demand and leave the currency deflationary.<br/><br/>
        <h3><b>Ren Protocol</b></h3><br/><br/>
        <a href='https://renproject.io/?ref=hackernoon.com' target='_blank'><u>The Ren protocol</u></a> was initiated with the main aim of providing interoperability between blockchains platforms. The protocol has its native token REN which mainly operates as a bond for the persons running power RenVM Darknodes. 
        It aims to remove the issues of interoperability and cross-blockchain liquidity. According to Coinmarketcap, the REN protocol has a market capitalization of over $300 million.<br/><br/>
        Among some of REN's best features include: <br/><br/>
        • Multi collateral lending, where users can utilize their existing non-custodial smart contracts as collateral for cross-chain assets <br/> <br/>
        • Enables cross-chain OTC trading with the large volume traders not facing high risks of untrustworthy trade counterparties <br/> <br/>
        • Allows users to take cross-chain assets to their decentralized exchanges <br/> <br/>
        <h3><b>Defi Yield Protocol(DYP)</b></h3><br/><br/>
        Defi Yield Protocol is a smart contract-based network designed to decentralize liquidity provision to everyone on the platforms. It merges an Ethereum mining pool and yield farming to ensure maximum profitability. 
        For instance, in 24 hours, DYP users earned about 47.69 ETH. Moreso, in just the first 18 days live, the platform's liquidity providers made 609.98 ETH, an equivalent of $652 thousand. <br/><br/>
        Currently, the most outstanding DYP feature is it's resistance to market manipulation. Due to it allowing everyone to provide liquidity, whalers will not have superiority when causing shifts in prices. 
        Although the platform is already feature-rich, DYP will soon be introducing better systems to ensure better service provision and rewards. Among the features include:<br/><br/>
        Within the next two weeks, DYP will be launching new staking pools with DYP tokens, leading to a total number of 4 DYP staking pools. 
        The staking pools' rewards will depend on the lock period, with the lowest reward being 20% and highest being 35% APR, and the lock time ranging between 30 and 120 days. <br/><br/>
        There will be a RE-INVEST function allowing investors to plow back their rewards without being charged any fee. 
        DYP referral program will credit 5% of rewards received from referred friends to the referee.<br/><br/>
        However, with all those features, DYP is still working hard to give even better products like: <br/><br/>
        • DYP Earn Vault <br/>
        • ETH mining pool <br/>
        • Governance upgrade <br/>
        • DYP tools with 100% decentralization, aiming to bolter DYP use cases <br/>

        <h3><b>Band Protocol</b></h3><br/><br/>
        Band protocol is a platform that collects real-world data taking it to on-chain applications, and also creating some links for exchanging information between on-chain and off-chain data sources. <br/><br/>
        Therefore, the Band protocol gives a gateway for users/developers to get any form of real-world data and use it. Band protocol later launched on Cosmos and reached even more expansive grounds including accessing more real-world data like sports results, insurance, weather etc. <br/><br/>
        Among some of its best features include: <br/><br/>
        • Speed and efficiency <br/>
        • Compatibility with many blockchains <br/>
        • Permissionless oracle creation <br/>
        • Simple, smart contract integration <br/><br/>

        <h3><b>0x</b></h3><br/><br/>
        Ox is a Defi protocol designed to eat the process of Swapping ERC20 tokens built on the Ethereum network. The protocol can scale-out things in the Ethereum blockchain, enabling the chain to be more scalable, thus handling more transactions.  <br/><br/>
        Ox network's good performance is increased speed, security and immutability of the Ethereum blockchain. 
        In coinmarketcap, Ox is among the top 20 best performing Defi platforms, with an adequate market capitalization. There are currently 1 billion ZRX in circulation.  <br/><br/>
        Unique features from Ox include: <br/><br/>
        • It supports both ERC 20 and ERC-723 tokens from the Ethereum network <br/>
        • Has comprehensive and unique applications including its possibility of being applied in marketplaces <br/>
        • Permissionless oracle creation <br/>
        • Shared liquidity <br/>
        • Trustless exchange <br/>

        <br/>
        
        <h3><b>Conclusion</b></h3><br/><br/>
        The Ren protocol provides powerful tools, in multi collateral lending, and cross-chain trading. The band protocol offers top speed, compatibility and proper smart contract integration. <br/><br/>
        Ox protocol offers top solutions to the Ethereum blockchain, including scalability. Kava is an excellent USDX stablecoin lending platform, opening a world of opportunities for users. Defi yield protocol, a feature-rich platform that guarantees users top stability with features like resistance to manipulation, and the earn feature to help users maximize income.<br/>

        `,
     
    },
  ];


  useEffect(() => {
    if (newsData.length > 0 && votes.length > 0) {
      const finalNews = [];
      for (let i = 0; i < newsArray.length; i++) {
        newsArray[i].end = votes[i];
        finalNews.push(newsArray[i]);
      }
      for (let i = 0; i < newsData.length; i++) {
        newsData[i].end = votes[57 + i];
        finalNews.push(newsData[i]);
        setFinalNewsData(finalNews);
      }
      
    }
  }, [newsData.length, news_id]);

  useEffect(() => {
    fetchNewsdata().then();
  },[finalNewsData.length]);


// console.log(finalNewsData)
  const press_highlight = [

    {
      date: newsData[110]?.date.slice(0, 10),
      id: 34,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 34).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 34)?.down : 0,
      title: newsData[110]?.title,
      link: newsData[110]?.link,
      image: newsData[110]?.image,
      year: "",
        content: newsData[110]?.content,
    },
    {
      date: newsData[112]?.date.slice(0, 10),
      id: 35,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 35).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 35)?.down : 0,
      title: newsData[112]?.title,
      link: newsData[112]?.link,
      image: newsData[112]?.image,
      year: "",
        content: newsData[112]?.content,
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
      date: "July 12, 2020",
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
      date: newsData[113]?.date.slice(0, 10),
      id: 38,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 38).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 38)?.down : 0,
      title: newsData[113]?.title,
      link: newsData[113]?.link,
      image: newsData[113]?.image,
      year: "",
        content: newsData[113]?.content,
    },
    {
      date: newsData[90]?.date.slice(0, 10),
      id: 39,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 39).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 39)?.down : 0,
      title: newsData[90]?.title,
      link: newsData[90]?.link,
      image: newsData[90]?.image,
      year: "",
        content: newsData[90]?.content,
    },

    {
      title:
        "DeFi Yield Protocol: The First Manipulation Free DeFi platform in BSC and ETH",
      id: 40,
      link: "https://techbullion.com/defi-yield-protocol-the-first-manipulation-free-defi-platform-in-bsc-and-eth/",
      date: " Apr 10, 2021",
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
      date: "Nov 16, 2020",
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


    {
      date: newsData[80]?.date.slice(0, 10),
      id: 42,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 42).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 42)?.down : 0,
      title: newsData[80]?.title,
      link: newsData[80]?.link,
      image: newsData[80]?.image,
      year: "",
        content: newsData[80]?.content,
    },
    {
      date: newsData[88]?.date.slice(0, 10),
      id: 43,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 43).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 43)?.down : 0,
      title: newsData[88]?.title,
      link: newsData[88]?.link,
      image: newsData[88]?.image,
      year: "",
        content: newsData[88]?.content,
    },


    {
      title:
        "DeFi Yield Protocol (DYP) Witnesses Massive Growth Following Binance Smart Chain Integration",
      id: 44,
      link: "https://news.bitcoin.com/defi-yield-protocol-dyp-witnesses-massive-growth-following-binance-smart-chain-integration/",
      date: "Apr 9, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 44).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 44).down : 0,
      image:
        "https://static.news.bitcoin.com/wp-content/uploads/2021/04/RuCUQmM6-dyp-7-prill-1-1280x720.jpg",
      content: `<b>DeFi Yield Protocol (DYP) continues to attain popularity within the decentralized finance sector. Since the launch of the staking dAPP three months ago, DYP Protocol has experienced massive growth in its community.</b><br/><br/>
        <h3><b>DeFi Yield Protocol</b></h3><br/><br/>
        The yield farming platform has over $39 million locked in its ETH staking contract and has paid 7,064 ETH worth over $14 million to liquidity providers. DYP has also experienced a 20x increase in liquidity on popular decentralized exchange Uniswap. At the moment, more than $21,000,000 in liquidity on Uniswap on the DYP/ETH. DYP has also expanded its ecosystem with the integration of Binance Smart Chain (BSC) in February.<br/><br/>
        DeFi Yield Protocol (DYP) allows users that provide liquidity to earn decent returns. It also utilizes an anti-manipulation feature that prevents whales from manipulating the price of its native token, DYP.<br/><br/>
        This is by converting all DYP rewards into ETH daily and sending distributing it directly to holders wallets. This ensures that the liquidity protocol is sustainable and rewards are generated without affecting the price. Thus liquidity providers can provide liquidity providers and earn ETH with minimal risk.<br/><br/>
        This development was followed with the launch of a staking and governance dApp for users to provide liquidity on the Binance Smart Chain. The staking dApp enables users to add liquidity to one of the pools from PancakeSwape: DYP/BNB, DYP/ETH, and DYP/BUSD.<br/><br/>
        <img src='https://static.news.bitcoin.com/wp-content/uploads/2021/04/xFiFdeFs-dyp-7-prill2-760x428.jpg' alt=''/><br/><br/>
        Each pool has four different staking options with liquidity rewards ranging from 30,000 DYP to 100,000 DYP monthly. Also, the rewards depend on the lock time from a minimum of three up to 90 days.<br/><br/>
        Users can also choose between three different cryptocurrencies for rewards, including ETH, BNB, or DYP. In addition, DYP token is now available on BSC as well as Ethereum enabling cross-chain compatibility for users in the DYP ecosystem.<br/><br/>
        Like the Ethereum version of DYP, all pool rewards issued on DYP BSC are automatically converted to BNB by the smart contract and distributed to token holders. If the price of DYP is not affected by more than -2.5%, the maximum value of DYP that does not affect the price will be changed to BNB and added to the next day’s reward.<br/><br/>
        If this continues for seven days and there are undistributed DYP BSC rewards, a governance vote will be held to distribute to the token holders or burn the tokens from circulation.<br/><br/>
        <h3><b>DYP Ethereum/ Binance Smart Chain Bridge</b></h3><br/><br/>
        DeFi Yield Protocol (DYP) has launched a bridge that enables users to swap their DYP tokens between the Ethereum and Binance Smart Chain networks. The cross-platform bridge is designed to ensure easy conversion of assets from ERC-20 to Bep 20 tokens.<br/><br/>
        DYP holders are required to visit the bridge platform and follow a few steps to swap their tokens. The popular wallet MetaMask is supported on the <a href='https://bridge.dyp.finance/' target='_blank'><u>bridge platform</u></a>, and users will need to connect their wallets to the bridge. The maximum amount of DYP tokens that can be swapped per wallet in 24 hours is 10,000 DYP tokens.<br/><br/>
        It should be noted that this is a significant development for DYP protocol as it means that users can easily swap tokens across the two popular smart contract networks. The DeFi sector is expanding into cross-chain compatibility, and DYP protocol has adapted to this new trend.<br/><br/>
        <h3><b>More Developments Expected in Q2</b></h3><br/><br/>
        DYP protocol continues to expand, with the development team set to release more products in the second quarter of 2021. The long-awaited DYP Earn Vault is in the final stages and will be expected to launch once the security audit reports are confirmed.<br/><br/>
        DYP tools, a decentralized tools dashboard that provides information about DeFi projects, will also be launched in the second quarter of the year. Other products under development include a new user interface design and a DYP NFT dApp that will enable the creation and development of NFTs on its platform.<br/>

        `,
      
    },
    {
      title: "DeFi Yield Protocol (DYP): All in One Platform Yielding Benefits",
      id: 45,
      link: "https://cryptopotato.com/defi-yield-protocol-dyp-all-in-one-platform-yielding-benefits/",
      date: "Nov 30, 2020",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 45).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 45).down : 0,
      image:
        "https://cryptopotato.com/wp-content/uploads/2020/11/defiyieldprotocol_cover.jpg",
      content: `Yield farming is undoubtedly taking over the DeFi space since more crypto users have finally realized its merits. DeFi projects are in development as time provides users with diverse income earning services ranging from holding to exchanging or lending digital assets.<br/><br/>
        On that note, Ethereum plays an essential part in establishing and growing most of these tokens with top-notch features like smart contract advancements. The DeFi Yield Protocol (DYP) joins the community facilitating numerous functionalities under one roof. As it launches on December 15th, DYP plans to revolutionize the yielding investment sector and bring in as many investors as possible.<br/><br/>
        <h3><b>Anti-Manipulation Capabilities</b></h3><br/><br/>
        Whale manipulation has been a hand-in-hand concern of the growing DeFi space. A popular example came with SushiSwap – the DEX that was supposed to replace Uniswap. Its <a href='https://cryptopotato.com/sushi-crashing-over-50-as-sushiswaps-lead-developer-sells-his-tokens/' target='_blank'><u>creator</u></a> withdrew millions worth of tokens, essentially crashing the price of SUSHI to the ground.<br/><br/>
        The rewards converted are from the DYP token pools the platform supports, including DYP/USDT, DYP/USDC, DYP/ETH, and DYP/WBTC. Afterward, liquidity rewards are evenly allocated to liquidity providers. The move by DYP guarantees investors that no crypto whale will take over the token, thus ensuring utmost transparency.<br/><br/>
        <h3><b>Smart Contract Technology</b></h3><br/><br/>
        Smart contracts are basically self-executing codes that perform transactions under conditions pre-set by their developer.<br/><br/>
        DYP runs on Ethereum-based smart contracts, enabling investors to take part in <a href='https://cryptopotato.com/what-is-yield-farming-defis-hottest-trend-explained/' target='_blank'><u>yield farming</u></a>, an incentivized way of earning crypto by holding funds in a liquidity pool. Similar to other DeFi projects, DYP leverages Ethereum’s technology to maintain the ecosystem’s functionalities.<br/><br/>
        However, smart contracts are still in danger of bugs, oftentimes caused by a human error, as was the case with YAM Protocol. At DYP, venture capitalists don’t have anything to worry about because the DeFi platform conducts regular auditing procedures on the codes and contracts.<br/><br/>
        Auditing makes sure the contracts run smoothly while safeguarding investors from security threats arising from the bugs. Daily, the smart contract automatically exchanges the DYP tokens to ETH at 00.00 UTC.<br/><br/>
        This means that if the token’s price fluctuates beyond 2.5%, the unaffected DYP is exchanged to ETH while the remaining amount is allocated as rewards for the following day. After seven days, left-over tokens are either burnt or supplied to token holders based on the decisions of the DYP governance system.<br/><br/>
        <h3><b>Mining Pools and Integrated Earning Vaults</b></h3><br/><br/>
        The DYP team has engaged with Ethereum mining since 2017, accumulating a diverse knowledge of blockchain technology. To accelerate the growth of DYP, it hopes to distribute five million tokens to attract more investors to onboard the pool.<br/><br/>
        Furthermore, DYP offers a monthly 10% bonus for Ethereum miners who participate in the DYP mining pool. An automatic earning vault thereafter supplies 75% of profits to the liquidity providers, whereas the remaining 25% regulates the token’s price by re-purchasing DYP.<br/><br/>
        <h3><b>Token Allocation and How to Participate in the Crowdsale</b></h3><br/><br/>
        Crowdsales mainly aim at attracting mainstream investors to join the DYP community as it builds its foundation from scratch. The first pre-sale was productive as the DeFi-based platform managed to sell 570,000 tokens.<br/><br/>
        The maximum distribution of DYP across the market is 30 million, which apportions 75.3% to the public, 8.03% to the team, and investors get the remaining 16.67%. To receive the tokens, users need to make a minimum and maximum purchase of 0.5 ETH and 100 ETH, respectively, onto the crowd sale address.<br/><br/>
        Moreover, the crowd sale process will take place in four rounds, each carrying prices ranging from $2 to $2.50 per token. The first three rounds take place continuously once each round sells out all its tokens. 
        The fourth round kicks in only after the first three rounds complete their sale process before the DYP stake is set. To avoid inconveniences, investors are urged to use a digital wallet compatible with ERC-20 tokens such as Trust Wallet and Metamask.<br/><br/>
        <h3><b>Conclusion</b></h3><br/><br/>
        DYP’s method of stabilizing the token’s prices makes it stand out among other DeFi protocols.
        The platform also committed an amount exceeding $1 million on its mining farm to clearly observe the trader’s needs. Additionally, DYP operates with prominent programming languages, including Bootstrap, HTML5, and Ethereum Solidity Protocol. 
        Furthermore, the protocol is designed to protect investors from dumps as it applies the anti-manipulation feature to eliminate crafty whales.<br/>
        `,
      
    },


    {
      date: newsData[93]?.date.slice(0, 10),
      id: 46,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 46).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 46)?.down : 0,
      title: newsData[93]?.title,
      link: newsData[93]?.link,
      image: newsData[93]?.image,
      year: "",
        content: newsData[93]?.content,
    },
    {
      date: newsData[89]?.date.slice(0, 10),
      id: 47,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 47).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 47)?.down : 0,
      title: newsData[89]?.title,
      link: newsData[89]?.link,
      image: newsData[89]?.image,
      year: "",
        content: newsData[89]?.content,
    },



    {
      title: "DeFi Yield Protocol (DYP) Staking and Governance is Now Live",
      id: 48,
      link: "https://medium.com/the-capital/defi-yield-protocol-dyp-staking-and-governance-is-now-live-e18c0f14a442",
      date: "Dec 19, 2020",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 48).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 48).down : 0,
      image: "https://miro.medium.com/max/1400/1*5KQd_ryoVCcom5cXTnEfmg.png",
  content: `This week, DeFi Yield Protocol (DYP) <a href='https://twitter.com/dypfinance/status/1340047093591883776?s=21' target='_blank'><u>announced</u></a> the official launch of its staking and governance protocols. DYP is a next-gen DeFi platform that seeks to level the playing field between regular investors and whales. To this extent, the platform introduces some new strategies to push ROIs to the max while reducing investor’s exposure to risks. As such, the launch of the platform’s staking and governance Dapp is a critical step on its path to success.<br/><br/>
      <b>DYP Staking Pools</b><br/><br/>
      <a href='https://dyp.finance/earn' target='_blank'><u>DYP staking pools</u></a> allow anyone to provide liquidity to pools and earn rewards. DYP differs from the completion in that all rewards are paid out in Ethereum directly. This feature is an industry first that helps alleviate inflationary concerns while building additional value in the Ethereum network.<br/><br/>
      Additionally, all DYP staking pools feature integrated anti-manipulation protocols and 2.5% slippage. These systems reduce inflation and encourage token price stability in the market. Specifically, the protocol attempts to convert DYP rewards to ETH every day at 00:00 UTC. When the price of DYP is affected by more than -2.5%, the maximum DYP amount that does not affect the price will be swapped to ETH.<br/><br/>
      The <a href='https://cryptoadventure.com/defi-yield-protocol-dyp-a-unique-manipulation-resistant-defi-platform/' target='_blank'><u>anti-manipulation system</u></a> then takes the remaining amount and distributes it in the next day’s rewards. In this way, the protocol ensures that all pool rewards are automatically converted from DYP to ETH daily. Best of all, the system automatically distributes the rewards to the liquidity provider’s wallet. DYP currently supports multiple staking pools. Specifically, DYP/ETH, DYP/USDC, DYP/USDT, and DYP/WBTC pools are available at this time.<br/><br/>
      <b>Governance Dapp</b><br/><br/>
      The launch of DYP’s governance Dapp is another significant step for the platform. DYP features a decentralized governance mechanism that promotes transparency and fairness in the network. Anyone can vote on crucial issues and upgrades to the network.<br/><br/>
      Notably, the more DYP tokens you hold, the more votes you get. This strategy ensures that those who are financially vested in the network get their opinions heard. It also removes the risk of nefarious actors infiltrating the network.<br/><br/>

      <b>Deflationary Options</b><br/><br/>
      DYP leverages various deflationary protocols to promote token stability. Notably, these systems work in tandem with the decentralized governance model to provide a unique community-driven approach to the market. For example, DeFi Yield protocol (DYP) users vote on whether undistributed DYP rewards get distributed to the token holders or burned. They also vote on new liquidity pools, fees, and other vital upgrades.<br/>
      <b>Smart Contracts</b><br/><br/>
      The entire <a href='https://dyp.finance/' target='_blank' ><u>DYP ecosystem</u></a> features an autonomous design that relies on advanced smart contracts to eliminate the need for any human intervention. Keenly, the governance mechanism ensures that the DYP community writes the rules for the network. Smart contracts execute these rules, such as the payment of rewards to liquidity provides autonomously.<br/><br/>
      <b>DYP is Just Getting Started</b><br/><br/>
      DYP has an entire DeFi ecosystem in the works. The platform will support various other functionalities such as mining pools in the coming weeks. Impressively, DYP intends to reward miners monthly with a 10% bonus from the pool’s ETH monthly income.<br/><br/>
      Yield Farming is another advanced DeFi functionality the DYP users will enjoy. Farmers can stake their crypto assets to earn DYP via automated yield farming pools. The platform supports various farming pools, including DYP/ETH, DYP/USDC, DYP/USDT, and DYP/WBTC.<br/><br/>
      <b>DYP — Stake DeFi Tokens and Get Paid in Ethereum</b><br/><br/>
      DYP raises the bar with its new strategy. Paying out DeFi token stakers in Ethereum is sure to spur some interest in the market. Now, anyone can earn some free Ethereum by staking their tokens on DYP.<br/>
      `,
      
    },
    {
      title: "DeFi Projects That Offer Top Staking Rewards in 2021",
      id: 49,
      link: "https://hackernoon.com/defi-projects-that-offer-top-staking-rewards-in-2021-7fs34qs",
      date: "Dec 24, 2020",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 49).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 49).down : 0,
      image:
        "https://hackernoon.imgix.net/images/7LrDe0NwaTW40HBSsVuBSPeo2yd2-1p2p31oo.jpeg?auto=format&fit=max&w=1200",
       content: `The DeFi sector provides investors with exciting opportunities that were previously not possible. Every week, new products, features, and networks enter the market. Each platform promises better returns and a more comprehensive UX. However, not every DeFi platform pays out high staking rewards.<br/><br/>
        Rather than spending days combing through every new platform to determine the most profitable ones, professionals recommend you stick to reputable networks with proven results. These platforms have earned their reputations in the market through optimal ROIs and top-notch security. Here are the DeFi projects with top staking rewards in 2021.<br/><br/>
        <h3><b>MakerDAO</b></h3><br/><br/>
        <a href='https://makerdao.com/en/' target='_blank'><u>MakerDAO</u></a> made a name for itself by introducing blockchain technologies that allow borrowers to use volatile cryptocurrency as collateral for loans of stablecoins. Since its introduction, the network has grown to become one of the world’s largest Ethereum Dapps.<br/><br/>
        This decentralized lending protocol entered the market in December 2015 as the brainchild of CEO Rune Christensen. Interestingly, the network leverages a dual token strategy to accomplish its goals. The DAI stablecoin is the primary currency of the network. Users pay fees, collect rewards and lend out this stablecoin. The network provides both lenders and borrowers with DAI as a means of transparent collateral. Best of all, DAI holders earn interest on their savings when they use this network.<br/><br/>
        The second token in use in the MakerDAO ecosystem is the MKR governance token. MakerDAO is community-governed via a voting system. User’s votes are weighted depending on the amount of MKR tokens they possess. Consequently, everyone gets a say on future developments. Notably, MakerDAO recently made the <a href='https://www.forbes.com/companies/makerdao/?sh=3fa4220d32ee&ref=hackernoon.com' target='_blank'><u>“Forbes 50”</u></a> list for its innovative approach to DeFi.<br/><br/>
        <h3><b>Compound</b></h3><br/><br/>
        <a href='https://compound.finance/?ref=hackernoon.com' target='_blank'><u>Compound</u></a> is the network that launched the current yield farming craze. Compound first introduced its decentralized, blockchain-based protocol that allows you to lend and borrow crypto to the market in mid-summer 2020. The network's strategy was to offer users a small share of transaction fees for contributing liquidity to particular pools on Uniswap or Balancer.<br/><br/>
        Compound supports the borrowing and lending of a selection of cryptocurrencies at this time. Specifically, Dai (DAI), Ether (ETH), USD Coin (USDC), Ox (ZRX), Tether (USDT), Wrapped BTC (WBTC), Basic Attention Token (BAT), Augur (REP), and Sai (SAI) are available. Notably, anyone can borrow from the lending pools with interest and a deposit. <br/><br/>
        This deposit also works as collateral for your loan. It’s what's used to determine the total amount you can borrow as well. However, if the collateral’s value begins to drop, the protocol will automatically sell this deposit to cover your losses.<br/><br/>
        <h3><b>DeFi Yield Protocol - DYP.Finance</b></h3><br/><br/>
        DYP introduces several benefits to the market that make it a top contender in terms of ROIs. The platform includes a variety of notable features such as mining pools and yield farming protocols. Impressively, DYP is the only platform to pay all rewards out in ETH rather than DeFi tokens. This feature is a huge draw for users who often need to convert their rewards into ETH on DEXs such as Uniswap. The removal of this step also removes the fees and delays associated with the process. <br/><br/>
        DYP is all about stopping market manipulation. The platform's developers created a proprietary anti-manipulation system that automatically converts the DYP rewards into ETH every day at 00:00 UTC. The system monitors the price of DYP tokens to ensure this action doesn't drop the token’s value. If the token’s value shows more than a 2.5% drop, the conversion rate will adjust to prevent further losses.<br/><br/>
        Recently, DYP launched its decentralized governance system. This feature works in tandem with the network’s anti-manipulation protocol. Specifically, DYP token holders vote on whether to burn or redistribute the extra DYP tokens not converted in the anti-manipulation process. In this way, DYP provides its community with real token value control measures. <br/><br/>
        <h3><b>Synthetix (SNX)</b></h3><br/><br/>
        Earlier in July 2020, <a href='https://synthetix.io/?ref=hackernoon.com' target='_blank'><u>Synthetix</u></a> ranked at the seventh position in terms of market capitalization. However, the 2017 conceived protocol is continually growing to one of the best currently in existence. The project provides users with a synthetic asset issuance platform and a decentralized exchange platform. <br/><br/>
        Synthetic assets are commonly referred to as Synths, which are digital assets representing real assets such as physical goods, fiat currencies, stocks, or even cryptocurrencies. One of its significant features is the incentivized staking mechanism. It allows users to provide liquidity and maintain the platform. <br/><br/>
        The Synthetix ecosystem runs under the Synthetix Network Token (SNX), available on different exchange platforms. Users can deposit the tokens and use them in staking. In recent months, the SNX token has seen a surge, with its value shooting from $0.79 to $3.32 between June and July 2020. <br/><br/>
        It is forecasted that 250 million tokens will be minted by 2025. The platform remains protected from price swings through its high collateralization rate.<br/><br/>
        <h3><b>Yearn Finance</b></h3><br/><br/>
        <a href='https://yearn.finance/#/portfolio' target='_blank'><u>Yearn Finance</u></a> launched in February 2020 as a liquidity aggregator providing automated yield farming services. Andre Cronje created this open-source DeFi lending protocol to maximize ROIs via interoperability. Specifically, Yearn circulates your locked crypto to get the best interest rates. The network switches these funds between DeFi lending protocols like Compound, Aave, and dYdX.<br/><br/>
        The platform uses select smart contracts known as Vaults that allow users to utilize any asset as liquidity. This strategy permits investors to use liquidity as collateral and manage collateral safely to avoid a default. The network also enables you to lend and borrow stablecoins with interest. <br/><br/>
        Lastly, you can yield farm with these stablecoins directly from the platform’s interface. Lenders enjoy competitive rewards and the ability to reinvest their earnings into the other products offered by Yearn. As such, Yearn users get a high level of flexibility in the market. <br/><br/>
        <h3><b>What DeFi Projects offer the Top Staking Rewards in 2021?</b></h3><br/><br/>
        When it comes to determining the best staking rewards, a lot comes down to your strategy. DeFi is diverse, and you can earn profits in many different ways nowadays. These platforms excel in their efforts to provide new and exciting ways to increase your staking rewards.<br/>

        `,
      
    },

    {
      date: newsData[77]?.date.slice(0, 10),
      id: 50,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 50).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 50)?.down : 0,
      title: newsData[77]?.title,
      link: newsData[77]?.link,
      image: newsData[77]?.image,
      year: "",
        content: newsData[77]?.content,
    },
    {
      date: newsData[78]?.date.slice(0, 10),
      id: 51,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 51).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 51)?.down : 0,
      title: newsData[78]?.title,
      link: newsData[78]?.link,
      image: newsData[78]?.image,
      year: "",
        content: newsData[78]?.content,
    },
    {
      title:
        "Tackling Volatility Issues for Liquidity Providers with DeFi Yield Protocol (DYP)",
      id: 52,
      link: "https://cryptopotato.com/tackling-volatility-issues-for-liquidity-providers-with-defi-yield-protocol-dyp/",
      date: "Jan 5, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 52).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 52).down : 0,
      image:
        "https://www.bitcoininsider.org/sites/default/files/styles/scale_900px/public/field/image/defi_yield_protocol.webp?itok=2ehPm3JM",
       content: `The field of decentralized finance (DeFi) continues to expand, dismissing a lot of speculative notions that last year’s advance was a bubble-like move.<br/><br/>
        According to <a href='https://www.defipulse.com/' target='_blank'><u>data</u></a> from DeFi Pulse, the total value locked in various DeFi protocols exceeds $17.8 billion – an increase that continues in the new year of 2021. Leading the way are some established authorities in the field, though newcomers are also starting to play an important role.<br/><br/>
        However, over the past few months, the cryptocurrency market has entered a state of parabolic advance, causing severe volatility across the board. While the changes so far have been mostly positive, this volatility exposes certain risks to liquidity providers (LPs), perhaps the biggest of which is impermanent loss. <br/><br/>
        That said, DeFi Yield Protocol (DYP) brings forward an interesting concept that tries to tackle the challenges of substantial volatility and lower the risks for LPs as they play an integral role in the future development of the entire field.<br/><br/>
        <h3><b>What is DYP Protocol?</b></h3><br/><br/>
        DeFi Yield Protocol, as the name suggests, is a new protocol that attempts to change the way people earn through liquidity on Ethereum. 
        One of its primary focuses is to defy the argument that DeFi is a space where whales have the power to control the network. In all fairness, this is a strong argument, highlighted by a few events in the recent past.<br/><br/>
        Back in September, one DeFi protocol that gained tremendous popularity was Sushiswap. It promised to provide a solution for Liquidity Providers better than that of Uniswap, which is so far the established market leader when it comes to decentralized exchanges. However, at one point, the developer <a href='https://cryptopotato.com/sushi-crashing-over-50-as-sushiswaps-lead-developer-sells-his-tokens/' target='_blank'><u>sold all of his tokens</u></a>, causing mayhem across the board and crashing the price of the native token in an instant.<br/><br/>
        To prevent this, DYP has integrated an anti-manipulation feature that ensures that all of the pool rewards are automatically converted from DYP to ETH at 00:00 UTC. The system would automatically distribute the rewards to all of the LPs. 
        In essence, this feature is aimed at providing network fairness to all participants as no whale should be able to manipulate the prices of the native DYP token to their advantage.<br/><br/>
        <h3><b>How Does it Work?</b></h3><br/><br/>
        In order to maintain the price stability of the DYP token, the smart contract will automatically convert the DYP rewards to ETH at the time stated above. However, if the price of DYP is affected by more than -2.5%, then the maximum DYP amount that doesn’t affect the price will be swapped to ETH.<br/><br/>
        The remaining amount will remain and will be distributed with the rewards of the following days. In seven days’ time, if there’s still undistributed DYP rewards, the protocol’s governance will vote whether the remaining DYP will be distributed to the token holders (assuming an appropriate slippage tolerance of -2.5%) or it will be burned. Keep in mind that all burned tokens are also removed from circulation.<br/><br/>
        This is also a solution to reduce the risk of impermanent loss. It’s a grave challenge that riddles the DeFi space because when token prices are severely reduced, this impacts liquidity providers, causing them to incur substantial losses.<br/><br/>
        <h3><b>Upcoming Developments</b></h3><br/><br/>
        According to the official website, the DeFi Yield Protocol staking dApp is already live, and it enjoys a TVL of around $46 million at the time of this writing. 
        One of the scheduled events for the first quarter of 2021 is the launch of the DYP Earn Vault. This is an automated yield farming contract that will allow each user to deposit a particular token, for which the protocol itself will automate yield farming strategies by conveniently move the funds between the most profitable platforms.  
        From the generated profits, 75% will be converted to ETH and distributed to liquidity providers, while the remaining 25% will be used to buy back the protocol’s governance token and add liquidity.<br/><br/>
        <h3><b>Closing Words</b></h3><br/><br/>
        The challenges of whale manipulation and impermanent loss are among the most serious in the nascent DeFi space. 
        Solutions such as DeFi Yield Protocol are aimed at handling those problems and making the space more accessible to a larger pool of users. At the same time, its solutions are also intended to automate the yield farming process, providing optimal returns for liquidity providers, which are the cornerstone of the industry.<br/><br/>






        `,
      
    },
    {
      title: "5 DeFi Projects You Should Know About in 2021",
      link: "https://hackernoon.com/5-defi-projects-you-should-know-about-in-2021-irq347a",
      id: 53,
      date: "Jan 16, 2021",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 53).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 53).down : 0,
      image:
        "https://hackernoon.imgix.net/images/7LrDe0NwaTW40HBSsVuBSPeo2yd2-1p2p31oo.jpeg?auto=format&fit=max&w=1200",
    content: `The growth of Defi is remarkable, with the industry making great strides in the past few years. It's quite right to conclude that this industry is probably the next big thing in the financial world, primarily owing to the many use cases of the upcoming projects. <br/><br/>
        Decentralization of finance was the main idea in Defi's creation, and many of the platforms have lived up to that promise. However, with the strong surge in Defi, it's quite challenging for any investor to make conclusions about which project is worth their money. <br/><br/>
        You probably are that investor and wonder what Defi projects show unique features and maybe a potential to grow? Here are some of the most unique Defi projects you should check out for in 2021. <br/><br/>
        <h3><b>Kava</b></h3><br/><br/>
        <a href='https://www.kava.io/?ref=hackernoon.com' target='_blank'><u>Kava</u></a> is a Defi lending platform offering its users USDX stablecoins loans, thus introducing the crypto market's utmost flexibility. Like chainlink, Kava is known for its cross-chain capabilities and its vast array of stablecoin loans. There is a considerable probability that Kava will add bitcoin to its supported coins in the future. <br/><br/>
        As of the time of writing, coinmarketcap reports that Kava was among the best performing Defi platforms, with a $70 million market cap. 
        To ensure all the loans are well collateralized, Kava leverages a protocol dubbed 'collateralized debt position'. Among Kava's unique features include: <br/><br/>
        • Generous support for cross-chain assets.<br/><br/>
        • Provides a yield earning option where USDX stablecoins are minted and contributed to a Hard protocol.<br/><br/>
        • Provides Masternodes and staking opportunities and offers excellent rewards for top 100 validators.<br/><br/>
        • Autonomous system for burning coins to regulate supply thus increase demand and leave the currency deflationary.<br/><br/>
        <h3><b>Ren Protocol</b></h3><br/><br/>
        <a href='https://renproject.io/?ref=hackernoon.com' target='_blank'><u>The Ren protocol</u></a> was initiated with the main aim of providing interoperability between blockchains platforms. The protocol has its native token REN which mainly operates as a bond for the persons running power RenVM Darknodes. 
        It aims to remove the issues of interoperability and cross-blockchain liquidity. According to Coinmarketcap, the REN protocol has a market capitalization of over $300 million.<br/><br/>
        Among some of REN's best features include: <br/><br/>
        • Multi collateral lending, where users can utilize their existing non-custodial smart contracts as collateral for cross-chain assets <br/> <br/>
        • Enables cross-chain OTC trading with the large volume traders not facing high risks of untrustworthy trade counterparties <br/> <br/>
        • Allows users to take cross-chain assets to their decentralized exchanges <br/> <br/>
        <h3><b>Defi Yield Protocol(DYP)</b></h3><br/><br/>
        Defi Yield Protocol is a smart contract-based network designed to decentralize liquidity provision to everyone on the platforms. It merges an Ethereum mining pool and yield farming to ensure maximum profitability. 
        For instance, in 24 hours, DYP users earned about 47.69 ETH. Moreso, in just the first 18 days live, the platform's liquidity providers made 609.98 ETH, an equivalent of $652 thousand. <br/><br/>
        Currently, the most outstanding DYP feature is it's resistance to market manipulation. Due to it allowing everyone to provide liquidity, whalers will not have superiority when causing shifts in prices. 
        Although the platform is already feature-rich, DYP will soon be introducing better systems to ensure better service provision and rewards. Among the features include:<br/><br/>
        Within the next two weeks, DYP will be launching new staking pools with DYP tokens, leading to a total number of 4 DYP staking pools. 
        The staking pools' rewards will depend on the lock period, with the lowest reward being 20% and highest being 35% APR, and the lock time ranging between 30 and 120 days. <br/><br/>
        There will be a RE-INVEST function allowing investors to plow back their rewards without being charged any fee. 
        DYP referral program will credit 5% of rewards received from referred friends to the referee.<br/><br/>
        However, with all those features, DYP is still working hard to give even better products like: <br/><br/>
        • DYP Earn Vault <br/>
        • ETH mining pool <br/>
        • Governance upgrade <br/>
        • DYP tools with 100% decentralization, aiming to bolter DYP use cases <br/>

        <h3><b>Band Protocol</b></h3><br/><br/>
        Band protocol is a platform that collects real-world data taking it to on-chain applications, and also creating some links for exchanging information between on-chain and off-chain data sources. <br/><br/>
        Therefore, the Band protocol gives a gateway for users/developers to get any form of real-world data and use it. Band protocol later launched on Cosmos and reached even more expansive grounds including accessing more real-world data like sports results, insurance, weather etc. <br/><br/>
        Among some of its best features include: <br/><br/>
        • Speed and efficiency <br/>
        • Compatibility with many blockchains <br/>
        • Permissionless oracle creation <br/>
        • Simple, smart contract integration <br/><br/>

        <h3><b>0x</b></h3><br/><br/>
        Ox is a Defi protocol designed to eat the process of Swapping ERC20 tokens built on the Ethereum network. The protocol can scale-out things in the Ethereum blockchain, enabling the chain to be more scalable, thus handling more transactions.  <br/><br/>
        Ox network's good performance is increased speed, security and immutability of the Ethereum blockchain. 
        In coinmarketcap, Ox is among the top 20 best performing Defi platforms, with an adequate market capitalization. There are currently 1 billion ZRX in circulation.  <br/><br/>
        Unique features from Ox include: <br/><br/>
        • It supports both ERC 20 and ERC-723 tokens from the Ethereum network <br/>
        • Has comprehensive and unique applications including its possibility of being applied in marketplaces <br/>
        • Permissionless oracle creation <br/>
        • Shared liquidity <br/>
        • Trustless exchange <br/>

        <br/>
        
        <h3><b>Conclusion</b></h3><br/><br/>
        The Ren protocol provides powerful tools, in multi collateral lending, and cross-chain trading. The band protocol offers top speed, compatibility and proper smart contract integration. <br/><br/>
        Ox protocol offers top solutions to the Ethereum blockchain, including scalability. Kava is an excellent USDX stablecoin lending platform, opening a world of opportunities for users. Defi yield protocol, a feature-rich platform that guarantees users top stability with features like resistance to manipulation, and the earn feature to help users maximize income.<br/>

        `,
    },
  ];

  const bal1 = Number(localStorage.getItem("balance1"));
  const bal2 = Number(localStorage.getItem("balance2"));

  const handleUpVoting = async (itemId) => {
    if (
      (bal1 === 0 && bal2 === 0 && isPremium === false) ||
      isConnected === false
    ) {
      setShowTooltip(true);
    } else {
      let response = null;
      try {
        response = await axios.get(
          `https://news-manage.dyp.finance/api/v1/vote/${itemId}/up`
        );

        fetchVotingdata().then();
        setnewsItemId(itemId);
      } catch (e) {
        console.log(e);
      }
      return response;
    }
  };

  const handleSingleUpVoting = async (itemId) => {
    return await axios
      .get(`https://news-manage.dyp.finance/api/v1/vote/${itemId}/up`)
      .then((data) => {
        data.status === 200 ? setnewsItemId(itemId) : console.error();
      })
      .catch(console.error);
  };

  const handleSingleDownVoting = async (itemId) => {
    return await axios
      .get(`https://news-manage.dyp.finance/api/v1/vote/${itemId}/down`)
      .then((data) => {
        data.status === 200 ? setnewsItemId(itemId) : console.error();
      })
      .catch(console.error);
  };

  const handleDownVoting = async (itemId) => {
    if (
      (bal1 === 0 && bal2 === 0 && isPremium === false) ||
      isConnected === false
    ) {
      setShowTooltip(true);
    } else {
      return await axios
        .get(`https://news-manage.dyp.finance/api/v1/vote/${itemId}/down`)
        .then((data) => {
          data.status === 200 ? setnewsItemId(itemId) : console.error();
        })
        .catch(console.error);
    }
  };
  const handleShowTopvoted = () => {
    const cloneArray = _.cloneDeep(finalNewsData);
    var sortedArrayOfNews = cloneArray.map((obj) => {
      var payload = obj;
      if(obj.upvote !== undefined && obj.downvote !== undefined) {
        payload.diff = Number(obj.upvote) - Number(obj.downvote);
      }

      else {
        payload.diff = Number(obj.end?.up) - Number(obj.end?.down);
      }
      
      return payload;
    });


    const descarray = [...sortedArrayOfNews].sort((a, b) => b.diff - a.diff);

    return descarray;
  };


  const listInnerRef = useRef();

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
  });

  const isBottom = (el) => {
    return el.getBoundingClientRect()?.bottom <= window.innerHeight;
  };

  const onScroll = () => {
    const wrappedElement = document.getElementById("header");
    if (isBottom(wrappedElement)) {
      if(next < finalNewsData.length)
      {loadMore()}
      document.removeEventListener("scroll", onScroll);
    }
  };

  
  return (
    <div onScroll={onScroll} ref={listInnerRef} id="header">
      <div className="news-wrapper">
        {!showModal ? <h1 className="news-title">Popular News</h1> : ""}
        <div className="row m-0 main-news-content-wrapper">
          {showModal === true ? (
            <NewsModal
              style={{ width: "fit-content" }}
              onSelectOtherNews={(key) => {
                window.scrollTo(0, 0);
                handleSelectOtherNews(key);
                setIsParam(false);
              }}
              title={activeNews.title}
              link={activeNews.link}
              image={ activeNews.image}
              content={ activeNews.content}
              theme={theme}
              
              upvotes={
                votes.length !== 0
                  ? activeNews.end?.up !== undefined ? votes.find((obj) => obj.id === activeNews.end.id).up : activeNews.upvote
                  : activeNews.upvote
              }

              downvotes={
                votes.length !== 0
                  ? activeNews.end?.down !== undefined ? votes.find((obj) => obj.id === activeNews.end.id).down : activeNews.downvote
                  : activeNews.downvote
              }
             
              day={activeNews.date.slice(0,10)}
              month={activeNews.month}
              year={activeNews.year}
              latestNewsData={ finalNewsData.slice(54, finalNewsData.length)}
              newsId={activeNews.end.id !== undefined ? activeNews.end.id : activeNews.id}
              pressData={press_highlight}
              onHandleUpvote={(id) => {
                handleUpVoting(id);
              }}
              onHandleDownvote={(id) => {
                handleDownVoting(id);
              }}
              onHandlePressUpvote={(id) => {
                handleUpVoting(id);
              }}
              onHandlePressDownvote={(id) => {
                handleDownVoting(id);
              }}
              isConnected={isConnected}
              onModalClose={() => {
                news_id !== undefined ? window.location.replace('/news') : setShowModal(false);
              }}
              isPremium={isPremium}
            />
          ) : newsData.length > 0 ? (
            <>
              <div className="brand-wrapper banner-wrapper news-left-wrapper">
                <Carousel
                  cols={1}
                  rows={1}
                  gap={10}
                  loop
                  showDots={true}
                  autoplay={4000}
                >
                  {finalNewsData.length > 0 &&
                    finalNewsData.slice(54, 60).map((item, key) => {
                      return (
                        <Carousel.Item key={key}>
                          <div className="">
                            <MainNews
                              image={item.image }
                              title={item.title}
                              link={item.link}
                              day={item.date.slice(0,10)}
                              theme={theme}
                              upvotes={
                                votes.length !== 0
                                  ? votes.find((obj) => obj.id === item.end.id).up
                                  : item.end.up
                              }
                              downvotes={
                                votes.length !== 0
                                  ? votes.find((obj) => obj.id === item.end.id).down
                                  : item.end.down
                              }
                              newsId={item.end.id}
                              onShowModalClick={() => {
                                setShowModal(true);
                                setActiveNews(finalNewsData[key + 54]);
                              }}
                              onUpVoteClick={() => {
                                handleUpVoting(item.end.id);
                              }}
                              onDownVoteClick={() => {
                                handleDownVoting(item.end.id);
                              }}
                              isConnected={isConnected}
                              isPremium={isPremium}
                            />
                          </div>
                        </Carousel.Item>
                      );
                    })}
                </Carousel>

                {showTooltip === true ? (
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setShowTooltip(false);
                    }}
                  >
                    <ToolTip
                      bottom={0}
                      left={0}
                      status={
                        isConnected
                          ? "You need to be holding DYP to vote"
                          : "Please connect your wallet"
                      }
                    />
                  </OutsideClickHandler>
                ) : (
                  <></>
                )}
              </div>
              <div
                className="singlenews-side"
                style={{
                  width: showModal ? "20%" : "33%",
                  display: !showModal ? "flex" : "none",
                }}
              >
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
                {finalNewsData.length > 0 &&
                  activeClass === "latestnews" &&
                  finalNewsData.slice(61, 66).map((item, key) => {
                    return (
                      <div className="banner-item pl-0" key={key}>
                        <SingleNews
                          image={item.image}
                          title={item.title}
                          link={item.link}
                          year={item.year}
                          month={item.month}
                          day={item.date.slice(0,10)}
                          theme={theme}
                          upvotes={
                            votes.length !== 0
                              ? votes.find((obj) => obj.id === item.end.id).up
                              : item.end.up
                          }
                          downvotes={
                            votes.length !== 0
                              ? votes.find((obj) => obj.id === item.end.id).down
                              : item.end.down
                          }
                          onSingleUpVoteClick={() => {
                            handleSingleUpVoting(item.end.id);
                          }}
                          onSingleDownVoteClick={() => {
                            handleSingleDownVoting(item.end.id);
                          }}
                          onNewsClick={() => handleSingleNewsUpdate(key + 61)}
                          isConnected={isConnected}
                          isPremium={isPremium}
                        />
                      </div>
                    );
                  })}

                {handleShowTopvoted().length > 0 &&
                activeClass === "toprated" ? (
                  handleShowTopvoted()
                    .slice(0, 5)
                    .map((item, key) => {
                      //to do sorting
                      return (
                        <div className="banner-item pl-0" key={key}>
                          <SingleNews
                            image={item.image}
                            title={item.title}
                            link={item.link}
                            year={item.year}
                            month={item.month}
                            day={item.date.slice(0,10)}
                            theme={theme}
                            upvotes={
                              votes.length !== 0
                                ? votes.find((obj) => obj.id === item.end.id).up
                                : item.end.up
                            }
                            downvotes={
                              votes.length !== 0
                                ? votes.find((obj) => obj.id === item.end.id).down
                                : item.end.down
                            }

                            onSingleUpVoteClick={() => {
                              handleSingleUpVoting(item.end.id);
                            }}
                            onSingleDownVoteClick={() => {
                              handleSingleDownVoting(item.end.id);
                            }}
                            onNewsClick={() => 
                           handleSingleNewsUpdate(item.end.id -4)
                              // console.log(item)
                            }
                            isConnected={isConnected}
                            isPremium={isPremium}
                          />
                        </div>
                      );
                    })
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <div
              style={{
                padding: "60px",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <CircularProgress color="inherit" size={75} />
            </div>
          )}
        </div>
      </div>
      <div className="press-release-wrapper">
        <h1 className="news-title" style={{ paddingLeft: 20 }}>
          Press Release
        </h1>
        <div className="brand-wrapper banner-wrapper" style={{width: '98%', margin: 'auto'}}>
          <Carousel
            cols={2}
            rows={1}
            gap={1}
            showDots={true}
            loop
            // responsiveLayout={responsive1}
            // autoplay={4000}
          >
            {press_highlight.length > 0 &&
              press_highlight.map((item, key) => {
                return (
                  <Carousel.Item key={key}>
                    <div className="banner-item" style={{ background: "none" }}>
                      <PressRealease
                        image={item.image}
                        title={item.title}
                        link={item.link}
                        date={item.date}
                        isPremium={isPremium}
                        isConnected={isConnected}
                        onSinglePressHighlightClick={() => {
                          // setActiveNews(finalNewsData[key]);
                          handleSelectPressNews(item.id === undefined ? item.end.id : item.id)
                          setShowModal(true);
                          window.scrollTo(0, 0);
                        }}
                        onDownVoteClick={() => {
                          handleDownVoting(item.id);
                        }}
                        onUpVoteClick={() => {
                          handleUpVoting(item.id);
                        }}
                        upvotes={item.upvote}
                        downvotes={item.downvote}

                      />
                    </div>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </div>
      </div>
      <div className="press-release-wrapper" style={{ paddingTop: 0 }}>
        <h1
          className="news-title"
          style={{ paddingLeft: 20, paddingBottom: 20 }}
        >
          Other News
        </h1>
        <div className="row m-0 othernews-row-wrapper" style={{ gap: 10 }}>
          {finalNewsData.length > 0 &&
            finalNewsData?.slice(44, 44+ next)?.map((item, key) => {
             
              return (
                <div
                  className="banner-item"
                  key={key}
                  style={{ background: "none" }}
                >
                  <OtherNews
                    image={item.image}
                    title={item.title}
                    link={item.link}
                    date={item.date.slice(0,10)}
                    month={item.month}
                    year={item.year}
                    theme={theme}
                    upvotes={
                      votes.length !== 0
                        ? item.end?.up !== undefined ? votes.find((obj) => obj.id === item.end.id).up : item.upvote
                        : item.upvote
                    }
                    // newsId={item.end.id !== undefined ? item.end.id : item.id !== undefined ? item.id : key}
                    // downvotes={ item.end.down !== undefined ? item.end.down : item.downvote}
                    downvotes={
                      votes.length !== 0
                        ? item.end?.down !== undefined ? votes.find((obj) => obj.id === item.end.id).down : item.downvote
                        : item.downvote
                    }
                    onOtherNewsClick={() => {
                      item.end.id !== undefined ? handleSelectOtherNews(item.end.id) :
                      handleSelectPressNews(item.id + 1)
                      // console.log(finalNewsData[item.end.id -4])
                      setShowModal(true);
                      window.scrollTo(0, 0);
                    }}
                    onUpVoteClick={() => {
                      handleSingleUpVoting(item.end.id !== undefined ? item.end.id : item.id);
                    }}
                    onDownVoteClick={() => {
                      handleDownVoting(item.end.id !== undefined ? item.end.id : item.id);
                    }}
                    isConnected={isConnected}
                    isPremium={isPremium}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-center">
          {next < finalNewsData?.length /4 && (
            <button onClick={() => loadMore()} className="load-more-btn">
              Load more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
