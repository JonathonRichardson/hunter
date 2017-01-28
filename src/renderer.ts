// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import NeDBDataStore = require("nedb");
const {remote, app} = require('electron');

const Datastore = require("nedb");
const path = require('path');
const url = require('url');

let db = new Datastore({filename: path.join("/tmp", "data.db"), autoload: true});


export class VM {
    title = ko.observable('');
    description = ko.observable('');

    save(): void {
        db.insert(ko.mapping.toJS(this), function(e, d) {
            if (e) {
                alert(`Failed: ${e.message}`);
            }
            else {
                alert(`Success!`);
                let win = window as any;
                win.location = "../index.html";
            }
        });
    }
}
