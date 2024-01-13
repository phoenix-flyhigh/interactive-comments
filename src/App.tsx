import { useState } from "react";
import Card from "./Card";
import DeleteDialog from "./DeleteDialog";
import { IComment } from "./Interfaces";
import { comments, currentUser } from "./MockData";
import NewComment from "./NewComment";
import Replies from "./Replies";

const App = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleDelete = () => {
    setShowDialog(false);
  };

  return (
    <main className="relative bg-light-gray min-h-screen justify-center">
      {showDialog && (
        <DeleteDialog onCancel={handleCancel} onDelete={handleDelete} />
      )}
      <div
        className={` flex flex-col gap-4 lg:px-40 lg:py-20 md:px-20 md:py-10 p-6 xl:px-[20%] ${
          showDialog ? "opacity-20 overflow-hidden" : ""
        }`}
      >
        {comments.map((comment: IComment) => {
          return (
            <>
              <Card
                key={comment.id}
                content={comment.content}
                createdAt={comment.createdAt}
                score={comment.score}
                username={comment.user.username}
                userImageSrc={comment.user.image.png}
                replyingTo={comment.replyingTo}
                isCurrentUser={comment.user.username === currentUser.username}
                upVote={() => {}}
                downVote={() => {}}
                onUpdate={() => {}}
                onDelete={() => setShowDialog(true)}
                onReply={() => {}}
              />
              <Replies>
                {comment.replies.map((comment: IComment) => (
                  <Card
                    key={comment.id}
                    content={comment.content}
                    createdAt={comment.createdAt}
                    score={comment.score}
                    username={comment.user.username}
                    userImageSrc={comment.user.image.png}
                    replyingTo={comment.replyingTo}
                    isCurrentUser={
                      comment.user.username === currentUser.username
                    }
                    upVote={() => {}}
                    downVote={() => {}}
                    onUpdate={() => {}}
                    onDelete={() => setShowDialog(true)}
                    onReply={() => {}}
                  />
                ))}
              </Replies>
            </>
          );
        })}
        <NewComment
          userImageSrc={currentUser.image.png}
          buttonName="SEND"
          onBtnClick={() => {}}
        />
      </div>
    </main>
  );
};

export default App;
