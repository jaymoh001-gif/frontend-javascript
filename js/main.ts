interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

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

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
studentsList.forEach((student) => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});

document.body.appendChild(table);
