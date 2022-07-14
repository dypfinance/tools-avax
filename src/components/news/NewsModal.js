import Modal from "../general/Modal";
import React from "react";
import PropTypes from "prop-types";
const NewsModal = ({ modalId, visible, title, image, content, onModalClose }) => {
  return (
    <Modal visible={visible} modalId={modalId} onModalClose={onModalClose}>
      <div>
        <div className="details-modal-content pb-0">
          <div className="left-col">
           <h2>{title}</h2>
            <img src={image} alt='' style={{maxWidth: 650, padding: '20px 0'}}/>
            <p style={{maxWidth: 650}} dangerouslySetInnerHTML={{ __html: content }}></p>
            
          </div>
          <div className="right-col">
            <div className="rarity-score">
              <h1>lorem ipsum</h1>
              <span>lorem ipsum</span>
            </div>
            <p>Rarity...</p>
          </div>
        </div>

        <p
          className="mt-1"
          style={{
            textAlign: "center",
          }}
        ></p>
      </div>
    </Modal>
  );
};
NewsModal.propTypes = {
  modalId: PropTypes.string,
  visible: PropTypes.bool,
  onModalClose: PropTypes.func
};

export default NewsModal;
