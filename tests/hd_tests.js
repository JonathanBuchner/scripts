function assert(name, expected, actual) {
    var pass = expected === actual

    if (pass)
    {
        // console.info(`Test PASSED: ${name} passed. Expected: ${expected} Actual: ${actual}.`)
    } else  {
        console.warn(`Test FAILED: ${name} failed. Expected: ${expected} Actual: ${actual}.`)
    }
}

assert("Can pass", 1 , 1)
assert("Can fail", 1 , 2)


