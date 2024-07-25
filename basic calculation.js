
let CollegeManagement = {
  CollegeName: "S.D.Jain",
  address: "Vesu Surat",
  classes: [
    {
      DepartmentName: "CSE",
      ProfessorName: "Priya Thakur",
      students: [
        {
          studentName: "Nishtha Bharti",
          age: 19,
          grade: [
            {
              subject: "Javascript",
              marks: 85,
              grades: "A",
              assigment: [{ title: "Assignment 1" }, { title: "Assignment 2" }],
            },
            {},
          ],
        },
        {
          studentName: "Nishtha Bharti",
          age: 19,
          grade: [
            {
              subject: "C language",
              marks: 65,
              grades: "C",
              assigment: [{ title: "Assignment 1" }, { title: "Assignment 2" }],
            },
            {},
          ],
        },
      ],
    },
    {
      DepartmentName: "CSE",
      ProfessorName: "Mahesh Sir",
      students: [
        {
          studentName: "Nishtha Bharti",
          age: 19,
          grade: [
            {
              subject: "DSA",
              marks: 85,
              grades: "A",
              assigment: [{ title: "Assignment 1" }, { title: "Assignment 2" }],
            },
            {},
          ],
        },
        {
          studentName: "Nishtha Bharti",
          age: 19,
          grade: [
            {
              subject: "AI",
              marks: 64,
              grades: "C",
              assigment: [{ title: "Assignment 1" }, { title: "Assignment 2" }],
            },
            {},
          ],
        },
      ],
    },
  ],
};

console.log(
  CollegeManagement.classes[0].students[1].grade[0].marks
);

