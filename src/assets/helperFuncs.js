
export function randomize(data, questNum) {
  let options = [],
    correctIndex = 0;
  if (data) {
    let tmp = [
      data.results[questNum].correct_answer,
      ...data.results[questNum].incorrect_answers,
    ];
    while (tmp.length !== 0) {
      let randIndex = Math.floor(Math.random() * tmp.length);
      options.push(tmp[randIndex]);
      tmp.splice(randIndex, 1);
    }
    options.forEach((option, idx) => {
      correctIndex +=
        option === data.results[questNum].correct_answer ? idx : 0;
    });
  }
  return { options, correctIndex };
}

