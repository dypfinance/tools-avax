import React, { useState } from "react";
import VotePassive from "./assets/votepassive.svg";
import Upvote from "./assets/upvote.svg";
import Downvote from "./assets/downvote.svg";
import Dots from "./assets/dots.svg";
import Clock from "./assets/clock.svg";
import WhiteDots from "./assets/dots-white.svg";

const RelatedNews = ({
  title,
  month,
  date,
  year,
  link,
  image,
  theme,
  onSelectOtherNews,
  newsId,
  upvotes,
  downvotes,
  onHandleUpvote,
  onHandleDownvote,
  onDownVoteClick,

}) => {
  const [likeIndicator, setLikeIndicator] = useState(false);
  const [dislikeIndicator, setDislikeIndicator] = useState(false);

  const bal1 = Number(localStorage.getItem("balance1"));
  const bal2 = Number(localStorage.getItem("balance2"));

  const handleLikeStates = () => {
    if (bal1 === 0 && bal2 === 0) {
      setLikeIndicator(false);
      onHandleUpvote(newsId);
    } else {
      if (likeIndicator === true) {
        setLikeIndicator(false);
        onHandleDownvote(newsId);
      } else if (likeIndicator === false) {
        setLikeIndicator(true);
        onHandleUpvote(newsId);
      }
    }
  };

  const handleDisLikeStates = () => {
    if (bal1 === 0 && bal2 === 0) {
      setLikeIndicator(false);
      onHandleDownvote(newsId);
    } else {
      if (dislikeIndicator === true) {
        setDislikeIndicator(false);
        onHandleUpvote(newsId);
      } else if (dislikeIndicator === false) {
        onHandleDownvote(newsId);
        setDislikeIndicator(true);
      }
    }
  };


  return (
    <div onClick={() => onSelectOtherNews(newsId)}>
      <div className="single-related-news-wrapper">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ gap: 5 }}
        >
          <h6 className="related-subnews-title">{title}</h6>
          <img src={image} alt="" className="singlenews-image" />
        </div>
        <div className="news-bottom-wrapper">
          <div className="like-wrapper">
            <img
              src={
                (likeIndicator === false && dislikeIndicator === false)
                ? VotePassive
                : likeIndicator === true
                ? Upvote
                : Downvote
              }
              alt=""
              className="like-indicator"
              onClick={(e) => {
                handleLikeStates();
                e.stopPropagation();
              }}
            />
            {Number(upvotes) - Number(downvotes)}
            <img
              src={
                (likeIndicator === false && dislikeIndicator === false)
                    ? VotePassive
                    : likeIndicator === true
                    ? Upvote
                    : Downvote
              }
              alt=""
              className="like-indicator"
              id="dislike"
              onClick={(e) => {
                handleDisLikeStates();
                e.stopPropagation();
              }}
            />
          </div>
          {/* <img
            src={theme === "theme-dark" ? WhiteDots : Dots}
            alt=""
            style={{ width: "auto" }}
          /> */}
          <div className="date-wrapper">
            <img src={Clock} alt="" style={{ width: "auto" }} />
            <h6 className="date-content">
              {month} {date}, {year}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedNews;
