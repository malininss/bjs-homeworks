
// const setDailyRhythm = () => {

//     const currentTime = () => {
//         let time = new Date().toLocaleTimeString()
//         setAlarm(time, 'вах');
//     }

//     setInterval(currentTime, 1000);  
// }

const goodMorning = () => console.log('С добрым утром!')
const goodEvening = () => console.log('Пора спать!')

const setAlarm = (time, callback) => {

    let consoleTime = time;
    let currentTime = '21:55:35';

    const checkTime = (currentTime) => {
        if (currentTime == consoleTime) {
            return callback();
        }
    }

    return checkTime(currentTime);

};



setAlarm ('07:55:35', goodMorning);
setAlarm ('21:55:35', goodEvening);

const setDailyRhythm = () => {
    let getCurrentTime = () => {
        let time = new Date().toLocaleTimeString();
        console.log(time);
    };

    setInterval(getCurrentTime, 1000);  

};

setDailyRhythm();