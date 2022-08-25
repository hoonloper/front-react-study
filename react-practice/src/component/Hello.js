import { useState } from "react";

export default function Hello(props) {
  //   let name = "Mike";
  console.log(props);
  const [name, setName] = useState("Mike");

  const changeName = () => {
    setName(name === "Mike" ? "Jane" : "Mike");
  };

  return (
    <div>
      <h2 id="name">
        {name}({props})
      </h2>
      <button onClick={changeName}>Change</button>
    </div>
  );
}
