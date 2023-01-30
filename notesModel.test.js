const model = require('./notesModel');
// const model = new NotesModel();

// model.getNotes(); // should return []

// model.addNote('Buy milk');
// model.addNote('Go to the gym');

// model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

// model.reset();

// model.getNotes(); // should now return []

describe('notesModel', () => {
    it("should return empty array", () => {
        expect(model.getNotes()).toEqual([]);
    });

    it("should allow us to add a note to our array", () => {
        model.addNotes('Buy milk');
        expect(model.getNotes()).toEqual(['Buy milk']);
    });
    
    it("should reset our array", () => {
        model.addNotes('Buy milk');
        model.reset();
        expect(model.getNotes()).toEqual([]);
    });
}) 
