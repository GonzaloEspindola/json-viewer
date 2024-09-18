import './styles.css';
interface JsonViewerOptions {
    container: HTMLElement | null;
    method?: string;
    baseUrl?: string;
    url?: string;
    showHeader?: boolean;
    data: any;
    theme?: 'dark' | 'light';
    expand?: boolean;
}
export declare class JsonViewer {
    options: JsonViewerOptions;
    constructor(options: JsonViewerOptions);
    parseData(): any;
    createHeader(): void;
    createEmptyHeader(): void;
    render(dataObj: any): void;
    renderRight(theme: string, right: HTMLElement, val: any): void;
    renderChildren(theme: string, key: string, val: any, right: HTMLElement, indent: number, left: HTMLElement): void;
    parse(dataObj: any, parent: HTMLElement, indent: number, theme: string, thisIs: string): void;
    createItem(indent: number, theme: string, parent: HTMLElement | null, key: string, basicType?: boolean, thisIs?: string): {
        left: HTMLElement;
        right: HTMLElement;
        current: HTMLElement;
    };
    toggleItem(ele: HTMLElement, target: HTMLElement): void;
    createElement(type: string): HTMLElement;
    forEach(obj: any, fn: Function): void;
    isString(val: any): val is string;
    isNumber(val: any): val is number;
    isBoolean(val: any): val is boolean;
    isUndefined(val: any): val is undefined;
    isArray(val: any): val is any[];
    isObject(val: any): boolean;
    isNull(val: any): boolean;
}
export {};
