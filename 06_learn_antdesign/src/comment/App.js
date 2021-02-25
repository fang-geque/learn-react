import React, { PureComponent } from "react";

import CommentInput from "./components/CommentInput";
import CommentItem from "./components/CommentItem";
import CustomModal from "./components/CustomModal";
import { Button } from "antd";

import imgPath from "../assets/test.png";
import mp4Path from "../assets/自白书.mp4";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      commentList: [],
      visible: false,
      current: "我是内容",
      isPlay: false,
    };

    this.myRef = React.createRef();
    this.divRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.myRef);
    console.log("this.divRef", this.divRef);
  }

  render() {
    const { visible, current, isPlay } = this.state;
    this.setState({current:'123'})

    return (
      <>
        <div style={{ width: "500px", padding: "20px" }}>
          {this.state.commentList.map((item, index) => {
            return (
              <CommentItem
                key={item.id}
                comment={item}
                removeItem={(e) => this.removeComment(index)}
              />
            );
          })}
          <CommentInput submitComment={this.submitComment.bind(this)} />
          <button onClick={() => this.setState({ visible: true })}>
            弹框1
          </button>
          <button
            onClick={() => {
              this.setState({ visible: true, current: 2 });
            }}
          >
            弹框2
          </button>

          <div ref={this.divRef}>
            <audio ref={this.myRef} controls src={mp4Path} />
            <Button
              onClick={(e) => {
                this.setState({ isPlay: !isPlay });
                isPlay ? this.myRef.current.pause() : this.myRef.current.play();
              }}
            >
              {isPlay ? "暂停" : "播放"}
            </Button>
            {/* <img src={imgPath} alt="" /> */}
          </div>
        </div>
        <CustomModal
          isModalVisible={visible}
          handleOk={(e) => this.setState({ visible: false })}
          handleCancel={(e) => this.setState({ visible: false })}
          current={current}
        ></CustomModal>
      </>
    );
  }

  submitComment(info) {
    this.setState({
      commentList: [...this.state.commentList, info],
    });
  }

  removeComment(index) {
    const newCommentList = [...this.state.commentList];
    newCommentList.splice(index, 1);
    this.setState({
      commentList: newCommentList,
    });
  }
}
