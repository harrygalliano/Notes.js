function noteContentFromConstructor() {
  note = new NoteModel('half pint');
  console.log('noteContentFromConstructor')
  assert.isEqual(note._content, 'half pint')
}

function returnMyNote(){
  note = new NoteModel('roast and toast');
  console.log('returnMyNote')
  assert.isEqual(note.content(), 'roast and toast')
}

noteContentFromConstructor();
returnMyNote();

