import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormErrors } from './FormError';

import ImgVar from "../../assests/figma-bg.png"
import "./style.css";

class RegisterForm extends Component{


  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }
  
  
handleUserInput = (e) => {
  
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }


  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

render(){
    return (
      <div className="row d-flex justify-content-center">

        <div className="col-md-6">
            <div className="image">
              <img src={ImgVar} className="bg"/>
            </div>
        </div>
      
        <div className="col-md-6 content-centered d-flex justify-content-center">
        <div className="base-container ">
          <div className="header">ΣΥΝΔΕΣΗ</div>
          <div className="content">
            <div className="form">

              <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                <label htmlFor="username">Δ/νση ηλεκτρονικού ταχυδρομείου</label>
                <input type="email" required className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleUserInput}  />
              </div>

              <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                <label htmlFor="password">Κωδικός πρόσβασης</label>
                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleUserInput} placeholder="********" />
              </div>

            </div>
          </div>
          <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

          <Link to="/admin" className="footer">
            <button type="submit" className="btn btn-singin" disabled={!this.state.formValid}>Είσοδος</button>
            
          </Link>
          <div className="change-pass">
              <p>Ξέχασα τον κωδικό μου</p>
          </div>

        </div>
        </div>

      </div>
      
    )
}
}


export default RegisterForm;