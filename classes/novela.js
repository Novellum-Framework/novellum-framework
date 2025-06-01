import { rl } from "../tools/readline.js";
export class Novela {
  _currentRoute;
  storyRoutes;
  endes;

  constructor(initRoute) {
      this._currentRoute = initRoute;
      this.storyRoutes = [];
      this.endes = [];
  }

  get currentRoute() {
      return this._currentRoute;
  }

  changeRoute(newRoute) {
      const found = this._currentRoute.choice.find((e) => e.name === newRoute.name);
      if (found) {
          this._currentRoute = newRoute;
          console.log("Route changed to", newRoute.name);
      } else {
          throw new Error("Route not found: " + newRoute.name);
      }
  }

  async showGame() {
      // Show story first
      for (const line of this._currentRoute.story) {
          console.log(`${line.sender}: ${line.text}`);
      }

      // Show choices
      const reqText = this._currentRoute.choice
          .map((choice, index) => `${index + 1}) ${choice.text}`)
          .join('\n');
      console.log(reqText);

      // Get input
      const input = await this.ask("Choose an option: ");
      return input;
  }

  ask(question) {
      return new Promise((resolve) => {
          rl.question(question, (answer) => {
              resolve(answer);
          });
      });
  }
}
