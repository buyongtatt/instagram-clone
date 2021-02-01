import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          width='103px'
          height='29px'
          alt=""
        />
      </div>
      <h1>Hello World🚀🚀</h1>
      <Post />
      
    </div>
  );
}

export default App;
