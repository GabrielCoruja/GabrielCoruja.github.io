const assert = require('assert')

const userFullname = ({ firstName, lastName}) => `Hello! My name is ${firstName} ${lastName}`
const userNatianality = ({ firstName, nationality}) => `${firstName} is ${nationality}`


const getUser = (callback) => {
    const userToReturn = {
        firstName: 'Ivan',
        lastName: 'Ivanovich',
        nationality: 'Russian'
    }
    return callback(userToReturn)
}

assert.equal(getUser(userFullname), "Hello! My name is Ivan Ivanovich")
assert.equal(getUser(userNatianality), 'Ivan is Russian')

console.log(getUser(userFullname))
console.log(getUser(userNatianality))