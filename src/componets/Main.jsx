import { useState, useEffect } from 'react'

const Main = () => {
  const [dog, setDogs] = useState()
  useEffect(() => {
    const photos = async () => {
      const getPhotos = await fetch(`https://dog.ceo/api/breeds/image/random`)
      const data = await getPhotos.json()
      setDogs(data.message)
    }
    photos()
  }, [])

  return (
    <div className='flex justify-center items-center flex-col'>
      <div>
        <img src={dog} alt='' />
      </div>
    </div>
  )
}

export default Main
