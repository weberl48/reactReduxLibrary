import React, {Component} from 'react';
import { connect } from 'react-redux';
import{ selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-grouip-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props
  //inside bookslist
  return {
    books: state.books
  }


}
//Anything returned from this function will end up as props pn the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all reducers
  // bindActionCreators with dispatch passes action to all reducers within app
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}
//Promote BookList from a componet to a container

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
