import React from "react"
import ReactDOM from "react-dom"
import ApprovalCard from "./ApprovalCard"
import CommentDetail from "./CommentDetail"
import faker from "faker"

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          comment="Nice blog!"
          time="Today at 6:00PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          comment="Hello world"
          time="Today at 5:22PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          comment="Wow good job"
          time="Today at 5:19PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
