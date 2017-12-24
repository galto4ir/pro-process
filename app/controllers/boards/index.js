import Controller from "@ember/controller";

export default Controller.extend({
  sortProperties: ["timestamp"],
  sortAscending: false, // sorts post by timestamp
  actions: {
    publishBoard: function() {
      let newBoard = this.store.createRecord("board", {
        title: this.get("title"),
        timestamp: new Date().getTime()
      });
      newBoard.save();
      this.set("title", "")
    }
  }
});
