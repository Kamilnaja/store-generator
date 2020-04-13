'use strict';
var Generator = require('yeoman-generator');
var fs = require('fs');

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
            // `services/store-http.service`,
            // "actions/store.actions",
            // "reducers/store.reducer",
            "selectors/store.selectors",
            // "effects/store.effects"
        ];

        paths.forEach(path => {
            fs.readFile(this.templatePath(`store/${path}.ts`), "utf8", (data, err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(data);
                }
            })

            // this.copyFilesToDestination(path);
        });
    }

    _parseFile(input) {
        return input.replace(/\$\{val\}/g, this.answers.name)
    }

    _copyFilesToDestination(path) {
        this.fs.copy(this.templatePath(`store/${path}.ts`), this.destinationPath(`store/${path.replace(/store/, this.answers.name)}.ts`), {
            title: "templating"
        });
        this.fs.copy(this.templatePath(`store/${path}.spec.ts`), this.destinationPath(`store/${path.replace(/store/, this.answers.name)}.spec.ts`));
    }
};
