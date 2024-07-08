import { useEffect, useState } from "react";
import Blob from "./components/blob/Blob";

function App() {
  const imgURL =
    "https://images.unsplash.com/photo-1718809070481-a16828fbb61d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <center>
        <h1
          style={{
            paddingTop: "30vh",
            fontSize: "80px",
            position: "absolute",
            left: "50%",
            // transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          Welcome
        </h1>
      </center>
      <div className="bg-wrapper">
        <div className="blur">
          <div className="content">
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
