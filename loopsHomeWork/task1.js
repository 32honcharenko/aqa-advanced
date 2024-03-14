const averageGrade = 85;

if (averageGrade < 60) {
  console.log('Незадовільно');
}
if (averageGrade >= 60 && averageGrade <= 70) {
  console.log('Задовільно');
}
if (averageGrade > 70 && averageGrade <= 80) {
  console.log('Добре');
}
if (averageGrade > 80 && averageGrade <= 90) {
  console.log('Дуже добре');
}
if (averageGrade > 90 && averageGrade <= 100) {
  console.log('Відмінно');
}

if (averageGrade > 100) {
  console.log('не вірне значення');
}

/* можна було ще зробити так

const averageGrade = 101;

if (averageGrade < 60) {
    console.log("Незадовільно");
} else if (averageGrade <= 70) {
    console.log("Задовільно");
} else if (averageGrade <= 80) {
    console.log("Добре");
} else if (averageGrade <= 90) {
    console.log("Дуже добре");
} else if (averageGrade <= 100) {
    console.log("Відмінно");
} else {
    console.log("Некоректне значення середнього балу");
} */
