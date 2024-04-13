// Create a custom implementation of a commonly used higher-order function (e.g., a map,reduce function) that mimics the behavior of the native implementation.

function customMap(arr, callback) {
  const mappedArray = []

  for (let i = 0; i < arr.length; i++) {
    mappedArray.push(callback(arr[i], i, arr))
  }

  return mappedArray
}

const numbers = [1, 2, 3, 4, 5]

// Using native map
const doubledNative = numbers.map((num) => num * 2)
console.log('Using native map:', doubledNative) // Output: [2, 4, 6, 8, 10]

// Using custom map
const doubledCustom = customMap(numbers, (num) => num * 2)
console.log('Using custom map:', doubledCustom) // Output: [2, 4, 6, 8, 10]

//   example of a reduce function

function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue === undefined ? arr[0] : initialValue
  const startIndex = initialValue === undefined ? 1 : 0

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr)
  }

  return accumulator
}

const arr2 = [1, 2, 3, 4, 5]

// Using native reduce
const sumNative = arr2.reduce((acc, num) => acc + num, 0)
console.log('Using native reduce:', sumNative) // Output: 15

// Using custom reduce
const sumCustom = customReduce(arr2, (acc, num) => acc + num, 0)
console.log('Using custom reduce:', sumCustom) // Output: 15
