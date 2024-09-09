let array = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];

function deleteInvalids(array) {
    if (Array.isArray(array)) {
        const newArray = [];
        for (const arr of array) {
            (typeof arr === 'number') && !isNaN(arr) ? newArray.push(arr) : false;
        }
        return newArray;
    } else return 'Invalid Array';
}

console.log(deleteInvalids(array));
