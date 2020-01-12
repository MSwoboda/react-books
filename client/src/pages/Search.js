import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import axios from "axios";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { ListItem, List } from "../components/List"
import SaveBtn from "../components/SaveBtn"


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

    let outArray = [];

    const res = await axios(` https://www.googleapis.com/books/v1/volumes?q=` + this.state.queryString);
    const data = await res.data.items;

    for (let index = 0; index < data.length; index++) {
      try {
        outArray[index] = { title: data[index].volumeInfo.title, author: data[index].volumeInfo.authors[0], description: data[index].volumeInfo.description, image: data[index].volumeInfo.imageLinks.smallThumbnail };
      } catch (error) {
        outArray[index] = { title: data[index].volumeInfo.title, author: data[index].volumeInfo.authors, description: data[index].volumeInfo.description, image: data[index].volumeInfo.imageLinks.smallThumbnail };
      }
    }
    this.setState({ books: outArray });
  };

  saveBook = (book) => {
    API.saveBook(book)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">

            <br />

            <Row >
              <Col size="sm-9">
                <InputGroup onChange={this.handleInputChange} className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder=""
                    aria-label="search"
                  />
                </InputGroup>
              </Col>

              <Col size="sm-3">
                <button onClick={this.search} style={{ marginBottom: 10 }} className="btn btn-success"> Search </button>
              </Col>
            </Row>
          </Col>
          <Col size="md-12">

            <List>
              {this.state.books.map((book, i) => (
                <ListItem key={i}>
                  <a href={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </a>
                  <SaveBtn onClick={() => this.saveBook(book)} />
                </ListItem>
              ))}
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
