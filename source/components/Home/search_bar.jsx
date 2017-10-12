import React, { Component } from 'react'
import { Button, List, Input, Form, Checkbox, Image, Container, Dropdown } from 'semantic-ui-react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'



import styles from './search_bar.scss'
import Gallery from './gallery.jsx'





class SearchBar extends Component{

	constructor(props) {
		super(props);
		this.state = {
			words:'',
			value: '',
			flagtitle: 0,
			flagranking: 0
		};
		this.movies = [];
		this.movieSearch = this.movieSearch.bind(this);

		this.sortByTitle = this.sortByTitle.bind(this);
		this.ascSortTitle = this.ascSortTitle.bind(this);
		this.sortByRanking = this.sortByRanking.bind(this);
		this.ascSortRanking = this.ascSortRanking.bind(this);

		this.ascSort = this.ascSort.bind(this);
		this.sortAscending = this.sortAscending.bind(this);
		this.desSort = this.desSort.bind(this);
		this.sortDescending = this.sortDescending.bind(this);
		
	}


	movieSearch(words){
		axios.get('https://api.themoviedb.org/3/search/movie?api_key=6826e7db116ecebfc7046dd5c02f137c&query=' + words.target.value)
          .then((response) => {
             this.movies = response.data.results;
             // console.log(this.movies);
             this.setState({});
           })
          .catch((error) => {
             console.log(error);
           });
	}



    ascSortTitle() {  
        	return function(a, b) {   
	            return a.title.localeCompare(b.title);  
	        }  
	}   

    sortByTitle(){

    		this.setState({value:"title"});
    		this.movies.sort(this.ascSortTitle());
    		this.setState({});
    		this.setState({flagtitle:1});
    		this.setState({flagranking:0});
    }




    ascSortRanking() {  
        	return function(a, b) {   
	            return a.vote_average - b.vote_average;  
	        }  
	}   

    sortByRanking(){

    		this.movies.sort(this.ascSortRanking());

    		this.setState({});
    		this.setState({value:"ranking"});
    		this.setState({flagranking:1});
    		this.setState({flagtitle:0});


    }





    ascSort() {
    	if(this.state.flagtitle==1){
        	return function(a, b) {   
	            return a.title.localeCompare(b.title);  
	        }     		
    	}
    	else if(this.state.flagranking==1){
        	return function(a, b) {   
	            return a.vote_average - b.vote_average;  
	        }      		
    	}

	}   

    sortAscending(){


    		this.movies.sort(this.ascSort());

    		this.setState({});
    		this.setState({value:"ascending"})
    }


    desSort() {
    	if(this.state.flagtitle==1){
        	return function(a, b) {   
	            return b.title.localeCompare(a.title);  
	        }     		
    	}
    	else if(this.state.flagranking==1){
        	return function(a, b) {   
	            return b.vote_average - a.vote_average;  
	        }      		
    	}

	}   

    sortDescending(){

    		this.movies.sort(this.desSort());

    		this.setState({});
    		this.setState({value:"descending"})
    }



	render(){
		return (
			<div className="home">

			   <div className="search-bar">
			  	<Input 
			    onChange={this.movieSearch} size="large" icon='search' placeholder='Search...' />
			   </div>
				<Form className = "form">
			        <Form.Field>
			          
			        </Form.Field>
			        <Form.Field>
			          <Checkbox
			            radio
			            label='title'
			            name='checkboxRadioGroup'
			            value='title'
			            checked={this.state.value === 'title'}
			            onChange={this.sortByTitle}
			          />
			        </Form.Field>
			        <Form.Field>
			          <Checkbox
			            radio
			            label='ranking'
			            name='checkboxRadioGroup'
			            value='ranking'
			            checked={this.state.value === 'ranking'}
			            onChange={this.sortByRanking}
			          />
			        </Form.Field>

			        <Form.Field>
			          <Checkbox
			            radio
			            label='ascending'
			            name='checkboxRadioGroup'
			            value='ascending'
			            checked={this.state.value === 'ascending'}
			            onChange={this.sortAscending}
			          />
			        </Form.Field>
			        <Form.Field>
			          <Checkbox
			            radio
			            label='descending'
			            name='checkboxRadioGroup'
			            value='descending'
			            checked={this.state.value === 'descending'}
			            onChange={this.sortDescending}
			          />
			        </Form.Field>

			    </Form>


			   <div className="movie-list">
			

		    	<List>{this.movies
		    		.map((aMovie) =>
					<List.Item key= {aMovie.id}>
					          <Container text>

					  <Link to={
	                {pathname: "/details",
	            		state:{
                	         aMovie: {aMovie},
                	         movies: this.movies

        	       	         }
       	 	        }
       	         } ><div className="list-item">
					<Image src={`http://image.tmdb.org/t/p/w500/${aMovie.poster_path}`} />					    
       	         <div className="detail">
					     <h2>{aMovie.title}</h2>
						 <h3>ranking : {aMovie.vote_average}</h3>
						</div>
					  </div></Link>
					            </Container>

					</List.Item>
		    	)}
		    	</List>
		       </div>
			   
			</div>
			);
	}

	
}

export default SearchBar;
