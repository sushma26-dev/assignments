import { useEffect, useState } from "react";

function FnTimer() {
    let intervalRef;

    const [time, setTime] = useState("");

    // componentDidMount / onload
    useEffect(() => {
        updateTimer();

        return () => {
            console.log("destroying fn component");
            clearInterval(intervalRef);
        }
    }, []);


    // componentDidUpdate / on change
    useEffect(() => {
        console.log("on time change");
    }, [time]);

    function updateTimer() {
        intervalRef = setInterval(()=>{
            setTime(new Date().toTimeString().substring(0,8));
        }, 1000)
    }

    return (
        <div>Time: {time}</div>
    )
}

export default FnTimer;