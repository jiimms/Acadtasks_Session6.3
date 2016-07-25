function findMaxSequence(array) {
  var preVal;
  var maxSeq = [];
  var currentSequence = [];

  array.forEach(function(val, i) {
    if (i === 0 || preVal < val) {
      currentSequence.push(val);
    } else {
      currentSequence = [val];
    }

    preVal = val;

    if (maxSeq.length < currentSequence.length) {
      maxSeq = currentSequence;
    }
  });

  document.write("max Seq is " + ("[" + maxSeq.join(", ") + "]") + "</br>");
}



findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);
findMaxSequence([]);