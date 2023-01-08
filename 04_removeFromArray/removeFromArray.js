const removeFromArray = function(...args) {    
    
    let array = args[0];

    let newArray = [];

    array.forEach(element => {
       
        if (!args.includes(element)) {
            
            newArray.push(element);

            console.log(newArray);
        }
    });

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
