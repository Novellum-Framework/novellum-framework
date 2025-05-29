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
        name: "joeRoute",
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
const joeRoute = new storyRoute([{
    sender: "god",
    text: "you are save too"
}],
[],
"joeRoute"
)

const app = new Novela(initRoute)

async function runApp() {
    const input = await app.request(); 
  
    if (input == '1') {
      app.changeRoute(forestRoute);
    } else {
      app.changeRoute(joeRoute);
    }
    console.log(app.currentyRoute)
  }
  runApp()