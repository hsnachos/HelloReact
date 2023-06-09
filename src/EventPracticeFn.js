import React, { useState } from 'react';

const EventPracticeFn = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = e => setUsername(e.tartet.value);
  const onChangeMessage = e => setMessage(e.tartet.value);

  const onClick = () => {
    alert(username + ":" + message);
    setUsername("");
    setMessage("");
  }

  const onKeyPress = (e) =>{
    if(e.key === "Enter") {
      onClick();
    }
  }

  return (
    <div>
        <h1>이벤트 연습</h1>
        <input
          name="username"
          placeholder='사용자명'
          value={username}
          onChange={onChangeUsername}
        />
        <input
          name="message"
          placeholder='아무거나 입력해보세요'
          value={message}
          onChange={onChangeMessage}
          onKeyPress={onKeyPress}
        />
        <button
          onClick={onClick}>
          확인
        </button>
        <h2>{message}</h2>
      </div>
  );
};

export default EventPracticeFn;