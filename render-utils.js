export function renderPastTrial(trial) {
    const container = document.createElement('div');
    const tAffairsEl = document.createElement('p');
    const tChoiceA = document.createElement('p');
    const tChoiceB = document.createElement('p');
    const tVotesA = document.createElement('p');
    const tVotesB = document.createElement('p');

  // add some text content
    container.classList.add('past-trial');
    tAffairsEl.textContent = trial.question;
    tChoiceA.textContent = trial.optionATitle;
    tChoiceB.textContent = trial.optionBTitle;
    tVotesA.textContent = trial.optionAVotes;
    tVotesB.textContent = trial.optionBVotes;

  // and append
    container.append(tAffairsEl, tChoiceA, tChoiceB, tVotesA, tVotesB);

    // return the DOM element
    return container;
}