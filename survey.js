const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('You want to be known by what name? ', (name) => { // there must be an easier way to write this
  rl.question(`What does ${name} spend precious time doing? `, (activity) => {
    rl.question(`${name} feels what when doing ${activity}? `, (activityOpinion) => {
      rl.question(`${name} is lying down on the floor late night thinking about what? `, (nightThoughts) => {
        rl.question(`${name} feels what about ${nightThoughts}? `, (nightThoughtsOpinion) => {
          rl.question(`${name}, what is today like? `, (today) => {
            rl.question(`What do you want to eat? `, (meal) => {
              console.log(`Thanks be to ${name} for their time.`);
              setTimeout(()=> {
                console.log(`\n${name} spends precious time doing ${activity}. ${name} feels ${activityOpinion} about ${activity}.\n${name} sometimes think about ${nightThoughts}. ${name} feels ${nightThoughtsOpinion} about ${nightThoughts}.\nOn a day that is ${today}, ${name} wants to eat ${meal}.\n`)
                rl.close();
              }, 1000);         
    
            });
          });
        });
      });
    });
  });
});