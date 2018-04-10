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