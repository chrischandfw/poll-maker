export function renderPastTrial(trial) {
    const container = document.createElement('div');
    const tAffairsEl = document.createElement('p');
    const tChoiceA = document.createElement('p');
    const tChoiceB = document.createElement('p');
    const tVotesA = document.createElement('p');
    const tVotesB = document.createElement('p');

  // add some text content
    container.classList.add('past-trial');
    tAffairsEl.textContent = trial.affairs;
    tChoiceA.textContent = trial.choiceA;
    tChoiceB.textContent = trial.choiceB;
    tVotesA.textContent = trial.votesA;
    tVotesB.textContent = trial.votesB;

  // and append
    container.append(tAffairsEl, tChoiceA, tChoiceB, tVotesA, tVotesB);

    // return the DOM element
    return container;
}