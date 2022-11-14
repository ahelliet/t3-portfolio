import { useRouter } from 'next/router';
import React from 'react'

const Tag = () => {
    const router = useRouter()
    const { tag } = router.query
    console.log(tag);
    return (
        <div>{tag}</div>
    )
}

export default Tag