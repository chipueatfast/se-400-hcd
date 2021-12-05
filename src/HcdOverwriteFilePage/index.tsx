import React, { useState } from "react";
import { Button, Modal, OutmostContainer } from "ui-build";
import { ModalBody, ModalFooter } from "react-bootstrap";

const AnyModal = Modal as any;

function HcdOverwriteFilePage() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [textValue, setTextValue] = React.useState("Lorem ips sum...");
  const [savedValue, setSavedValue] = React.useState("Lorem ips sum...");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <OutmostContainer
        style={{
          paddingTop: 64,
        }}
      >
        <textarea
          rows={10}
          style={{ width: "100%", marginBottom: 32 }}
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
        />
        <div>
          <Button
            style={{
              marginRight: 16,
            }}
            onClick={() => {
              openModal();
            }}
            disabled={textValue === savedValue}
          >
            Save
          </Button>
          <Button
            onClick={() => {
              setTextValue(savedValue);
            }}
            theme="secondary"
          >
            Cancel
          </Button>
        </div>
      </OutmostContainer>
      <AnyModal
        id="root-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div>
          <ModalBody>
            Are you sure you want to overwrite the file? The previous record will be lost.
            </ModalBody>
        <ModalFooter>
          <Button
            style={{
              marginRight: 16,
            }}
            onClick={() => {
              setSavedValue(textValue);
              closeModal();
            }}
            theme="danger"
            disabled={textValue === savedValue}
          >
            Overwrite
          </Button>
          <Button
            onClick={() => {
              closeModal();
            }}
            theme="secondary"
            disabled={textValue === savedValue}
          >
            I am not sure
          </Button>
        </ModalFooter>
        </div>
      </AnyModal>
    </>
  );
}

export default HcdOverwriteFilePage;
