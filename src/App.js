import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
          people: [],
            searchField: ''
        }
    }

    componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
                .then(users => this.setState({people: users}))
                .catch(() => console.log("Error Fetching"));

        }

    render() {
        const {people, searchField} = this.state;
        const filteredPeople = people.filter(people => people.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className='App'>
                <SearchBox
                    placeholder="Search..."
                    handleChange={e => this.setState({searchField: e.target.value }, () => console.log(e.target.value))}
                />
                <CardList
                    people={filteredPeople}
                />
            </div>
        );
    }
}


export default App;

