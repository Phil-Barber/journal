import React from 'react';

import DateEntry from './DateEntry';

class DateList extends React.Component {
    render() {
        return (
            <div>{this.getDateEntries()}</div>
        );
    }

    getDateEntries() {
        return this.getDates().map(date => <DateEntry date={date} />);
    }

    getDates() {
        const start = this.props.start;
        const agg = this.props.agg;

        var dates = [];
        for (let i = 0; i < this.props.count; i++) {
            let entry = new Date(start.valueOf());

            if (agg === 'daily') {
                 entry.setDate(entry.getDate() + i);
            } else if (agg === 'monthly') {
                entry.setMonth(entry.getMonth() + i);
            }
            //else if (agg === 'yearly');h
            // else if ( hourly) 

            dates.push(entry);
        }
        return dates;
    }
}

export default DateList;
