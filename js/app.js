var searchValue; 
 

$(document).ready(function(){

    $("#submit_word").click(function(){
     searchValue = $('#word_search')[0].value;
      if(searchValue !== "") {
        $('#search_btn').attr("href", "searchResults.html");
        localStorage.setItem('searchedWord', searchValue);
       }
    })

    $('#word_search[type=text]').on('keydown', function(e) {
      if (e.which == 13) {
     searchValue = $('#word_search')[0].value;
      if(searchValue !== "") {
     window.location.assign('../views/searchResults.html');
     localStorage.setItem('searchedWord', searchValue);
        } 
      }  
    });

 });











