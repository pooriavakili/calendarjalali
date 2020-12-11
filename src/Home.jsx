import {PureComponent} from "react";
import momentJalaali from 'moment-jalaali';
import DatePicker  from 'react-datepicker2';
export default class Home extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            value: momentJalaali('1396/7/6', 'jYYYY/jM/jD')
        };
    }
    render() {
        return (<DatePicker
            isGregorian={false}
            value={this.state.value}
            onChange={value => this.setState({ value })}
        />
        )
    }
}
