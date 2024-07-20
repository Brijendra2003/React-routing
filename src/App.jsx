// import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { Project } from "./Project";
import Contact from "./Contacts";
import ShowProjectData from "./ShowProjectsData";
import DefoultComponent from "./DefoultComponent";
import { Classcompo } from "./Classcompo";
import ShowClasscompo from "./ShowClasscompo";
// import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*if the link = / then <Home/> component will render in the page*/}
        {/*  
        
        */}
        <Route path="Home" element={<Home />} />
        {/*if the link = Home then <Home/> component will render in the page*/}
        {/* 
        
        */}
        <Route path="About" element={<About />} />
        {/* 
        
        */}
        {/* <Route path="Project" element={<Project />} />
        <Route path="ShowProjectsData/:name" element={<ShowProjectData />} /> */}
        <Route path="Project" element={<Project />}>
          <Route index element={<DefoultComponent />} />
          {/* index use for default component rendering */}
          <Route path=":name" element={<ShowProjectData />} />
        </Route>
        {/* 
        
        */}
        <Route path="Contact" element={<Contact />} />
        {/* 
        
        */}
        <Route path="Classcompo" element={<Classcompo />}>
          {/* <Route index element={<DefoultComponent />} />
          <Route path=":name" element={<ShowClasscompo />} /> */}
        </Route>
        {/* 
        
        */}
      </Routes>
    </div>
  );
}

export default App;
