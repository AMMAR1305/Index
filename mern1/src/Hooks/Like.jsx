
import React, { useState } from 'react'

const Like = () => {
  const [like, setLike] = useState(0)

  return (
    <div>
      <h3> Likes : {like} </h3>
      <button onClick={() => setLike(like + 1)}>Like</button>
      <button onClick={() => setLike(like - 1)}>Unlike</button>
      <button onClick={() => setLike(0)}>Reset</button>
    </div>
  )
}

export default Like