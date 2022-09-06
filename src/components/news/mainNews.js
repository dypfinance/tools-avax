import React, { useState, useEffect } from "react";
import VotePassive from "./assets/votepassive.svg";
import Upvote from "./assets/upvote.svg";
import Downvote from "./assets/downvote.svg";
import Clock from "./assets/clock.svg";

const MainNews = ({
  link,
  image,
  title,
  month,
  day,
  year,
  theme,
  onShowModalClick,
  newsId,
  upvotes,
  downvotes,
  onUpVoteClick,
  isConnected,
  onDownVoteClick,
  isPremium

}) => {
  const [likeIndicator, setLikeIndicator] = useState(false);
  const [dislikeIndicator, setDislikeIndicator] = useState(false);

  const bal1 = Number(localStorage.getItem("balance1"));
  const bal2 = Number(localStorage.getItem("balance2"));
    const logout = localStorage.getItem("logout");
  const handleLikeStates = () => {

    if ((bal1 === 0 && bal2 === 0 && isPremium === false) || logout === 'false') {
      setLikeIndicator(false);
      setDislikeIndicator(false);
      // onUpVoteClick();
    } else {
      if (likeIndicator === true) {
        setLikeIndicator(false);
        onDownVoteClick();
      } else if (likeIndicator === false) {
        setLikeIndicator(true);
        onUpVoteClick();
      }
    }
  };

  const handleDisLikeStates = () => {
    const logout = localStorage.getItem("logout");
    if ((bal1 === 0 && bal2 === 0 && isPremium === false) || logout === 'false') {
      setLikeIndicator(false);
      setDislikeIndicator(false);
      onDownVoteClick();
    } else {
      if (dislikeIndicator === true) {
        setDislikeIndicator(false);
        onUpVoteClick();
      } else if (dislikeIndicator === false) {
        onDownVoteClick();
        setDislikeIndicator(true);
      }
    }
  };

  return (
    <div className="main-news-image" key={newsId}>
      <div className="banner-item">
        {/* <a target="_blank" href={link}> */}
        <div className="main-image">
          <img
            src={image}
            alt="Image not found"
            className="news-image"
            onClick={(e) => {
              e.preventDefault();
              onShowModalClick();
            }}
          />
          <div className="tag-wrapper">
            <div className="d-flex" style={{ gap: 10 }}>
              <h2
                className="main-title-text"
                onClick={(e) => {
                  e.preventDefault();
                  onShowModalClick();
                }}
              >
                {title}
              </h2>
            </div>
          </div>
        </div>

        {/* </a> */}

        <div className="news-bottom-wrapper mt-3 justify-content-between">
          <div className="like-wrapper">
            <img
              src={
                likeIndicator === false && dislikeIndicator === false
                  ? VotePassive
                  : likeIndicator === true
                  ? Upvote
                  : Downvote
              }
              alt=""
              className="like-indicator"
              onClick={() => {
                handleLikeStates();
              }}
            />
            <span> {Number(upvotes) - Number(downvotes)}</span>

            <img
              src={
                likeIndicator === false && dislikeIndicator === false
                  ? VotePassive
                  : likeIndicator === true
                  ? Upvote
                  : Downvote
              }
              alt=""
              className="like-indicator"
              id="dislike"
              onClick={() => {
                handleDisLikeStates();
              }}
            />
          </div>

          <div className="date-wrapper">
            <img src={Clock} alt="" style={{ width: "auto" }} />
            <h6 className="date-content">
              {month} {day} {year}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
