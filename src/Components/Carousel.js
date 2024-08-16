import React, { useState } from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

export default function Carousel() {
  let data = [img1, img2, img3]
  let [activeImgIndex, setImage] = useState(0)


  const onNextButtonClick = () => {
    setImage(++activeImgIndex)
  }
  const onPrevButtonClick = () => {
    setImage(--activeImgIndex)
  }

  return (
    <>    <div>Carousel</div>
      <button onClick={onPrevButtonClick}>PREV</button>
      <img alt="slider" src={data[activeImgIndex]} />
      <button onClick={onNextButtonClick}> NEXT</button>

    </>

  )
}
