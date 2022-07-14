import React, { useState } from "react";
import VotePassive from "./assets/votepassive.svg";
import Upvote from "./assets/upvote.svg";
import Downvote from "./assets/downvote.svg";
import Dots from "./assets/dots.svg";
import Clock from "./assets/clock.svg";
import WhiteDots from "./assets/dots-white.svg";

const MainNews = ({ link, image, title, month, day, year, theme, onShowModalClick }) => {
  const [likeIndicator, setLikeIndicator] = useState("none");
  
  return (
    <div className="main-news-image">
      <div className="banner-item">
        <a target="_blank" href={link}>
          <div className="main-image">
            <img src={image} alt="Image not found" className="news-image" onClick={(e)=>{e.preventDefault();onShowModalClick()}}/>
            <div className="tag-wrapper d-none">
              <div className="d-flex" style={{ gap: 10 }}>
                <h5 className="tags">NFT's</h5>
                <h5 className="tags">CAWS</h5>
              </div>
            </div>
          </div>
          <h2 className="main-title-text">{title}</h2>
        </a>
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
              onClick={() => {
                setLikeIndicator("like");
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
              onClick={() => {
                setLikeIndicator("dislike");
              }}
            />
          </div>
          <img src={ theme !== 'theme-dark' ? WhiteDots : Dots} alt="" style={{ width: "auto" }} />
          <div className="date-wrapper">
            <img src={Clock} alt="" style={{ width: "auto" }} />
            <h6 className="date-content">
              {month} {day}, {year}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
