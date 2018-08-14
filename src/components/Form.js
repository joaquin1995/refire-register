import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DatePicker from 'material-ui-pickers/DatePicker'
import MenuItem from '@material-ui/core/MenuItem'


export default class from extends Component{
    render (){
        const classes = this.props.classes
        return(
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
        )
    }
}