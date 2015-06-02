$.ajax({
    method : 'GET',
    url : 'http://www.web.net/',
    data : { name : 'Steve' },
    success : function(data){ console.log(data) },
    error : function(error){ console.log(error) },

})


// /users/steve
// /users/?username=steve

// Where are we sending the data?
// What data are we sending?
// How are we sending it?
// What do we do if the request succeeds?
// What do we do if the request fails?

// start a local server: python -m SimpleHTTPServer

Look up my github profile.
Find my repo with the most stars.
Find the username of someone who starred that repository.