import React from 'react'
import Img from '../../../assets/images/dog.jpg'
function TopSection() {
  const title = 'Put pets in vets';
  const description = 'Do not let your pet lick your face or hands. Keep your pet up to date on all vaccinations and heartworm, flea, and tick preventives. Practice safe handling of your pet because your pet may behave differently during a stressful situation. Keep your pet in a carrier or on a leash.'
  return (
    <div className='top-section' style={{color:'black'}}>
      {/*   
      
      ~~~~~~~~~~ Hero section start ~~~~~~~~~~~~~~~~
      
      */}
      {/*                 FundData bar              */}
      <div className='total-funds-data  shadow-lg' >
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
      <div className='hero-section' >

        <div className='tagLine-card' >
          <h1>Crowdfunding reimagined on the blockchain.</h1>
          <h2>Ignite your ideas, fuel innovation, and join the revolution</h2>
        </div>
        <img src={Img} className='image-card' ></img> {/* image layer */}

        <div className="gradient"></div>  {/* gradient layer */}

        <div className='text-layer' >                   {/* image text layer */}
          <div className='image-top-text img-txt'>
            <h1 >{title}</h1>                            {/* add dinamic data */}
            <h3>{description}</h3>                       
          </div>
          <h1 className='image-bottom-txt img-txt'>10,000 people funded this project</h1>
        </div>

        {/* Button */}
        <button className='start-fundraiser-button shadow-lg' onClick={()=>alert("clicked")} >Start a Fundraiser</button>
      </div>
      {/* 
      
      ~~~~~~~~~~~~~~ Hero section end ~~~~~~~~~~~~~~~~~~~
      
      */}
    </div>
  )
}

export default TopSection