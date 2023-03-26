import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";

import React, { useState } from 'react';

export const DetailPage = ({ data, show, onClose, sinceTime, tillTime }) => {
  return (
    <>
      <Modal show={show} onHide={onClose} centered>
        <Modal.Header>
          <Modal.Title>{data.title}</Modal.Title>
          <CloseButton variant="white" onClick={onClose} />
        </Modal.Header>
        <Modal.Body>
          <img src={data.image} className="mw-100" />
          <br />
          <br />
          <Button href={data.videoUrl} variant="primary">Play</Button>
          <br />
          <br />
          <p>
            {sinceTime} - {tillTime}
          </p>
          <h4>Description</h4>
          <p>{data.description}</p>
          <p>
            <b>Rating:</b> {data.rating}
          </p>
          <p>
            <b>Genre:</b> {data.Genre}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};
