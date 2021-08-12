export class Shop {
    id : number;
    shopName?: String;
    Description?: String;
    showDescription: boolean;
    constructor(public name: string, public description: string){
        this.showDescription = false;
    }
}
