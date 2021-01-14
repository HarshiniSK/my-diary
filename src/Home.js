import BlogList from "./BlogList";
import useFetch from './useFetch';
const Home = () => {
  const {data:blogs, isLoading, error} = useFetch("http://localhost:8000/diary");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="My Diary" />}
    </div>
  );
};

export default Home;
