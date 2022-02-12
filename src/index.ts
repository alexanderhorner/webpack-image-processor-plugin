import { Compiler, Compilation } from 'webpack'

import imageLoader from 'webpack-image-processor-loader' 


import { readdirSync } from 'fs';

export default class ImageProcessorPlugin {

    options
    
    constructor(optionsUnclean: object) {

        const defaultOptions = {
            inputDir: '',
            outputDir: '',
            configurations: []
        }

        this.options = {...defaultOptions, ...optionsUnclean}
    }

    apply(compiler: Compiler) {

        compiler.hooks.run.tapAsync('ImageProcessorPlugin', (compilation: Compilation, callback) => {
            
            compilation.hooks.additionalAssets.tapAsync('ImageProcessorPlugin', (callback) => {

                const files = readdirSync("img/")

                // images.push(require('@img/color1.jpg?pipeline=article'))

                // files.forEach(file => {
                //     require('./img/' + file + '?pipeline=article')
                // });



                // // compilation.assets['webpack-version.svg'] = source
                // imageLoader.call({}, source)

            })

        })

    }
}