import React, { Component } from 'react';
import Popup from "reactjs-popup";
class Books extends Component {

  state = {
    books: [],
    showPopup: false,
  }


  

  loadBooks = () => {
    fetch('http://127.0.0.1:8000/api/books/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${this.props.token}`
      },
      body: JSON.stringify(this.state.credentials)
    })
      .then(data => data.json())
      .then(
        data => {
          console.log(data);
          if (data.detail) {
            this.setState({ books: [], showPopup: true })
          }
          else {
            this.setState({ books: data, showPopup: false })
          }
        }
      )
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div className="card text-center">
        <div className="card-header">
          Wellcome
        </div>

        {this.state.showPopup ?

          <div className="alert alert-danger" role="alert">
            Login to List All Books
          </div>
          : 
          this.state.books.map(book => {
            return <p className="card-text" key={book.id}>{book.title}</p>
          })
          }

        <div className="card-body">
          <a onClick={this.loadBooks} className="btn btn-primary">List all Books ?</a>
        </div>
        <div className="card-footer text-muted">
          Djang and React
        </div>
      </div>



    );
  }
}

export default Books;