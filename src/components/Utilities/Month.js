import React from 'react'
import { connect } from 'react-redux';
import Day from './Day'
import { fetchEvents } from '../../actions/calendar';
import dayjs from 'dayjs';
class Month extends React.Component {
  async componentDidMount(){
   await this.props.fetchEvents();
  }
  render(){
    return (
      <div className="flex-1 grid grid-cols-7 grid-rows-5">
          {this.props.month.map((row,i)=>{
              return (
                  <React.Fragment key={i}>
                  {row.map((day,idx)=>{
                    const filteredEvents = this.props.events.filter((event) => dayjs(event.day).format("DD-MM-YY") === day.format("DD-MM-YY"))
                     return( <Day day={day} key={idx} rowIdx={i} dayEvents={filteredEvents}/>);
                  })}
              </React.Fragment>
              );
          })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.calendar.events,
  };
};


export default connect(mapStateToProps, { fetchEvents })(Month);