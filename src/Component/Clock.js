import * as React from 'react';


export default function App() {
    const [time, setTime] = React.useState();

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <p>{time}</p>
    );
}