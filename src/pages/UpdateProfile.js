import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useAuth } from "../components/context/AuthContext";
import { Link, useHistory } from "react-router-dom";

export const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { currentUser, updateMail, updatePass } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    const promises = [];
    setError("");
    setLoading(true);
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateMail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePass(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container className=" d-flex justify-content-center align-items-center min-vh-100">
      <div className="signup w-100 border rounded p-3">
        <p className="fs-1 text-center fw-bold text-dark pb-5">
          Update Profile
        </p>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
              required
              defaultValue={currentUser.email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Please leave blank to remain same password"
              ref={passwordRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Confirm-password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Please leave blank to remain same password"
              ref={confirmPasswordRef}
            />
          </Form.Group>
          <div>
            <Button
              disable={` ${loading}`}
              variant="primary"
              size="lg"
              type="submit"
              className="w-100"
            >
              Update
            </Button>
          </div>
        </Form>
        <p className="text-center ">
          {" "}
          <Link to="/" className="text-decoration-none">
            Cancel
          </Link>
        </p>
      </div>
    </Container>
  );
};
