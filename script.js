let isShort = false;
class Timer {
    constructor({timer}) {
        this.timer = timer;
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
        document.getElementById('clock').addEventListener("click", function () {
            isShort = !isShort;
        });
    };

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 100);
    }
}
let clock = new Timer({timer: 'hours : minutes : seconds'});
clock.start();