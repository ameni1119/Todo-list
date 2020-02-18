import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 function Listitem (props) {
     const item = props.item;
     const deleteitem = props.deleteitem;
      const listitem=item.map(item=>{
         return( 
             <div className='elements'Key={item.id}>
           < p className='item'>
             {item.text}<span>
            <i class="far fa-trash-alt" onClick={()=>deleteitem(item.id)}></i>
            </span></p>
            </div>
         )  
     })
     return (
         <div className='listitems'>
      <p >{listitem}</p>
      <i></i>
       </div>
     )
 }
 export default Listitem