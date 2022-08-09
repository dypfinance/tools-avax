import Modal from "../general/Modal";
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import RelatedNews from "./RelatedNews";
import OtherNews from "./OtherNews";
import OutsideClickHandler from "react-outside-click-handler";
import VotePassive from "./assets/votepassive.svg";
import Upvote from "./assets/upvote.svg";
import Downvote from "./assets/downvote.svg";
import Clock from "./assets/clock.svg";
import ToolTip from "./ToolTip";

import { useState } from "react";

const NewsModal = ({
  modalId,
  visible,
  title,
  image,
  content,
  onModalClose,
  newsId,
  latestNewsData,
  pressData,
  theme,
  onHandleUpvote,
  onHandleDownvote,
  onSelectOtherNews,
  onHandlePressDownvote,
  onHandlePressUpvote,
  isConnected,
  upvotes,
  downvotes,
  month,
  day,
  year,
}) => {
  const getItemsWithoutCurrentItem = (currentItemId, arrayOfItems) => {
    return arrayOfItems.filter((item) => item.id !== currentItemId);
  };
  const elementRef = useRef();
  const [height, setHeight] = useState(0);
  const [likeIndicator, setLikeIndicator] = useState(false);
  const [dislikeIndicator, setDislikeIndicator] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (elementRef.current?.clientHeight !== 0 && visible === true) {
      setHeight(elementRef.current?.clientHeight);
    }

    console.log(downvotes)
  }, [newsId, title]);

  const bal1 = Number(localStorage.getItem("balance1"));
  const bal2 = Number(localStorage.getItem("balance2"));

  const handleLikeStates = () => {
    if ((bal1 === 0 && bal2 === 0) || isConnected === false) {
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
    if ((bal1 === 0 && bal2 === 0) || isConnected === false) {
      setLikeIndicator(false);
      setShowTooltip(true);
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
    <div visible={visible} modalId={modalId} onModalClose={onModalClose} className='newmodal'>
        <div>
          <div className="details-modal-content">
            <div className="left-col" ref={elementRef}>
              <h2 className="left-col-title">
                {title}
              </h2>
              <img
                src={image}
                alt=""
                className="left-col-image"
                style={{ padding: "20px 0" }}
              />
              <div className="news-bottom-wrapper mb-3">
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
                  {month} {day}, {year}
                </h6>
              </div>
            </div>

              <p
                // style={{ maxWidth: 520 }}
                className="left-col-content"
                dangerouslySetInnerHTML={{ __html: content }}
              ></p>
            </div>
            
            <div className="right-col">
              <h3 className="related-news-side-title">Related news</h3>
              <div className="related-news-wrapper">
                {latestNewsData.length > 0 ? (
                  getItemsWithoutCurrentItem(newsId, latestNewsData)
                    .slice(0, parseInt(height / 100))
                    .map((item, key) => {
                      return (
                        <div
                          key={key}
                          onClick={() => {
                            elementRef.current?.scrollIntoView({
                              block: "start",
                            });
                          }}
                        >
                          <RelatedNews
                            newsId={item.id}
                            theme={theme}
                            title={item.title}
                            date={item.date}
                            month={item.month}
                            year={item.year}
                            link={item.link}
                            upvotes={item.upvote}
                            downvotes={item.downvote}
                            image={item.imageSrc}
                            onSelectOtherNews={onSelectOtherNews}
                            onHandleDownvote={onHandleDownvote}
                            onHandleUpvote={onHandleUpvote}
                            isConnected={isConnected}
                          />
                        </div>
                      );
                    })
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="modal-bottom-wrapper d-none">
            <h3>Press Realese</h3>
            <div
              className="row justify-content-center mt-4"
              style={{ gap: 15 }}
            >
              {pressData.length > 0 &&
                getItemsWithoutCurrentItem(newsId, pressData)
                  .slice(0, 6)
                  .map((item, key) => {
                    return (
                      <div
                        className="banner-item"
                        key={key}
                        style={{ background: "none" }}
                        onClick={() => {
                          elementRef.current?.scrollIntoView({
                            block: "start",
                          });
                        }}
                      >
                        <OtherNews
                          newsId={item.id}
                          image={item.imageSrc}
                          title={item.title}
                          link={item.link}
                          date={item.date}
                          theme={theme}
                          upvotes={item.upvote}
                          downvotes={item.downvote}
                          onOtherNewsClick={onSelectOtherNews}
                          onHandlePressUpvote={onHandlePressUpvote}
                          onHandlePressDownvote={onHandlePressDownvote}
                        />
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
    </div>
  );
};
NewsModal.propTypes = {
  modalId: PropTypes.string,
  visible: PropTypes.bool,
  onModalClose: PropTypes.func,
  onSelectOtherNews: PropTypes.func,
};

export default NewsModal;
