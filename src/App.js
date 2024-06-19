import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['커피 오늘만 몇 잔째?', '우우 재미없다.', '유잼 운동 추천']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  // function like(){
  //   console.log(1);
  // }


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>

      <div className="list">
        <h4>{ 글제목[0] }</h4>
        <p>발행일: 6월 18일</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] } <span onClick={()=>{ 따봉변경(따봉+1) } }>👍</span> { 따봉 } </h4>
        <p>발행일: 6월 17일</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setModal(modal == true ? false : true) }}>{ 글제목[2] } <button onClick={()=>{
          let copy = [...글제목];
          copy[2] = '노잼 운동 추천';
          글제목변경(copy);
      }}>↔️</button></h4>
        <p>발행일: 6월 16일</p>
      </div>
      
      {/* <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div> */}

     {
      modal == true ? <Modal/> : null
     }


    </div>
  );
}

function Modal() {
  return(
      <div className="modal">
        <h4>공지</h4>
        <p>날짜</p>
        <p>상세 내용 확인 바람</p>
      </div>
  )
}


export default App;
