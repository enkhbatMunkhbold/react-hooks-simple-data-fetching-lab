import React, { useEffect, useState } from "react";

function App() {

  const [image, setImage] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  const imageUrl = 'https://dog.ceo/api/breeds/image/random'

  useEffect(() => {
    fetch(imageUrl).then(res => res.json()).then(data => {
      setImage(data.message)
      data.status === 'success' ? setIsLoaded(true) : setIsLoaded(false)
    })
  }, [])

  if(!isLoaded) return <p>Loading..</p>

  return <img src={image} alt='A Random Dog'></img>
}

export default App;
