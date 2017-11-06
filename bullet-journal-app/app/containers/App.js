import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeeklyView from '../components/WeeklyView';

class App extends React.Component {
  componentDidMount() {
    const { dispatch, dateFocus } = this.props;
    dispatch(fetchItemsIfNeeded(this.props.dateFocus));
  }

  render() {
    return (
      <div>
        <div id='header'></div>
        <div className='container'>
          <WeeklyView 
            date={this.props.dateFocus} 
            items={this.props.itemsByDate}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { dateFocus, items } = state;
  const {
      isFetching,
      lastUpdated,
      entries : entries
  } = items || {
      isFetching : true,
      entries: []
  }

  return { 
    dateFocus,
    entries
  };
}

export default connect(mapStateToProps)(App)
