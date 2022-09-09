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

  const newsPerRow = 8;
  const [activeClass, setActiveClass] = useState("latestnews");
  const [showModal, setShowModal] = useState(false);
  const [newsItemId, setnewsItemId] = useState(-1);
  const [votes, setVotes] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [activeNews, setActiveNews] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isParam, setIsParam] = useState(true);
  const [isConnected, setIsConnected] = useState();
  const { account, chainId, active } = useWeb3React();
  const [pressNewsData, setPressNewsData] = useState([]);
  const [popularNewsData, setPopularNewsData] = useState([]);

  const [otherNewsData, setOtherNewsData] = useState([]);
  const [otherNewsDataReverse, setOtherNewsDataReverse] = useState([]);

  const [newsContent, setNewsContent] = useState([]);

  const [next, setNext] = useState(newsPerRow);

  const loadMore = () => {
    setNext(next + newsPerRow);
  };

  const handleSingleNewsUpdate = (id) => {
    setActiveNews(newsData[id]);
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

  const fetchPressData = async () => {
    const result = await fetch(`https://news-manage.dyp.finance/api/press`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPressNewsData(data);
        // checkSingleVotes(parseInt(data._id))
      })
      .catch(console.error);

    return result;
  };

  const fetchPopularNewsData = async () => {
    const result = await fetch(`https://news-manage.dyp.finance/api/populars`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPopularNewsData(data);
      })
      .catch(console.error);

    return result;
  };

  const checkSingleVotes = async () => {
    if (newsData.length > 0) {
      for (let i = 0; i < newsData.length; i++) {
        axios
          .get(`https://news-manage.dyp.finance/api/v1/votes/${newsData[i].id}`)
          .then((data) => {
            votes.push(data);
          })
          .catch(console.error);
      }
    }

    if (otherNewsData.length > 0) {
      for (let i = 0; i < otherNewsData.length; i++) {
        axios
          .get(
            `https://news-manage.dyp.finance/api/v1/votes/${otherNewsData[i].id}`
          )
          .then((data) => {
            votes.push(data);
          })
          .catch(console.error);
      }
    }

    if (popularNewsData.length > 0) {
      for (let i = 0; i < popularNewsData.length; i++) {
        axios
          .get(
            `https://news-manage.dyp.finance/api/v1/votes/${popularNewsData[i].id}`
          )
          .then((data) => {
            votes.push(data);
          })
          .catch(console.error);
      }
    }

    if (pressNewsData.length > 0) {
      for (let i = 0; i < pressNewsData.length; i++) {
        axios
          .get(
            `https://news-manage.dyp.finance/api/v1/votes/${pressNewsData[i].id}`
          )
          .then((data) => {
            votes.push(data);
          })
          .catch(console.error);
      }
    }
  };

  const fetchOtherNewsData = async () => {
    const result = await fetch(`https://news-manage.dyp.finance/api/others`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOtherNewsData(data);
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
    checkSingleVotes().then();
  }, [showModal, newsItemId]);

  const { news_id } = useParams();
  // console.log(otherNewsData)
  const handleSelectOtherNews = (key) => {
    const search = (obj) => obj.id == key;
    const index = newsData.findIndex(search);
    setActiveNews(newsData[index]);
  };

  const handleSelecTopNews = (key) => {
    const topnews = [
      ...otherNewsData,
      ...popularNewsData,
      ...newsData,
      ...pressNewsData,
    ];
    const search = (obj) => obj.id == key;
    const index = topnews.findIndex(search);
    setActiveNews(topnews[index]);
  };

  const handleFetchNewsContent = async (dataType, itemId) => {
    if (dataType === "popular") {
      const result = await fetch(
        `https://news-manage.dyp.finance/api/populars/${itemId}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setNewsContent(data.content);
        })
        .catch(console.error);

      return result;
    }

    if (dataType === "other") {
      const result = await fetch(
        `https://news-manage.dyp.finance/api/others/${itemId}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setNewsContent(data.content);
        })
        .catch(console.error);

      return result;
    }

    if (dataType === "press") {
      const result = await fetch(
        `https://news-manage.dyp.finance/api/press/${itemId}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setNewsContent(data.content);
        })
        .catch(console.error);

      return result;
    }

    if (dataType === "news") {
      const result = await fetch(
        `https://news-manage.dyp.finance/api/news/${itemId}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setNewsContent(data.content);
        })
        .catch(console.error);

      return result;
    }

    if (dataType === "special") {
      // handleSelectOtherNews(itemId)
      for (let i = 0; i < newsData.length; i++) {
        if (itemId === newsData[i].id) {
          handleFetchNewsContent("news", itemId);
        }
      }

      for (let i = 0; i < popularNewsData.length; i++) {
        if (itemId === popularNewsData[i].id) {
          handleFetchNewsContent("popular", itemId);
        }
      }

      for (let i = 0; i < otherNewsData.length; i++) {
        if (itemId === otherNewsData[i].id) {
          handleFetchNewsContent("other", itemId);
        }
      }

      for (let i = 0; i < pressNewsData.length; i++) {
        if (itemId === pressNewsData[i].id) {
          handleFetchNewsContent("press", itemId);
        }
      }
    }
  };

  const handleSelectPressNews = (key) => {
    if (popularNewsData.length > 0) {
      const search = (obj) => obj.id == key;
      const index = popularNewsData.findIndex(search);
      setActiveNews(popularNewsData[index]);
      handleFetchNewsContent("popular", key);
    }
  };


  const handleSelectTopVotedNews = (key) => {
    const topVotedArray = [...otherNewsData, ...newsData, ...popularNewsData, ...pressNewsData]
    if (topVotedArray.length > 0) {
      const search = (obj) => obj.id == key;
      const index = topVotedArray.findIndex(search);
      setActiveNews(topVotedArray[index]);
      handleFetchNewsContent("special", key);
    }
  };

  const handleDisplayNewsFromParam = () => {
    if (news_id != undefined && isParam === true) {
      window.scrollTo(0, 0);
      setShowModal(true);
      handleSelectPressNews(news_id);
    }
  };

  const sortTopVoted = (arrayOfVotes) => {
    return arrayOfVotes.sort((a, b) =>
      a.up - a.down < b.up - b.down ? 1 : -1
    );
  };

  const topVotes = (votes) => {
    const arrayOfVotes = sortTopVoted(votes);
    const cloneArray = [
      ...otherNewsData,
      ...popularNewsData,
      ...pressNewsData,
      ...newsData,
    ];
    return arrayOfVotes.map((i) => cloneArray.find((j) => j.id === i.id));
  };

  useEffect(() => {
    if (activeNews.date !== undefined) {
      setIsParam(false);
    } else {
      if (newsData.length > 0) {
        fetchNewsdata();
        handleDisplayNewsFromParam();
      }
    }
  }, [newsData.length, news_id]);

  const handleNewsReoderPopular = () => {
    if (popularNewsData.length > 5 && otherNewsData.length > 0) {
      otherNewsData.push(...popularNewsData.slice(6, popularNewsData.length));
      otherNewsData.reverse()
      setOtherNewsDataReverse(otherNewsData)

    }
  };
  
  const handleNewsReoderPress = () => {
    
    if (pressNewsData.length > 8 && otherNewsData.length > 0) {
      otherNewsData.push(...pressNewsData.slice(9, pressNewsData.length));
      otherNewsData.reverse();
      const result = [...new Set(otherNewsData) ]
      setOtherNewsDataReverse(result)

    }
  };

  useEffect(() => {
    handleNewsReoderPopular();
    handleNewsReoderPress();
   
  }, [popularNewsData.length, otherNewsData.length, pressNewsData.length]);

   
  useEffect(() => {
    fetchNewsdata().then();
    fetchPressData().then();
    fetchPopularNewsData().then();
    fetchOtherNewsData().then();
  }, [newsData.length, popularNewsData.length]);

  const bal1 = Number(localStorage.getItem("balance1"));
  const bal2 = Number(localStorage.getItem("balance2"));
  const logout = localStorage.getItem("logout");

  const handleUpVoting = async (itemId) => {
    if (
      (bal1 === 0 && bal2 === 0 && isPremium === false) ||
      logout === "true"
    ) {
      setShowTooltip(true);
    } else {
      let response = null;
      try {
        response = await axios.get(
          `https://news-manage.dyp.finance/api/v1/vote/${itemId}/up`
        );

        fetchVotingdata().then((votes) => topVotes(votes));
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
      logout === "true"
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

  const listInnerRef = useRef();

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
  });

  const isBottom = (el) => {
    return el.getBoundingClientRect()?.bottom <= window.innerHeight;
  };


 

  let bigNews = [...otherNewsDataReverse, ...newsData];

  const onScroll = () => {
    const wrappedElement = document.getElementById("header");
    if (isBottom(wrappedElement)) {
      if (next < bigNews.length) {
        loadMore();
      }
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
                handleSelecTopNews(key);
                setIsParam(false);
              }}
              title={activeNews.title}
              link={activeNews.link}
              image={activeNews.image}
              content={newsContent}
              theme={theme}
              upvotes={
                votes.length !== 0
                  ? votes.find((obj) => obj.id === activeNews.id)?.up
                  : 0
              }
              downvotes={
                votes.length !== 0
                  ? votes.find((obj) => obj.id === activeNews.id)?.down
                  : 0
              }
              day={activeNews.date.slice(0, 10)}
              month={activeNews.month}
              year={activeNews.year}
              latestNewsData={topVotes(votes)}
              newsId={activeNews.id}
              pressData={pressNewsData}
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
                news_id !== undefined
                  ? window.location.replace("/news")
                  : setShowModal(false);
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
                  scrollSnap={true}
                >
                  {popularNewsData.length > 0 &&
                    popularNewsData.slice(0, 5).map((item, key) => {
                      return (
                        <Carousel.Item key={key}>
                          <div className="">
                            <MainNews
                              image={item.image}
                              title={item.title}
                              link={item.link}
                              day={item.date.slice(0, 10)}
                              theme={theme}
                              upvotes={
                                votes.length !== 0
                                  ? votes.find((obj) => obj.id === item.id)?.up
                                  : 0
                              }
                              downvotes={
                                votes.length !== 0
                                  ? votes.find((obj) => obj.id === item.id)
                                      ?.down
                                  : 0
                              }
                              newsId={item.id}
                              onShowModalClick={() => {
                                setShowModal(true);
                                setActiveNews(popularNewsData[key]);
                                handleFetchNewsContent("popular", item.id);
                              }}
                              onUpVoteClick={() => {
                                handleUpVoting(item.id);
                              }}
                              onDownVoteClick={() => {
                                handleDownVoting(item.id);
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
                        logout === "false"
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
                {popularNewsData.length > 0 &&
                  activeClass === "latestnews" &&
                  popularNewsData.slice(0, 5).map((item, key) => {
                    return (
                      <div className="banner-item pl-0" key={key}>
                        <SingleNews
                          image={item.image}
                          title={item.title}
                          link={item.link}
                          year={item.year}
                          month={item.month}
                          day={item.date.slice(0, 10)}
                          theme={theme}
                          upvotes={
                            votes.length !== 0
                              ? votes.find((obj) => obj.id === item.id)?.up
                              : 0
                          }
                          downvotes={
                            votes.length !== 0
                              ? votes.find((obj) => obj.id === item.id)?.down
                              : 0
                          }
                          onSingleUpVoteClick={() => {
                            handleSingleUpVoting(item.id);
                          }}
                          onSingleDownVoteClick={() => {
                            handleSingleDownVoting(item.id);
                          }}
                          onNewsClick={() => {
                            setShowModal(true);
                            setActiveNews(popularNewsData[key]);
                            handleFetchNewsContent("popular", item.id);
                          }}
                          isConnected={isConnected}
                          isPremium={isPremium}
                        />
                      </div>
                    );
                  })}

                {topVotes(votes).length > 0 && //todo
                activeClass === "toprated" ? (
                  topVotes(votes)
                    .slice(0, 5)
                    .map((item, key) => {
                      return (
                        <div className="banner-item pl-0" key={key}>
                          <SingleNews
                            image={item.image}
                            title={item.title}
                            link={item.link}
                            year={item.year}
                            month={item.month}
                            day={item.date.slice(0, 10)}
                            theme={theme}
                            upvotes={
                              votes.length !== 0
                                ? votes.find((obj) => obj.id === item.id)?.up
                                : 0
                            }
                            downvotes={
                              votes.length !== 0
                                ? votes.find((obj) => obj.id === item.id)?.down
                                : 0
                            }
                            onSingleUpVoteClick={() => {
                              handleSingleUpVoting(item.id);
                            }}
                            onSingleDownVoteClick={() => {
                              handleSingleDownVoting(item.id);
                            }}
                            onNewsClick={() => {
                              setShowModal(true);
                              handleSelectTopVotedNews(item.id)
                            }} 
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
        <div
          className="brand-wrapper banner-wrapper"
          style={{ width: "98%", margin: "auto" }}
        >
          <Carousel
            cols={2}
            rows={1}
            gap={1}
            showDots={true}
            loop
            scrollSnap={true}
            responsiveLayout={responsive1}
            autoplay={4000}
          >
            {pressNewsData.length > 0 &&
              pressNewsData.slice(0,8).map((item, key) => {
                return (
                  <Carousel.Item key={key}>
                    <div className="banner-item" style={{ background: "none" }}>
                      <PressRealease
                        image={item.image}
                        title={item.title}
                        link={item.link}
                        date={item.date.slice(0, 10)}
                        isPremium={isPremium}
                        isConnected={isConnected}
                        onSinglePressHighlightClick={() => {
                          setActiveNews(pressNewsData[key]);
                          handleFetchNewsContent("press", item.id);
                          setShowModal(true);
                          window.scrollTo(0, 0);
                        }}
                        onDownVoteClick={() => {
                          handleDownVoting(item.id);
                        }}
                        onUpVoteClick={() => {
                          handleUpVoting(item.id);
                        }}
                        upvotes={
                          votes.length !== 0
                            ? votes.find((obj) => obj.id === item.id)?.up
                            : 0
                        }
                        downvotes={
                          votes.length !== 0
                            ? votes.find((obj) => obj.id === item.id)?.down
                            : 0
                        }
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
          {bigNews.length > 0 &&
            bigNews?.slice(0, next)?.map((item, key) => {
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
                    date={item.date.slice(0, 10)}
                    month={item.month}
                    year={item.year}
                    theme={theme}
                    upvotes={
                      votes.length !== 0
                        ? votes.find((obj) => obj.id === item.id)?.up
                        : 0
                    }
                    newsId={item.id}
                    downvotes={
                      votes.length !== 0
                        ? votes.find((obj) => obj.id === item.id)?.down
                        : 0
                    }
                    onOtherNewsClick={() => {
                      setActiveNews(bigNews[key]);
                      handleFetchNewsContent("special", item.id);
                      setShowModal(true);
                      window.scrollTo(0, 0);
                    }}
                    onUpVoteClick={() => {
                      handleSingleUpVoting(item.id);
                    }}
                    onDownVoteClick={() => {
                      handleDownVoting(item.id);
                    }}
                    isConnected={isConnected}
                    isPremium={isPremium}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-center">
          {next < otherNewsData?.length + newsData.length && (
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
