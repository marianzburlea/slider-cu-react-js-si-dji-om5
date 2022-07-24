import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Background } from '../component'

const Home = () => {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (selected < 2) {
        setSelected(selected + 1)
      } else {
        setSelected(0)
      }
    }, 2000)
  }, [selected])

  return (
    <div>
      <Head>
        <title>Slider inteligent cu React JS si DJI OM5</title>
        <meta
          name="description"
          content="Hai sa incepem de la zero un slider inteligent cu React JS, Styled Components si Photoshop"
        />
      </Head>

      <h1>Ca sa fim fericiti</h1>
      <div>Selected value: {selected + ''}</div>
      <Background selected={selected} />
    </div>
  )
}

export default Home
