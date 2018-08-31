import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DatePicker from 'material-ui-pickers/DatePicker'
import MenuItem from '@material-ui/core/MenuItem'

 const INTERESTS = [
     {value: 'js', name:'Javascript'},
     {value: 'fb', name:'Firebase'},
     {value: 'le', name:'Aprender'},
     {value: 'sh', name:'Compartir'}
 ] 

export default class from extends Component{
    render (){
        const {model} = this.props
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
            value = {model.firsName}
            onChange = {this.props.handleChange}
            fullWidth
            />
            <TextField
            label='Apellido'
            name='lastName'
            className={classes.textField}
            value = {model.lastName}
            onChange = {this.props.handleChange}
            fullWidth
            />
            <TextField
            label='Celular'
            name='phoneNumber'
            className={classes.textField}
            value = {model.phoneNumber}
            onChange = {this.props.handleChange}
            fullWidth
            />
            <TextField
            label='Email'
            name='email'
            className={classes.textField}
            value = {model.email}
            onChange = {this.props.handleChange}
            fullWidth
            />
             <TextField
            label='Facebook'
            name='faceBookId'
            className={classes.textField}
            value = {model.faceBookId}
            onChange = {this.props.handleChange}
            fullWidth
            />
            <DatePicker 
            className={classes.textField}
            label= 'Fecha De Nacimiento'
            name = 'dob'
            onChange = {(date) =>{
                const event ={
                    target:{
                        name: 'dob',
                        value:date.format('YYYY-MM-DD')
                    }
                }
                this.props.handleChange(event)
            }}
            value={model.dob}
            fullWidth
            />

            <TextField
            label='Interes'
            name='Interes'
            className={classes.textField}
            value={model.interests}
            type='Date'
            fullWidth
            select
            SelectProps={{
                multiple: true
            }}
            onChange = {this.props.handleChange}
            >
            {INTERESTS.map((item)=>(
             <MenuItem
             key={item.value}
             value={item.value}>
             {item.name}
             </MenuItem>
            ))}
          
            </TextField>
            <Button  variant="contained" color="secondary" className={classes.container}>
            Guardar
            </Button>
            </Paper>
        )
    }
}