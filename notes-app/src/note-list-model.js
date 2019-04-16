(function(exports) {
    function NoteListModel(){
        this.noteArray = []
    };

    NoteListModel.prototype.addNote = function(content) {
        this.noteArray.push(new NoteModel(content))
    };

    exports.NoteListModel = NoteListModel;
})(this);