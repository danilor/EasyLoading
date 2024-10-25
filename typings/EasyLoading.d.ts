export interface ConfigType {
    text?: string;
    id?: string;
    textId?: string;
    extraClass?: string;
    loadingType?: string;
    styleId?: string;
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
