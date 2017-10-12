import React, { Component } from 'react'
import { Button, Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import GalleryPictures from './gallery_pictures.jsx'



class Gallery extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
        this.movies = [];
        this.action = [];
        this.findAction = this.findAction.bind(this);
        this.findAll = this.findAll.bind(this);
        this.findDrama = this.findDrama.bind(this);
        this.findCrime = this.findCrime.bind(this);


  
    }

    findAll(){
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=6826e7db116ecebfc7046dd5c02f137c')
          .then((response) => {
             this.movies = response.data.results;
             // console.log(this.movies);
             this.setState({});

           })
          .catch((error) => {
             console.log(error);
           });

    }

    findAction(){
              this.action = [];
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=6826e7db116ecebfc7046dd5c02f137c')
          .then((response) => {
             this.movies = response.data.results;
             console.log(this.movies);
             for(let j=0; j<20;j++){
              for(let k=0;k<this.movies[j].genre_ids.length;k++){
                if(this.movies[j].genre_ids[k]=='28'){
                  this.action=this.action.concat(this.movies[j]);
                }
              }
             }
             this.movies=this.action;
             console.log(this.action);
             this.setState({});

           })
          .catch((error) => {
             console.log(error);
           });
    }


    findDrama(){
              this.action = [];
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=6826e7db116ecebfc7046dd5c02f137c')
          .then((response) => {
             this.movies = response.data.results;
             console.log(this.movies);
             for(let j=0; j<20;j++){
              for(let k=0;k<this.movies[j].genre_ids.length;k++){
                if(this.movies[j].genre_ids[k]=='18'){
                  this.action=this.action.concat(this.movies[j]);
                }
              }
             }
             this.movies=this.action;
             console.log(this.action);
             this.setState({});

           })
          .catch((error) => {
             console.log(error);
           });
    }


    findCrime(){
              this.action = [];
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=6826e7db116ecebfc7046dd5c02f137c')
          .then((response) => {
             this.movies = response.data.results;
             console.log(this.movies);
             for(let j=0; j<20;j++){
              for(let k=0;k<this.movies[j].genre_ids.length;k++){
                if(this.movies[j].genre_ids[k]=='80'){
                  this.action=this.action.concat(this.movies[j]);
                }
              }
             }
             this.movies=this.action;
             console.log(this.action);
             this.setState({});

           })
          .catch((error) => {
             console.log(error);
           });
    }


render(){
    return(
      <div>
        <div>
            <Button.Group widths='5'>
              <Button size='huge' color='grey' onClick={this.findAll}>All</Button>
              <Button size='huge' color='grey' onClick={this.findAction}>Action</Button>
              <Button size='huge' color='grey' onClick={this.findDrama}>Drama</Button>
              <Button size='huge' color='grey' onClick={this.findCrime}>Crime</Button>
            </Button.Group>
        </div>

        <GalleryPictures movies={this.movies} />

      </div>





    );
}
	
}

export default Gallery;