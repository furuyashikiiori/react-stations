import { useEffect } from 'react'
import { useState } from 'react'
import BreedsSelect from './BreedsSelect'
import DogImage from './DogImage'

export const DogListContainer = () => {
  const [breeds, setbreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [pictureBreed, setpictureBreed] = useState([])

  const handleSelectChange = e => {
    setSelectedBreed(e.target.value)
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(dogData => {
        setbreeds(dogData.message)
      })
  }, [])

  useEffect(() => {
    if (selectedBreed) {
      fetchImages(selectedBreed)
    }
  }, [selectedBreed])

  const fetchImages = breed => {
    const url = `https://dog.ceo/api/breed/${breed}/images/random/12`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setpictureBreed(data.message)
      })
  }

  const handleButtonClick = () => {
    if (selectedBreed) {
      fetchImages(selectedBreed)
    }
  }

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onChange={handleSelectChange}
      />
      <button onClick={handleButtonClick}>表示します</button>
      {pictureBreed.map((url, key) => (
        <DogImage url={url} key={key} />
      ))}
    </>
  )
}

export default DogListContainer
