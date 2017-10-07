import React from 'react';
import {Row, Column} from 'react-bootstrap';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing : null 
    }
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item) => {
          return this.renderOrEditItem(item)
        })}
      </ul>
    );
  }

  renderOrEditItem(item) {
    return (
      (this.state.editing === item
        ? this.editItem(item)
        : this.renderItem(item)
      )
    );
  }

  editItem(item) {
    return (
      <li>
        <form>
          <label>
            item name
            <input 
              name="item"
              type="text"
              onChange={this.handleEditField}
            />
          </label>
        </form>
      </li>
    );
  }

  renderItem(item) {
    return <li onClick={() => this.toggleEditing(item)} >{item}</li>
  }

  toggleEditing(item) {
    this.setState({editing : item});
  }

  handleEditField(event) {
    if (event.keyCode === 13) {
      this.toggleEditing(null);
    }
  }
}

export default ItemList;
