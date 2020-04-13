'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    async prompting() {
        const answers = await this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                //Defaults to the project's folder name if the input is skipped
                default: this.appname
            }
        ]);
    }
    writing() {
        this.fs.write(this.destinationPath('index.js'), 'const foo = 1');
    }
};
