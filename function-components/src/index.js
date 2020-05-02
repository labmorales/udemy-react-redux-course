import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="André"
          timeAgo="Yesterday"
          img={faker.image.avatar()}
          text="Test 1"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Fernando"
          timeAgo="Today at 12h"
          img={faker.image.avatar()}
          text="Test 2"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Carol"
          timeAgo="Today at 16h"
          img={faker.image.avatar()}
          text="Test 3"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
