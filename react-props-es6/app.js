var md = window.markdownit();
var PR = window.PR;
md.options.html=true;
var myRequest = new Request('index.md');

fetch(myRequest).then(function(response) {
  return response.text();
}).then(function(response) {
  document.querySelector('main').innerHTML = md.render(response);
  PR.prettyPrint()
});

// This is the App component
// Try changing it by changing the text in the <p> element
// If you're feeling adventurous you can even try replacing the <p> element with your own element!
var App = function() {
	return (
	  <p><strong>I am the App component, try changing my text</strong></p>
	);
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);

