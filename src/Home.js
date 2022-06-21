import { useState } from 'react'

function Home() {
  // let name = 'nico'

  const [name, setName] = useState('nico')

  const [age, setAge] = useState(25)

  const handleClick = () => {
    setName('not nico')
    setAge(100)
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>I am {name} and {age}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Home