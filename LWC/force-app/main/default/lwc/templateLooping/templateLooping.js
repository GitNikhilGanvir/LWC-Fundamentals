import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {
    array=['Nikhil','Tom','Jerry','Zig','Shark','Oggy'];

    array2=[{id:1,Name:'Nikhil'},
            {id:2,Name:'Tom'},
            {id:3,Name:'Jerry'},
            {id:4,Name:'Zig'},
            {id:5,Name:'Shark'},
            {id:6,Name:'Oggy'}];
}