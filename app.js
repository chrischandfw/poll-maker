import { renderPastTrial } from './render-utils.js';

const choiceAAddButton = document.querySelector('#choice-a-add-button');
const choiceBAddButton = document.querySelector('#choice-b-add-button');

const choiceASubtractButton = document.querySelector('#choice-a-subtract-button'); 
const choiceBSubtractButton = document.querySelector('#choice-b-subtract-button');

const nameFormButton = document.querySelector('#name-form-button');

const completeButton = document.querySelector('#complete-vote-button');

const affairsLabel = document.querySelector('.affairs');
const choiceALabel = document.querySelector('#choice-a-name');
const choiceBLabel = document.querySelector('#choice-b-name');

const currentTrialEl = document.querySelector('#current-trial-container');
const pastTrialEl = document.querySelector('#past-trials-container');

// let state
let affairs = '';
let choiceA = '';
let choiceB = '';
let votesA = 0;
let votesB = 0;

const pastTrialsArray = [];

// set event listeners 
choiceAAddButton.addEventListener('click', () => {
    votesA++;

    displayCurrentTrial();

});

choiceBAddButton.addEventListener('click', () => {
    votesB++;

    displayCurrentTrial();

});

choiceASubtractButton.addEventListener('click', () =>{
    votesA--;

    displayCurrentTrial();

});

choiceBSubtractButton.addEventListener('click', () =>{
    votesB--;

    displayCurrentTrial();

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

    displayCurrentTrial();

});

completeButton.addEventListener('click', () => {
    const currentTrial = {
        affairs: affairs,
        choiceA: choiceA,
        choiceB: choiceB,
        votesA: votesA,
        votesB: votesB
    };

    pastTrialsArray.push(currentTrial);

    displayCurrentTrial();

    resetTrial();

    displayTrials();
});

function resetTrial() {
    affairs = '';
    choiceA = '';
    choiceB = '';
    votesA = 0;
    votesB = 0;
}

function displayCurrentTrial() {
    currentTrialEl.textContent = '';

    affairsLabel.textContent = affairs;
    choiceALabel.textContent = choiceA;
    choiceBLabel.textContent = choiceB;

    const trial = {
        affairs: affairs,
        choiceA: choiceA,
        choiceB: choiceB,
        votesA: votesA,
        votesB: votesB
    };  
    const container = renderPastTrial(trial);
    currentTrialEl.append(container);

    //currentTrialEl.append();

}

function displayTrials() {
    pastTrialEl.textContent = '';

    for (let trial of pastTrialsArray) {
        const container = renderPastTrial(trial);
        pastTrialEl.append(container);
    }
}
