let isShort = false;
class Timer {
    constructor({}) {
        document.getElementById('clock').addEventListener("click", function () {
            isShort = !isShort;
        });
    };

    render(){
        let fullDate = new Date();
        let hours = fullDate.getHours();
        if (hours < 10) hours = '0' + hours;
        let minutes = fullDate.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        let seconds = fullDate.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;
        if (isShort) {
            document.getElementById('clock').innerHTML = hours + ':' + minutes;
        } else {
            document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
        }

    };

    start() {
        this.render();
        setInterval(() => this.render(), 1000);
    }
}
let timer = new Timer({timer: 'hours : minutes : seconds'});
timer.start();