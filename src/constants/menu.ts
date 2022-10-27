
interface IMenu {
    id:number;
    name:string;
    links:string;
    namesub?:IMenu[]
}




export const menus:IMenu[] = [
    {
        id:1,
        name:"Home",
        links:"/"
    },
    {
        id:2,
        name:"Contact",
        links:"/contact"
    },
    {
        id:3,
        name:"AboutUs",
        links:"/about-us"
    },
    {
        id:4,
        name:"Page",
        links:"#",
        namesub:[
            {
                id:1,
                name:"Team",
                links:"/team"
            }
        ]
    }
   
]