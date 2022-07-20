import React, { useState } from "react";
import VotePassive from "./assets/votepassive.svg";
import Upvote from "./assets/upvote.svg";
import Downvote from "./assets/downvote.svg";
import Dots from "./assets/dots.svg";
import Clock from "./assets/clock.svg";
import WhiteDots from "./assets/dots-white.svg";

  const OtherNews = ({ image, link, title, date, theme, onOtherNewsClick, newsId }) => {
  const [likeIndicator, setLikeIndicator] = useState("none");

  return (
    <div className="other-news-singlewrapper" onClick={()=>{onOtherNewsClick(newsId)}}>
      <div>
        <img
          src={image}
          alt=""
          className="other-news-image"
        />
        <div style={{ padding: 12, gap: 10 }} className="d-flex flex-column">
          {/* <a href={link} target={"_blank"}> */}
            <h4 className="singlenews-title">{title}</h4>
          {/* </a> */}
          <div className="news-bottom-wrapper">
            <div className="like-wrapper">
              <img
                src={
                  likeIndicator === "none"
                    ? VotePassive
                    : likeIndicator === "like"
                    ? Upvote
                    : Downvote
                }
                alt=""
                className="like-indicator"
                onClick={(e) => {
                  setLikeIndicator("like");
                  e.stopPropagation();
                }}
              />
              <img
                src={
                  likeIndicator === "none"
                    ? VotePassive
                    : likeIndicator === "like"
                    ? Upvote
                    : Downvote
                }
                alt=""
                className="like-indicator"
                id="dislike"
                onClick={(e) => {
                  setLikeIndicator("dislike");
                  e.stopPropagation();
                }}
              />
            </div>
            <img
              src={theme === "theme-dark" ? WhiteDots : Dots}
              alt=""
              style={{ width: "auto" }}
            />
            <div className="date-wrapper">
              <img src={Clock} alt="" style={{ width: "auto" }} />
              <h6 className="date-content">{date}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherNews;
