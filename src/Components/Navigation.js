import {Component} from 'react';

class Navigation extends Component {
    render() {
        return(
            <section className="bottom-nav">
                <button className="nav" onClick={this.props.handlePrevious}>&lt; Previous</button>
                <div className="buttons">
                    <button className="mod">Edit</button>
                    <button className="mod">Delete</button>
                    <button className="mod">New</button>
                </div>
                <button className="nav" onClick={this.props.handleNext}>Next &gt;</button>
            </section>
        )
    }
}

export default Navigation;