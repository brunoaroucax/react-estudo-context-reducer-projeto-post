import { Post } from "@/types/Post"

type addPost = {
  type: 'add',
  payload: {
    title: string,
    content: string,
    author: string
  }
}

type removePost = {
  type: 'remove',
  payload: {id: number}
}

export type PostActions = addPost | removePost;

export const postReducer = (posts: Post[], action: PostActions) => {
  switch(action.type){
    case 'add':
      return [...posts, {
        id: posts.length,
        title: action.payload.title,
        content: action.payload.content,
        author: action.payload.author
      }]
    case 'remove':
      return posts.filter(post => post.id !== action.payload.id)
    default:
      return posts
  }
}