export interface IPersonAttribute {
    name: string;
      
};
/**
 * Person
 */
export class Person implements IPersonAttribute {
    name: string;
    height: number = 0;

    constructor() {
        this.name = 'Umam';
    };

    rename(): void {
        this.name = "Change";
    };

    addHeight(): void {
        this.height += 1;
    };
}
