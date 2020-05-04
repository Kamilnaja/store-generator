/**
 * @author Kamil Naja
 */

'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your component name',
        default: this.componentName,
        store: true
      }
    ]);
    this.log(`You have selected options: ${this.answers.name}`);
  };

  writing() {
    this._prepareWrite();
  }

  _prepareWrite() {
    const paths = [
      `services/store-http.service`,
      "actions/store.actions",
      "reducers/store.reducer",
      "selectors/store.selectors",
      "effects/store.effects"
    ];

    paths.forEach(path => {
      this._copyFilesToDestination(path);
    });
  }

  _copyFilesToDestination(path) {
    [null, 'spec']
      .forEach(item => {
        this.fs.copyTpl(
          this.templatePath(`store/${path}.${item ? item + '.' : ''}ts`),
          this.destinationPath(`store/${path.replace(/store/, this.answers.name.toLowerCase())}.${item ? item + '.' : ''}ts`),
          {
            cN: this.answers.name,
            CN: this.answers.name.charAt(0).toUpperCase() + this.answers.name.slice(1),
            C_N: this.answers.name.toUpperCase()
          })
      })
  }
};
