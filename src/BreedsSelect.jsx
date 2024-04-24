// @ts-check
import React from 'react'

// export const BreedsSelect = props => {
//   return (
//     <>
//       <select>
//         {props.breeds.map((breed, index) => {
//           return <option>{breed}</option>
//         })}
//       </select>
//     </>
//   )
// }

export const BreedsSelect = ({ breeds, selectedBreed, onChange }) => {
  const dogs = Object.keys(breeds).map(key => (
    <option value={key} key={key}>
      {key}
    </option>
  ))
  alert(dogs)
  return (
    <select value={selectedBreed} onChange={onChange}>
      {dogs}
    </select>
  )
}

export default BreedsSelect
