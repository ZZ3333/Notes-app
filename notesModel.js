class NotesModel{
    constructor() {
        this.notes = [];
    }

    getNotes = () => {
        return this.notes;
    }

    addNotes = (note) => {
        this.notes.push(note);
    }

    reset = () => {
        return this.notes = [];
    }

};


module.exports = new NotesModel();