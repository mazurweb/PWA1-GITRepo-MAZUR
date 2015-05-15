/**
 * Name: Michael Mazur
 * Date: 05/10/2015
 * Assignment: Debuggy : Analyze - Code was provided created additional pseudocode
 */

// Create privatized scope using a self-executing function

//Initialize search.js when page loads
(function(){

    // Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)

    //Variable creation for resultsDIV which is set to the value/content of the div with the ID of results
    var resultsDIV = document.getElementById("results"),
    //Declares variable searchInput and stores the values entered in the search form input
        searchInput = document.forms[0].search,
    //Sets variable currentSearch to an empty variable for future use
        currentSearch = ''
        ;

    // Validates search query
    //setting variable validate equal to new function that passes the parameter of query
    var validqte = function(query){

        // Trim whitespace from start and end of search query

        //Trim the whitespace at the beginning of the search query
        while(query.charAt(0) === " "){
            query = query.substr(1, query.length);
        }
        //Trim the whitespace at the end of the search query
        while(query.charAt(query.length-1) === ""){
            query = query.substr(0, query.length-1);
        }

        // Check search length, must have 3 characters

        //IF the query entry is less than 3 characters
        //alert the user that their search query is too small

        if(query.length < 3){
            alert("Your search query is too small, try again.");

            // (DO NOT FIX THE LINE DIRECTLY BELOW)
            //Gives focus to the search input display
            searchInput.focus();
            //return to end the if statement
            return;
        }
        //Call the search function passing query as the parameter
        search(query);
    };

    // Finds search matches

    //creates variable called search that is set as a new function that passes the parameter of query
    var search = function(query){

        // split the user's search query string into an array

        //Variable queryArray splits the users search input into an array when there is a space
        var queryArray = query.split(" ");

        // array to store matched results from database.js
        //Create an empty array results for later use
        var results = [];

        // loop through each index of db array
        //FOR loop that passes through each index  in the array and ends at the last index item
        //create variable dbTitleEnd that stores each index item each time the loop is ran and ends the title with a pipe
        //create variable dbItem and set it to the value of the lowercase value of the video title
        for(var i=0, j=db.length; i<j; i++) {

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');
            var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);

            // loop through the user's search query words
            // save a lowercase variable of the search keyword

            //FOR loop that runs through the queryArray variable until the last index
            //variable qitem is set to the value of each index value of queryArray and sends it to lower case
            //create variable compare that set to the value of the database item that contains the index of qitem
            //IF compare is not equal to -1
            //Then push the results of the database index
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
                var qitem = queryArray[ii].toLowerCase();

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);
                if (compare != -1) {
                    results.push(db[i]);
                }
                //sort the results
                results.sort();
            }
            // Check that matches were found, and run output functions
            //IF the length of results is equal to 0
            // then run function noMatch()
            //ELSE run function showMatches and pass the parameter of results

            if (results.length === 0) {
                noMatch();
            } else {
                showMatches(results);
            }
        }
    };
    //end of search function

    // Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)

    //Creation of function noMatch()
    var noMatch = function(){

        //creates html variable that stores html layout to be inputted into the webpage that displays no results found
        var html = ''+ '<p>No Results found.</p>'+ '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>';

        //inputs the html variable into the div with the ID of results using innerHTML
        resultsDIV.innerHTML = html;
    };
    //END of noMatch function()

    // Put matches into page as paragraphs with anchors

    //Creation of showMatches function that passes the parameter of results
    var showMatches = function(results){

        // THE NEXT 4 LINES ARE CORRECT.
        //Creates variables for html, title and url
        var html = '<p>Results</p>',
            title,
            url;

        // loop through all the results search() function

        //FOR loop running through all results in the search function
        //variable titleEnd that is equal to a single result item ending in a pipe |
        //set title equal to search result value
        //set url pull the video url after the title
        //add the video link to the end of the current html value
        for(var i=0, j=results.length; i<j; i++){

            // title of video ends with pipe
            // pull the title's string using index numbers
            var titleEnd = results[i].indexOf('|');
            title = results[i].substr(0, titleEnd);

            // pull the video url after the title
            url = results[i].substr(titleEnd+1, results[i].length);

            // make the video link - THE NEXT LINE IS CORRECT.
            html += '<p><a href=' + url + '>' + title + '</a></p>';
        }
        //After loop set resultsDiv and insert the html variable into the div with the ID of results
        resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
    };

    // The onsubmit event will be reviewed in upcoming Course Material.
    // THE LINE DIRECTLY BELOW IS CORRECT

    //Once submit button for the search is pressed a new function will run
    //during the function variable query is set to the value of the search input
    //validate function is ran with the parameter of query
    document.forms[0].onsubmit = function(){
        var query = searchInput.value;
        validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };
});

//END OF SEARCH SCRIPT