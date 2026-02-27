import { Course } from '../models/course.js';
import { Assignment } from '../models/assignment.js';

export function createCourse(rawCourse, rawAssignments) {
    const assignments = rawAssignments.map(a => new Assignment(a));
    return new Course(rawCourse, assignments);
}