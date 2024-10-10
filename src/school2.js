const isValidName = (name) => typeof name === 'string' && name.trim().length >= 3;
const isPositive = (num) => typeof num === 'number' && num >= 0;

const evaluateStudent = (studentName, grade1, grade2) => {
  if (!isValidName(studentName)) return 'Invalid name';
  if (!isPositive(grade1) || !isPositive(grade2)) return 'Invalid grade';

  const average = (grade1 + grade2) / 2;
  return average > 6 ? 'Approved' : 'Retained';
}

export { evaluateStudent };
