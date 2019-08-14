import CreatureItems from '../src/ImageItem.js';

const test = QUnit.test;

QUnit.module('image-item-test');

test('image-item-test', assert => {
    // arrange
    const hornedCreatures = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = /*html*/`
  <li>
      <h2 title="A unicorn and a narwhal nuzzling their horns">UniWhal</h2>
      <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
      <p>Number of Horns: 1</p>
  </li>
  `;
    
    // act
    const props = { hornedCreatures: hornedCreatures };
    const imageItem = new CreatureItems(props);
    const html = imageItem.renderHTML();
    
    // assert
    assert.equal(html, expected);
});