import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          width="103px"
          height="29px"
          alt=""
        />
      </div>
      <h1>Hello World🚀🚀</h1>
      <Post
        username="buyongtatt"
        caption="wow"
        imageUrl="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
      />

      <Post />
      <Post />
    </div>
  );
}

export default App;
