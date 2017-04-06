$(document).ready(function() {


$(document).on('mouseenter', "#searchResultData", function(e) {
    $(this).css({"backgroundColor":"rgba(255, 255, 255, 0.7)"});
    $(this).children('a#anchor_tag').css({"color":"black"});
});

$(document).on('mouseleave', "#searchResultData", function(e) {
    $(this).css({"backgroundColor":"rgba(0, 0, 0, 0.7)"});
    $(this).children('a#anchor_tag').css({"color":"white"});
});

  
var searchValue = localStorage.getItem('searchedWord');
 $.ajax({
  type: 'GET',
  url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srnamespace=0&srsearch=intitle:'+searchValue,
  dataType: 'jsonp',
  success: function (data) {
  //Do stuff with the JSON data
    console.log('data', data)
    for(var i = 0; i < 6; i++){
      if(!data.query.search[i].title.includes("(disambiguation)")) {
         // searchResultTitleArr.push(data.query.search[i].title); 
         var title = data.query.search[i].title
         var html_Title = title.replace(/\s/g,"%20");
         var html_Link = 'https://en.wikipedia.org/wiki/'+html_Title;
         var snippet = data.query.search[i].snippet;
          $('#searched').append('<div id=searchResultData><a id=anchor_tag href='+html_Link+'><li id=searchValueTitle class='+title+'>'+title+'</li><div id=searchValueDescriptions>'+snippet+'</div></a></div>')
        }
      }  
    }
  });
});