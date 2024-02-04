import './homeItems.css'
import React from 'react';

function HomeItems(props){
  return  <>
           <div className='containerHomeItems'>
              <img src={props.UrlImage} alt="insert text" className='homeTodoImage' />
              <p>{props.Description}</p>
          </div>
          </>;
  }

export default HomeItems;