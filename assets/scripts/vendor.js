/**
 * @param Shortcuts_in_VScode {
 *  from (help) --> slect (keyboard shortcuts reference)
 *  e.g. ctrl+shift+p to open command palette and etc.
 * }
 * Debug and test code syntax errors and logical errors 
 * Sources 
 * Console 
 */

const usrInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputOfResult (result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
