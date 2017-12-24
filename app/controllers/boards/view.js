import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    show: function(task) {
      $("#" + task).slideToggle();
    },
    addProcess: function() {
      let process = this.store.createRecord("process", {
        name: this.get("name")
      });

      let board = this.get("model");
      board.get("processes").addObject(process);

      process.save().then(function() {
        return board.save();
      });

      this.set("name", "");
    },
    addTask: function(task) {
      let newTask = this.store.createRecord("task", {
        title: task.get("title")
      });

      let process = task.get("process");
      process.get("tasks").addObject(newTask);

      newTask.save().then(function() {
        task.set("title", "");
        return process.save();
      });
    },

    movingTask: function(task, currentProcess, nextProcess) {
      let newTask = this.store.createRecord("task", {
        title: task.get("title")
      });

      nextProcess.get("tasks").addObject(newTask);
      nextProcess.save();
      task.destroyRecord().then(function() {
        currentProcess.save();
      });
    },

    removeBoard: function(board) {
      if (confirm("Та устгахдаа итгэлтэй байна уу?")) {
        let self = this;
        board.destroyRecord().then(function() {
          self.transitionToRoute("/");
        });
      }
    },
    removeProcess: function(process, board) {
      if (confirm("Та устгахдаа итгэлтэй байна уу?")) {
        process.destroyRecord().then(function() {
          board.save();
        });
      }
    },
    removeTask: function(task, process) {
      if (confirm("Та устгахдаа итгэлтэй байна уу?")) {
        task.destroyRecord().then(function() {
          process.save();
        });
      }
    }
  }
});
