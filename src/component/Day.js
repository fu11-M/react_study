// Day.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../Hooks/useFetch";

export default function Day() {
  const { day } = useParams(); // URL의 day 가져오기
  const words = useFetch(`http://localhost:3001/words?day=${day}`)
  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map(word => (
            <Word word = {word} key={word.id}></Word>
          ))}
        </tbody>
      </table>
    </>
  );
}
