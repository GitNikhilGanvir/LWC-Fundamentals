import { LightningElement } from 'lwc';

export default class DataBindingTwoWay extends LightningElement {
    inputValue='Type Here';
    handleChange(event)
    {
        this.inputValue=event.target.value;
    }
}