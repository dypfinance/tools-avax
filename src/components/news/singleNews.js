import React, { useState, useEffect } from "react";
import axios from "axios";
import VotePassive from "./assets/votepassive.svg";
import Upvote from "./assets/upvote.svg";
import Downvote from "./assets/downvote.svg";
import ToolTip from "./ToolTip";
import OutsideClickHandler from "react-outside-click-handler";
import Clock from "./assets/clock.svg";

const SingleNews = ({
  title,
  image,
  link,
  month,
  day,
  year,
  onNewsClick,
  theme,
  upvotes,
  downvotes,
  isConnected,
  onSingleUpVoteClick,
  onSingleDownVoteClick,
  isPremium,
  newsId,
onVotesFetch
}) => {
  const [likeIndicator, setLikeIndicator] = useState(false);
  const [dislikeIndicator, setDislikeIndicator] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [alreadyVoted, setalreadyVoted] = useState(true);

  const bal1 = Number(localStorage.getItem("balance1"));
  const bal2 = Number(localStorage.getItem("balance2"));

  const handleLikeStates = () => {
    const logout = localStorage.getItem("logout");
    checkUpVoting(newsId)
    if ((bal1 === 0 && bal2 === 0 && isPremium === false) || logout === 'true' || alreadyVoted === false) {
      setLikeIndicator(false);
      setDislikeIndicator(false);
      setShowTooltip(true);
    } else {
      if (likeIndicator === true) {
        setLikeIndicator(false);
        // onSingleDownVoteClick();
      } else if (likeIndicator === false) {
        setLikeIndicator(true);
        setDislikeIndicator(false);
        // onSingleUpVoteClick();
      }
    }
  };

  const handleDisLikeStates = () => {
    const logout = localStorage.getItem("logout");
checkDownVoting(newsId)
    if ((bal1 === 0 && bal2 === 0 && isPremium === false) || logout === 'true' || alreadyVoted === false) {
      setLikeIndicator(false);
      setDislikeIndicator(false);

      setShowTooltip(true);
    } else {
      if (dislikeIndicator === true) {
        setDislikeIndicator(false);
        // onSingleUpVoteClick();
      } else if (dislikeIndicator === false) {
        // onSingleDownVoteClick();
        setDislikeIndicator(true);
        setLikeIndicator(false);
      }
    }
  };

  const checkUpVoting = async (itemId) => {
    const coinbase = await window.getCoinbase();
    return await axios
      .get(
        `https://news-manage.dyp.finance/api/v1/vote/${itemId}/${coinbase}/up`
      )
      .then((data) => {
        
        if (data.data.status === "success") {
          
          onVotesFetch()
          
        } else {
          setalreadyVoted(false);
          setShowTooltip(true)
          setLikeIndicator(false)
        }
      })
      .catch(console.error);
  };

  const checkDownVoting = async (itemId) => {
    const coinbase = await window.getCoinbase();
    return await axios
      .get(
        `https://news-manage.dyp.finance/api/v1/vote/${itemId}/${coinbase}/down`
      )
      .then((data) => {
        
        if (data.data.status === "success") {
          onVotesFetch()
        } else {
          setalreadyVoted(false);
          setShowTooltip(true)
          setLikeIndicator(false)
          setDislikeIndicator(false)

        }
      })
      .catch(console.error);
  };


  return (
    <div className="singlenews-body">
      <div className="row m-0 justify-content-between" style={{ gap: 20 }}>
        <div className="singlenews-wrapper">
          {/* <a href={link} target={"_blank"}> */}
          <h4 className="singlenews-title" onClick={onNewsClick}>{title}</h4>
          {/* </a> */}

          <div className="news-bottom-wrapper justify-content-between">
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
                  <ToolTip status={
                    alreadyVoted === false ? 'You have already voted'
                    : isConnected
                      ? "You need to be holding DYP to vote"
                      : "Please connect your wallet"
                  }/>
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
                {month} {day} {year}
              </h6>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default SingleNews;
