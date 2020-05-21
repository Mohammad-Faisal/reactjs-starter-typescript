export class DateRangeSelectionModel {
    dateRangeFor = "";
    dateFrom = new Date();
    dateTo = new Date();

    constructor(dateRangeFor, datesArr) {
        if(dateRangeFor)this.dateRangeFor = dateRangeFor;
        if(datesArr)this.dateFrom = datesArr[0]._d;
        if(datesArr)this.dateTo =  datesArr[1]._d;
    }
}