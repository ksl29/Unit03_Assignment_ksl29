import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import { getComments } from '../api/GetPokemon'

export async function commentsLoader({params}){
  const comments = await getComments(params.id)
  return comments
}

export default function Comment() {
  const comments = useLoaderData();
  const handleDeleteCommentClick = async () => {

  }
  return (
    <>
    {comments?.map((comment) => (
      <>
      <p key={comment._id}>{comment.comment}</p>
      <Link to="add-comment" state={{currentComment:comment}}>Edit Comment</Link>
      <button onClick={()=>handleDeleteCommentClick()}>Delete Comment</button>
      </>
    ))}
    </>
  )
}