function noteListIsAnArray() {
    noteList = new NoteListModel();
    console.log('noteListIsAnArray');
    assert.isEqual(noteList.noteArray.length, 0)
}

function addNote() {
    noteList = new NoteListModel();
    console.log('addNote');
    noteList.addNote('Hull')
    noteList.addNote('Yorkshire')
    assert.isEqual(noteList.noteArray[0].content(), 'Hull')
    assert.isEqual(noteList.noteArray[1].content(), 'Yorkshire')
}

noteListIsAnArray();
addNote();