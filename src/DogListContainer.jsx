// @ts-check
import { useEffect } from 'react'
import { useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setbreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState()

  // @ts-ignore
  const handleSelectChange = e => {
    setSelectedBreed(e.target.value)
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(dogData => {
        setbreeds(dogData.message)
        console.log(dogData.message) // 更新された値を確認
      })
  }, [])

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onChange={handleSelectChange}
      />
    </>
  )
}

export default DogListContainer
