/**
 * @author Kamil Naja
 */

'use strict';
const Generator = require('yeoman-generator');
const Formatter = require('./Formatter');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your component-name',
        default: this.componentName,
        store: true
      }
    ]);
    this.log(`If the rule you followed brought you to this,
     of what use was the rule`);
    this.log(`You have selected options: ${this.answers.name}`);
  }

  writing() {
    const paths = [
      `services/store-http.service`,
      'actions/store.actions',
      'reducers/store.reducer',
      'selectors/store.selectors',
      'effects/store.effects'
    ];

    paths.forEach(path => {
      this._copyFilesToDestination(path);
    });
  }

  _copyFilesToDestination(path) {
    [null, 'spec'].forEach(item => {
      this.fs.copyTpl(
        this.templatePath(`store/${path}.${item ? item + '.' : ''}ts`),
        this.destinationPath(`store/${path.replace(/store/, Formatter.lowerCase(this.answers.name))}.${item ? item + '.' : ''}ts`),
        {
          separate: Formatter.separateWords(this.answers.name),
          upperCamelCase: Formatter.upperCamelCase(this.answers.name),
          lowerCamelCase: Formatter.lowerCamelCase(this.answers.name),
          kebabCase: Formatter.kebabCase(this.answers.name),
          name: this.answers.name
        }
      );
    });
  }
};
