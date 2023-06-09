import {useState} from "react";

const Suhang3305_03 = (props) =>{
    const[name, setName] = useState("홍길동");
    const msg = [
        
    ]
    return(
        <div>
            <button onClick={onClickEnter}>change</button>
            <h1>{name}</h1>

        </div>
    );
};
export default Suhang3305_03;