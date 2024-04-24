// @ts-check
import { useEffect } from 'react'
import { useState } from 'react'
import BreedsSelect from './BreedsSelect'
import DogImage from './DogImage'

export const DogListContainer = () => {
  const [breeds, setbreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState()

  const [pictureBreed, setpictureBreed] = useState([])
  const a = 1

  // @ts-ignore
  const handleSelectChange = e => {
    setSelectedBreed(e.target.value)
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(dogData => {
        setbreeds(dogData.message)
        // console.log(dogData.message) // 更新された値を確認
      })
  }, [])
  const dogpic = () => {
    let texturl = 'https://dog.ceo/api/breed/'
    texturl += selectedBreed
    texturl += '/images/random/12'
    console.log('dogpic : ' + texturl)
    fetch(texturl)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setpictureBreed(data.message)
        console.log(pictureBreed)
      })
  }

  const dog_picture = () => {
    dogpic()
  }

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onChange={handleSelectChange}
      />
      <button onClick={dog_picture}>表示する</button>
      {pictureBreed.map((list, key) => (
        <DogImage imageUrl={list} key={key} />
      ))}
    </>
  )
}

export default DogListContainer
