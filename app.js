// import functions and grab DOM elements
const choiceAAddButton = document.querySelector('#choice-a-add-button');
const choiceBAddButton = document.querySelector('#choice-b-add-button');

const choiceASubtractButton = document.querySelector('#choice-a-subtract-button'); 
const choiceBSubtractButton = document.querySelector('#choice-b-subtract-button');

const form = document.querySelector('form');
const nameFormButton = document.querySelector('#name-form-button');

const completeButton = document.querySelector('#complete-vote-button');

const choiceALabel = document.querySelector('#choice-a-name');
const choiceBLabel = document.querySelector('#choice-b-name');

const affairsEl = document.querySelector('#');
const currentTrialEl = document.querySelector('#current-trial-container');
const pastTrialEl = document.querySelector('#past-trial-container');

// let state
let affairs = '';
let choiceA = '';
let choiceB = '';
let votesA = 0;
let votesB = 0;

const pastTrialsArray = [];



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
