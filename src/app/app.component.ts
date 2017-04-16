//import the components which is used in this component.
import {Component} from "@angular/core";

//Component decorator- which has metadata that defines the template used by this component
@Component(
    {
        selector: "my-app",
        template:`
            <div>
                <h1 style="color:blue"> {{strName}} </h1>
                <div style="color:green"> My First Angular Component </div>
            </div>
            `
    }
)

//component class which has the methods and propertys need by the view.
export class AppComponent{
    //string type property 
    strName:string ='Angular4 Setup Example'   
} 