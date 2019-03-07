import React from 'react';
import { TextField, MenuItem, Button } from '@material-ui/core';

// Styling
import './DonorForm.css';
 
class DonorForm extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            fname:'',
            lname:'',
            email:'',
            mobile:'',
            password:'',
            cpassword:'',
            city:'Kismaayo',
            cities:[
                {
                    value:'Mogadishu', 
                    label:'Mogadishu'
                },
                {
                    value:'Kismaayo', 
                    label:'Kismaayo'
                },
                {
                    value:'Hargeyso', 
                    label:'Hargeyso'
                },
            ]
        }
    }
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
          city: event.target.value,
        });
      };
    handleSubmit = event => {
        if(this.state.fname === '')
        alert('All fields must be completed: ' + this.state.value);
        event.preventDefault();
      }

render(){
    return (
        <div  className='divForm'>
            <form  noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <div>
                    <TextField id="fname" label="First Name"  className='textField' 
                    value={this.state.fname} onChange={this.handleChange('fname')} margin="normal" />
                    <TextField id="lname" label="Last Name" className='textField'
                    value={this.state.lname} onChange={this.handleChange('lname')} margin="normal" />
                </div>
                <div>
                    <TextField id="mobile" label="Mobile" className='textField'
                    value={this.state.mobile} onChange={this.handleChange('mobile')} margin="normal" />
                    <TextField id="emial" label="Email" type="Email" className='textField'
                    value={this.state.email} onChange={this.handleChange('email')} margin="normal" />
                </div>
                <div>
                    <TextField id="password" label="Password" type="Password" className='textField'
                    value={this.state.password} onChange={this.handleChange('password')} margin="normal" />
                    <TextField id="cpassword" label="Comfirm Password" type="Password" className='textField'
                    value={this.state.cpassword} onChange={this.handleChange('cpassword')} margin="normal" />
                </div>
                <div>
                    <TextField id="city" select
                    label="Select"
                    className='textField'
                    value={this.state.city}
                    onChange={this.handleChange('city')}
                    SelectProps={{
                        MenuProps: {
                        className: 'menu',
                        },
                    }} helperText="Please select your city"
                    margin="normal"
                >
                    {this.state.cities.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                    ))}
                </TextField>
                </div>
                <div>
                    <Button type='submit' variant="contained" color="primary" className='textField'>
                    Sign up
                    </Button>
                </div>
            </form>
        </div>
    );
  }
}
  
export default DonorForm;