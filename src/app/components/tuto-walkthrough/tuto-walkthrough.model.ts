export class TutoWalkThrough {
    id: string;
    prevStepId: string;
    nextStepId: string;
    focusElementId: string;
    contentAlign: string;
    contentVertAlign: string;
    showArrow: boolean = true;
    closeAnywhere: boolean = false;
    showFinishBtn: boolean = false;
    textDescr: string;
    
    constructor(
        id: string = '',
        prevStepId: string = '',
        nextStepId: string = '',
        focusElementId: string = '',
        textDescr:string = '',
        showArrow:boolean = true,
        showFinishBtn:boolean = false,
    ){
        this.id = id;
        this.prevStepId = prevStepId;
        this.nextStepId = nextStepId;
        this.focusElementId = focusElementId;
        this.contentAlign = "center";
        this.contentVertAlign = "below";
        this.showArrow = showArrow;
        this.showFinishBtn = showFinishBtn
        this.closeAnywhere = false;

        this.textDescr = textDescr;
    }
}