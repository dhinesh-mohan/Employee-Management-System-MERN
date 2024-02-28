import "./App.css";
import MainSection from "./MainSection/MainSection";
import LeftNav from "./components/LeftNav/LeftNav";
import TopNav from "./components/TopNav/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <LeftNav />
      <MainSection />
    </>
  );
}

export default App;
