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

    const goodMorningMessage = () => console.log('Доброе утро!');
    const goodEveningMessage = () => console.log('Пора спать!');

    const firstAlarm = setAlarm('23:36:20', goodMorningMessage);
    const secondAlarm = setAlarm('23:36:25', goodEveningMessage);
    
    const setDailyRhythm = (checktime, checktime2) => {

        let getCurrentTime = () => {
            let time = new Date().toLocaleTimeString();
            // console.log('текущее время: ' + time);
            checktime(time);
            checktime2(time);
        };

        return setInterval(getCurrentTime, 1000);

    };

    setDailyRhythm(firstAlarm, secondAlarm);