class Course {
    constructor(data, assignments) {
        this.id = data.id;
        this.title = data.name;
        this.description = data.description;
        this.instructor = data.instructor;
        this.assignments = assignments || [];
    }

    getCourseInfo() {
        return `${this.name} by ${this.instructor}`;
    }
    toJSON() {
        return {
            id: this.id,
            name: this.title,
            description: this.description,
            instructor: this.instructor,
            assignments: this.assignments
        };
    }
}