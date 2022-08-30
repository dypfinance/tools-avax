import React, { useState, useEffect } from "react";
import Carousel from "better-react-carousel";
import Clock from "../news/assets/clock.svg";

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
  });
  const newsArray = [
    {
      date: newsData[0]?.date.slice(0, 10),
      id: 58,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 58).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 58)?.down : 0,
      title: newsData[0]?.title,
      link: newsData[0]?.link,
      imageSrc: newsData[0]?.image,
      year: "",
      content: {
        imageSrc: newsData[0]?.image,
        title: newsData[0]?.title,
        content: newsData[0]?.content,
      },
    },
    {
      date: newsData[1]?.date.slice(0, 10),
      id: 59,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 59).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 59)?.down : 0,
      title: newsData[1]?.title,
      link: newsData[1]?.link,
      imageSrc: newsData[1]?.image,
      year: "",
      content: {
        imageSrc: newsData[1]?.image,
        title: newsData[1]?.title,
        content: newsData[1]?.content,
      },
    },
    {
      date: newsData[2]?.date.slice(0, 10),
      id: 60,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 60).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 60)?.down : 0,
      title: newsData[2]?.title,
      link: newsData[2]?.link,
      imageSrc: newsData[2]?.image,
      year: "",
      content: {
        imageSrc: newsData[2]?.image,
        title: newsData[2]?.title,
        content: newsData[2]?.content,
      },
    },
    {
      date: newsData[3]?.date.slice(0, 10),
      id: 61,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 61).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 61)?.down : 0,
      title: newsData[3]?.title,
      link: newsData[3]?.link,
      imageSrc: newsData[3]?.image,
      year: "",
      content: {
        imageSrc: newsData[3]?.image,
        title: newsData[3]?.title,
        content: newsData[3]?.content,
      },
    },
    {
      date: newsData[4]?.date.slice(0, 10),
      id: 62,
      month: "",
      upvote: votes.length !== 0 ? votes.find((obj) => obj.id === 62).up : 0,
      downvote:
        votes.length !== 0 ? votes.find((obj) => obj.id === 62)?.down : 0,
      title: newsData[4]?.title,
      link: newsData[4]?.link,
      imageSrc: newsData[4]?.image,
      year: "",
      content: {
        imageSrc: newsData[4]?.image,
        title: newsData[4]?.title,
        content: newsData[4]?.content,
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
        // autoplay={4000}
        hideArrow={true}
      >
        {newsArray.length > 0 &&
          newsArray.slice(0, 5).map((item, key) => {
            return (
              <Carousel.Item key={key}>
                <div
                  style={{
                    display: item.title?.includes("http") ? "none" : "block",
                    padding: "20px 10px 0px",
                  }}
                >
                  <div className="single-related-news-wrapper">
                    <div
                      className="d-flex align-items-center justify-content-between"
                      style={{ gap: 5 }}
                    >
                      <div className="d-flex flex-column" style={{ gap: 15 }}>
                        <h6
                          className="related-subnews-title"
                          onClick={() => {}}
                        >
                          {item.title}
                        </h6>
                        <div className="news-bottom-wrapper">
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
                        className="singlenews-image"
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
      </Carousel>

      <div></div>
    </div>
  );
};

export default LatestNews;
