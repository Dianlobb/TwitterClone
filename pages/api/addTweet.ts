// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TweetBody } from '../../typingd'
type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data: TweetBody = JSON.parse(req.body)
  const mutations = [
    {
      create: {
        _type: 'tweet',
        text: data.text,
        username: data.username,
        blockTweet: false,
        profileImage: data.profileImage,
        image: data.image,
      },
    },
  ]

  let myHeaders = new Headers()
  myHeaders.append('Content-type', 'application/json')
  myHeaders.append('Authorization', `Bearer ${process.env.SANITY_API_TOKEN}`)

  const apiEndPoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`

  const result = await fetch(apiEndPoint, {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ mutations }),
    redirect: 'follow'
  })
  const json = await result.json()

  res.status(201).json({ message: 'Added!' })
}
