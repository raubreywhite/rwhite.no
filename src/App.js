import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, NavDropdown, NavItem, MenuItem, Panel } from 'react-bootstrap';
import logo from './logo.svg';
import './index.css';
import Resume from './Resume.js';
import Projects from './Projects.js';

// css from https://github.com/susielu/minimal-ui

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tab: 'resume'
        };
        this.handleSelect = this.handleSelect.bind(this)
    }
    
    handleSelect(event){
        this.setState( { tab: event } );
    }
    
    
    render() {
        
        
        
        return (
                
                <div>
                <header>
                <div className="container">
                <div className="txt-center">
                <h1 className="column12">Richard White</h1>
                <nav className="column12 nav nav-small">
                <IndexLink to="/" activeClassName="cl-teal">Me</IndexLink>
                <Link to="/projects" activeClassName="cl-teal">Projects</Link>
                <a href="https://www.github.com/raubreywhite/">Github</a>
                <a href="stats/" target="_blank">A Compendium Of Statistics Questions</a>
                </nav>
                </div>
                </div>
                </header>
                
                {this.props.children}
                
                <footer className="bg-dark">
                <div className="container txt-center">
                <div className="column12">
                <p> </p>
                </div>
                </div>
                </footer>
                </div>
                );
    }
}

export default App;
