/*
generateClassRecordSummary(scores) {
  
  return {
    studentGrades: studentGrades(Object.values(scores).map(student => student.scores)),
    exams: examsData(Object.values(scores).map(student => student.scores.exams))
  }
}

examsData(exams) {
  let examsScores = [[],[],[],[]];
  exams.forEach(studentData => {
    studentData.forEach((grade, index) => examsScores[i].push(grade));
  });

  return examsScores.map(examScores => {
    return {average: reduce(examScoreAverage), minimum: reduce(examScoresMinimum), maximum: reduce(examScoresMax)}
  });
}

studentGrades(studentsScores) {
  let studentMarks = studentsScores.map(studentScores => {
    let exam = studentScores.exams.reduce(arraySum)/exam.length;
    let exercises = studentScores.exercises.reduce(arraySum);
    let mark = exam*EXAM_WEIGHT + exercises * EXERCISEWEIGHT;
  });

  let letterGrade = studentMarks.map(letterGrades)
}

*/
const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;
const LETTER_GRADES = {
  93: 'A',
  85: 'B',
  77: 'C',
  69: 'D',
  60: 'E',
  0: 'F'
};

function arraySum(accum, score) {
  return accum + score
}

function examScoresMin(accum, score) {
  return score < accum ? score: accum;
}

function examScoresMax(accum, score) {
  return score > accum ? score:accum;
}

function examsData(exams) {
  let examsScores = [[],[],[],[]];
  exams.forEach(studentData => {
    studentData.forEach((grade, i) => examsScores[i].push(grade));
  });

  return examsScores.map(examScores => {
    return {
      average: examScores.reduce(arraySum)/examScores.length, 
      minimum: examScores.reduce(examScoresMin), 
      maximum: examScores.reduce(examScoresMax)}
  });
}

function letterGrades(mark) {
  let objKeys = Object.keys(LETTER_GRADES).sort((a, b) => b - a);
  for (let i = 0; i < objKeys.length; i ++) {
    if (mark > objKeys[i]) {
      return `${Math.round(mark)} (${LETTER_GRADES[objKeys[i]]})`
    }
  }
}

function studentGrades(studentsScores) {
  let studentMarks = studentsScores.map(studentScores => {
    let exam = studentScores.exams.reduce(arraySum)/studentScores.exams.length;
    let exercises = studentScores.exercises.reduce(arraySum);
    let mark = exam * EXAM_WEIGHT + exercises * EXERCISE_WEIGHT;
    return mark;
  });

  return studentMarks.map(letterGrades);
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  return {
    studentGrades: studentGrades(Object.values(scores).map(student => student.scores)),
    exams: examsData(Object.values(scores).map(student => student.scores.exams))
  }
}

console.log(generateClassRecordSummary(studentScores));