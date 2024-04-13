// Implement a series of functions that demonstrate closures to maintain state, such as a counter or a rate limiter.

function createCounter() {
  let count = 0 // This variable is captured by the closure

  return function () {
    count++
    return count
  }
}

const counter = createCounter() // Create a counter

console.log(counter()) // Output: 1
console.log(counter()) // Output: 2
console.log(counter()) // Output: 3



//   example of a simple rate limiter using closures:

function createRateLimiter(limit, interval) {
  let count = 0
  let lastReset = Date.now() // Tracks the last time the counter was reset

  return function () {
    const now = Date.now()
    if (now - lastReset >= interval) {
      count = 0 // Reset the counter if interval has passed
      lastReset = now
    }

    if (count < limit) {
      count++
      return true // Return true if the limit has not been reached
    } else {
      return false // Return false if the limit has been reached
    }
  }
}

const rateLimiter = createRateLimiter(2, 1000) // Limit to 2 calls per second

console.log(rateLimiter()) // Output: true
console.log(rateLimiter()) // Output: true
console.log(rateLimiter()) // Output: false (limit reached)
