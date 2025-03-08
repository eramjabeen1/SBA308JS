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

// creating a function to process the learners data and for score calculation
function getLearnerData(course, assignmentGroups, learnerSubmissions) {
    // i want to first make sure that the assignment group actually belongs to the course
    for (let i = 0; i < assignmentGroups.length; i++) {
        if (assignmentGroups[i].course_id !== course.id) {
            // if an assignment group does not match the course, i throw an ERRORRRR to avoid incorrect data processing
            throw new Error("invalid! the assignment group does not match the course");
        }
    }

    let learners = {}; // creating an empty object to store each learner's scores and progress
    
    // will be looping thru each learner submission to process their scores
    for (let i = 0; i < learnerSubmissions.length; i++) {
        let { learner_id, assignment_id, submission: { submitted_at, score } } = learnerSubmissions[i];
        let assignmentInfo;
        
        // finding the matching assignment by looping thru all assignment groups
        for (let j = 0; j < assignmentGroups.length; j++) {
            for (let k = 0; k < assignmentGroups[j].assignments.length; k++) {
                if (assignmentGroups[j].assignments[k].id === assignment_id) {
                    assignmentInfo = assignmentGroups[j].assignments[k];
                    break;
                }
            }
            if (assignmentInfo) {
                break;
            }
        }
        
        if (!assignmentInfo) {
            // if a submission references an assignment that DNEs.. i throw an error
            throw new Error("invalid! the assignment was not found");
        }
        
        if (assignmentInfo.points_possible === 0) {
            // if an assignment has zero possible points it skips it to avoid division by zero errors
            console.warn("warning points_possible is zero for assignment", assignmentInfo.id);
            continue;
        }
        
        let dueDate = new Date(assignmentInfo.due_at); // getting the due date of the assignment
        let submittedDate = new Date(submitted_at); // getting the date the student submitted
        if (submittedDate > dueDate) {
            // if the submission is late...10 percent of the points gets deducted 
            score -= assignmentInfo.points_possible * 0.1;
        }
        
        if (!learners[learner_id]) {
            // if learner DNE in the object yet..there is an entry for that
            learners[learner_id] = { id: learner_id, avg: 0, totalPoints: 0, maxPoints: 0 };
        }
        
        let percentage = (score / assignmentInfo.points_possible) * 100; // calculation percentage score for this assignment
        learners[learner_id][assignment_id] = percentage; // storing the percentage score
        learners[learner_id].totalPoints += score; // adding this score to total points
        learners[learner_id].maxPoints += assignmentInfo.points_possible; // adding max possible points to keep track of total grading
    }
    
    let result = []; // array to hold the final processed student data
    for (let learnerId in learners) {
        // calculating the weighted average for each learner
        learners[learnerId].avg = (learners[learnerId].totalPoints / learners[learnerId].maxPoints) * 100;
        delete learners[learnerId].totalPoints;
        delete learners[learnerId].maxPoints;
        result.push(learners[learnerId]); // adding the learners final data to the array
    }
    return result; // returning of the final processed data
}

// similiar format like the sandbox example will be printed..
const result = getLearnerData(CourseInfo, [AssignmentGroup], LearnerSubmissions);
console.log("[");
for (let i = 0; i < result.length; i++) {
    let learner = result[i];
    console.log("  {");
    console.log("    id:", learner.id + ",");
    console.log("    avg:", learner.avg.toFixed(2) + ",");
    
    let assignmentKeys = Object.keys(learner).filter(key => key !== "id" && key !== "avg");
    for (let j = 0; j < assignmentKeys.length; j++) {
        let key = assignmentKeys[j];
        let comma = j === assignmentKeys.length - 1 ? "" : ",";
        console.log("    " + key + ":", learner[key].toFixed(2) + comma);
    }
    
    let learnerComma = i === result.length - 1 ? "" : ",";
    console.log("  }" + learnerComma);
}
console.log("]");