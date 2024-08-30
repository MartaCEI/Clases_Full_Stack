
const User = ({name, location, email, phone, cell, picture}) => {
    const {first, last} = name;
    const {city, state, postcode} = location;
    const {large} = picture;
    
    return (
        <div className="Card">
            <div className="picture">
                <img src={large} alt={last} />
            </div>
            <div className="info">
                <h2>My name is: <i>{first} {last}</i></h2>
                <h3>{email}</h3>
                <p>{postcode} {city} {state}</p>
                <p>Phone: <i>{phone}</i></p>
                <p>Cell: <i>{cell}</i></p>
            </div>
        </div>
    );
}

export default User;