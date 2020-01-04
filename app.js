'use strict';

function Names (obj)
{
    this.name = obj.name ;
} 


Names.prototype.renderName = function()
{
    $('#NamesList').append(`<li>${this.name} </li>`);
}


$.get('./a.json')
.then( data =>
    {
        data.forEach(element => {
            let person = new Names(element);
            person.renderName();
        });
    });

