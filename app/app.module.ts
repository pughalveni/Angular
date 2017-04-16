//importing the required modules from angular
import{NgModule} from "@angular/core";
import{BrowserModule} from "@angular/platform-browser";
//importing the component for this module
import{AppComponent} from "./app.component";

//Module decorator  
@NgModule({
    //To import external module that are used by all the components belong to this Module.
    //we import browserModule which all brower aplication must import
    imports:[BrowserModule],
    //array defines the component belongs to this module.
    declarations:[AppComponent],
    //root component of the application which contains selector in the index.html file
    bootstrap:[AppComponent]
})

//App module class. Root module of the application
export class AppModule {
}
    