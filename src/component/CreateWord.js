// CreateWord
import { useRef, useState } from "react"; // 이 줄을 추가하세요
import { useNavigate } from "react-router-dom"; // useHistory 대신 useNavigate를 import
import useFetch from "../Hooks/useFetch";

export default function CreateWrod(){
    const days = useFetch("http://localhost:3001/days");
    const histoty = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e){
        e.preventDefault();
        
        // isLoading이 false일 때만 아래의 함수가 실행되는 로직
        if(!isLoading){
            setIsLoading(true);
            fetch(`http://localhost:3001/words/`, {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringify({ 
            day : dayRef.current.value,
            eng : engRef.current.value,
            kor : korRef.current.value, 
            isDone : false }), // JSON.stringify로 객체를 JSON 문자열로 변환
      }).then(res => {
      if (res.ok) {
        alert("생성이 완료 되었습니다.")
        histoty(`/day/${dayRef.current.value}`);
        setIsLoading(false);
      }
    });  
     }    
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type = "text" placeholder="computer" ref={engRef}></input>
            </div>

            <div className="input_area">
                <label>Kor</label>
                <input type = "text" placeholder="컴퓨터" ref={korRef}></input>
            </div>

            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key = {day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button style={{opacity: isLoading ? 0.3 : 1,}}>{isLoading ? "Sabing..." : "저장"}</button>
        </form>
    );
}