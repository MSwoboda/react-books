import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));


    // this.setState({ books: res.data })
  };

deleteBook = (id) => {
  API.deleteBook(id)
  .then( this.loadBooks())
  .catch(err => console.log(err));

}

  render() {
    return (
      <Container>
<br/>
          <Col size="md-12">

            <List>
              {this.state.books.map((book, i) => (
                <ListItem key={i}>
                  <a href={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </a>
                  <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                </ListItem>
              ))}
            </List>

          </Col>




      
      </Container>
    );
  }
}

export default Books;
