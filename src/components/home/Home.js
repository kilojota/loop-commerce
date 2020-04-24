import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import Banner from './Banner'
import Products from './Products'
const Home = () => {
  return (
    <>
      <Navbar />
      <div className='main'>
        <Banner
          bannerSubTitleText={'with Touch Bar'}
          bannerTitleText={['New', 'Macbook Pro!!']}
          imgPath={'pc.jpg'}
        />
        <Products />
      </div>
    </>
  )
}

export default Home
