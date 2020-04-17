import React from "react";

import Comment from "./Comment";

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [{ text: "Bom Post" }],
    };
  }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.state.comments.map((comment, index) => {
          return <Comment key={index} text={comment.text} />;
        })}
      </div>
    );
  }
}
