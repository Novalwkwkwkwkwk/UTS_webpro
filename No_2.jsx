import React, { useState } from "react";

const Title = (props) => <h1>{props.text}</h1>;

const App = () => {
  
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {}
      <Title text="Perbedaan Props dan State" />

      {}
      <button onClick={() => setCount(count + 1)}>Klik Saya</button>
      <p>Jumlah klik: {count}</p>
    </div>
  );
};

export default App;
