// DayList.js
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");
  
  if(days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ul className="List_day">
      {days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link> {/* Link에 day.day를 포함 */}
        </li>
      ))} 
    </ul>
  );
}
