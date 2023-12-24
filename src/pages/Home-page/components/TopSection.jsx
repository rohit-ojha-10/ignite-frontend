import React from 'react'
import Img from '../../../assets/images/dog.jpg'
function TopSection() {
  return (
    <div className='top-section' >
      {/*   
      
      ~~~~~~~~~~ Hero section start ~~~~~~~~~~~~~~~~
      
      */}
      <div className='hero-section' >

        <div className='tagLine-card' >
          <h1>Crowdfunding reimagined on the blockchain.</h1>
          <h2>Ignite your ideas, fuel innovation, and join the revolution</h2>
        </div>
        <img src={Img} className='image-card' ></img> {/* image layer */}

        <div className="gradient"></div>  {/* gradient layer */}

        <div className='text-layer' >                   {/* image text layer */}
          <div className='image-top-text img-txt'>
            <h1 >Title</h1>                            {/* add dinamic data */}
            <h2>Description</h2>                       
          </div>
          <h1 className='image-bottom-txt img-txt'>10,000 people funded this project</h1>
        </div>

        {/* Button */}
        <button className='start-fundraiser-button' onClick={()=>alert("clicked")} >Start a Fundraiser</button>
      </div>
      {/* 
      
      ~~~~~~~~~~~~~~ Hero section end ~~~~~~~~~~~~~~~~~~~
      
      */}
      {/*                 FundData bar              */}
      <div className='total-funds-data' >
        <div className='fund-data-colums' >
          <h2>251,256</h2>
          <p>project funded</p>
        </div>
        <div className='fund-data-colums middle-data ' >
          <h2>$72,754,462</h2>
          <p>towards creative work</p>
        </div>
        <div className='fund-data-colums' >
          <h2>54,462,083</h2>
          <p>pledges</p>
        </div>
        
      </div>
    </div>
  )
}

export default TopSection