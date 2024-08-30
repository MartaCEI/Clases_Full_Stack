import { useEffect, useState } from "react";
import User from "./User";

// https://randomuser.me/api/

const FetchRandomUser = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await fetch("https://randomuser.me/api/?results=3");
            const object = await response.json();
            setResults(object.results);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h2>Random Users</h2>
            {
                results.map((item, index) => {
                    return (
                        <User key={index} {...item} />
                    );
                })
            }
        </div>
    )
}

export default FetchRandomUser;