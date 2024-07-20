import { Component } from "react";
import Navbar from "./Navbar";
import ShowClasscompo from "./ShowClasscompo";

class Classcompo extends Component {
  empData = [
    {
      img: "https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ca1AFfPfzOPtHZdAwa7QtCD1TFDws7PG9t_rqSibdC0=",
      empId: 21,
      empName: "Raunak Tiwari",
      empDep: "Front-end developer",
    },
    {
      img: "https://media.istockphoto.com/id/958064228/photo/portrait-of-happy-young-man.jpg?s=612x612&w=0&k=20&c=lZoxAGwQd_IL1p50R6FCXwbKtofoSuknmAKJod6OkzQ=",
      empId: 22,
      empName: "Devendra Tiwari",
      empDep: "Back-end developer",
    },
    {
      img: "https://media.istockphoto.com/id/1288144402/photo/business-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=Yp4GodI3evrfpq6M5v8beKLYAhFpRvueVcy-u-nnPiE=",
      empId: 23,
      empName: "Shweta Shukla",
      empDep: "UI/UX Designer",
    },
    {
      img: "https://media.istockphoto.com/id/1387942892/photo/smiling-young-indian-man-freelancer-using-laptop-computer-typing-working-online-coworking-or.jpg?s=612x612&w=0&k=20&c=TJ5q6Q1tr4bH3JW4_-EQA6jR4xdLg4-1qTOgZTWCdL8=",
      empId: 24,
      empName: "Sujal Pandey",
      empDep: "Data Managment",
    },
  ];

  state = {
    currentProfile: null,
  };

  showDetails = (name) => {
    this.setState({ currentProfile: name });
  };

  render() {
    return (
      <>
        <Navbar />
        <h1>Class component</h1>
        <ul className="list-group list-group-numbered">
          {this.empData.map((data, index) => (
            <li
              onClick={(event) => this.showDetails(data.empName)}
              key={index}
              className="btn btn-primary list-group-item "
            >
              {data.empName}
            </li>
          ))}
        </ul>
        {this.state.currentProfile ? (
          <ShowClasscompo
            item={this.empData.find(
              (emp) => emp.empName == this.state.currentProfile
            )}
          />
        ) : null}
      </>
    );
  }
}

export { Classcompo };
