import { useParams } from "react-router-dom";
import { datas } from "./Project";

function ShowProjectData() {
  const { name } = useParams();

  //its returns only 1 element of array which meets the condition
  let item = datas.find((data) => data.pName == name);
  return (
    <ul className="list-group">
      <li className="list-group-item ">Project Name: {item.pName}</li>
      <li className="list-group-item ">Project type: {item.pType}</li>
      <li className="list-group-item ">language: {item.language1}</li>
      <li className="list-group-item ">language 2: {item.language2}</li>
      <li className="list-group-item ">language 3: {item.language3}</li>
    </ul>
  );
}

export default ShowProjectData;
