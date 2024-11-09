// DayList.js
import { Link } from "react-router-dom";
import dummy from "../db/data.json";

export default function DayList() {
  return (
    <ul className="List_day">
      {dummy.days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link> {/* Link에 day.day를 포함 */}
        </li>
      ))}
    </ul>
  );
}
