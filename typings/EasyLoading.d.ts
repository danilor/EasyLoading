/**
 * Easy Loading class
 * @class EasyLoading
 * @param {Object} config - Configuration object
 * @param {String} config.text - Text to display
 * @param {String} config.id - Id of the loading element
 * @param {String} config.extraClass - Extra class to add to the loading element
 * @param {String} config.loadingType - Type of loading element
 * @param {String} config.styleId - Id of the style element
 * @param {String} config.color - Color of the loading element. Default to #FFFFFF
 * @param {String} config.backgroundColor - Background color of the loading element. Default to rgba(0, 0, 0, 0.7)
 */
export interface ConfigType {
    text?: string;
    id?: string;
    textId?: string;
    extraClass?: string;
    loadingType?: string;
    styleId?: string;
    color?: string;
    backgroundColor?: string;
}
export interface ConfigElementsType {
    style: string;
    html: string;
}
export declare class EasyLoading {
    #private;
    constructor(config: ConfigType | null | undefined);
    /**
     * Sets the configuration
     * @param config
     */
    setConfig(config: ConfigType): void;
    /**
     * Shows the loading element
     */
    show(text?: string | null | undefined): void;
    /**
     * Hides the loading element
     */
    hide(): void;
}
