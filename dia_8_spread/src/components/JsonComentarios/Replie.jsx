const Replie = ({id, author, date, content}) => {
    return (
        <div>
            <p><b>{author}</b> - <i>{date}</i></p>
            <p>{content}</p>
        </div>
    );
}

export default Replie;