// DO NOT DELETE

import './App.css'
import React, { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
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
    <div>
      <header>
        <h1>初めてのReact</h1>
      </header>
      <p>犬の画像を表示するサイト！</p>
      <button onClick={ChangeClick}>更新</button>
      <p>
        <img src={dogUrl} alt="サイトから持ってきた犬の画像" />
      </p>
    </div>
  )
}
