import htmlToDom from '../src/html-to-DOM.js';
const test = QUnit.test;

QUnit.module('html to DOM');

test('HTML to Dom', assert => {
    // arrange
    const html = /*html*/`
        <span>test</span>
        `;
    // act
    const dom = htmlToDom(html);
    // assert
    assert.equal(dom.tagName, 'SPAN');
    assert.equal(dom.textContent, 'test');
});