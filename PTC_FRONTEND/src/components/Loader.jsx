import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loader = ({loading}) => {
  return (
    // min-h-screen
    <div className=' flex justify-center items-center'>
      <ClipLoader
        size={100}
        color='2e7d32'
        loading={loading}
      />
    </div>
  )
}

export default Loader