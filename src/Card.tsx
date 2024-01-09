interface ICardProps {
  content: string;
  createdAt: string;
  score: number;
  username: string;
  userImageSrc: string;
  replyingTo: string | null;
  isCurrentUser: boolean;
  onUpdate?: boolean;
}

const Card: React.FC<ICardProps> = ({
  content,
  createdAt,
  score,
  username,
  userImageSrc,
  replyingTo,
  isCurrentUser,
  onUpdate = false,
}: ICardProps) => {
  return (
    <div className="bg-white flex gap-6 md:p-6 p-4 rounded-2xl w-min-[320px] w-full">
      <div className="hidden md:flex flex-col justify-around items-center bg-very-light-gray gap-5 h-fit rounded-md text-moderate-blue p-4 font-bold text-xl">
        <img src="../images/icon-plus.svg" />
        <span>{score}</span>
        <img src="../images/icon-minus.svg" />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-4 text-xl">
            <img src={userImageSrc} />
            <p className="font-bold text-dark-blue">{username}</p>
            {isCurrentUser && (
              <div className="bg-moderate-blue text-white px-2">you</div>
            )}
            <p className="text-grayish-blue">{createdAt}</p>
          </div>
          <div className="hidden md:flex gap-6">
            {isCurrentUser ? (
              <>
                <button className="flex justify-center items-center gap-2 text-soft-red font-semibold ">
                  <img src="./../images/icon-delete.svg" />
                  Delete
                </button>
                <button className="flex justify-center items-center gap-2 text-moderate-blue font-semibold ">
                  <img src="./../images/icon-edit.svg" />
                  Edit
                </button>
              </>
            ) : (
              <button className="flex justify-center items-center gap-2 text-moderate-blue font-semibold ">
                <img src="./../images/icon-reply.svg" />
                Reply
              </button>
            )}
          </div>
        </div>
        {onUpdate ? (
          <textarea
            placeholder="Add a comment..."
            className="border-solid border-2 border-light-gray w-full rounded-lg p-2 px-4 overflow-visible"
            rows={3}
            value={replyingTo ? `@${replyingTo} ${content}` : content}
          />
        ) : (
          <p className="pr-4 text-grayish-blue leading-7 text-xl">
            {replyingTo && (
              <span className="font-bold text-moderate-blue">
                @{replyingTo}{" "}
              </span>
            )}
            {content}
          </p>
        )}
        <div className="md:hidden flex justify-between items-center">
          <div className="flex justify-around items-center bg-very-light-gray gap-5 h-fit rounded-md text-moderate-blue py-2 px-5 font-bold text-xl">
            <img src="../images/icon-plus.svg" />
            <span>{score}</span>
            <img src="../images/icon-minus.svg" />
          </div>
          <div className="md:hidden flex gap-4">
            {isCurrentUser ? (
              <>
                <button className="flex justify-center items-center gap-2 text-soft-red font-semibold ">
                  <img src="./../images/icon-delete.svg" />
                  Delete
                </button>
                <button className="flex justify-center items-center gap-2 text-moderate-blue font-semibold ">
                  <img src="./../images/icon-edit.svg" />
                  Edit
                </button>
              </>
            ) : (
              <button className="md:hidden flex justify-center items-center gap-2 text-moderate-blue font-semibold ">
                <img src="./../images/icon-reply.svg" />
                Reply
              </button>
            )}
          </div>
        </div>
        {onUpdate && (
          <div className="flex justify-end">
            <button className="bg-moderate-blue text-white font-bold py-2 px-5 rounded-lg">
              UPDATE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
