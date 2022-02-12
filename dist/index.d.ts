import { Compiler } from 'webpack';
export default class ImageProcessorPlugin {
    options: {
        inputDir: string;
        outputDir: string;
        configurations: never[];
    };
    constructor(optionsUnclean: object);
    apply(compiler: Compiler): void;
}
