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
  onShowModalPressInfo,
  onSelectOtherNews,
}) => {
  const specialItems = [19, 20, 21, 23, 27, 28, 29]
  
  
  const getItemsWithoutCurrentItem = (currentItemId, arrayOfItems) => {
    return arrayOfItems.filter((item) => item.id !== currentItemId);
  };
  const elementRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (elementRef.current?.clientHeight !== 0 && visible === true) {
    
        setHeight(elementRef.current?.clientHeight);
    }
  }, [height, newsId]);



  return (
    <Modal visible={visible} modalId={modalId} onModalClose={onModalClose}>
      <OutsideClickHandler
        onOutsideClick={() => {
          onModalClose();
        }}
      >
        <div>
          <div className="details-modal-content pb-0">
            <div className="left-col" ref={elementRef}>
              <h2 style={{ maxWidth: 550 }} className="left-col-title">
                {title}
              </h2>
              <img
                src={image}
                alt=""
                className="left-col-image"
                style={{ maxWidth: 550, padding: "20px 0" }}
              />
              <p
                style={{ maxWidth: 550 }}
                className="left-col-content"
                dangerouslySetInnerHTML={{ __html: content }}
              ></p>
            </div>
            <div className="right-col">
              <h3 className="related-news-side-title">Related news</h3>
              <div className="related-news-wrapper">
                {latestNewsData.length > 0 &&
                  (height > 500 && height < 610 && specialItems.includes(newsId) === false ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData)
                      .slice(0, 4)
                      .map((item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      })
                  ) : height > 620 && height < 700 && specialItems.includes(newsId) === false ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData)
                      .slice(0, 5)
                      .map((item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      })
                  ) : height > 700 && height < 900 && specialItems.includes(newsId) === false ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData)
                      .slice(0, 5)
                      .map((item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              image={item.imageSrc}
                              link={item.link}
                            />
                          </div>
                        );
                      })
                  ) : height > 900 && height < 1000 && specialItems.includes(newsId) === false ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData)
                      .slice(0, 10)
                      .map((item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      })
                  ) : height > 1000 && height < 2400 && specialItems.includes(newsId) === false ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData)
                      .slice(0, 14)
                      .map((item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      })
                  ) : height > 2400 && height < 2500 && specialItems.includes(newsId) === false ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData)
                      .slice(0, 17)
                      .map((item, key) => {
                        return (
                          <div key={key} onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      })
                  ) : height > 2400 && height < 3070 && specialItems.includes(newsId) === false ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData)
                      .slice(0, 21)
                      .map((item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      })
                  ) : height > 3070 && height < 3670 && specialItems.includes(newsId) === false ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData)
                      .slice(0, 36)
                      .map((item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      })
                  ) : height > 3670 && height < 3750 && specialItems.includes(newsId) === false ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData)
                      .slice(0, 57)
                      .map((item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      })
                  ) : height > 3750 && height < 5870 && specialItems.includes(newsId) === false ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData)
                      .slice(0, 37)
                      .map((item, key) => {
                        return (
                          <div key={key}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      })
                  ) : height > 5870 && height < 6650 && specialItems.includes(newsId) === false ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData)
                      .slice(0, 57)
                      .map((item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      })
                  ) : height > 6650  && specialItems.includes(newsId) === false? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData).map(
                      (item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      }
                    )
                  ) : newsId === 23 || newsId === 27 ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0,25).map(
                      (item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      }
                    )
                  ) : newsId === 19 ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0,12).map(
                      (item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      }
                    )
                  ) : newsId === 21 ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0,46).map(
                      (item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      }
                    )
                  ) : newsId === 28 ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0,16).map(
                      (item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      }
                    )
                  ) : newsId === 29 ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0,7).map(
                      (item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      }
                    )
                  ) : newsId === 20 ? (
                    getItemsWithoutCurrentItem(newsId, latestNewsData).slice(0,41).map(
                      (item, key) => {
                        return (
                          <div key={key}  onClick={() => {
                            elementRef.current?.scrollIntoView({block: 'start'})
                          }}>
                            <RelatedNews
                              newsId={item.id}
                              theme={theme}
                              title={item.title}
                              date={item.date}
                              month={item.month}
                              year={item.year}
                              link={item.link}
                              image={item.imageSrc}
                              onSelectOtherNews={onSelectOtherNews}
                            />
                          </div>
                        );
                      }
                    )
                  ) : (
                    <></>
                  ))}
              </div>
            </div>
          </div>
          <div className="modal-bottom-wrapper">
            <h3>Press Realese</h3>
            <div className="row justify-content-center" style={{ gap: 15 }}>
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
                          elementRef.current?.scrollIntoView({block: 'start'})
                        }}
                      >
                        <OtherNews
                          newsId={item.id}
                          image={item.imageSrc}
                          title={item.title}
                          link={item.link}
                          date={item.date}
                          theme={theme}
                          onOtherNewsClick={onSelectOtherNews}
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
