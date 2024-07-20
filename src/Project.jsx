import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";

let datas = [
  {
    pName: "Lecturer-App",
    pType: "Android App",
    language1: "Html",
    language2: "CSS 3",
    language3: "Java-Script",
  },
  {
    pName: "Student-App",
    pType: "Android App",
    language1: "Html",
    language2: "CSS 3",
    language3: "Java-Script",
  },
  {
    pName: "Admin-App",
    pType: "Android App",
    language1: "Html",
    language2: "CSS 3",
    language3: "Java-Script",
  },
  {
    pName: "Portfolio-Website",
    pType: "Web Application",
    language1: "Html",
    language2: "CSS 3",
    language3: "Java-Script",
  },
];

function Project() {
  return (
    <div>
      <Navbar />
      <h1>Project page</h1>
      <ul className="list-group list-group-numbered">
        {datas.map((data, index) => (
          // <Link key={index} to={`/ShowProjectsData/${data.pName}`}>
          //   {" "}
          //   <li className="list-group-item ">{data.pName}</li>
          // </Link>
          <Link key={index} to={`/Project/${data.pName}`}>
            {" "}
            <li className="list-group-item ">{data.pName}</li>
          </Link>
        ))}
      </ul>

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export { Project, datas };
