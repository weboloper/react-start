import { connect } from "react-redux";
import { fetchPosts } from "../../redux/blog/blogActions";
import { Link } from "react-router-dom";

function Home({ blog, fetchPosts }) {
  return (
    <div className="App">
      {blog.posts && blog.posts.length ? (
        blog.posts.map((post, index) => {
          return <p key={post.id}>{post.title}</p>;
        })
      ) : (
        <p>no posts here</p>
      )}
      <Link onClick={fetchPosts} to="#">
        Fetch posts
      </Link>
    </div>
  );
}

// export default App;
const mapStateToProps = (state /*, ownProps*/) => {
  const { blog } = state;
  return { blog };
};

const mapDispatchToProps = {
  fetchPosts,
};

// https://github.com/sikozonpc/js-instagram-clone/blob/ae129a48754886d57e98ea2106daebea22c66994/client/src/containers/Home/index.js
// const mapDispatchToProps = (dispatch) => ({
//   fetchPosts: () => dispatch(fetchPosts()),
//   // postLike: (id) => dispatch(postLike(id)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
