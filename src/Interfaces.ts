export interface IComment {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: IUser;
    replies: IComment[]
    replyingTo: string | null;
}

export interface IUser {
    image: {
        png: string;
        webp: string;
    };
    username: string;
}