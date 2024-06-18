import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '우우 재미없다.';
  let [a, b] = useState('유잼 운동 추천');

  return (
    <div className="App">
      <div class="black-nav">
        <h4>블로그임</h4>
      </div>
      <div class="list">
        <h4>{ a }</h4>
        <p>발행일: 6월 18일</p>
      </div>
      <h4>{ post }</h4>
      <p></p>
    </div>
  );
}

export default App;
