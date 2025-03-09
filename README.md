
This is a grade processing program which processes students grades by taking course info, assignments, and student submissions.
It checks if assignments belong to the right course, calculates scores, applies a 10% late penalty, and prints the results.

Takes input of course details, assignments, and student submissions.
Loops through submissions and finds the matching assignment.
Checks for late work then applies a 10% penalty if needed.
Calculates scores and converts raw scores into percentages.
Computes final averages then adds up scores and divides by total possible points.
Prints results.

Objects to store the course info, assignments, and student data.
Arrays to hold assignments and submissions.
Loops to process each student and the assignment.
Conditionals to check for errors, any late work, and zero-point assignments.
Math calculations to help convert scores into percentages and to calculate the averages.
Loop control to help stop loops early/skip unnecessary data.

I used....  
5 loops (for break and continue)
3 main objects (CourseInfo, AssignmentGroup, learners)
Arrays (assignments, LearnerSubmissions)
Conditionals (if-else for checking errors, late work, etc.)
Functions (getLearnerData)
Math operations (percentages, averages)
String formatting (toFixed(2)) 


Methods I Could Have Used to Make My Code Cleaner
Although my code works as expected, here are some JavaScript methods that could be utilized and efficient:

1. .forEach() instead of for loops because it is a cleaner way to iterate over arrays.
    I at first used it but got a little lost additonally, I didnt use it because doesnt allow break or continue, which I needed in my loops.
2. .map() Instead of manually storing data as it creates a new array with modified values.
   I didnt use due to to modifying an object (learners) effectively rather than creating a new array.
3. .reduce() for calculating averages as it helps accumulate values in a single pass, making calculations more concise.
   I did not use it as my method with loops works fine and aligns with what I learned in my lectures more comfortably for me.
4. Template Literals instead of multiple console.log() calls as it makes structured output cleaner and easier to read.
   I wanted to stick to simple formatting for my assignment and my approach follows the expected structure.
6. Math.round() Instead of .toFixed(2) Math.round(value * 100) / 100 can round numbers to two decimal places without converting them to strings.
   I didnt use it due to using .toFixed(2) I liked it as it was simpler for formatting output.


External Resources
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
https://www.w3schools.com/jsref/jsref_tofixed.asp
https://youtu.be/RVxuGCWZ_8E?si=74etwQ6wlG5Q8jDe
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
https://www.w3schools.com/jsref/jsref_obj_array.asp



