export class MonthSelectModel {
    monthFor = "";
    monthString = new Date();

    constructor(monthFor, monthString) {
        
        this.monthFor = monthFor;
        this.monthString = monthString;
    }
}