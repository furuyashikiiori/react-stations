// @ts-check

export const DogImage = props => {
  console.log(props)
  return (
    <>
      <p>
        <img src={props.url} alt="サイトから持ってきた犬の画像" />
      </p>
    </>
  )
}

export default DogImage
