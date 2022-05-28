import { Comment } from "../typingd"

export const fetchComments =async (tweetId :string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getComments?tweetId=${tweetId}`)
    const Comments : Comment[] = await res.json()
  

    return Comments
}