    const setAlarm = (time, callback) => {
        // console.log('вызвали сеталарм')
        let enterTime = time;

        // console.log(`Время будильника: ${enterTime}`)
        return function(currentTime) {
            // console.log('сравниваем время')
            if (currentTime == enterTime) {
                return callback();
            } else {
                // console.log('Время не равно!!')
            }
        }
    };
    
    const setDailyRhythm = (checktime, checktime2) => {

        const firstAlarm = setAlarm(checktime, goodMorningMessage);
        const secondAlarm = setAlarm(checktime2, goodEveningMessage);

        let getCurrentTime = () => {
            let time = new Date().toLocaleTimeString().slice(0, -3);
                // console.log('текущее время: ' + time);
            firstAlarm(time);
            secondAlarm(time);
        };

        return setInterval(getCurrentTime, 1000);
    };

    const goodMorningMessage = () => console.log('Доброе утро!');
    const goodEveningMessage = () => console.log('Пора спать!');


    setDailyRhythm('21:35', '23:36');