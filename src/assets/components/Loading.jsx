import React from 'react'

const Loading = () => {
  return (
  <div className='box__loading'>
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <h2 className='waiting'>waiting for your permission</h2>
    </div>
  )
}

export default Loading