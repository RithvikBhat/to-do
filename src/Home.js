
import BlogList from './BlogList';
import useFetch from './useFetch';

// Terminal
//cd to-do
// npm run start
//npx json-server --watch data/db.json --port 8000

const Home = () => {

    //const [name, setName] = useState('mario');

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">

            {error && <div>{error}</div>}
            {isPending && <div>Loading........</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}

        </div>
    );
    //illa
    //runs a function on every render of component
    //run code on every render


}
export default Home;