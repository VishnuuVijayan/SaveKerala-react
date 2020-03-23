import React, { Component } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AddVolunteer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bloodgroup: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      department: ["department1", "department2", "department3"],
      dept: "",
      bg: "Choose...",
      locality: "",
      contact: null,
      address: "",
      skills: "",
      user: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { user } = this.props;
    this.setState({ user });
  }

  onSubmit = () => {};
  render() {
    // console.log(this.state.user.email);
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
                  onChange={e => this.setState({ locality: e.target.value })}
                  placeholder="Enter Locality"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.contact}
                  onChange={e => this.setState({ contact: e.target.value })}
                  placeholder="Add Contact Number"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={this.state.address}
                onChange={e => this.setState({ address: e.target.value })}
                placeholder="1234 Main St"
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Skills</Form.Label>
                <Form.Control
                  placeholder="Unique Skills"
                  value={this.state.skills}
                  onChange={e => this.setState({ skills: e.target.value })}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Blood Group</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.bg}
                  onChange={e => this.setState({ bg: e.target.value })}
                >
                  {this.state.bloodgroup.map(bg => (
                    <option>{bg}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.dept}
                  onChange={e => this.setState({ dept: e.target.value })}
                >
                  {this.state.department.map(dpt => (
                    <option>{dpt}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="I'm ready to Volunteer" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, null)(AddVolunteer);
