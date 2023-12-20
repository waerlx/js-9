let arr = ["Adelina", 100, true, [1,2,3,4]]
let arr2 = [1, 100, true, [1,2,4,5,6,7,]]
console.log(arr)

arr.reverse()
console.log(arr)


arr2.sort()
console.log(arr2)

let arr3 = arr2.map(num => num * 2)
console.log(arr3)
//.join
let arr4 = arr.join(" ")
console.log(arr4)
// .split
let arr5 = arr4.split("A")
console.log(arr5)
// .forEach
let arr6 = arr5.forEach(el => el+2)
console.log(arr6)


// filter
let arr7 = arr5.filter(str => str/length > 3)
console.log(arr7)


let arr8 = arr.concat(arr7,arr2)
console.log(arr8)

let arr9 = arr8.fill("1",0,2)
console.log(arr9)

let arr10 = arr9.slice(2,4)
console.log(arr10)


arr9.splice(6,2, 'dish')
console.log(arr9)

