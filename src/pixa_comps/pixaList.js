import React from 'react';

function PixaList(props){

 


  return(
    <div style={{minHeight:"94vh"}} className=' text-light'>
      <div className="row justify-content-center">
        {props.pics_ar.map(item => {
          return(
            <div key={item.id} className='col-md-5  border p-3 m-3  pic'>
              <img src={item.previewURL} className='float-start me-2 w-25'/>
              <h2>{item.tags}</h2>
              <div>Views: {item.views}</div>
              <div>Likes: {item.likes}</div>
            </div>
          )
        })}
      </div>
    <h2 className='text-center p-5 text-danger'>Scroll to see more pics wite my lazzy tech </h2>
      
      
    </div> 
  )
}

export default PixaList