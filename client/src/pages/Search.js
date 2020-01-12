import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import axios from "axios";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Books extends Component {
  state = {
    books: [],
    queryString: ''
  };

  handleInputChange = event => {

    let value = event.target.value;
    this.setState({ queryString: value });
  };


  search = async () => {

    const res = await axios(
      ` https://www.googleapis.com/books/v1/volumes?q=` + this.state.queryString
    );
    // console.log(res);

    const movies = await res.data.items;
    console.log(movies);

    // this.setState({ books:movies});
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">

            <br />
            <InputGroup onChange={this.handleInputChange} className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="quilting"
                aria-label="search"
              />
            </InputGroup>
            <button onClick={this.search} style={{ marginBottom: 10 }} className="btn btn-success"> Hek </button>

          </Col>
          {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default Books;
