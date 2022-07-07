import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const [inputContent, setInputContent] = useState('');

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const addToDoList = (e) => {
    const content = e.target;
    console.log(content);
    setInputContent(content);
  };
  // const [a, setA] = useState([1, 2, 3, 4, 5]);
  // const plusNumber = () => {
  //   const arr = [...a];
  //   setA([...arr]);
  // };
  const test = () => {
    // add 눌럿을 때 실행할 애들
  };
  // <input name="name" placeholder="이름" onChange={onChange} value={name} />
  // <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
  // <button onClick={onReset}>초기화</button>

  return (
    <div className="ToDoList">
      <div className="ToDoTitle">
        <div className="Title">ToDoList</div>
      </div>
      <div className="ToDoInput">
        <div>
          <input
            className="InputBox"
            onChange={onChange}
            value={content}
            spellcheck="false"
          />
        </div>
        <div>
          <button onClick={test} className="InputBtn">
            add
          </button>
        </div>
      </div>
      <div>
        <div className="ToDoBox">
          <div className="ToDoDelete">X</div>
          <div className="ToDoContent">할 일 1</div>
          <div>
            <button className="UpdateBtn">수정</button>
          </div>
        </div>
      </div>
      {/* <React.Fragment>
        <h1>{a}</h1>
        <button onClick={plusNumber}>plus</button>
      </React.Fragment> */}
    </div>
  );
}

export default App;
