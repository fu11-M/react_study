import useFetch from "../Hooks/useFetch"
import { useNavigate } from "react-router-dom"; // useNavigate import
import { useRef } from "react";


export default function CreateDay(){
    const days = useFetch("http://localhost:3001/days");
    const histoty = useNavigate();
    const dayRef = useRef(null); // useRef로 dayRef 생성

    function addDay(){
        fetch(`http://localhost:3001/days/`, {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body: JSON.stringify({ day : days.length + 1 }), // JSON.stringify로 객체를 JSON 문자열로 변환
      }).then(res => { 
      if (res.ok) { 
        alert("생성이 완료 되었습니다.")
        histoty(`/`);
      }
    });
    }

    return (
    <div>
        <h3>현재 일수 : {days.length}일</h3>
        <button onClick={addDay}>Day 추가</button>
    </div>)
}
