import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  // useEffect(() => {
  //   fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     .then(response => response.json())
  //     .then(data => {
  //       const { fact } = data
  //       setFact(fact)

  //       const threeFirstWords = fact.split(' ', 3).join(' ')
  //       console.log(CAT_ENDPOINT_IMAGE_URL + threeFirstWords)
  //
  //       fetch(CAT_ENDPOINT_IMAGE_URL + threeFirstWords + '?json=true')
  //         .then(response => response.json())
  //         .then(data => {
  //           console.log(data)
  //           const imageUrl = data.url
  //           setImageUrl(imageUrl)
  //         })
  //     })
  // }, [])

  // Recuperar un hecho al cargar la página

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App gatos</h1>

      <button onClick={handleClick}>Recuperar un nuevo hecho</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted from fact: ${fact}`} />}
    </main>
  )
}
