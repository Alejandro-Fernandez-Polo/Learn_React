import { useState, useEffect } from 'react'

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState('')

  // Recuperar una imagen al cambiar el hecho
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(CAT_ENDPOINT_IMAGE_URL + threeFirstWords)

    fetch(CAT_ENDPOINT_IMAGE_URL + threeFirstWords + '?json=true')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const imageUrl = data.url
        setImageUrl(imageUrl)
      })
  }, [fact])

  return { imageUrl }
}
