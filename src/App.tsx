import Blob from "./components/blob/Blob";

import Basic from "./components/errors/Basic";
import Center from "./components/errors/Center";
import Slide from "./components/errors/Slide";

function App() {
  const imgURL =
    "https://images.unsplash.com/photo-1718809070481-a16828fbb61d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <div className="content">
        <h1>Welcome</h1>
        <p>A Demo of Custom Alert Components</p>
        <div style={{ display: "flex" }}>
          <Basic />
          <Center />
          <Slide />
        </div>
      </div>
      <div className="bg-wrapper">
        <div className="blur">
          <div>
            <img src={imgURL} />
          </div>
        </div>
        <Blob />
      </div>
      <div className="images">
        <img src={imgURL} />
      </div>
    </>
  );
}

export default App;
