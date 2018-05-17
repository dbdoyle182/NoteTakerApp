import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            active: false,
            currentPanel: ''
        }

        this.toggleOpen = this.toggleOpen.bind(this);
        this.toggleActive = this.toggleActive.bind(this)
    }
    
    toggleOpen(event) {
        console.log(event.target.innerHTML)
        this.setState(prevState => ({
            open: !prevState.open
        }));
        this.setState({
            currentPanel: event.target.innerHTML
        })
    }

    toggleActive(event) {
        if (event.propertyName.includes('flex')) {
            this.setState(prevState => ({
                active: !prevState.active
            }))
        }
    }

    render() {
        return (
            <section>
                <div className="panels">
                    <div className={this.state.open && this.state.currentPanel === "Notes" ?
                    this.state.active ? "panel panel1 open open-active" 
                    : "panel panel1 open" 
                    : "panel panel1"} onClick={this.toggleOpen} onTransitionEnd={this.toggleActive}>
                        <p className='top'>The Array.prototype property represents the prototype for the Array constructor and allows you to add new properties and methods to all Array objects.</p>
                        <p>Notes</p>
                        <p className='bottom'>The Array.prototype property represents the prototype for the Array constructor and allows you to add new properties and methods to all Array objects.</p>
                    </div>
                    <div className={this.state.open && this.state.currentPanel === "That" ? 
                    this.state.active ? "panel panel2 open open-active" 
                    : "panel panel2 open" 
                    : "panel panel2"} onClick={this.toggleOpen} onTransitionEnd={this.toggleActive}>
                        <p></p>
                        <p>That</p>
                        <p></p>
                    </div>
                    <div className={this.state.open && this.state.currentPanel === "Follow" ? 
                    this.state.active ? "panel panel3 open open-active" 
                    : "panel panel3 open" 
                    : "panel panel3"} onClick={this.toggleOpen} onTransitionEnd={this.toggleActive}>
                        <p></p>
                        <p>Follow</p>
                        <p></p>
                    </div>
                    <div className={this.state.open && this.state.currentPanel === "You" ? 
                    this.state.active ? "panel panel4 open open-active" 
                    : "panel panel4 open" 
                    : "panel panel4"} onClick={this.toggleOpen} onTransitionEnd={this.toggleActive}>
                        <p></p>
                        <p>You</p>
                        <p></p>
                    </div>
                </div>
            </section>
        )
    }
}


export default HomePage;