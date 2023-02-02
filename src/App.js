import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Posts from "./components/Posts/Posts"
import NewPost from "./components/NewPost/NewPost"
import Post from "./components/Post/Post"
import Comments from './components/Comments/Comments'



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/posts/:postId' element={<Post />} />
          <Route path='new' element={<NewPost />} />
          {/* <Route index element={<PostIndex />} /> */}
          {/* <Route path='comments' element={<Comments />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
