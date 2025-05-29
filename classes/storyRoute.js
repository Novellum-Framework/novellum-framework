// @ts-check

/**
 * @typedef {Object} Message
 * @property {string} sender
 * @property {string} text
 */
/**
 * @typedef {Object} Choices
 * @property {string} name
 * @property {string} text
 */

export class storyRoute {
  /** @type {Message[]} */
  story;

  /** @type {Choices[]}  */
  choice;
  
  /**@type {String} */
  name
  /**
   * @param {Message[]} story 
   * @param {Choices[]} choice
   *  @param {string} name
   */
  constructor(story, choice, name) {
    this.story = story;
    this.choice = choice;
    this.name = name
  }

  renderRoute() {
    return this.story
      .map(({ sender, text }) => `${sender}: ${text}`)
      .join('\n');
  }
}

