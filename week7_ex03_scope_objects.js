// =========================
// GLOBAL VARIABLE
// =========================

let globalCount = 10;

console.log("Global Count:", globalCount);



// =========================
// LOCAL SCOPE FUNCTION
// =========================

function localScopeExample() {

    // Local variable
    let localCount = 5;

    console.log("Local Count:", localCount);
}

localScopeExample();



// =========================
// MODIFY BOTH VARIABLES
// =========================

function modifyVariables() {

    // Modify global variable
    globalCount++;

    // Local variable
    let localCount = 20;

    // Modify local variable
    localCount++;

    console.log("Modified Global Count:", globalCount);
    console.log("Modified Local Count:", localCount);
}

modifyVariables();



// =========================
// STUDENT CONSTRUCTOR
// =========================

function Student(firstName, lastName, age, course) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.course = course;

    // Method
    this.introduce = function () {
        console.log(
            "Hi, my name is " +
            this.firstName +
            " " +
            this.lastName +
            " and I study " +
            this.course
        );
    };
}



// =========================
// STUDENT INSTANCES
// =========================

let student1 = new Student("Yumnaa", "Isaacs", 17, "Frontend Development");

let student2 = new Student("Aaliyah", "Davids", 18, "Graphic Design");

let student3 = new Student("Zaid", "Jacobs", 19, "Software Engineering");

console.log(student1);
console.log(student2);
console.log(student3);

student1.introduce();
student2.introduce();
student3.introduce();



// =========================
// OBJECT LITERAL WITH NESTED PROPERTIES
// =========================

let school = {

    name: "LCA Academy",

    location: {
        city: "Cape Town",
        country: "South Africa"
    },

    courses: {
        frontend: "Frontend Development",
        backend: "Backend Development",
        design: "Graphic Design"
    }
};

console.log(school);