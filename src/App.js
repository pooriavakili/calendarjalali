import {PureComponent} from 'react';
import moment from 'jalali-moment'
import Home from "./Home"
export default  class App extends  PureComponent{
    constructor(props) {
        super(props);
this.state={
    data:[]
}
    }
  render(){

      const m = moment();
      m.locale('fa');
      m.format('YY-MM-DD');

    return( <div>
        <Home/>
        </div>
    )
  }
}
