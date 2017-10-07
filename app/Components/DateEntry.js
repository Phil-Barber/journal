import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ItemList from './ItemList';

class DateEntry extends React.Component {
  render() {
    return (
      <div>
        {this.displayDate(this.props.date)}
        <ItemList items={this.getItems()} />
      </div>
    );
  }

  displayDate(date) {
    return (
      <Row>
        <Col md={3} >{this.formatDate(date)}</Col>
        <Col > {this.getDay(date)}</Col>
      </Row>
    );
  }

  formatDate(date) {
    return [
      date.getFullYear(), 
      date.getMonth() + 1, 
      date.getDate()
    ].join('-');
  }

  getDay(date) {
    return [
      "Sunday",
      "Monday", 
      "Tuesday", 
      "Wednesday", 
      "Thursday", 
      "Friday", 
      "Saturday"
    ][date.getDay()];
  }

  getItems() {
    return ['hi', 'bye', 'hello', 'TWAT'];
  }
}

export default DateEntry;
