import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MovieCard } from "../movie-card/movie-card";
import "./profile-view.scss";

export const ProfileView = ({
  user,
  token,
  movies,
  updateUser,
  deregisterUser,
}) => {
  const [username, setUsername] = useState(user?.username || "");
  const [userPassword, setPassword] = useState("");
  const [userEmail, setEmail] = useState(user?.userEmail || "");
  const [userBirthday, setBirthday] = useState(user?.birthday || "");
  const navigate = useNavigate();

  const favoriteMoviesList =
    movies && user?.UserFavoriteMovies
      ? movies.filter((m) => user.UserFavoriteMovies.includes(m._id))
      : [];

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedUser = { username, userEmail, userBirthday };
    if (userPassword) {
      updatedUser.userPassword = userPassword;
    }
    console.log("username:", updatedUser);
    axios
      .put(`https://smavuleti-moviebee-479d2e8d7a6f.herokuapp.com/users/${username}`, updatedUser, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        alert("Profile updated successfully!");
        updateUser(response.data); // Callback to update user info in parent component
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        alert("Something went wrong while updating your profile.");
      });
  };

  const handleDeregister = () => {
    const confirmDeregister = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmDeregister) {
      axios
        .delete(`https://smavuleti-moviebee-479d2e8d7a6f.herokuapp.com/users/${username}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          alert("Account successfully deleted.");
          deregisterUser(); 
          navigate("/login");
        })
        .catch((error) => {
          console.error("Error deleting account:", error);
          alert("Something went wrong while deleting your account.");
        });
    }
  };

  const removeFromFavorites = (movieId) => {
    axios
      .delete(`https://smavuleti-moviebee-479d2e8d7a6f.herokuapp.com/users/${user.Username}/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { _id: movieId },
      })
      .then((response) => {
        updateUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container className="profile-container">
      <Row>
        <Col md={6}>
          <Form className="profile-form" onSubmit={handleUpdate}>
            <h2 className="text-center mb-4">Your Profile</h2>
            <Form.Group controlId="profileUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                placeholder={user.Username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="form-control-dark"
              />
            </Form.Group>
            <Form.Group controlId="profilePassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={userPassword}
                placeholder="******"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control-dark"
              />
            </Form.Group>
            <Form.Group controlId="profileEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={userEmail}
                placeholder={user.UserEmail}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control-dark"
              />
            </Form.Group>
            <Form.Group controlId="profileBirthday">
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="date"
                value={userBirthday}
                placeholder={user.UserBirthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="form-control-dark"
              />
            </Form.Group>

            <Col>
              <Button
                variant="warning"
                type="submit"
                className="mt-4 primary-button "
                style={{ cursor: "pointer" }}
              >
                Update
              </Button>
              <span></span>
              <Button
                variant="outline-danger btn-large"
                type="button"
                className="mt-4 primary-button"
                style={{ cursor: "pointer", marginLeft: "25px" }}
                onClick={handleDeregister}
              >
                Deregister
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>

      <h3 className="mt-3 mb-4">Favorite Movies</h3>
      <Row className="mb-4">
        {favoriteMoviesList.length > 0 ? (
          favoriteMoviesList.map((movie) => (
            <Col
              key={movie._id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex align-items-stretch"
            >
              <MovieCard
                movie={movie}
                showRemoveButton={true} 
                onFavoriteToggle={() => removeFromFavorites(movie._id)}
              />
            </Col>
          ))
        ) : (
          <p>No favorite movies!</p>
        )}
      </Row>
    </Container>
  );
};
