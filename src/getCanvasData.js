export function getCanvasData() {
    // Placeholder for actual API call to Canvas
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                courses: [
                    { id: 1, name: 'Course 1' },
                    { id: 2, name: 'Course 2' },
                ],
                assignments: [
                    { id: 1, courseId: 1, title: 'Assignment 1' },
                    { id: 2, courseId: 2, title: 'Assignment 2' },
                ],
            });
        }
        , 1000);
    });
}
