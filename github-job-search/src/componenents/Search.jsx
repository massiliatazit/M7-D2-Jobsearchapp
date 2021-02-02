import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
class Search extends Component {
  state = {
    description: "",
    location: "",
    full_time: false,
  };
  handleSearch = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "full_time") {
      this.setState((prevState) => ({
        ...this.state,
        [name]: !prevState.full_time,
      }));
    } else {
      this.setState({ ...this.state, [name]: value });
    }
  };

  render() {
    return (
      <div className="search-section">
        <Form
          className="search-form"
          onSubmit={(event) => this.handleSearch(event)}
        >
          <Row>
            <Col>
              <Form.Group controlId="description">
                <Form.Control
                  type="text"
                  name="description"
                  value={this.state.description || ""}
                  placeholder="Enter search term"
                  onChange={(event) => this.handleInputChange(event)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="location">
                <Form.Control
                  type="text"
                  name="location"
                  value={this.state.location || ""}
                  placeholder="Enter location"
                  onChange={(event) => this.handleInputChange(event)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" type="submit" className="btn-search">
                Search
              </Button>
            </Col>
          </Row>
          <div className="filters">
            <Form.Group controlId="full_time">
              <Form.Check
                type="checkbox"
                name="full_time"
                className="full-time-checkbox"
                label="Full time only"
                checked={this.state.full_time}
                onChange={(event) => this.handleInputChange(event)}
              />
            </Form.Group>
          </div>
        </Form>
      </div>
    );
  }
}

export default Search;
