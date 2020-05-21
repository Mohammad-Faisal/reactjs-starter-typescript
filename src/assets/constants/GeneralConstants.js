import SelectionItemModel from "../../models/SelectionItemModel";

export class ConstantValues {
    static NONE = "none";
}

export class VisitorStatusConstants {
    static ALL = "ALL";
    static STILL_INSIDE = "STILL_INSIDE";
    static NOT_INSIDE = "NOT_INSIDE";
}

export class NoticeForConstants {
    static ANY = "any"; //that means any kind of notice;
    static ALL = "all"; //notice for both
    static GUARDS = "guard";
    static USERS = "users";
}

export class MeetingStatusConstants {
    static ALL = "all";
    static RUNNING = "running";
    static FINISHED = "finished";
}
export class RequestStatusConstants {
    static ALL = "all";
    static REJECTED = "rejected";
    static ACCEPTED = "accepted";
    static PENDING = "pending";
}
export class LedgerTypeConstants {
    static INCOME = "income";
    static EXPENSE = "expense";
}

export class ExpenseCategoryIdConstants{
    static REPAIRING= "7DgMGAGjoSpb1gFXScQY";
    static MAINTENANCE= "DBhBwYAXVVUO2K2UjmzV";
    static SALARY= "VZ8esD8vrtiWEDNPCTKt";
    static BILL_PAY= "vAkMOojn6cFyMMKAhvlz";
    static OTHERS= "XAWOnnxytiHUkCkoE8VV";
}


export class DBCollectionName {
    static ADMINS = "admins";
    static COMMUNITY = "community";
    static BUILDINGS = "buildings";
    static SETTINGS = "settings";
    static VISITORS = "visitors";
    static PARCELS = "parcels";
    static FLATS = "flats";
    static TYPES = "Types";
    static NOTIFICATIONS = "notifications";
    static GUARDS = "guards";
    static SERVICE_WORKERS = "sworkers";
    static SERVICE_HISTORY = "shistory";
    static REQUESTS = "requests";
    static USER_DETAILS = "userdetails";
    static USERS = "users";
    static ATTENDANCE = "attendance";
    static WORKERS = "sworkers";
    static COMPLAINBOX = "complainbox";
    static BILLS = "bills";
    static BILL_TYPES = "billtype";
    static BILL_PACKAGES = "packages";
    static LEDGER = "ledger";
    static CALCULATIONS = "calculations";
    static EXPENDITURES = "expenditures";

    static FLAT_INVOICES = "flatInvoices"; //flat invoices are for a particular flat
    static INVOICE_BILL_TYPE = "invoicebilltype"; // invoice bill type is for a


    static BUILDING_FUND = "commonFundHistory";
    static COMMON_FUND = "commonfund";

    static CONTACTS = "contacts";
    static SERVICE_TYPE = "stype";
    static SERVICE_BUILDINGS = "servicebuildings";
    static BILL_TYPE = "billtype";
    static DATA_TRACK = "datatrack";
    static ADMIN_TYPE = "admintype";
    static DESIGNATIONS = "designations";
    static MEETINGS = "meetings";
    static DECISIONS = 'decisions';
}

export class TableType {

    static VISITOR = "VISITOR";
    static PARCEL = "PARCEL";
    static NOTICES = "NOTICES";
    static GUARDS = "GUARDS";
    static ADMIN = "ADMIN";
    static USERS = "USERS";
    static SERVICE_WORKER = "SERVICE_WORKER";
    static MEETING = "MEETING";
    static BILLS_DETAILS = "BILLS_DETAILS";
    static BILL_TYPES = "BILL_TYPES";
    static BILL_PACKAGES = "BILL_PACKAGES";
    static BILL_INVOICES = "BILL_INVOICES";
    static COMPLAIN = "COMPLAIN";
    static CALCULATION = "CALCULATION";
    static LEDGER = "LEDGER";
    static BUILDING_FUND = "BUILDING_FUND";
    static REQUEST = "REQUEST";
    static FLATS = "FLATS";

    static ADMIN_TYPE = "ADMIN_TYPE";
    static SERVICE_TYPE = "SERVICE_TYPE";
    static BUILDINGS = "BUILDINGS";
    static DECISIONS = "DECISIONS";
}


export class FirebaseFunctionNameConstants {
    static CREATE_NEW_BILL_PACKAGE = 'createPackage';
    static CREATE_NEW_BILL_INVOICE_FOR_FLAT = 'createFlatInvoice';
    static COLLECT_BILL_FOR_FLAT = 'collectBill';
    static DELETE_GENERATED_BILL_FOR_FLAT = 'deleteBillUndUpdateFlatInvoice';
    static ADD_MONEY_TO_COMMON_FUND = 'addMoneyToCommonFund';
    static REMOVE_MONEY_FROM_COMMON_FUND = 'removeMoneyToCommonFund';
    static ADD_EXPENDITURE = "addExpenditure";
    static DELETE_EXPENDITURE = "deleteExpenditure";
    static DELETE_BUILDING_FUND_ENTRY = "deleteCommonFundHistory";
}


