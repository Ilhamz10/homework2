1
//выведите в консоли каждый элемент из массива [45, 12, 3, 2, 1, 35] с помощью forEach()
let arr = [45, 12, 3, 2, 1, 35]
arr.forEach(element => {
    console.log(element)
});
2
//создайте новый массив с помощью map() из массива [45, 46, 47] в котором все значения будут удвоены и выведите в консоли
let arr2 = [45,46,47]
arr2 = arr2.map(element =>{
    return element*2
})
console.log(arr2)
3
//создайте новый массив только из чисел больше 5ти из массива [45, 12, 3, 2, 1, 35] с помощью filter()
arr = arr.filter(element =>{
    return element>5
})
console.log(arr)
4
//сложите все числа из массива [45, 12, 3, 2, 1, 35] с помощью reduce() и выведите результат в консоли
arr = [45, 12, 3, 2, 1, 35]
arr = arr.reduce((element,elm2) => element + elm2)

console.log(arr)
5
//сложите все числа из массива [45, 12, 3, 2, 1, 35] с помощью reduce() и начального значения 50, выведите результат в консоли
arr3 = [45, 12, 3, 2, 1, 35]
arr3 = arr3.reduce(function (element, elm2) {
    return element + elm2;
})
console.log(arr3+50)
6
//создайте массив только из чисел больше 5ти используя every() из массива [45, 12, 3, 2, 1, 35]
//every не меняет массив - возвращает только true и false
arr = [45, 12, 3, 2, 1, 35]
arr = arr.filter(element => {
    return element > 5
})
console.log(arr)
7
//создайте массив только из чисел больше 5ти используя some() из массива [45, 12, 3, 2, 1, 35]
//тоже самое с some
arr = [45, 12, 3, 2, 1, 35]
arr = arr.filter(element => {
    if(element > 5){return element}
})
console.log(arr)
8
//используйте метод indexOf чтобы найти индекс 'apple' в массиве ниже
//нету массива в заданиях 8-10
9
//используйте метод lastIndexOf чтобы найти индекс последнего 'apple' в массиве ниже

10
//проверьте находится ли 'apple' в массиве ниже

11
//выведите в консоли первое число которое больше 5ти из массива [1, 3, 4, 9, 0, 20]
arr = [1, 3, 4, 9, 0, 20]
arr = arr.find(over5)
function over5(value,arr){
    return value > 5
}
console.log(arr)
12
//выведите в консоли индекс первого числа который больше 5ти из массива [1, 3, 4, 9, 0, 20]
arr = [1, 3, 4, 9, 0, 20]
arr = arr.findIndex(over5)
function over5(value,arr){
    return value > 5
}
console.log(arr)
13
//превратите строку 'Hello' в массив с помощью from()
console.log(Array.from('Hello'))
14
//выведите в консоли все ключи из массива
//снова нет массива


//names
let names = ['Ceyhun','Azizaga','Ziya','Amin','и тд']
let names2 = names.filter(returned)
function returned(element){
    return element[0] == 'A'
}
console.log(names2)
//bonus1
function sum(a,b){
    return a+b
}
console.log(sum(2,3))
//bonus2
function convert(min){
    return min*60
}
console.log(convert(6))
//bonus3
function add1(a){
    return a+1
}
console.log(add1(7))
//bonus4
function S(a,b){
    return a*b/2
}
console.log(S(3,4))
//bonus5 - високосные годы добавлены
function days(a){
    return a*365 + (a/4)
}
console.log(days(20))