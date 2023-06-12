import { Button, Input, Modal } from "antd";
import React, { useState } from "react";
import Grid from "./Grid";

const AddButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [user ,setUser]=useState("")
  const [password ,setPassword]=useState("")

  const showModal = () => {
    setIsVisible(true);
  };

  const handleOk = (e) => {
    setIsVisible(false);
  };

  const handleCancel = (e) => {
    setIsVisible(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add User
      </Button>
      <Modal
        title="Basic Modal"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <br />
        <br />
        <Input placeholder="User" />
        <br />
        <br />
        <Input.Password placeholder="Password" />
        <br />
        <br />
      </Modal>
      <Grid />
    </div>
  );
};

export default AddButton;
