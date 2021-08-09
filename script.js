class Timer {
    constructor() {
        this.isShort = false;
        this.fullFormat = 'hh:mm:ss';
        this.shortFormat = 'hh:mm';
    };

    render(){
        if(this.isShort){
            return this.formatDate(this.shortFormat);
        } else {
            return this.formatDate(this.fullFormat);
        }
    };

    toggle() {
        this.isShort = !this.isShort;
    };

    setShortFormat(shortFormat){
        this.shortFormat = shortFormat;
    };

    setFullFormat(fullFormat){
        this.fullFormat = fullFormat;
    };

    formatDate(format){
        let fullDate = new Date();
        let hours = this.fixNumber(fullDate.getHours());
        let minutes = this.fixNumber(fullDate.getMinutes());
        let seconds = this.fixNumber(fullDate.getSeconds());
        this.fixNumber()
        let ren = format
            .replace('hh', hours)
            .replace('mm', minutes)
            .replace('ss', seconds)
        return ren;
    };

    fixNumber(num){

        if (num < 10)
            return '0' + num;
        return num;
    };
}

let timer = new Timer();
setInterval(function (){
    document.getElementById('clock').innerHTML = timer.render();
},1000);
document.getElementById('clock').addEventListener("click", function () {
    timer.toggle();
});


