
import { useState } from "react";
const Suhang3305_04 = () => {
const [num1, setnum1] = useState("");
const [num2, setnum2] = useState("");
const [result, setresult] = useState("");
    const onChangenum1 = (e) => 
        setnum1(e.target.value);
    const onChangenum2 = (e) => 
        setnum2(e.target.value);
    const onChangeresult = (e) => 
        setresult(e.target.value);
        
    const onClick = () => {
        let a = (num1 + num2);
        setnum1("");
        setnum2("");
        setresult(a);
        console.log (setresult(a));
    };
    const onClick1 = () => {
       let b = num1 - num2;
        setnum1("");
        setnum2("");
        setresult(b);
        console.log (setresult(b));
    };  
    const onClick2 = () => {
        let c = num1 * num2;
        setnum1("");
        setnum2("");
        setresult(c);
        console.log (setresult(c));
    };
        const onClick3 = () => {
            let d = num1 / num2;
            setnum1("");
            setnum2("");
            console.log (setresult(d));
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
        onClick();
    }
};
return (
    <div>
        <h1>이벤트를 이용한 사칙연산 연습</h1>
    숫자1<input
        type="text"
        num="num1"
        placeholder="정수값을 입력하세요"
        value={num1}
        onChange={onChangenum1}
    />
    <br></br>
    숫자2<input
        type="text"
        num="num2"
        placeholder="정수값을 입력하세요"
        value={num2}
        onChange={onChangenum2}
        onKeyDown={onKeyDown}
    />
    <br></br>
    실행결과<input
        type="text"
        result="result"
        value={result}
        onChange={onChangeresult}
        onKeyDown={onKeyDown}
    />
    <br></br>
        <button onClick={onClick}>덧셈</button>
        <button onClick={onClick1}>뺄셈</button>
        <button onClick={onClick2}>곱셈</button>
        <button onClick={onClick3}>나눗셈</button>
    </div>
    );
    };
    export default Suhang3305_04;