/**
* Counts the number of threes in a given number.
* @param {number} n - The input number.
* @returns {number} - Returns how many threes are in the input.
*
* ex: countThrees(300)
* returns: 1
*
* ex: countThrees(3203)
* returns: 2
*
* ex: countThrees(47)
* returns: 0
*/

const countThrees = n => {
    const str = n.toString()
    let count = 0
    for (const element of str) {
        if (element === "3") {
            count++
        }
    }
    return count
}

module.exports = countThrees
