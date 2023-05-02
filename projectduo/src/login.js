import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
   
    console.log(`Logged in with email: ${email}, username: ${username}, password: ${password}`);
   
    window.location.href = "/home";
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;