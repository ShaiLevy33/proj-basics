// import React, { useState, useEffect } from 'react';
// import winterImg from '../assets/img/season-imgs/winter.png';
// import springImg from '../assets/img/season-imgs/spring.png';
// import summerImg from '../assets/img/season-imgs/summer.png';
// import autumnImg from '../assets/img/season-imgs/autumn.png';

const { useState, useEffect } = React

export function SeasonClock(){
    const [currentMonth, setCurrentMonth] = useState('');
    const [season, setSeason] = useState('(Winter)');
    const [imgSrc, setImgSrc] = useState('./assets/img/season-imgs/winter.png');
    const [isDark, setIsDark] = useState(false)
    const [currentDay, setCurrentDay] = useState('')
    const [currentTime, setCurrentTime] = useState('')

    useEffect(() => {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const dayNames = [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ];
        const date = new Date();
        setCurrentMonth(monthNames[date.getMonth()])
        setCurrentDay(dayNames[date.getDay()])
        if(date.getMonth() >= 3 && date.getMonth() <= 5) {
            setSeason('(Spring)');
            setImgSrc('./assets/img/season-imgs/spring.png');
        } else if(date.getMonth() >= 6 && date.getMonth() <= 8) {
            setSeason('(Summer)');
            setImgSrc('./assets/img/season-imgs/summer.png');
        } else if(date.getMonth() >= 9 && date.getMonth() <= 10) {
            setSeason('(Autumn)');
            setImgSrc('./assets/img/season-imgs/autumn.png');
        }

        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}:${seconds}`);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, [])

    function onToggleDark() {
        if (isDark === false) {
            setIsDark(true)
        }
        else{ setIsDark(false)}
        // setIsDark(isDark => !isDark)
    }

const darkClass = isDark ? 'dark' : ''
    return (
        <section className={`season-clock ${darkClass}`}>
            <h2>Season Clock</h2>
            <div className="clock">
                 <h2>{currentMonth} {season}</h2>
                 <img src={imgSrc} alt={season} width='20%' onClick={onToggleDark}/>
                 <h2>{currentDay} </h2>
                 <div className="time">{currentTime}</div>
            </div>
        </section>
    )
}