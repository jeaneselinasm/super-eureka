import { useReactTable } from '@tanstack/react-table'
import React from 'react'
import { Box , Heading} from '@chakra-ui/react'

type Data = {
    id : number
    name : string
    details : string
}
const LicenseTable = () => {
    const table = useReactTable()
  return (
    <div>
      This is License Table
    </div>
  )
}

export default LicenseTable
