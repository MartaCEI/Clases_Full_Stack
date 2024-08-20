const BlogPost = ({titulo, autor, fecha, children}) => {
    return (
        <div className="Card">
            <h2>{titulo}</h2>
            <h3>{autor}</h3>
            <p><i>{fecha}</i></p>
            <div>{children}</div>
        </div>
    );
}

export default BlogPost;