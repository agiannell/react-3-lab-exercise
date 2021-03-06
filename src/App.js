import {Component} from 'react';
import Header from './Components/Header';
import DisplayData from './Components/DisplayData'
import Navigation from './Components/Navigation'
import data from './Components/Data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: data,
      index: 0
    }
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrevious() {
    if(this.state.index === 0){
      return this.setState({index: this.state.employees.length - 1});
    }
    this.setState({
        index: this.state.index - 1
    })

  }

  handleNext() {
    if(this.state.index === this.state.employees.length - 1){
      return this.setState({index: 0});
    }
    this.setState({
        index: this.state.index + 1
    })
  }
  
  render() {
    // const {employees, index} = this.state
    return (
      <div className="main">
          <Header />
          <DisplayData 
          // employees={employees[index]}
          employeeID={this.state.employees[this.state.index].id}
          employeeTotal={this.state.employees.length}
          firstName={this.state.employees[this.state.index].name.first}
          lastName={this.state.employees[this.state.index].name.last}
          city={this.state.employees[this.state.index].city}
          country={this.state.employees[this.state.index].country}
          title={this.state.employees[this.state.index].title}
          employer={this.state.employees[this.state.index].employer}
          movieOne={this.state.employees[this.state.index].favoriteMovies[0]}
          movieTwo={this.state.employees[this.state.index].favoriteMovies[1]}
          movieThree={this.state.employees[this.state.index].favoriteMovies[2]}
          />
          <Navigation handlePrevious={this.handlePrevious} handleNext={this.handleNext} />
      </div>
    );
  }
}

export default App;
