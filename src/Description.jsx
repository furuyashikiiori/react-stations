// @ts-check
import React, { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/stbernard/n02109525_10908.jpg',
  )

  const change = async () => {
    const data = await fetch('https://dog.ceo/api/breeds/image/random')
    const img = await data.json()
    return img.message
  }
  const ChangeClick = async () => {
    const imageUrl = await change()
    setDogUrl(imageUrl)
  }
  return (
    <>
      <div className="allthing">
        <button>表示</button>
        <p>犬の画像を表示するサイト！</p>
        <button onClick={ChangeClick}>更新</button>
        <DogImage url={dogUrl}></DogImage>
      </div>
    </>
  )
}

export default Description
