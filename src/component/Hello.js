import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age: initialAge }) { // props로 전달된 age를 initialAge로 받음
    console.log(initialAge);
    const [name, setName] = useState("Mike");
    const [age, setAge] = useState(initialAge); // age를 상태로 관리

    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

    return (
        <div>
            <h2 id="name">
                {name}({age}세) : {msg}
            </h2>

            <UserName name = {name}></UserName>

            <button
                onClick={() => {
                    setName(name === "Mike" ? "Jane" : "Mike");
                    setAge(age + 1); // 클릭 시 age가 증가
                }}
            >
                Change
            </button>
        </div>
    );
}
