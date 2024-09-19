import React, { useEffect, useState } from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

export default function Carousel() {
  let data = [img1, img2, img3]
  let [activeImgIndex, setImage] = useState(0)


  // useEffect(() => {

  //   const timer = setTimeout(() => {
  //     onNextButtonClick()
  //   }, 3000)
  //   return () => {
  //     clearTimeout(timer)
  //   }

  // }, [activeImgIndex])

  const onNextButtonClick = () => {
    if (activeImgIndex >= data.length - 1) {
      setImage(0)
    } else {
      console.log(activeImgIndex);
      setImage(activeImgIndex + 1)
    }
  }
  const onPrevButtonClick = () => {
    if (activeImgIndex === 0) {
      setImage(data.length - 1)
    }
    else {
      setImage(activeImgIndex - 1)
    }
  }

  return (
    <>
      <div>
        <p className='text-3xl font-bold underline'></p>
        Carousel
      </div>
      <button onClick={onPrevButtonClick}>PREV</button>
      <img alt="slider" src={data[activeImgIndex]} />
      <button onClick={onNextButtonClick}> NEXT</button>

    </>

  )
}
