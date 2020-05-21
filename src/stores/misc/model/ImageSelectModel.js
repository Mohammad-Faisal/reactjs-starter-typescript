

export default class ImageSelectModel {

    imageFor = ""
    imageFile = null;
    imageUrl = null;
    

    constructor(imageFor , imageFile , imageUrl ){
        this.imageFor = imageFor;
        this.imageFile = imageFile;
        this.imageUrl = imageUrl;

    }
}