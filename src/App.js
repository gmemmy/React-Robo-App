import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange(event) {
        console.log(event.target.value);
    }

    render() {
        return(
            <div>
                <h1>Robo Family</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots= {this.state.robots}/>
            </div>
        );
    }
};

export default App;