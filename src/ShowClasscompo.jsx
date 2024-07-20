import React, { Component } from "react";

class ShowClasscompo extends Component {
  render() {
    const { item } = this.props;

    return (
      <>
        <ul className="list-group">
          <img src={item.img} alt="" className="" height={170} width={200}/>
          <li className="list-group-item">Employee Name: {item.empName}</li>
          <li className="list-group-item">Employee ID: {item.empId}</li>
          <li className="list-group-item">Department: {item.empDep}</li>
        </ul>
      </>
    );
  }
}

export default ShowClasscompo;
