
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ignore-pro', 'helper:ignore-pro', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{ignore-pro inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

