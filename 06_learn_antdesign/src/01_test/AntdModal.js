import React, { useState, useEffect } from "react";
import { Modal, Button, Select } from "antd";

class ClassModal extends React.Component {
  componentDidMount() {
    console.log("ClassModal componentDidMount");
  }

  componentDidUpdate() {
    console.log("update");
  }

  render() {
    const { visible, handleOk, handleCancel } = this.props;

    return (
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
  }
}

function FunModal(props) {
  const { visible, handleOk, handleCancel, arr } = props;

  useEffect(() => {
    console.log("componentDidMount");
  }, [arr]);

  console.log("render");
  console.log("arr", arr);
  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <h2>{arr}</h2>
      <Select style={{ width: "100%" }}>
        <Select.Option>选项一</Select.Option>
      </Select>
      <Select>
        <Select.Option>选项一</Select.Option>
      </Select>
      <Select>
        <Select.Option>选项一</Select.Option>
      </Select>
      <Select>
        <Select.Option>选项一</Select.Option>
      </Select>

      <Select>
        <Select.Option>选项一</Select.Option>
      </Select>
      <Select>
        <Select.Option>选项一</Select.Option>
      </Select>

      <Select>
        <Select.Option>选项一</Select.Option>
      </Select>
      <Select>
        <Select.Option>选项一</Select.Option>
      </Select>
      <Select>
        <Select.Option>选项一</Select.Option>
      </Select>
      <Select>
        <Select.Option>选项一</Select.Option>
      </Select>
      <Select>
        <Select.Option>选项一</Select.Option>
      </Select>

      <Select>
        <Select.Option>选项一</Select.Option>
      </Select>
      <Select>
        <Select.Option>选项一</Select.Option>
      </Select>

      <Select>
        <Select.Option>选项一</Select.Option>
      </Select>
    </Modal>
  );
}

export default function AntdModal() {
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState([]);

  return (
    <div>
      <FunModal
        visible={show}
        handleOk={() => setShow(false)}
        handleCancel={() => setShow(false)}
        arr={arr}
      />
      <Button onClick={() => setShow(!show)}>显隐</Button>
      <Button
        onClick={() => {
          console.log("arr", arr);
          const newArr = [...arr];
          newArr.push(1);
          setArr(newArr);
        }}
      >
        add
      </Button>
    </div>
  );
}
