// @ts-check
import React from 'react'

const BreedsSelect = props => {
  return (
    <>
      <select>
        {props.breeds.map((breed, index) => {
          return <option key={index}>{breed}</option>
        })}
      </select>
    </>
  )
}

export default BreedsSelect
