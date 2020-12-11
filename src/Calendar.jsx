import {PureComponent} from "react";
import momentJalaali from 'moment-jalaali';
import { Calendar,utils } from "react-modern-calendar-datepicker";
export default  class App extends  PureComponent{
    state={
        selectedDay:false
    }
    onchange(){
        this.setState({
            selectedDay:true
        })
    }
    render(){

        return(
            <div>

                <Calendar
                    value={this.state.selectedDay}
                    onChange={this.onchange}
                    shouldHighlightWeekends
                    locale="fa" // add this
                />
            </div>
        )
    }
}
