import React, { Component } from 'react'
import { Button, List, Grid, Image } from 'semantic-ui-react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import MovieDetail from './detail.jsx'


class GalleryPictures extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		};
	}
	
	
	render() {
		return (
			<div>
	          <Grid>
	            <Grid.Row columns={5}>{this.props.movies
			    		.map((aMovie) =>
	              <Grid.Column>
	                <Link to={
	                {pathname: "/details",
	            		state:{
                	         aMovie: {aMovie},
                	         movies: this.props.movies
        	       	         }
       	 	        }
       	         } ><Image shape='rounded' size='medium' bordered src={`http://image.tmdb.org/t/p/w500/${aMovie.poster_path}`} /></Link>
	              </Grid.Column>
	              )}
	            </Grid.Row>
	          </Grid>


            </div>
			
     );

	}	
}
GalleryPictures.PropTypes = {
	movies: PropTypes.array
};



export default GalleryPictures;