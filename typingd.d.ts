export interface Tweet extends TweetBody {
    _id:string
    _createdAt: string
    _updateAt:string
    _rev:string 
    _type:'tweet'
    _blockTweet:boolena
}
export type TweetBody= {
    text: string
    username:string
    profileImage: string
    image?: string
}
export type CommentBody= {
    comment: string
    username:string
    tweetId: string
    profileimage: string
}

export interface Comment extends CommentBody {
    _id:string
    _createdAt: string
    _updateAt:string
    _rev:string 
    _type:'comment'
    tweet:{
        _ref: string,
        _type: 'reference'
    }
}