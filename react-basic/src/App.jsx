import useInputs from "./useInputs";

function App() {
  const { inputs, handleChange, reset } = useInputs({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(inputs);
    reset();
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <label>
          사용자 이름:
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          비밀번호:
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default App;
