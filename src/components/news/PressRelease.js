import React, {useState, useEffect} from "react";
import VotePassive from "./assets/votepassive.svg";
import Upvote from "./assets/upvote.svg";
import Downvote from "./assets/downvote.svg";
import ToolTip from "./ToolTip";
import Clock from "./assets/clock-white.svg";
import OutsideClickHandler from "react-outside-click-handler";

const PressRealease = ({ title, image, date, link, onSinglePressHighlightClick, isPremium, newsId, upvotes, downvotes, isConnected, onDownVoteClick, onUpVoteClick }) => {

  const [likeIndicator, setLikeIndicator] = useState(false);
  const [dislikeIndicator, setDislikeIndicator] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const bal1 = Number(localStorage.getItem("balance1"));
  const bal2 = Number(localStorage.getItem("balance2"));

  const handleLikeStates = () => {
    if ((bal1 === 0 && bal2 === 0 && isPremium === false) || isConnected === false) {
      setLikeIndicator(false);
      setShowTooltip(true);
    } else {
      if (likeIndicator === true) {
        setLikeIndicator(false);
        onDownVoteClick(newsId);
      } else if (likeIndicator === false) {
        setLikeIndicator(true);
        onUpVoteClick(newsId);
      }
    }
  };

  const handleDisLikeStates = () => {
    if ((bal1 === 0 && bal2 === 0 && isPremium === false) || isConnected === false) {
      setLikeIndicator(false);
      setShowTooltip(true)
    } else {
      if (dislikeIndicator === true) {
        setDislikeIndicator(false);
        onUpVoteClick(newsId);
      } else if (dislikeIndicator === false) {
        onDownVoteClick(newsId);
        setLikeIndicator(false);
        setDislikeIndicator(true);
      }
    }
  };

  return (
    <div className="single-press-wrapper" onClick={onSinglePressHighlightClick}>
      <div className="row m-0" style={{ gap: 20, height: '100%' }}>
        <img src={image} alt="" className="press-image" />
        <div className="date-wrapper-press">
          {/* <a href={link} target="_blank"> */}
            <h6 className="press-title">{title}</h6>
          {/* </a> */}

          <div className="news-bottom-wrapper" style={{justifyContent: 'space-between'}}>
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
              {showTooltip === true ? (
              <OutsideClickHandler
                onOutsideClick={() => {
                  setShowTooltip(false);
                }}
              >
                <ToolTip status={
                    isConnected
                      ? "You need to be holding DYP to vote"
                      : "Please connect your wallet"
                  }/>
              </OutsideClickHandler>
            ) : (
              <></>
            )}
          <span style={{color: 'white'}}> {Number(upvotes) - Number(downvotes)}</span>
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
              <h6 className="press-date-content" style={{color: 'white'}}>{date}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressRealease;
