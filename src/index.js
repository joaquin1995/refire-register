import React,{ Component} from 'react'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import styles from './styles'
import Form from './components/Form'




class App extends Component {
    render(){
      

        return(
        <MuiPickersUtilsProvider utils={MomentUtils}>
        <Form classes={this.props.classes}
        />
        </MuiPickersUtilsProvider>
        )
    }
}
App = withStyles(styles)(App)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
