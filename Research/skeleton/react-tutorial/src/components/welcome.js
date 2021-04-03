import React, {useState, useEffect} from 'react'
import './welcome.css'

function Welcome() {
    const [current_time, set_curr_time] = useState(0);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/time').then(res => res.json()).then(data => {
            set_curr_time(data.time);
            console.log(current_time);
        });
    }, []);

    return (
        <header className="header-text">
            the current time is {current_time}.
        </header>
    )

}

export default Welcome;