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
  return (
    <div>
      <header>
        <h1>初めてのReact</h1>
      </header>
      <p>犬の画像を表示するサイトです！</p>
      <img src={dogUrl} alt="サイトから持ってきた犬の画像" />
    </div>
  )
}
