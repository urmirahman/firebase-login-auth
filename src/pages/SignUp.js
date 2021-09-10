import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useAuth } from "../components/context/AuthContext";
import { Link,useHistory } from "react-router-dom";

export const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history= useHistory();

  const { signUp } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Password does not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/")
    } catch {
      setError("Failed to create an account. Invalid email or password");
    }
    setLoading(false);
  }

  return (
    <Container className=" d-flex justify-content-center align-items-center min-vh-100">
      <div className="signup w-100 border rounded p-3">
        <p className="fs-1 text-center fw-bold text-dark pb-5">SignUp</p>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Confirm-password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="confirm password"
              ref={confirmPasswordRef}
              required
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
              Signup
            </Button>
          </div>
        </Form>
        <p className="text-center ">
          {" "}
          <Link to="/login" className="text-decoration-none">
            Already have an account?
          </Link>
        </p>
      </div>
    </Container>
  );
};
