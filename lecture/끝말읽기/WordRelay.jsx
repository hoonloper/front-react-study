const React = require('react');
const { useState, useRef, useEffect } = React;

const WordRelay = () => {
  // const [word, setWord] = useState('제로초');
  // const [value, setValue] = useState('');
  // const [result, setResult] = useState('');
  // const inputEl = useRef(null);

  // const onSubmitForm = (e) => {
  //   e.preventDefault();
  //   if (word[word.length - 1] === value[0]) {
  //     setResult('딩동댕');
  //     setWord(value);
  //     setValue('');
  //     inputEl.current.focus();
  //   } else {
  //     setResult('땡');
  //     setValue('');
  //     inputEl.current.focus();
  //   }
  // };
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(10);
  const clickHandler = () => {
    setNumber(number + 1);
  };
  const clickHandler2 = () => {
    setNumber2(number2 - 1);
  };
  useEffect(() => {
    const gettedData = 100;
    setNumber(gettedData);
    // API 호출한다
  }, []);
  return (
    <>
      {/* <input type="checkbox" id="kiki" />
      <label htmlFor="kiki">{'나에요'}</label> */}
      <button onClick={clickHandler}>{number}</button>
      <button onClick={clickHandler2}>{number2}</button>
      {/* <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div> */}
    </>
  );
};

module.exports = WordRelay;
