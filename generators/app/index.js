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
        this.log(this.answers.name);
    };

    writing() {
        this.generatePaths();
    }

    generatePaths() {
        [
            `services/store-http.service`,
            "actions/store.actions",
            "reducers/store.reducer",
            "selectors/store.selectors",
            "effects/store.effects"
        ].forEach(path => {
            this.fs.copy(this.templatePath(`store/${path}.ts`), this.destinationPath(`store/${path.replace(/store/, this.answers.name)}.ts`));
            this.fs.copy(this.templatePath(`store/${path}.spec.ts`), this.destinationPath(`store/${path.replace(/store/, this.answers.name)}.spec.ts`));
        });
    }
};
