// import functions and grab DOM elements
const choiceAAddButton = document.querySelector('#choice-a-add-button');
const choiceBAddButton = document.querySelector('#choice-b-add-button');

const choiceASubtractButton = document.querySelector('#choice-a-subtract-button'); 
const choiceBSubtractButton = document.querySelector('#choice-b-subtract-button');

const nameFormButton = document.querySelector('#name-form-button');

const completeButton = document.querySelector('#complete-vote-button');

const affairsLabel = document.querySelector('.affairs');
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
choiceAAddButton.addEventListener('click', () => {
    choiceA++;

    resetTrial();
});

choiceBAddButton.addEventListener('click', () => {
    choiceB++;

    resetTrial();
});

choiceASubtractButton.addEventListener('click', () =>{
    choiceA--;

    resetTrial();
});

choiceBSubtractButton.addEventListener('click', () =>{
    choiceB--;

    resetTrial();
});

nameFormButton.addEventListener('click', () => {
    let affairsInput = document.getElementsByName('question') [0];
    let choiceAInput = document.getElementsByName('choice-a') [0];
    let choiceBInput = document.getElementsByName('choice-b') [0];

    affairs = affairsInput.value;
    choiceA = choiceAInput.value;
    choiceB = choiceBInput.value; 

    affairsInput = ('');
    choiceAInput = ('');
    choiceBInput = ('');

    affairsLabel.value = '';
    choiceALabel.value = '';
    choiceBLabel.value = '';

    resetTrial();

});

function resetTrial() {
    affairs = '';
    choiceA = '';
    choiceB = '';
    votesA = 0;
    votesB = 0;
}
