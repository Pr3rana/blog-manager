import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import './BlogDetails.css'

const BlogDetails = () => {
    const {id} = useParams()
    const rootPath = 'http://localhost:8000/blogs/'
    const { data: blog, error, isPending } = useFetch(rootPath+id)
    const routingHistory = useHistory()

    const handleDelete = ()=>{
        fetch(rootPath+blog.id,{
            method: 'DELETE'
        }).then(()=>{
            routingHistory.push('/')
        })
    }

    return ( 
        <div  className = "blog-details "> 
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {blog &&
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <div><b>Description: </b> {blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            }
        </div>
     );
}
 
export default BlogDetails;
