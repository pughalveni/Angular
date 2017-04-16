//Main Entry point of the application 
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module"

//Angular compiler compiles the application in the browser and run the application from App module.
platformBrowserDynamic().bootstrapModule(AppModule); 

