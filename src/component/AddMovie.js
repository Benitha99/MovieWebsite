import React,{useState} from 'react'

const AddMovie = () => {
    const[query,setquery]=useState("");
  return (
    <div className='add-page'> 
      <div className='container'>
          <div className='add-content'>
              <div className='input-wrapper'>
                  <input type='text' placeholder='search' value={query} onChange={(e)=>setquery(e.target.value)}/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AddMovie
