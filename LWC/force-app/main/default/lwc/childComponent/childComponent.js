import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api msg;
    @api array;
    @api inputChild;
    show=false;
    @api handleShow()
    {
        this.show=!this.show;
    }
}