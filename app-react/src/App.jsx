import NetHeader from "./Components/NetHeader";

import NetFooter from "./Components/NetFooter";

import NetFilms from "./Components/NetFilms";

import NetNavBar from "./Components/NetNavBar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NetNavBar />
      <NetHeader />
      <NetFilms />
      <NetFooter />
    </>
  );
}

export default App;
