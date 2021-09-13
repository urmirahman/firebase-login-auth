import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { useAuth } from "../components/context/AuthContext";
import { Link,useHistory } from "react-router-dom";
export const Dashboard = () => {
 

  const history = useHistory();
  const [error, setError] = useState("");

  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    try {
      setError("");
      await logout();
      history.push("/login");
    } catch {
      setError("failed to logout");
    }
  }

  return (
    <Container className=" d-flex justify-content-center align-items-center min-vh-100">
      <div className="signup w-100 border rounded p-3">
        <p className="fs-1 text-center fw-bold text-dark pb-2">Dashboard</p>
        {error && <Alert variant="danger">{error}</Alert>}
        <Card className="text-center">
          <Card.Header>Profile Information</Card.Header>
          <Card.Body>
            <Card.Title>
              Email:<span className="fw-normal">{currentUser.email}</span>
            </Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Link to="/updateprofile"className="btn btn-success">
              Update Profile
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Button onClick={handleLogout} variant="primary">
              Logout
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </Container>
  );
};
