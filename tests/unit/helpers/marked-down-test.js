import { markedDown } from 'dummy/helpers/marked-down';
import { module, test } from 'qunit';

module('Unit | Helper | marked down');

test('when param is null', function (assert) {
  assert.equal(markedDown(null), '');
});

test('when empty array param', function (assert) {
  assert.equal(markedDown([]), '');
});

test('when src is just some text', function (assert) {
  assert.equal(markedDown(['123']).toHTML(), '<p>123</p>');
});

test('when hash is null', function (assert) {
  assert.equal(markedDown(['123'], null).toHTML(), '<p>123</p>');
});

test('when src is a number', function (assert) {
  assert.equal(markedDown([456]), '<p>456</p>');
});

test('when src is a boolean', function (assert) {
  assert.equal(markedDown([true]), '<p>true</p>');
});

test('when src is empty string', function (assert) {
  assert.equal(markedDown(['']), '');
});

test('when src is markdown', function (assert) {
  assert.equal(markedDown(['## Heading 2']).toHTML(), '<h2 id="heading2">Heading 2</h2>');
});

test('when passing markdown option to helper', function (assert) {
  assert.equal(markedDown(['## Heading 2'], {noHeaderId: true}).toHTML(), '<h2>Heading 2</h2>');
});

test('when passing an invalid markdown option to helper', function (assert) {
  assert.equal(markedDown(['## Heading 2'], {noHeaderId: true, malarkey: true}).toHTML(), '<h2>Heading 2</h2>');
});

