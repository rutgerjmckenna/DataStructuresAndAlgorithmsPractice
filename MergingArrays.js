//Given two arrays, unsorted, merge them into a single sorted array

function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    //Check your input
    if(array1.length === 0) {
        return array2;
    }
    if(array2.length === 0) {
        return array1;
    }

    whlie (array1Item || array2Item) {
        if (!arrayItem2 ||array1Item < array2Item) {
            mergedArray.push(array1Item)
            array1Item = array1[i];
            i++
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++
        }
    }

    return mergedArray;
}