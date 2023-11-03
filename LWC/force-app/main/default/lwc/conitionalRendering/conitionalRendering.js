import { LightningElement } from 'lwc';

export default class ConitionalRendering extends LightningElement {
    labelName='Click Me to Show Message';
    Event;
    handleClick(event)
    {
        if(event.target.label=='Click Me to Show Message')
        {
            this.labelName='Click Me to Hide Message';
            this.Event=true;
        }
        if(event.target.label=='Click Me to Hide Message')
        {
            this.labelName='Click Me to Show Message';
            this.Event=false;
        }
    }
    
    inputValue;
    handleChange(event)
    {
        this.inputValue=event.target.value;
    }
    
    get show()
    {
        return this.inputValue=='Salesforce Extreme' ? true:false;
    }

}