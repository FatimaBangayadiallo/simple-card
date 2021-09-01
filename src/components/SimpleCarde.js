import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title.js';
import Description from './Description.js';
import ImageFuntion from './Image.js';


 class SimpleCard extends React.Component {
   render(){
     return(
       <div className='compo'>
       <ImageFuntion
          source = 'https://images.unsplash.com/photo-1449088182871-0b7dbffc501b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
       />
        <div className='bint'>
        <Title
         titre = "hi je suis un titre"
        />

        <Description
           desc = 'hi I am a description !'
        />
        </div>


       </div>
     );
   }
 };
 export default SimpleCard;
