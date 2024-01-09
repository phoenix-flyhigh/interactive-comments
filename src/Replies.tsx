import { ReactNode } from "react";

interface IRepliesProps {
  children: ReactNode;
}

const Replies: React.FC<IRepliesProps> = ({ children }: IRepliesProps) => {
  return (
    <div className="flex md:gap-4 gap-3 w-full md:ml-8">
      <div className="flex flex-col gap-4 border-solid border-l-2 border-slate-300 md:pl-8 md:pr-8 pl-5 w-full">
        {children}
      </div>
    </div>
  );
};

export default Replies;
