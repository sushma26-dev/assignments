import { useEffect, useState } from 'react';
import FnTimer from './FnTimer';
import Timer from './Timer';

function HookContainer() {
    const [showTimer, setShowTimer] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
            console.log("test")
        }, 1000);
    }, [])
    return (
        <div className='emp-container'>
            <button type="button" onClick={() => setShowTimer(!showTimer)}>Show/Hide Timer</button>
            <div>
                Class based timer component:
                {
                    showTimer && <Timer />
                }
            </div>
            <div>
                Function based timer component:
                {
                    showTimer && <FnTimer />
                }
            </div>
        </div>
    )
}

export default HookContainer;
