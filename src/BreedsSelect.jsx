// @ts-check
import React from 'react'

export const BreedsSelect = props => {
  return (
    <>
      <select>
        {props.breeds.map((breed, index) => {
          return <option>{breed}</option>
        })}
      </select>
    </>
  )
}

export default BreedsSelect
