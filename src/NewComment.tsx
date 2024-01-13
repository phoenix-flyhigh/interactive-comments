interface INewCommentProps {
  userImageSrc: string;
  buttonName: string;
  onBtnClick: () => void;
}

const NewComment: React.FC<INewCommentProps> = ({
  userImageSrc,
  buttonName,
  onBtnClick,
}: INewCommentProps) => {
  return (
    <div className="bg-white flex items-start gap-6 md:p-6 p-4 rounded-2xl w-min-[320px] w-full">
      <img src={userImageSrc} className="w-10"/>
      <textarea
        placeholder="Add a comment..."
        rows={3}
        className="border-solid border-2 border-light-gray hover:border-moderate-blue hover:cursor-pointer w-full rounded-lg p-2 px-4"
      />
      <button
        onClick={onBtnClick}
        className="bg-moderate-blue text-white font-bold py-2 px-5 rounded-lg hover:cursor-pointer hover:opacity-50"
      >
        {buttonName}
      </button>
    </div>
  );
};

export default NewComment;
