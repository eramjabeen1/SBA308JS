//SBA 308 javascript fundamentals

/*creating a grade processing app to process and manage scores of students
also to calculate scores and averages
objective here to 
assessment for js fundamentals using basic js syntax..
implementing ctrl flow structures conditionals and loops
arrays and objects for data
functions for reusable code
loops and iteration for navigation thru data collections
implementing error handling for any code failures
revised methods of recursions array methods and any topic needed for this SBA along the way*/

//first will do function setup to ensure that assignments groups are in the correct course 
//in this step i am verifying in a way that the given data is valid and belongs before continuing on 
//i am creating this function to take in course info, assignment groups, and learner submissions

// starting with function to process learner data and calculate scores

// i am defining the course information so that i can use it later
// this object holds details about the course like its id and name, which will help in checking if assignments belong to this course

const CourseInfo = {
    id: 451, // unique id for the course
    name: "Introduction to JavaScript" // this is the name of the course
};

// i am defining the assignment group which holds all the assignments for this course
// this helps in grouping assignments together so they can be processed in relation to the course

const AssignmentGroup = {
    id: 12345, // unique id for the assignment group
    name: "Fundamentals of JavaScript", // name of the assignment group
    course_id: 451, // ensuring this group belongs to the correct course by matching the id
    group_weight: 25, // percentage weight of this group wont be used for calculations but good to know
    assignments: [ // an array that holds each assignment and its details
        { id: 1, name: "Declare a Variable", due_at: "2023-01-25", points_possible: 50 },
        { id: 2, name: "Write a Function", due_at: "2023-02-27", points_possible: 150 },
        { id: 3, name: "Code the World", due_at: "3156-11-15", points_possible: 500 } // this assignment is due in the future so it wont be counted
    ]
};

// i am defining the learner submission data, which contains the students submissions
// this holds info on what students submitted their scores.. and submission dates which WILL be used to calculate the final grades
const LearnerSubmissions = [
    { learner_id: 125, assignment_id: 1, submission: { submitted_at: "2023-01-25", score: 47 } },
    { learner_id: 125, assignment_id: 2, submission: { submitted_at: "2023-02-12", score: 150 } },
    { learner_id: 125, assignment_id: 3, submission: { submitted_at: "2023-01-25", score: 400 } },
    { learner_id: 132, assignment_id: 1, submission: { submitted_at: "2023-01-24", score: 39 } },
    { learner_id: 132, assignment_id: 2, submission: { submitted_at: "2023-03-07", score: 140 } }
];

