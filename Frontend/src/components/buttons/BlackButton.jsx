import React from 'react'
import { Button } from '@material-tailwind/react'

function BlackButton({children, show}) {
  return (
    <Button 
    variant="text" 
    size="md" 
    className={`${show} rounded-full lg:inline-block py-4 px-6`} >
      <span className='flex items-center gap-x-2'>{children}</span>
    </Button>
  )
}

export default BlackButton