export class DropDownConstants {
    static TYPE_BUILDINGS = "TYPE_BUILDINGS";
    static TYPE_FLATS = "TYPE_FLATS";
    static TYPE_ADMIN_TYPES = "TYPE_ADMIN_TYPES";
    static TYPE_ADMIN_DESIGNATIONS = "TYPE_ADMIN_DESIGNATIONS";
    static TYPE_BUILDING_USERS = "TYPE_BUILDING_USERS";
    static TYPE_BILL_TYPES = "TYPE_BILLS";
    static TYPE_SERVICE_TYPES = "TYPE_SERVICE";
    static TYPE_EXPENSE_TYPES = "TYPE_EXPENSE_TYPES";
    static TYPE_FLAT_STATUS = "TYPE_FLAT_STATUS";
    static TYPE_VISITOR_STATUS = "TYPE_VISITOR_STATUS";
    static TYPE_NOTICE_FOR = "TYPE_NOTICE_FOR";
    static TYPE_MEETING_STATUS = "TYPE_MEETING_STATUS";
    static TYPE_REQUEST_STATUS = "TYPE_REQUEST_STATUS";
}

export class ModalTypeConstants {
    static DETAILS_WORKER = "DETAILS_WORKER";
    static DETAILS_VISITOR = "DETAILS_VISITOR";
    static DETAILS_ADMIN = "DETAILS_ADMIN";
    static DETAILS_COMMON_FUND_VOUCHER = "DETAILS_COMMON_FUND_VOUCHER";
    static DETAILS_USER = "DETAILS_USER";
    static DETAILS_PARCEL = "DETAILS_PARCEL";
    static DETAILS_EXPENSE = "DETAILS_EXPENSE";
    static DETAILS_GUARD = "DETAILS_GUARD";
    static ADD_BILL = "ADD_BILL";
    static COLLECT_BILL = "COLLECT_BILL";

    static TYPE_SUCCESS = "TYPE_SUCCESS";
    static TYPE_INFO = "TYPE_INFO";
    static TYPE_ERROR = "TYPE_ERROR";
    static TYPE_WARNING = "TYPE_WARNING";
}

export class MonthConstants {
    static FOR_ADD_CALCULATION = "FOR_ADD_CALCULATION";
    static FOR_ADD_BUILDING_FUND = "FOR_ADD_BUILDING_FUND";
    static FOR_QUERY_ON_TABLE = "FOR_QUERY_CALCULATION";
    static FOR_QUERY_BILL = "FOR_QUERY_BILL";
   
}

export class DateConstants {
    static FOR_QUERY_ON_TABLE = "FOR_QUERY_ON_TABLE";
    static FOR_GUARD_JOIN = "FOR_GUARD_JOIN";
    static FOR_GUARD_DOB = "FOR_GUARD_DOB";
    static FOR_ADD_BUILDING_FUND = "FOR_ADD_BUILDING_FUND";
}
export class DateRangeConstants {
    static FOR_QUERY_ON_TABLE = "FOR_QUERY_ON_TABLE"
}

export class ImageConstants{
    static FOR_ADD_GUARD_PROFILE_PIC = "FOR_ADD_GUARD_PROFILE_PIC"
    static FOR_ADD_CALCULATION_MEMO = "FOR_ADD_CALCULATION_MEMO"
    static FOR_ADD_BUILDING_FUND_MEMO = "FOR_ADD_BUILDING_FUND_MEMO"
}

export class ColorConstants {
    static BLUE = "#0079bf";
    static BLUE1 = "#55bcc9";
    static BLUE2 = "#00acc1";
    static SKY = "#97caef";

    static RED = "#dc143c";
    static RED1 = "#e53935";
    static RED2 = "#fe3935";

    static ORANGE = "#ff8c00";
    static ORANGE1 = "#fb8c00";

    static GREEN1 = "#14AB72";
    static GREEN2 = "#5cdb95";
    static GREEN3 = "#8ee4af";
    static GREEN4 = "#116466";
    static GREEN5 = "#45a29e";
    static GREEN6 = "#43a047";



    static PURPLE1= "#99738e";
    static PURPLE2= "#c38d9e";
    static PURPLE3= "#c38d9e";

    static WOOD1 = "#bc986a";
    static WOOD2 = "#daad86";

    static BLACK1 = "#0b0c10";
    static BLACK2 = "#1f2833";

    static GREY = "#8d9091";
    static GREY1 = "#9BB0A5";
    static GREY2 = "#e9efed";
}
export class ThreeColorConstants{
    static GREEN = "#5ABC91";
    static BLUE = "#6BA9FF";
    static RED = "#FF8868";
}

export class GreeneTheme{
    static COLOR1 ="#14ab72";
    static COLOR2 ="#009880";
    static COLOR3 ="#00938F";
    static COLOR4 ="#008697";
    static COLOR5 ="#007899";
    static COLOR6 ="#006995";
    static COLOR7="#F1FCF6";
    static COLOR8="#4D7D94";
    static COLOR9="#394B41";
}

export class TagColors {
    static GREEN_BACK  = "#F1FCF6"
    static GREEN_FRONT  = "#14ab72"

    static RED_BACK  = "rgba(253, 238, 233, 0.5)"
    static RED_FRONT  = "#e53935"

    static BLUE_BACK  = "#e1eff7"
    static BLUE_FRONT  = "#0079bf"
}


export class RadioConstants {

    static TYPE_ADD_BUILDING_FUND = "TYPE_ADD_BUILDING_FUND";


    static radioOptionsAddBuildingFund = [
        new SelectionItemModel("Cash Deposit" , "deposit") ,
        new SelectionItemModel("Cash Withdraw" , "withdraw") ,
    ];

}