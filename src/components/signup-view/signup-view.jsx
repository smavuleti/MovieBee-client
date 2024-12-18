import { useState } from "react";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      UserPassword: password,
      UserEmail: email,
      UserBirthday: birthday,
    };

    fetch("https://smavuleti-moviebee-479d2e8d7a6f.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log("Sign up response", data);
      if (response.ok) {
        alert("Signup successful");
      } else {
        alert("Signup Failed!");
      }
    });
  };

  return (
    <div>
      <form className="form-view" onSubmit={handleSubmit}>
        <h4> New here? Please signup and become a movie bee </h4>
        <label>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength="3"
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br></br>
        <label>
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br></br>
        <label>
          Birthday:{" "}
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </label>
        <br></br>
        <button type="submit"> Signup </button>
      </form>
    </div>
  );
};
