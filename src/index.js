import React,{ Component} from 'react'
import ReactDOM from 'react-dom'
import { withStyles } from '@material-ui/core/styles'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import styles from './styles'
import Form from './components/Form'
import 'moment/locale/es'
import moment from 'moment'

moment.locale('es')

// const model ={
//     firsName: "",
//     lastName: "",
//     phoneNumber: "",
//     email: "",
//     faceBookId: "",
//     dob: ""
// }
class App extends Component {
    state = {
        model:{
            firsName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            faceBookId: "",
            dob: new Date(),
            interests: []
        }
    }
    

    


    handleChange = e =>{
        // this.setState({
            const {name,value} = e.target
            console.log(name,value)
            this.setState({
                model: {
                    ...this.state.model,
                [name]: value
                
            }
        })
           
            // model: {firsName : 'Ana'

            // }
        // })
    }

    render(){
        const {model} = this.state
        return(
        <MuiPickersUtilsProvider utils={MomentUtils} locale='es' moment={moment}>
        <Form classes={this.props.classes}
        model = {this.state.model}
        handleChange ={this.handleChange}
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
