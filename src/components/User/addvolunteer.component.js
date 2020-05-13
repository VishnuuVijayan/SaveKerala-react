import React, { Component, useState } from "react";
import {
  Container,
  Form,
  Button,
  Col,
  Row,
  Alert,
  Modal
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Axios from "axios";

class AddVolunteer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bloodgroup: [
        "Choose...",
        "A+",
        "A-",
        "B+",
        "B-",
        "O+",
        "O-",
        "AB+",
        "AB-"
      ],
      department: ["Choose...", "department1", "department2", "department3"],
      dept: "",
      bg: "",
      locality: "",
      contact: null,
      address: "",
      skills: "",
      user: {},
      readytovolunteer: true,
      auth: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    auth: PropTypes.object.isRequired
    // isAuthenticated: PropTypes.bool
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { user } = this.props.auth;
    const { _id, email, first_name, last_name } = user;
    const {
      locality,
      contact,
      address,
      skills,
      bg,
      dept,
      readytovolunteer
    } = this.state;

    const newVolunteer = {
      locality,
      contact,
      address,
      skills,
      bg,
      dept,
      readytovolunteer
    };

    Axios.post("/users/update/" + _id, newVolunteer).then((res) =>
      console.log(res.data)
    );
  };
  render() {
    return (
      <div style={{ backgroundColor: "#fff", height: 700 }}>
        <Container>
          <h1 style={{ paddingTop: 25 }}>Register as a Volunteer</h1>
          <Form onSubmit={this.onSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Locality</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.locality}
                  onChange={(e) => this.setState({ locality: e.target.value })}
                  placeholder="Enter Locality"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.contact}
                  onChange={(e) => this.setState({ contact: e.target.value })}
                  placeholder="Add Contact Number"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={this.state.address}
                onChange={(e) => this.setState({ address: e.target.value })}
                placeholder="1234 Main St"
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Skills</Form.Label>
                <Form.Control
                  placeholder="Unique Skills"
                  value={this.state.skills}
                  onChange={(e) => this.setState({ skills: e.target.value })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Blood Group</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.bg}
                  onChange={(e) => this.setState({ bg: e.target.value })}
                >
                  {this.state.bloodgroup.map((bg) => (
                    <option>{bg}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.dept}
                  onChange={(e) => this.setState({ dept: e.target.value })}
                >
                  {this.state.department.map((dpt) => (
                    <option>{dpt}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                value={this.state.ready}
                onChange={(e) => {
                  this.setState({ ready: !this.state.ready });
                }}
                label="I'm ready to Volunteer"
              />
            </Form.Group>
            {this.state.ready ? (
              <Button variant="primary" type="submit">
                Submit
              </Button>
            ) : (
              <Button variant="primary" type="submit" disabled>
                Submit
              </Button>
            )}
          </Form>
        </Container>
      </div>
    );
  }
}

function ModalVisible() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

class Volunteer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    // console.log(isAuthenticated);
    const show = isAuthenticated;
    console.log(show);
    return (
      <div>
        {isAuthenticated ? <AddVolunteer /> : <Redirect to="/user-login" />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Volunteer);
