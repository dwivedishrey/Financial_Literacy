// Message.js
import React from 'react';
import { useGlobalContext } from "../../Context/globalContext";

const Message = () => {
  const { message } = useGlobalContext();
  
  if (!message) return null;

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'lightgreen', padding: '10px', borderRadius: '5px', zIndex: 1000 }}>
      {message}
    </div>
  );
};

export default Message;
