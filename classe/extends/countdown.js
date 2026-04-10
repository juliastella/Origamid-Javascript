export default class Countdown{
    constructor(futureDate){
        this.futureDate = futureDate;
    }

    get _futureDate(){
        return new Date(this.futureDate);
    }
    get _actualDate(){
        return new Date();
    }

    get _timeStampDiff(){
        return this._futureDate.getTime() - this._actualDate.getTime();
    }
}


