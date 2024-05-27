import React, { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
import DogImage from './DogImage'
import './App.css' // CSSファイルをインポート

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState({})
  const [selectedBreed, setSelectedBreed] = useState('')
  const [pictureBreed, setPictureBreed] = useState([])

  const handleSelectChange = e => {
    setSelectedBreed(e.target.value)
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(dogData => {
        setBreeds(dogData.message)
      })
  }, [])

  const fetchImages = () => {
    if (selectedBreed) {
      const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random/21`
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setPictureBreed(data.message)
        })
    }
  }

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onChange={handleSelectChange}
      />
      <button onClick={fetchImages}>表示します</button>
      <div className="dog-list-container">
        {pictureBreed.map((url, key) => (
          <div className="dog-image-wrapper" key={key}>
            <DogImage url={url} />
          </div>
        ))}
      </div>
    </>
  )
}

export default DogListContainer
