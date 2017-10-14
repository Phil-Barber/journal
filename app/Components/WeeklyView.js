import React from 'react';
import { Col } from 'react-bootstrap';

import DateList from './DateList';

class WeeklyView extends React.Component {
  render() {
    return (
      <div>
        <Col md={6} >
          <DateList count={7} start={this.props.date} agg="daily" />
        </Col>
        <Col md={6}> 
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.
        </Col>
      </div>
    );
  }
}

export default WeeklyView;
