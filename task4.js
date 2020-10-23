//Print odd numbers in an array

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let anon = function(array) {
    let str = '';
    for (var x in array) {
        if (x % 2 !== 0) {
            str += x + " ";
        }
    }
    console.log(str.trim());
}
anon(arr1);

(function(array) {
    let str = '';
    for (var x in array) {
        if (x % 2 !== 0) {
            str += x + " ";
        }
    }
    console.log(str.trim());
})(arr1);

===
=== === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===


//Convert all the strings to title caps in a string array

let arr2 = ['this', 'is', 'so', 'much', 'fun'];

let anon = function(array) {
    return array.map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }).join(' ');
}
console.log(anon(arr2));

console.log((function(array) {
    return array.map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }).join(' ');
})(arr2));



===
=== === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===

//Sum of all numbers in an array

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let anon = function(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(anon(arr3));

console.log((function(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
})(arr3));

===
=== === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===


//Return all the prime numbers in an array

let arr4 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let anon = function(array) {
    let p = [];
    array.forEach(element => {
        let c = 0;
        for (var i = 2; i < element - 1; i++) {
            if (element % i === 0) { c++; }
        }
        if (c === 0) { p.push(element); }
    });
    return p.join(" ");

}
console.log(anon(arr4));

console.log((function(array) {
    let p = [];
    array.forEach(element => {
        let c = 0;
        for (var i = 2; i < element - 1; i++) {
            if (element % i === 0) { c++; }
        }
        if (c === 0) { p.push(element); }
    });
    return p.join(" ");

})(arr4));

===
=== === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===


//Return all the palindromes in an array

let arr5 = ['malayalam', 'tamil', 'barab', 'hiphop'];

let anon = function(array) {
    let pal = [];
    array.forEach(element => {
        let e = element.split("");
        let c = 0;
        for (var i = 0; i < e.length; i++) {
            if (e[i] == e[e.length - 1 - i]) { c++; }
        }
        if (c == e.length) { pal.push(element); }
    });
    return pal.join(" ");
}

console.log(anon(arr5));

console.log(((array) => {
    let pal = [];
    array.forEach(element => {
        let e = element.split("");
        let c = 0;
        for (var i = 0; i < e.length; i++) {
            if (e[i] == e[e.length - 1 - i]) { c++; }
        }
        if (c == e.length) { pal.push(element); }
    });
    return pal.join(" ");
})(arr5));

===
=== === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===


//Return median of two sorted arrays of same size

let arr6a = [1, 2, 3, 4];
let arr6b = [5, 6, 7, 8];

let anon = function(array1, array2) {
    let str = array1.join(' ') + ' ' + array2.join(' ');
    str = str.split(" ").map(Number);
    str.sort(function(a, b) { return a - b });
    if (str.length % 2 === 0) {
        return (str[(str.length / 2) - 1] + str[(str.length / 2)]) / 2;
    } else {
        return str[(str.length - 1) / 2];
    }
}

console.log(anon(arr6a, arr6b));


console.log((function(array1, array2) {
    let str = array1.join(' ') + ' ' + array2.join(' ');
    str = str.split(" ").map(Number);
    str.sort(function(a, b) { return a - b });
    if (str.length % 2 === 0) {
        return (str[(str.length / 2) - 1] + str[(str.length / 2)]) / 2;
    } else {
        return str[(str.length - 1) / 2];
    }
})(arr6a, arr6b));

===
=== === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===


//Remove duplicates from an array

let arr6 = [1, 3, 4, 5, 1, 4, 8, 7, 3];

let anon = function(array) {
    array.forEach(element => {
        for (var i = array.indexOf(element) + 1; i < array.length; i++) {
            if (array[i] == element) { array.splice(i, 1); }
        }
    });
    return array;
}

console.log(anon(arr6));

console.log((function(array) {
    array.forEach(element => {
        for (var i = array.indexOf(element) + 1; i < array.length; i++) {
            if (array[i] == element) { array.splice(i, 1); }
        }
    });
    return array;
})(arr6));

===
=== === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===


//Rotate an array by k times and return the rotated array

let arr7 = [1, 2, 3, 4, 5, 6];

let anon = function(array, k) {
    for (var j = 0; j < k; j++) {
        let temp = array[0];
        for (var x = 0; x < array.length - 1; x++) {
            array[x] = array[x + 1];
        }
        array[array.length - 1] = temp;
    }
    return array;
}

console.log(anon(arr7, 3));

let arr7 = [1, 2, 3, 4, 5, 6];

console.log((function(array, k) {
    for (var j = 0; j < k; j++) {
        let temp = array[0];
        for (var x = 0; x < array.length - 1; x++) {
            array[x] = array[x + 1];
        }
        array[array.length - 1] = temp;
    }
    return array;
})(arr7, 3));