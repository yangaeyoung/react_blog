import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['커피 오늘만 몇 잔째?', '우우 재미없다.', '유잼 운동 추천']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>


      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(!modal); setTitle(i) }} >{글제목[i]} <span onClick={(e) => {
                e.stopPropagation()
                let copy = [...따봉];
                copy[i] += 1;
                따봉변경(copy);
              }}>👍</span> {따봉[i]} </h4>
              <p>6월 20일 발행</p>
              <button onClick={() => {
                let delectTitle = [...글제목];
                delectTitle.splice(i, 1);
                글제목변경(delectTitle);
                let like = [...따봉];
                like.splice(i, 0);
                따봉변경(like);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => { 입력값변경(e.target.value); }} />

      <button onClick={() => { let copy = [...글제목]; copy.unshift(입력값); 글제목변경(copy) }}>등록</button>


      {/* <button onClick={()=>{ setTitle(0) }}>글제목0</button>
      <button onClick={()=>{ setTitle(1) }}>글제목1</button>
      <button onClick={()=>{ setTitle(2) }}>글제목2</button> */}

      {
        modal == true ? <Modal 글제목변경={글제목변경} title={title} 글제목={글제목} /> : null
      }

      <Modal2></Modal2>

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세 내용 확인 바람</p>
      <button onClick={() => {
        let copy = [...props.글제목];
        copy[2] = '노잼 운동 추천';
        props.글제목변경(copy);
      }}>글수정</button>
    </div>
  )
}


class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : 'yang',
      age : 29
    }
  }
  render() {
    return (
      <div>안녕 { this.state.name }
      <button onClick={()=> { this.setState({name:'aeyoung'})
      }}>버튼</button></div>
    )
  }
}

export default App;
