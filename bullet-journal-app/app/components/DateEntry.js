import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ItemList from './ItemList';

var sampleData = require('../sample-data');

class DateEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing : null 
    }
  }

  render() {
    return (
      <div>
        {this.displayDate(this.props.date)}
        <ItemList 
          editing={this.state.editing}
          items={this.getItems()} 
          handleEditField={this.handleEditField.bind(this)}
          toggleEditing={this.toggleEditing.bind(this)}
        />
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

  toggleEditing(itemId) {
    this.setState({editing : itemId});
  }

  handleEditField(event) {
    if (event.keyCode === 13) {
      this.toggleEditing(null);
      this.updateItem({
      });
    }
  }

  getItems() {
    return sampleData.items;
  }

  updateItem() {
  }
}

export default DateEntry;
