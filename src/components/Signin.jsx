import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Card, CardTitle, Alert } from 'reactstrap';

import { login } from "../utils/apicalls.js";
import PostList from './posts/PostList';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            password: '',
            loginMessage: '',
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.onSignin = this.onSignin.bind(this); 
    }

    handleUsernameChange(e) {
        this.setState({username: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    onSignin(e) {
        e.preventDefault();
        const {
            username, password
        } =this.setState;
        // Comprueba si es un usuario válido de la BDD
        login(username, password).then((res) => this.checkLogin(res, username));
    }

    checkLogin(res, username) {
        //SI el usuario es válido...
        if (res.message === 'ok') {
            sessionStorage.setItem('role', res.role);
            sessionStorage.setItem('iduser', res.id);
            sessionStorage.setItem('username', res.username);

            this.props.history.push("/home");
        } // Si no, tratar el error
        else {
            this.setState({
                loginMessage: (<Alert color='danger'>{res.message}</Alert>)
            });
        }
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col xs="9">
                        <PostList/>
                    </Col>
                    <Col xs="3">
                        <Card body>
                            <CardTitle tag="h4">Login</CardTitle>
                            {this.state.loginMessage}
                            <Form>
                                <FormGroup>
                                    <Label for="aUsername">Username</Label>
                                    <Input type='text' name='username' id='aUsername' placeholder='Introduce tu username' onChange={this.handleUsernameChange} required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="aPassword">Password</Label>
                                    <Input type='password' name='password' id='aPassword' placeholder='Introduce tu Contraseña' onChange={this.handlePasswordChange} required/>
                                </FormGroup>
                                <Button onClick={this.onSignin}>Entrar</Button>
                            </Form>
                        </Card>
                        <Row>
                            <Col tag="center">
                                <Link to="/signup"><strong className='text-muted'>Registrarse</strong></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Signin;