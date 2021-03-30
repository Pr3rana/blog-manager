import './Home.css'
import BlogList from '../BlogList/BlogList'
import useFetch from '../useFetch'

const Home = () => {
    //Run this command to get the API working: `npx json-server --watch src/data/db.json --port 8000`
    const {data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs!!!"/>}
        </div>
     );
}
 
export default Home;
