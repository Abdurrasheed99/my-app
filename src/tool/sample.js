const dynamicUrl = 'https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en';

getJSON(dynamicUrl, function(data) {
  console.log("This is an example of a dynamic JSON file being served by a web server.")
  console.log(data);
});

