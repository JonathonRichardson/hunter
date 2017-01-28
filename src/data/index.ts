const _ = require("lodash");
const uuidV4 = require('uuid/v4');

export abstract class NeDBRecord {
    protected version: number = 0;

    save(): void {
        let obj = _.clone(this);


        obj.version++;
        obj.created = new Date();
    }
}

export class Issue extends NeDBRecord {
    public readonly _id: string = uuidV4();
    public title: string;
}