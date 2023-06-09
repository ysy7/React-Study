import { useEffect } from "react";
import { useState } from "react";
const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // 컴포넌트가 처음 마운트 될때 2번 렌더링(브라우저 실행)이 발생한다.
  // state(name 또는 nickname)값이 변경될때마다 렌더링이 발생한다
  // useEffect의 두번째 인자값을 []로 표시하면
  // 컴포넌트가 처음 마운트 될때만 실행한다
  useEffect(() => {
    console.log("effect");
    console.log(name);

    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
    // e.target.value는 input박스의 내용을
    // name에게 저장
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
    // e.target.value는 input박스의 내용을
    // nickname에게 저장
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉 네임</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};
export default Info;