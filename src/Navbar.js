import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>This is blog post</h1>
            <div className="links">
                <Link to="">Home</Link>
                <Link to="/create" style = {{
                    color : "blue"
                }}>New Blog..</Link>
            </div>
        </nav> 
    );
}
 
export default Navbar;