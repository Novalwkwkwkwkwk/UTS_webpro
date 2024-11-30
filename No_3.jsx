import React from "react";

const App = () => {

  const Input = () => (
    <input
      type="text"
      placeholder="Masukkan teks Anda..."
      style={{
        marginRight: "10px",
        padding: "12px 15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontSize: "16px",
        width: "100%",
        maxWidth: "250px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        outline: "none",
        transition: "box-shadow 0.3s",
      }}
      onFocus={(e) =>
        (e.target.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)")
      }
      onBlur={(e) => (e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")}
    />
  );

  const Button = () => (
    <button
      style={{
        padding: "12px 20px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s, transform 0.2s",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "#45a049";
        e.target.style.transform = "scale(1.05)";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "#4CAF50";
        e.target.style.transform = "scale(1)";
      }}
    >
      Kirim
    </button>
  );

  const Form = () => (
    <form
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Input />
      <Button />
    </form>
  );

  const FormSection = () => (
    <div
      style={{
        textAlign: "center",
        margin: "50px auto",
        padding: "30px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
        width: "90%",
        maxWidth: "400px",
      }}
    >
      <h2
        style={{
          color: "#333",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Form Input
      </h2>
      <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
        Masukkan teks Anda ke dalam form di bawah, lalu klik "Kirim".
      </p>
      <Form />
    </div>
  );

  return (
    <div
      style={{
        fontFamily: "'Arial', sans-serif",
        backgroundColor: "#f0f4f8",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <FormSection />
    </div>
  );
};

export default App;
