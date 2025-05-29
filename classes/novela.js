import { rl } from "../tools/readline.js";
export class Novela{
    currentyRoute;
    storyRoutes;
    endes;
    constructor(initRoute){
        this.currentyRoute = initRoute
        this.storyRoutes = []
        this.endes = []
    }
     changeRoute(newRoute) {

        const found = this.currentyRoute.choice.find((e) => e.name === newRoute.name);
        if (found) {
            this.currentyRoute = newRoute;
            console.log("Route changed to", newRoute.name);
        } else {
            throw Error("Route not found: " + newRoute.name);
        } 
    }

    async request() {
        const reqText = this.currentyRoute.choice
          .map((choice, index) => `${index + 1}) ${choice.text}`)
          .join('\n');
        console.log(reqText);
        const input = await this.ask();
        return input;
      }
      ask(question) {
        return new Promise((resolve) => {
          rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
          });
        });
      }
    get currentyRoute(){
        return this.currentyRoute
    }
}   