import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box , Heading} from '@chakra-ui/react'
import UserTable from './components/UserTable'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <UserTable />
    </>
  )
}

export default App
