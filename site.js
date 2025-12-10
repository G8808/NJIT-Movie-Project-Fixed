/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
     

      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
           Name : 'Giancarlo Matos', 
      title: 'IMDB Giancarlos Top 8 Movies',
      owner: ' Giancarlo',
            movies: [],
            favorites: {},
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
         
      }
    },
      methods: {  
           getMonthText: function(dateArray) {
                 const monthNames = [
                       "January", "February", "March", "April", "May", "June",
                       "July", "August", "September", "October", "November", "December"
                 ];
                    let monthIndex = dateArray[1] - 1; // Adjust for zero-based index
                    let  month =  monthNames[monthIndex];

                    let date = `${month} ${dateArray[2]}, ${dateArray[0]}`;
                        return date;

      
           },
           changeMovieRuntimeDisplay: function(time) {
                   let hours = Math.floor(time / 60);
                   let remainingMinutes = time % 60;
                  let hoursMinutes = `${hours}h ${remainingMinutes}m`;
              return hoursMinutes; 
           },
           addlikes: function(i) {
                 this.movies[i].likes += 1;
               
           },
           adddislikes: function(i) {
                 this.movies[i].dislikes += 1;
               
           },
           swapPoster: function(i) {
            this.movies[i].posterindex += 1;
            if (this.movies[i].posterindex >= this.movies[i].posters.length) {
              this.movies[i].posterindex = 0;
            }
            return this.movies[i].posters[this.movies[i].posterindex];
           },
           getPosterIndexText: function(movie) {
            return `${movie.posterindex + 1} of ${movie.posters.length}`;
           },
           toggleFavorite: function(title) {
            if (this.favorites[title]) {
              delete this.favorites[title];
            } else {
              this.favorites[title] = true;
            }
           },
           isFavorite: function(title) {
            return this.favorites[title] || false;
           }

           
      }
});

// Mount the Vue application to the HTML element with the id "vue_app"

vue_app.mount("#vue_app")
