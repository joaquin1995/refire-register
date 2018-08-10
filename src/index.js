import React,{ Component} from 'react'
import ReactDOM from 'react-dom'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { Menu } from '../node_modules/@material-ui/core'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import MoiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import DatePicker from 'material-ui-pickers/DatePicker'

const styles = (theme) =>{
   return{
        container:
        {
        width: '500px',
        margin: '0 auto',
        padding : theme.spacing.unit * 2
        },
        textField: {
            marginBottom: theme.spacing.unit * 2
        }
    }
}


class App extends Component {
    render(){
        const classes = this.props.classes

        return(
        <MuiPickersUtilsProvider utils={MomentUtils}>
        <Paper className={classes.container}>
        <Typography variant="display1" 
        color = 'secondary'
        >Registro de la comunidad</Typography>
        <TextField
        label='Nombre'
        name='firsName'
        className={classes.textField}
        fullWidth
        />
        <TextField
        label='Apellido'
        name='firsA'
        className={classes.textField}
        fullWidth
        />
        <TextField
        label='Celular'
        name='Phone'
        className={classes.textField}
        fullWidth
        />
        <TextField
        label='Email'
        name='Email'
        className={classes.textField}
        fullWidth
        />
         <TextField
        label='Facebook'
        name='Facebook'
        className={classes.textField}
        fullWidth
        />
        <DatePicker className={classes.textField}/>
        <TextField
        label='Interes'
        name='Interes'
        className={classes.textField}
        type='Date'
        fullWidth
        select
        >
        <MenuItem>Javascript</MenuItem>
        <MenuItem>FS</MenuItem>
        <MenuItem>HTML5</MenuItem>
        <MenuItem>React</MenuItem>
        </TextField>
        <Button  variant="contained" color="secondary" className={classes.container}>
        Guardar
        </Button>
        </Paper>
        </MuiPickersUtilsProvider>
        )
    }
}
App = withStyles(styles)(App)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
