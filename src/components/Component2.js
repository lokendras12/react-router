import React, { Suspense, useState } from "react";

const Comp1 = React.lazy(() => import("./Comp1"));

const Component2 = () => {
  const [val, setVal] = useState("");
  const [increment, setIncrement] = useState(0);
  return (
    <div>
      {" "}
      <div className="App-header">
        <p>React Practice : {increment}</p>
        <input
          placeholder="Enter A Number"
          style={{ height: 30, width: "50%", borderWidth: 1, padding: 10 }}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <Suspense fallback={<p>Loading</p>}>
          <Comp1 val={val} />
        </Suspense>
        <div
          style={{
            height: 30,
            width: "50%",
            borderRadius: 5,
            backgroundColor: "red",
            padding: 10,
          }}
          onClick={() => {
            setIncrement((i) => i + 1);
          }}
        >
          Increment
        </div>
      </div>
    </div>
  );
};

export default Component2;
