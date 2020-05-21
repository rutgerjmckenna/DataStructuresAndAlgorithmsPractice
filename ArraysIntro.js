const strings = ['a', 'b', 'c', 'd'];
//4*4 (on a 32 bit system) = 16 bytes of storage
//The data 'a', for example in the array takes up 4 bytes, or 32 bits on a 32 bit system

strings[2]

//Push - Add to end of an array

strings.push('e'); // O(1) << For big O, this is an O(1) operation

//'e' will be added to the end of the array named strings

//----------------------------------------------------------------

//Pop - Take away end element of array

strings.pop(); // O(1) >> Once again, O(1) as nothing is looped through

//'e' is now removed from strings

//----------------------------------------------------------------

//Unshift - Add item to the beginning of the array

strings.unshift('z'); // O(n)
//The reason this is O(n) is because as we use unshift, we shift all the items
//in the array down to add to the beginning, reassigning each of their indexes and
//giving our new item (z) to the index 0. Since we do this, it requires us
//to loop through everything, and therefore has a big O notation of O(n)

//'z' is now added to the beginning of the array strings

//----------------------------------------------------------------

//Splice - Insert an item into the array with potentially deleting others

strings.splice(2, 0, 'hello'); // O(n) as it loops through and adds

//With this we will insert 'hello' into the 2nd index, delete 0 items, and the item
//will be the string 'hello'