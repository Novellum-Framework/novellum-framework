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

    request() {
        return this.currentyRoute.choice
          .map((choice, index) => `${index + 1}) ${choice.text}`)
          .join('\n');
      }
      
    get currentyRoute(){
        return this.currentyRoute
    }
}   