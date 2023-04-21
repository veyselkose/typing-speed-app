import React from 'react'
import { useSelector } from 'react-redux';

function Words() {
  const { data, words, text, status } = useSelector((state) => state.typing);

  return (
    <p>{status ? "loading..." : words}</p>
  )
}

export default Words