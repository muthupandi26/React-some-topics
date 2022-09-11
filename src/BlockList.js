

const BlockList = ({blogs,title}) => {

    // const blogs = props.blogs;

    // const title = props.title;

    console.log(title);

    return ( 
        <div className="blog-list">
            {/* <p>{title}</p> */}
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
            ))}
        </div>
    );
}

export default BlockList;