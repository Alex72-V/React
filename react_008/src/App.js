import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./redux/postsReducer/postsReducer";

function App() {
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts())
  }, [] );

  const refresh = () => {
    dispatch(getPosts())
  }

  if(loading) {
    return (
      <div>
        Loading.....
      </div>
    )
  }
  
  if(error) {
    return (
      <div>
        ERROR <button onClick={refresh}>Refresh</button>
      </div>
    )
  }

  return (
    <div>
      {posts.map((post) => {
        return(
        <div key={post.id}>
          {post.title}
        </div>
        )
      })}
    </div>
  );
}

export default App;
