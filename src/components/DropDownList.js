import React from "react";
import './DropDownList.scss';

const DropDownList = ({handleChange})=> {
  return (
    <div className="row header mt-5">
      <div className="col">
        <div className="form-group">
        <label htmlFor="select-layout">Please select an item from the list</label>
          <select id="select-layout" className="form-control"
            name="drop down list" defaultValue="none" onChange={handleChange}>
            <option value="none" disabled hidden></option>
            <option value="xl">XL</option>
            <option value="2XL">2XL</option>
            <option value="4L">4L</option>
            <option value="XL/2L">XL/2L</option>
            <option value="XL/L/2SM">XL/L/2SM</option>            
          </select>
      </div>
      </div>
    </div>
  );
}


export default DropDownList;