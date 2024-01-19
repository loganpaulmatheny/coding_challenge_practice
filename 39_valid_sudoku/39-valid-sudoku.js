// # 36. Valid Soduko

// Source: https://leetcode.com/problems/valid-sudoku/description/


// Understanding
// - Validate the sudoko board 
// - each row contains 1 - 9 without repetition, same with each column, and same with each 3 x 3 square

// Methods and questions
// - I need to check each array and make sure there’s no duplicate **numbers** (there can and should be duplicate `.`’s) 
// - I need to do the same for the positions e.g. array0[0] should not equal array1-8[0]
// - Should I use recursion to solve the problem?

// Pseudocode 
// - I could flatten the whole array and the do the following checks for each indices 
// - 1 is there more than 1 
// - any in the same 9 digits
// - any at the same index

// ===== BREAK UNABLE TO SOLVE ===== 
// Checkout solutions

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
};