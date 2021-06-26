import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState(' ');
    const [body, setBody] = useState(' ');
    const [author, setAuthor] = useState('Rithvik');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("added blog");
            setIsPending(false);
            //what did u do its working
            //enu maadilla
            //history not a function antha barthide same
            //its working now
            //correct , where did he use history.push('/create') we are doing this job in create.js so what's the point of routing it to same page. '/' directs you to the homepage. See app.js not home.js
            //okays, 
            history.push('/');
        });
    }


    return (
        <div className="create">
            <h2>New Blog</h2>
            <form onSubmit={handleSubmit}>

                <label>
                    Blog Title:
                </label>
                <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label>
                    Blog Content:
                </label>
                <textarea value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required>
                </textarea>

                <label>
                    Blog Author:
                </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Sumukha" >
                        Sumukha
                    </option>
                    <option value="Rithvik">
                        Rithvik
                    </option>
                </select>
                {!isPending && <button >Create Blog</button>}
                {isPending && <button disabled>Adding Blog....</button>}

            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div >
    );
}

export default Create;