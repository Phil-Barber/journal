import React from 'react';
import ReactDOM from 'react-dom';

import WeeklyView from './Components/WeeklyView';

class App extends React.Component {
  render() {
    return (
      <div>
        <div id='header'></div>
        <div className='container'>
          <WeeklyView date={new Date()}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
