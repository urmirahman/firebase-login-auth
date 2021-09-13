import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useAuth } from "../components/context/AuthContext";
import { Link } from "react-router-dom";
export const ForgotPassword = () => {
  const emailRef = useRef();


 
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { resetPass} = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
        setMessage("")
      setError("");
      setLoading(true);
      await resetPass(emailRef.current.value);
      setMessage("Please check your inbox for more instruction")
      
    } catch {
      setError("Failed to reset Password");
    }
    setLoading(false);
  }

  return (
    <Container className=" d-flex justify-content-center align-items-center min-vh-100">
      <div className="signup w-100 border rounded p-3">
        <p className="fs-1 text-center fw-bold text-dark pb-5">Password Reset</p>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="info">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
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
              Reset Password
            </Button>
          </div>
        </Form>
        <p className="text-center ">
          {" "}
          <Link to="/signup" className="text-decoration-none">
            Don't have an account? Signup.
          </Link>
        </p>
      </div>
    </Container>
  );
};
