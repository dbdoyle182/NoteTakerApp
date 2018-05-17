import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }

        this.toggleOpen = this.toggleOpen.bind(this);
        this.toggleActive = this.toggleActive.bind(this)
    }
    
    toggleOpen() {
        console.log('toggle open works')
        this.setState(prevState => ({
            open: !prevState.open
        }));
    }

    toggleActive(event) {
        console.log(event.propertyName);
        
    }

    render() {
        return (
            <section>
                <div className="panels">
                    <div className={!this.state.open ? "panel panel1" : "panel open panel1"} onClick={this.toggleOpen} onTransitionEnd={this.toggleActive}>
                        <p></p>
                        <p>Notes</p>
                        <p></p>
                    </div>
                    <div className="panel panel2">
                        <p></p>
                        <p>That</p>
                        <p></p>
                    </div>
                    <div className="panel panel3">
                        <p></p>
                        <p>Follow</p>
                        <p></p>
                    </div>
                    <div className="panel panel4">
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