// Day.js
import { useParams } from "react-router-dom";
import dummy from "../db/data.json";
import Word from "./Word";

export default function Day() {
  const { day } = useParams(); // URL의 day 가져오기
  const wordList = dummy.words.filter(word => word.day === Number(day)); // day에 맞는 데이터 필터링

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map(word => (
            <Word word = {word} key={word.id}></Word>
          ))}
        </tbody>
      </table>
    </>
  );
}
