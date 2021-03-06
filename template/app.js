/* This sections loads markdown into the HTML */

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

class App extends React.Component {
  bold = text => (<strong>{text}</strong>);
  
  render() {
    return (
      <p>{this.bold("I am the <App /> component")}</p>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);