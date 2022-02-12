"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class ImageProcessorPlugin {
    options;
    constructor(optionsUnclean) {
        const defaultOptions = {
            inputDir: '',
            outputDir: '',
            configurations: []
        };
        this.options = { ...defaultOptions, ...optionsUnclean };
    }
    apply(compiler) {
        compiler.hooks.run.tapAsync('ImageProcessorPlugin', (compilation, callback) => {
            compilation.hooks.additionalAssets.tapAsync('ImageProcessorPlugin', (callback) => {
                const files = (0, fs_1.readdirSync)("img/");
                // images.push(require('@img/color1.jpg?pipeline=article'))
                // files.forEach(file => {
                //     require('./img/' + file + '?pipeline=article')
                // });
                // // compilation.assets['webpack-version.svg'] = source
                // imageLoader.call({}, source)
            });
        });
    }
}
exports.default = ImageProcessorPlugin;
//# sourceMappingURL=index.js.map