function mySet(){
    var collection = [];

    this.has = function(element){
        return collection.indexOf(element) !== -1;
    }

    this.value = function(){
        return collection;
    }
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }
    this.remove = function(element){
    }
    this.size = function(){
    }
    this.union = function(otherSet){
    }
    this.interSection = function(otherSet){
    }
    this.difference = function(otherSet){
    }
    this.subset = function(otherSet){
    }
}

var SetA = new mySet();
var SetB = new mySet();