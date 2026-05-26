const removeFromArray = function(arr, ...args) {
    //--------------------------------------------------
    //the code below only removes the first occurence in the array
    //like args = [2] , arr = [1,2,2,3]    then the resulting array will be [1,2,3] not [1,3]
    //---------------------------------------------------------------------------------------
    // args.forEach((arg) => {
    //     let index = arr.indexOf(arg);

    //     if(index > -1){
    //         arr.splice(index, 1);
    //     }
    // });
    // return arr;
    return arr.filter(item => !args.includes(item));
}; 

// Do not edit below this line
module.exports = removeFromArray;
 