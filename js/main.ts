// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Alice",
  lastName: "Mwangi",
  age: 22,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Brian",
  lastName: "Omondi",
  age: 24,
  location: "Mombasa",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create a table and append rows for each student
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

