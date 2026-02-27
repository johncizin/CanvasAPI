export class Assignment {
    constructor(data){
        this.id = data.id;
        this.title = data.name;
        this.description = data.description || '';
        this.dueDate = data.due_at || null;
        this.points = data.points_possible || 0;
    }

    isUpcoming() {
        if (!this.dueDate) return false;
        const now = new Date();
        const due = new Date(this.dueDate);
        return due > now;
    }
    
    toJSON() {
        return {
            id: this.id,
            name: this.title,
            description: this.description,
            due_at: this.dueDate,
            points_possible: this.points
        };
    }
}