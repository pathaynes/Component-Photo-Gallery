import renderImage from '../src/render-image.js';

const test = QUnit.test;

QUnit.module('Render Images');

test('testing render images', assert => {
    // arrange
    const hornedCreatures = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 2
    };

    const expected = /*html*/`
        <li>
            <h2 title="A unicorn and a narwhal nuzzling their horns">UniWhal</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
            <p>Number of Horns: 2</p>
        </li>
        `;

    // act
    const html = renderImage(hornedCreatures);
    
    // assert
    assert.equal(html, expected);
});