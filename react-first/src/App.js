import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [list, setList] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    getListData();
  }, []);

  const getListData = async () => {
    const { data } = await axios.get('http://localhost:3001/api/todo');
    const newData = data.data.map((toDo) => toDo);

    list.push(...newData);

    setList(newData);
  };

  const onChange = (e) => {
    const content = e.target.value;

    setContent(content);
  };

  const addContent = () => {
    list.push({ description: content });

    setList([...list]);
  };

  const deleteToDo = (e) => {
    const target = e.currentTarget.id;
    const filterdList = list.filter(({ id }) => id !== +target);

    setList(filterdList);
  };

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
          <button onClick={addContent} className="InputBtn">
            add
          </button>
        </div>
      </div>
      {list.map((content, index) => (
        <div>
          <div className="ToDoBox">
            <div id={content.id} onClick={deleteToDo} className="ToDoDelete">
              X
            </div>
            <div className="ToDoContent">{content.description}</div>
            <div>
              <button className="UpdateBtn">수정</button>
            </div>
          </div>
        </div>
      ))}
      {/* <React.Fragment>
        <h1>{a}</h1>
        <button onClick={plusNumber}>plus</button>
      </React.Fragment> */}
    </div>
  );
}

export default App;
