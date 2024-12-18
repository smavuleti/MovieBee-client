import { useState } from "react";
export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    //this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
      Username: username,
      UserPassword: password,
    };
    //https://smavuleti-moviebee-479d2e8d7a6f.herokuapp.com/
    fetch("https://smavuleti-moviebee-479d2e8d7a6f.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
          //alert("Login Success " +username+ "!");
        } else {
          alert("Login Failed: No User Found!");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <div>
      <form className="form-view" onSubmit={handleSubmit}>
        <h4> Login to your account here </h4>
        <label>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br></br>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br></br>
        <button type="submit"> Login </button>
      </form>
    </div>
  );
};
