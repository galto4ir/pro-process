import Component from '@ember/component';

export default Component.extend({
    actions: {
        addTask() {
            this.sendAction("actionToCall", this);
        }
    }
});
