import Card from "./Card";
import { IComment } from "./Interfaces";
import { comments, currentUser } from "./MockData";
import NewComment from "./NewComment";
import Replies from "./Replies";

const App = () => {
  return (
    <main className="flex flex-col gap-4 bg-light-gray min-h-screen lg:px-40 lg:py-20 md:px-20 md:py-10 p-6">
      {comments.map((comment: IComment) => {
        const isCurrentUser = comment.user.username === currentUser.username;

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
              isCurrentUser={isCurrentUser}
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
                  isCurrentUser={isCurrentUser}
                />
              ))}
            </Replies>
          </>
        );
      })}
      <NewComment userImageSrc={currentUser.image.png} buttonName="SEND"/>
    </main>
  );
};

export default App;
