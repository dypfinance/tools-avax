import React, { useState, useEffect } from "react";
import VotePassive from "./assets/votepassive.svg";
import Upvote from "./assets/upvote.svg";
import Downvote from "./assets/downvote.svg";
import Dots from "./assets/dots.svg";
import Clock from "./assets/clock.svg";
import WhiteDots from "./assets/dots-white.svg";
import { useWeb3React } from "@web3-react/core";

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
  onDownVoteClick,
}) => {
  const [likeIndicator, setLikeIndicator] = useState(false);
  const [dislikeIndicator, setDislikeIndicator] = useState(false);

  const bal1 = Number(localStorage.getItem("balance1"));
  const bal2 = Number(localStorage.getItem("balance2"));

  const handleLikeStates = () => {
    if (bal1 === 0 && bal2 === 0) {
      setLikeIndicator(false);
      onUpVoteClick();
    } else {
      if(likeIndicator === true) {
        setLikeIndicator(false)
        onDownVoteClick()
      }
      else if(likeIndicator === false) {
        setLikeIndicator(true);
        onUpVoteClick()
      }
    }
  };

  const handleDisLikeStates = () => {
    if (bal1 === 0 && bal2 === 0) {
      setLikeIndicator(false);
      onDownVoteClick();
    } else {
      if(dislikeIndicator === true) {
        setDislikeIndicator(false);
        onUpVoteClick()
      }
      else if(dislikeIndicator === false)
      {
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
          <div className="tag-wrapper d-none">
            <div className="d-flex" style={{ gap: 10 }}>
              <h5 className="tags">NFT's</h5>
              <h5 className="tags">CAWS</h5>
            </div>
          </div>
        </div>
        <h2 className="main-title-text">{title}</h2>
        {/* </a> */}

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
              onClick={() => {handleLikeStates()}}
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
              onClick={() => {handleDisLikeStates()}}
            />
          </div>
          {/* <img
            src={theme !== "theme-dark" ? WhiteDots : Dots}
            alt=""
            style={{ width: "auto" }}
          /> */}
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
