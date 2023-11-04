import { LightningElement } from 'lwc';
import Template1 from './template1.html';
import Template2 from './template2.html';
import defaultTemplate from './renderMultipleTemplate.html';
export default class RenderMultipleTemplate extends LightningElement {
    
    templateSelected;
    handleClick(event)
    {
      this.templateSelected=event.target.label;
    }
    render()
    {
        return this.templateSelected=='Template 1' ? Template1:
               this.templateSelected=='Template 2' ? Template2:defaultTemplate;
    }
}