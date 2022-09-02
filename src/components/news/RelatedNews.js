import React, { useEffect, useState } from "react";
import VotePassive from "./assets/votepassive.svg";
import Upvote from "./assets/upvote.svg";
import Downvote from "./assets/downvote.svg";
import ToolTip from "./ToolTip";
import OutsideClickHandler from "react-outside-click-handler";
import Clock from "./assets/clock.svg";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  isConnected,
  onHandleUpvote,
  onHandleDownvote,
  onDownVoteClick,
  isPremium,
}) => {
  const [likeIndicator, setLikeIndicator] = useState(false);
  const [dislikeIndicator, setDislikeIndicator] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const bal1 = Number(localStorage.getItem("balance1"));
  const bal2 = Number(localStorage.getItem("balance2"));

  const handleLikeStates = () => {
    if (
      (bal1 === 0 && bal2 === 0 && isPremium === false) ||
      isConnected === false
    ) {
      setLikeIndicator(false);
      setShowTooltip(true);
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
    if (
      (bal1 === 0 && bal2 === 0 && isPremium === false) ||
      isConnected === false
    ) {
      setLikeIndicator(false);
      setShowTooltip(true);
    } else {
      if (dislikeIndicator === true) {
        setDislikeIndicator(false);
        onHandleUpvote(newsId);
      } else if (dislikeIndicator === false) {
        onHandleDownvote(newsId);
        setLikeIndicator(false);
        setDislikeIndicator(true);
      }
    }
  };




  if (title === undefined) {
    return (
      <div
        style={{ padding: "60px", display: "flex", justifyContent: "center" }}
      >
        <CircularProgress color="inherit" size={75} />
      </div>
    );
  }
  return (
    <div style={{ display: title?.includes("http") ? "none" : "block" }}>
      <div className="single-related-news-wrapper">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ gap: 5 }}
        >
          <div className="d-flex flex-column" style={{ gap: 15 }}>
            <h6
              className="related-subnews-title"
              onClick={() => {
                onSelectOtherNews(newsId);
                setLikeIndicator(false);
                setDislikeIndicator(false);
              }}
            >
              {title}
            </h6>
            <div className="news-bottom-wrapper">
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
                  onClick={(e) => {
                    handleLikeStates();
                    e.stopPropagation();
                  }}
                />
                {showTooltip === true ? (
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setShowTooltip(false);
                    }}
                  >
                    <ToolTip
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
                  {month} {date} {year}
                </h6>
              </div>
            </div>
          </div>

          <img
            src={image}
            alt=""
            className="singlenews-image"
            onClick={() => {
              onSelectOtherNews(newsId);
              setLikeIndicator(false);
              setDislikeIndicator(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RelatedNews;
