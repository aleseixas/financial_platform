import React from 'react'
import '../styles/infobox.css'

const InfoBox = ({ componentList }) => {
  return (
    <>
      <div className='infobox'>
        {componentList}
      </div>
    </>
  )
}

export default InfoBox