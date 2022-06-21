import { useState } from 'react'

function Home() {
  // let name = 'nico'

  const [name, setName] = useState('nico')

  const handleClick = () => {
    setName('not nico')

  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Home