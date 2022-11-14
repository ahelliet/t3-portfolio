import { useRouter } from 'next/router';
import React from 'react'

const Author = () => {
  const router = useRouter()
  const { author } = router.query
  console.log(author);
  return (
    <div>{author}</div>
  )
}

export default Author