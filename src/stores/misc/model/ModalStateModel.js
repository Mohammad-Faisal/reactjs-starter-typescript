

export default class ModalStateModel {
    modalFor = ""
    modalVisibility = true;
    modalData = {}

    constructor(modalFor , modalVisibility , modalData){
        this.modalFor = modalFor;
        this.modalVisibility = modalVisibility;
        this.modalData = modalData;
    }
}