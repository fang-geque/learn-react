import React, { PureComponent } from "react";

import { Modal } from "antd";

export default class CustomModal extends PureComponent {
  componentDidUpdate() {
    console.log("更新");
  }

  componentDidMount() {
    console.log("挂载");
  }

  render() {
    const { isModalVisible, handleOk, handleCancel, current } = this.props;

    return (
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {current}
      </Modal>
    );
  }
}
