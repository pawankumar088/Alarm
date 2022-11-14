import React from 'react'
import "./Home.css"
import Clock from './Clock'
const App = () => {
    console.log("How are you ")
    return (
        <div>
            <div className='time'></div>

            <img src="https://image3.mouthshut.com/images/imagesp/925717403s.png" alt="err" />
                <Clock />
            <div className='Box'>
                <div className='wakeup'>
                    <label htmlFor="check1">WakeUp 9:00</label>
                    <input type="checkbox" id="check1" />
                </div>
                <div>
                    <label htmlFor="check2">Be Ready 9:15</label>
                    <input type="checkbox" id="check2" />
                </div>
                <div>
                    <label htmlFor="check3">Leave 9:30</label>
                    <input type="checkbox" id="check3" />
                </div>
                <div>
                    <label htmlFor="check4">Leture 10:00</label>
                    <input type="checkbox" id="check4" />
                </div>
                <div>
                    <label htmlFor="check5">Return 5:00</label>
                    <input type="checkbox" id="check5" />
                </div>

            </div>
        </div>
    )
}

export default App