// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const remote = require('electron').remote;


const Datastore = require("nedb");
const path = require('path');
const url = require('url');

let db = new Datastore({filename: path.join("/tmp", "data.db"), autoload: true});

export class VM {
    items = ko.observableArray();

    constructor() {
        db.find({}, (err, docs) => {
            console.log("Docs", docs);
            this.items(docs);
        });
    }
}
