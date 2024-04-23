// @ts-check
import { useEffect } from 'react'
import { useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setbreeds] = useState([])
  const [sellectedBreed, setSelectedBreed] = useState()

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
      <BreedsSelect breeds={breeds} />
    </>
  )
}

export default DogListContainer
