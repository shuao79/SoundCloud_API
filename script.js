SC.initialize({
  client_id: '2af530be745426c9383eb98833569870'
});


SC.get('/tracks', {  q: 'spyair', license: 'cc-by-sa' }, function(tracks) {
  console.log(tracks);
});

$("#searchButton").click(function(){
$("#genreSearch").text()    
});