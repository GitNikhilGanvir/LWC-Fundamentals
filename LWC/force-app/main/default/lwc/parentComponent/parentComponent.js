import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    message='Message From Parent to Child';

    arrayData=[{id:1,Name:'Nikhil'},
               {id:2,Name:'Tom'},
               {id:3,Name:'Jerry'},
               {id:4,Name:'Zig'},
               {id:5,Name:'Shark'},
               {id:6,Name:'Oggy'}];

    handleClick()
    {
        this.template.querySelector('c-child-component').handleShow();
    }
    
    inputValue;
    handleChange(event)
    {
      this.inputValue=event.target.value;
    }
}