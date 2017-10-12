import React, { Component } from 'react'
import { Button , Image, Icon, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'

import styles from './detail.scss'

class MovieDetail extends Component {
	constructor() {
		super();
		this.state = {
			movie: {},
			movies: {}
		};
		this.movies = [];

		this.findPrevious = this.findPrevious.bind(this);
		this.findNext = this.findNext.bind(this);


	}

	componentDidMount() {
		this.setState({
			movie: this.props.location.state.aMovie.aMovie,
			movies: this.props.location.state.movies
		})
	}

	findPrevious(){
             for(let j=0; j<this.state.movies.length;j++){
				if(this.state.movies[j].id==(this.state.movie.id)){
					this.state.movie=this.state.movies[j-1];  
              }
          	 }
             this.setState({
             	movie: this.state.movie
             });
	}
	findNext(){

             for(let j=this.state.movies.length-1; j>=0;j--){
				if(this.state.movies[j].id==(this.state.movie.id)){
					this.state.movie=this.state.movies[j+1];  
              }
          }
             this.setState({
             	movie: this.state.movie
             });
	}



	render(){

		console.log(this.props)
		return (
        <div className = "movie-detail">
          <Container text>
	        <div className = "moredetail">
	        	<div><h1>{this.state.movie.title}</h1></div>
	        	<div>{this.state.movie.overview}</div>
	        </div>
	        <div className = "image">
	        	<Image centered size='medium' src={`http://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`} />
	        </div>
	        <div className = "button"> 

 				<Icon className = "leftIcon" size='huge'  color='grey' name='chevron circle left' onClick={this.findPrevious} />
				<Icon className = "rightIcon" size='huge' color='grey' name='chevron circle right' onClick={this.findNext} />
 
	        </div>
	      </Container>
        </div>
     );
	}
}

MovieDetail.PropTypes = {
	location: PropTypes.array
};



export default MovieDetail;