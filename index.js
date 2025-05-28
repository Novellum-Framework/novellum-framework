import { Novela } from "./classes/novela.js"
import {storyRoute} from "./classes/storyRoute.js"
const initRoute = new storyRoute([{
    sender: "Alice",
    text: "Hi Joe"
},
{
    sender: "Joe",
    text: "Hi Alice"
}],
[
    {
        name: "forestRoute",
        text: "go to forest"
    },
    {   
        name: "gdf",
        text: "go with Joe"
    },
],
"init"
)
const forestRoute = new storyRoute([{
    sender: "god",
    text: "you are save"
}],
[],
"forestRoute")
const app = new Novela(initRoute)
console.log(app.request())
