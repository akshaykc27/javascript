/******************************************************************************
 * 
 *  Purpose         : hashing to store the multiple vlaue in the same name..
 * 
 *  @description    
 * 
 *  @file           : hashTable.js
 *  @overview       : Hashing table
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 09-03-2019
 *
 ******************************************************************************/
const list = require('./linkedList');
const show = require('util');
class Hashtable {

    // a Constructor
    //intializes the arr variable Array.

    constructor() {
        this.array = [];

    }
    // This method is used to find the hash value where we have to store..


    hash(value) {

        var index = value % 10;
        return index;
    }

    // this  method is used to add the value in the hash table..

    addhash(value) {
        var index = this.hash(value);

        
        if (this.array[index] === undefined) { 

            this.array[index] = new list.LinkedList;
            this.array[index].add(value);
        }
        else {

            this.array[index].add(value);
        }

    }
    // this method is used to print the value are present in the hash table 

    print() {
        for (let index = 0; index < 10; index++) {
            show.print(index + " : ");
            try {
                this.array[index].display();

            } catch (err) {
                console.log("NO element");
            }

        }
    }
}
module.exports = {
    Hashtable

}
