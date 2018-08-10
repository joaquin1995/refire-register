import React,{ Component} from 'react'
import ReactDOM from 'react-dom'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { Menu } from '../node_modules/@material-ui/core';

const styles = (theme) =>{
   return{
        container:
        {
        width: '500px',
        margin: '0 auto',
        padding : theme.spacing.unit * 2
        }
    }
}


class App extends Component {
    render(){
        const classes = this.props.classes

        return(
        <Paper className={classes.container}>
        <Typography variant="display1" 
        color = 'secondary'
        >Registro de la comunidad</Typography>
        <TextField
        label='Nombre'
        name='firsName'
        fullWidth
        />
        <TextField
        label='Apellido'
        name='firsA'
        fullWidth
        />
        <TextField
        label='Celular'
        name='Phone'
        fullWidth
        />
        <TextField
        label='Email'
        name='Email'
        fullWidth
        />
         <TextField
        label='Facebook'
        name='Facebook'
        fullWidth
        />
         <TextField
        label='FechaNacimiento'
        name='Naciminto'
        type='Date'
        fullWidth
        />
        <TextField
        label='Interes'
        name='Interes'
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
        )
    }
}
App = withStyles(styles)(App)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
