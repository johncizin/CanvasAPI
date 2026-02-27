import { Course } from '../models/Course';
import { Assignment } from '../models/Assignment';

export function createCourse(rawCourse, rawAssignments) {
    const assignments = rawAssignments.map(a => new Assignment(a));
    return new Course(rawCourse, assignments);
}