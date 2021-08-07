class Timer {
    constructor({}) {
        this.elem = document.getElementById('clock');
        this.isShort = false
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
            this.elem.innerHTML = hours + ':' + minutes;
        } else {
            this.elem.innerHTML = hours + ':' + minutes + ':' + seconds;
        }
    };

    toggle() {
        this.isShort = !this.isShort;
    };

    start() {
        this.render();
        setInterval(() => this.render(), 1000);
    };
}

let timer = new Timer({});
timer.start();
document.getElementById('clock').addEventListener("click", function () {
    timer.toggle();
});
