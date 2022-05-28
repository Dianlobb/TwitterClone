export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in tweet',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block Tweet',
      type: 'boolean',
      description: 'ADMIN Controls: Toogle if Tweet is deemed inappropriate',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile image',
      type: 'string',
    },
    {
      name: 'image',
      title: 'tweet image',
      type: 'string',
    },
  ],
}
