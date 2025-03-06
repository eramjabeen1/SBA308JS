//SBA 308 javascript fundamentals
//creating a grade processing app to process and manage scores of students
//also to calculate scores and averages
//objective here to 
//assessment for js fundamentals using basic js syntax..
//implementing ctrl flow structures conditionals and loops
//arrays and objects for data
//functions for reusable code
//loops and iteration for navigation thru data collections
//implementing error handling for any code failures
//revise methods of recursions and any topic needed for this SBA along the way

//function setup to see if assignments groups are in the correct course
function checkCourse(assignmentGroups, course) {
    assignmentGroups.forEach(group => {
        if (group.course_id !== course.id) {
            throw new Error("error: assignment group " + group.id + " does not belong to course " + course.id);
        }
    });
}

// function to remove assignments that are not yet due
function filterDueAssignments(assignmentGroups) {
    const today = new Date();

    return assignmentGroups.map(group => {
        let dueAssignments = group.assignments.filter(assignment => new Date(assignment.due_at) <= today);

        return { id: group.id, assignments: dueAssignments };
    }).filter(group => group.assignments.length > 0);
}