import React from 'react';
import CardList from './CardList';
import Searchbox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import './App.css'


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onFieldChange = (event) =>{
        this.setState({searchField: event.target.value})
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}));

        
    }

    render(){
        const roboFiltered = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });



        return(
            <div  className = 'tc'>
                <h1 className = 'f1 fw1'>RoboFriends</h1>
                <Searchbox SearchChange = {this.onFieldChange} searchField = {this.state.searchField}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={roboFiltered}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

export default App;