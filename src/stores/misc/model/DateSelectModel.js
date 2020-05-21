export class DateSelectModel {
    dateFor = "";
    date = new Date();

    constructor(dateFor, date) {
        
        this.dateFor = dateFor;
        this.date = date;
    }
}