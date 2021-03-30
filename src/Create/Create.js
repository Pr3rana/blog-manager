import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Create.css'

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Yoshi')
    const routingHistory = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const blog = {title, body, author}

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log("Hurrah..New blog added!!")
            routingHistory.push('/')
        })
    }

    return ( 
        <div className = "create">
            <h2>Add new Blog</h2>
            <form onSubmit = {(e) => handleSubmit(e)}>
                <label>Blog Title: </label>
                <input required type="text" value = {title} onChange = {(e)=>setTitle(e.target.value)}/>
                <label>Blog Body: </label>
                <textarea required type="text"  value = {body} onChange = {(e)=>setBody(e.target.value)}/>
                <label>Blog Author: </label>
                <select
                 value = {author} onChange = {(e)=>setAuthor(e.target.value)}
                >
                    <option value="Yoshi">Neil</option>
                    <option value="Mario">Hari</option>
                    <option value="Prerna">Prerna</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;
