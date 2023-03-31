import React from "react";

const Filter = () => {
  
  return (
    <div style={{border:"2px solid red"}}>
      <h3>Filters</h3>
      <div>Category</div>
      <div >
        <div>
          <input type="checkbox" value="Veterinary" />
          <label>Veterinary</label>
        </div>
        <div>
          <input type="checkbox" value="Ayush" />
          <label>Ayush</label>
        </div>
        <div>
          <input type="checkbox" value="Fitness" />
          <label>Fitness</label>
        </div>
        <div>
          <input type="checkbox" value="Sexual Wellness" />
          <label>Sexual Wellness</label>
        </div>
        <div>
          <input type="checkbox" value="Treatments" />
          <label>Treatments</label>
        </div>
        <div>
          <input type="checkbox" value="Mom & Baby" />
          <label>Mom & Baby</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
