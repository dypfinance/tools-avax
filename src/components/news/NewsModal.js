import Modal from "../general/Modal";
import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import RelatedNews from "./RelatedNews";
import OtherNews from "./OtherNews";
import OutsideClickHandler from "react-outside-click-handler";

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
}) => {
  const specialItems = [19, 20, 21, 23, 27, 28, 29];

  const getItemsWithoutCurrentItem = (currentItemId, arrayOfItems) => {
    return arrayOfItems.filter((item) => item.id !== currentItemId);
  };
  const elementRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (elementRef.current?.clientHeight !== 0 && visible === true) {
      setHeight(elementRef.current?.clientHeight);
    }
  }, [ newsId,title]);

  return (
    <Modal visible={visible} modalId={modalId} onModalClose={onModalClose}>
      <OutsideClickHandler
        onOutsideClick={() => {
          onModalClose();
        }}
      >
        <div>
          <div className="details-modal-content">
            <div className="left-col" ref={elementRef}>
              <h2 style={{ maxWidth: 710 }} className="left-col-title">
                {title}
              </h2>
              <img
                src={image}
                alt=""
                className="left-col-image"
                style={{ maxWidth: 710, padding: "20px 0" }}
              />
              <p
                style={{ maxWidth: 710 }}
                className="left-col-content"
                dangerouslySetInnerHTML={{ __html: content }}
              ></p>
            </div>
            <div className="right-col">
              <h3 className="related-news-side-title">Related news</h3>
              <div className="related-news-wrapper">
                {latestNewsData.length > 0 &&
                  (specialItems.includes(newsId) === false ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData)
                      .slice(0, parseInt(height/100))
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
                  ))}
              </div>
            </div>
          </div>
          <div className="modal-bottom-wrapper">
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
      </OutsideClickHandler>
    </Modal>
  );
};
NewsModal.propTypes = {
  modalId: PropTypes.string,
  visible: PropTypes.bool,
  onModalClose: PropTypes.func,
  onSelectOtherNews: PropTypes.func,
};

export default NewsModal;
