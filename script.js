// let isShort = false;

class Timer {
    constructor({}) {
        this.isShort = false
        this.toggle();
    };

    render(){
        let fullDate = new Date();
        let hours = fullDate.getHours();
        if (hours < 10) hours = '0' + hours;
        let minutes = fullDate.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        let seconds = fullDate.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;
        if(this.isShort){
            document.getElementById('clock').innerHTML = hours + ':' + minutes;
        } else {
            document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
        }
    };

    toggle(){
        document.getElementById('clock').addEventListener("click", function () {
            this.isShort = !this.isShort;
        });
    };

    start() {
        this.render();
        setInterval(() => this.render(), 1000);
    };
}

let timer = new Timer({timer: 'hours : minutes : seconds'});
timer.start();
