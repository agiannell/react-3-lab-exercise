import {Component} from 'react';

class DisplayData extends Component {
 render() {
    //  const {name, city, country, title, employer, favoriteMovies, id} = this.props.employees[index]
        return (
            <section className="card-container">
                <h1 className="count">{this.props.employeeID}/{this.props.employeeTotal}</h1>
                <h1 className="name">{this.props.firstName} {this.props.lastName}</h1>
                <div className="userInfo">
                    <p>From: {this.props.city}, {this.props.country}</p>
                    <p>Job Title: {this.props.title}</p>
                    <p>Employer: {this.props.employer}</p>
                </div>
                <p>Favorite Movies:</p>
                <ol>
                    <li>{this.props.movieOne}</li>
                    <li>{this.props.movieTwo}</li>
                    <li>{this.props.movieThree}</li>
                </ol>
            </section>
        )
    }
}

export default DisplayData;