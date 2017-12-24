import Component from "@ember/component";

export default Component.extend({
  actions: {
    addProcess: function() {
      //   console.log(this.get("id"));
      let process = this.store.createRecord("process", {
        name: this.get("name")
      });
      let board = this.store.find("board", this.get("id"));
      board.get("process").addObject(process);
      process.save().then(() => {
        return board.save();
      });
    }
  }
});
