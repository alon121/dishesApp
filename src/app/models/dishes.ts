export class Dishes {
    title: string;
    href: string;
    ingredients: string;
    thumbnail: string | null;
    constructor(title: string, href: string, ingedients: string, thumbnail: string | null) {
        this.title = title;
        this.href = href;
        this.ingredients = ingedients;
        this.thumbnail = thumbnail;
    }
    /*  example
    results:[
        { 
         title: "Soy Sauce Eggs -  Ramen Eggs",
        href: "http://www.recipezaar.com/Soy-Sauce-Eggs-Ramen-Eggs-315722",
        ingredients: "eggs, rice vinegar, vegetable oil, soy sauce, sugar",
        thumbnail: "http://img.recipepuppy.com/33686.jpg",
    } ,
    ]
     */
}