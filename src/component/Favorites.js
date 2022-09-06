import React,{useState} from 'react'
const getLocalItems=()=>{
  let list=localStorage.getItem('lists');
  console.log(list);
  if(list){
      return JSON.parse(localStorage.getItem('lists'))
  }else{
      return [];
  }
}


const Favorites = () => {

  const[fav,setFav]=useState(getLocalItems());

  const deleteItem=(i)=>{

 
    setFav(fav.filter((elem,id)=>id!==i))
   
   }
  
  return (
    <>
 <h1>Favorites</h1>

{
       fav.map((ele,id)=>{
            return(
            <div className='eachItem' key={id}>
            <h3>{ele}</h3>
            <i className="far fa-trash-alt" title="Delete item" onClick={()=>deleteItem(id)}></i>
        </div>

         ) })
    }

     
    </>
  )
}

export default Favorites
