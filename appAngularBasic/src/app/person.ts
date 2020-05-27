export class Person {
    private name: string;
    private hasCar: boolean;

    constructor(name: string, hasCar: boolean) {
        this.name = name;
        this.hasCar = hasCar;

    }


    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }

    getHasCar(): boolean {
        return this.hasCar;
    }
    setHasCar(hasCar: boolean): void {
        this.hasCar = hasCar;
    }


}
