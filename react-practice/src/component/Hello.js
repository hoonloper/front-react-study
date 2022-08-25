import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age }) {
  //   let name = "Mike";
  console.log();
  const [name, setName] = useState("Mike");
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

  const changeName = () => {
    setName(name === "Mike" ? "Jane" : "Mike");
  };

  return (
    <div>
      <h2 id="name">
        {name}({age}) : {msg}
      </h2>
      <UserName name={name}></UserName>
      <button onClick={changeName}>Change</button>
    </div>
  );
}
