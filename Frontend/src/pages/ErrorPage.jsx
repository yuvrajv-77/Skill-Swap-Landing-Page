import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='flex items-center justify-center flex-col gap-y-8 h-screen bg-gray-700'>
        <Typography
        color='white'
        variant='h1'
        className='font-poppins'
        >
            😵 Error: Page Not Found 😵
        </Typography>
        <Typography
        color='white'
        variant='h6'
        className='font-poppins'
        >
           Check Console for Errors
        </Typography>
        
        <Link to={'/'}>
        <Button variant='outlined'
        className=' p-6 text-md text-white font-poppins shadow-2xl rounded-3xl'>
            Go To Home Page
        </Button>
        </Link>
       

    </div>
  )
}

export default ErrorPage