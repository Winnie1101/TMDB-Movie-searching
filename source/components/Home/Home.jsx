import React, { Component } from 'react'
import { Button, Icon, Header } from 'semantic-ui-react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

import SearchBar from './search_bar.jsx'
import Gallery from './gallery.jsx'

import MovieDetail from './detail.jsx'

import styles from './Home.scss'


class Home extends Component {
	constructor(props){
		super(props);

		this.state = {movies : [],  selectedMovie:null};
     }

    render() {
    	
        return(
            <div className = "Home">
              <Header as='h1' icon textAlign='center'>
                <Icon name='film' />
                  Find movies
              </Header>
               
                  <Router>
                    <div>
                      <div className = "Button">
                      <Button.Group labeled textAlign='center'>
                        <Link to="/search-bar"><Button size='huge' content='search for movies' /></Link>
                        <Link to="/gallery"><Button size='huge' content='top rated movie gallery' /></Link>
                      </Button.Group>
                      </div>
                      

                      <hr/>
                      <Route path="/search-bar" component={SearchBar}/>

                      <Route path="/gallery" component={Gallery}/>
                      <Route path="/details" component={MovieDetail}/>

                    </div>
                  </Router>


            </div>
        )
    }
}

export default Home
