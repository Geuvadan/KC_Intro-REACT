import React from 'react';
import './Register.css';
import { apiRegister } from '../../services/api.js';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';

export default class Register extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const register = await apiRegister(this.state.username, this.state.password);
    if (register.success) {
      this.props.history.push('/login');
    } else {
      alert(register.error);
    }
  };

  handleInput = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    if (name === 'username') {
      this.setState({
        username: value,
      });
    } else {
      this.setState({
        password: value,
      });
    }
  };

  render() {
    return (
      <div className="register-main">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label name="username">Nombre de usuario: </label>
            <input name="username" type="text" onChange={this.handleInput} />
          </div>
          <div>
            <label name="password">Contraseña: </label>
            <input name="password" type="password" onChange={this.handleInput} />
          </div>
          <div>
            <button className="button">Crear cuenta</button>
          </div>
        </form>
        <p>
          <small>
            Si ya tienes cuenta, <Link to="/login">haz login</Link>
          </small>
        </p>
      </div>
    );
  }
}
