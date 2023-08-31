class ItemsController{
    constructor(currentId=0){
        this._currentId = currentId;
        this._items = [];
    }   
    addItem(name, price, url, description){
        const newItem = {
            currentId: this._currentId++,
            name,
            price,
            url,
            description
        };
        newItem.push(this._items);
    }

}


const itemController = new ItemsController();
console.log(itemController._items);
console.log(itemController.addItem);