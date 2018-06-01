import { HomeComponent } from "./home/home.component";
import { DirectoryComponent } from "./directory/directory.component";

export const APP_ROUTES = [
    {
        path:"", component: HomeComponent
    },
    {
        path:"directory/:student", component: DirectoryComponent
    },
    {
        path:"directory", component: DirectoryComponent
    }
];