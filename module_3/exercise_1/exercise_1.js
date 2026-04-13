'use strict';

// Create variables
const n_candidates = parseInt(prompt('Enter the number of candidates:'));  // number of candidates
const candidates = [];  // list of candidates (objects)
for (let i = 1; i <= n_candidates; i++) { // Create each candidate object and push it to candidates list
  const candidate_name = prompt(`Enter name of candidate ${i}:`);
  candidates.push({
    name: candidate_name,
    votes: 0
  })
  // console.log(candidates[i-1]);
  // console.log(candidates);
}

// Ask for number of voters and each voters' vote
const n_voters = parseInt(prompt('Enter the number of voters:'));
let candidates_name = []; // create list of candidates name
for (let i = 1; i <= n_candidates; i++) {
  candidates_name.push(candidates[i-1].name); // populate list
};
console.log(candidates_name);

// Voting round
let vote = '';
for (let i=1; i<=n_voters; i++){
  // Handler for user input errors
  do {
   vote = prompt(`Voter ${i}, enter the name of your candidate. Blank for an empty vote.`)
  } while ((!(candidates_name.includes(vote)) && vote != ''))

  // Compute vote
  for (let candidate of candidates){
    if (vote === candidate.name) {
      candidate.votes++;
      console.log(candidate);
    }
  }
};

// Ranking of candidates by votes
candidates.sort((a, b) => {
   return b.votes - a.votes;
});

// Print results in console
console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log(`results:`);
for (let candidate of candidates) {
  console.log(`${candidate.name}: ${candidate.votes} votes`);
}
