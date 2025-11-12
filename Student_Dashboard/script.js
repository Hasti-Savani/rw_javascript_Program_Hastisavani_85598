const STUDENT_API = "http://localhost:3000//students";

// DOM

const form = document.getElementById("studentform");
const name = document.getElementById("name");
const grid = document.getElementById("grid");
const email = document.getElementById("email");
const age = document.getElementById("age");
const mobile = document.getElementById("mobile");
const gender = document.getElementById("gender");
const courses = document.getElementById("courses");
const tabledata = document.getElementById("student_data");
const saveBtn = document.getElementById("saveBtn")

const editId = null;

console.log(tabledata);


// Get Students with API

async function GetStudents() {
    const res = await fetch(STUDENT_API);
    const data = await res.json();
    renderStudent(data);
    console.log(data);
}

// Student Data Rendering

function renderStudent(students) {
    tabledata.innerHTML = "";
    if (students.lenght === 0) {
        tabledata.innerHTML = `<p class="text-center text-gray-900">No Student Data Found</p>`;
        return;
    }
    students.forEach((student) => {
        const row = document.createElement("tr")
        row.className = "border-b border-2"
        row.innerHTML = `
     <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${student.name}</td>
     <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${student.grid}</td>
     <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${student.email}</td>
     <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${student.age}</td>
     <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${student.number}</td>
     <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${student.gender}</td>
     <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${student.course}</td>
     <button onclick="editStudent(${student.id})">Edit</button>
     <button onclick="deleteStudent(${student.id})">Delete</button>
    `;
        tabledata.appendChild(row)
    });
}


// Registered Students

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    const student = {
        name: name.value.trim(),
        grid: grid.value.trim(),
        email: email.value.trim(),
        age: parseInt(age.value),
        mobile: mobile.value.trim(),
        gender,
        course: courses.value,
    };

    if (
        !student.name ||
        !student.grid ||
        !student.email ||
        !student.age ||
        !student.mobile ||
        !student.gender ||
        !student.course
    ) {
        alert("Please Fill All Fields.");
        return;
    }

    if (editId) {
        await fetch(`${STUDENT_API}/${editId}`, {
            method: "PUT",
            headers: { "Content-type": "Application-json" },
            body: JSON.stringify(student),
        });
        saveBtn.textContent = "ADD STUDENT"
    }

    // POST



    form.reset();

    GetStudents();
});

// Edit Students

function editStudent(id) {
    const res = fetch(`${STUDENT_API}/${id}`);
    const edit_data = res.json();

    grid.value = edit_data.grid;
    name.value = edit_data.name;
    email.value = edit_data.email;
    age.value = edit_data.age;
    mobile.value = edit_data.mobile;
    gender.value = edit_data.gender;
    courses.value = edit_data.courses;
    editId = id;

    const gender = document.querySelector(
        `input[name="gender"][value:"${edit_data.gender}"]`
    );

    if (gender) gender.checked = true;

    GetStudents();
}

// Delete Students

async function deleteStudent(id) {
    if (!confirm("Are you sure you want to delete this student?")) return;

    await fetch(`${STUDENT_API}/${id}`, { method: "delete" });

    GetStudents();
}




