import { useState } from "react";
import "./App.css";
import LeftNav from "./components/LeftNav/LeftNav";
import MainSection from "./components/MainSection/MainSection";
import TopNav from "./components/TopNav/TopNav";

function App() {
  const [employeeId, setEmployeeId] = useState("");

  return (
    <>
      <TopNav />
      <LeftNav employeeId={employeeId} />
      <MainSection setEmployeeId={setEmployeeId} />
    </>
  );
}

export default App;
