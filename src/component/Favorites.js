import React, { useState } from "react";
import { GoTrashcan} from "react-icons/go";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Favorites = () => {
  const [fav, setFav] = useState(getLocalItems());

  const removeElementLocalStorage = (id) => {
    let elements = getLocalItems();
    elements = elements.filter(element => element.id !== id);
    localStorage.setItem('lists', JSON.stringify(elements));
};
   

  const removeAll = () => {
    setFav([]);
    localStorage.removeItem("lists");
  };

  return (
    <div className="container">
      <h1>Favorites</h1>

      <div class="row g-2">
      <h4>Movies</h4>
        {fav.map((ele, index) => {
          return (
            <div class="col-md-3" key={ele.id}>
              <div class="card" >
                <img src={ele.posterUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{ele.title}</h5>
                  <GoTrashcan style={{color:'red'}} onClick={() =>removeElementLocalStorage(ele.id)}></GoTrashcan>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        {/* <button onClick={removeAll}>
          <span>Remove All</span>
        </button> */}
        <button type="button" class="btn btn-danger" onClick={removeAll}>Remove All</button>
      </div>
    </div>
  );
};

export default Favorites;
