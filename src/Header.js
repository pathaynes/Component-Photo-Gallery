import Component from './Component.js';

class Header extends Component {
    renderHTML () {
        return /*html*/ `
        <header>
        <img src="./assets/Horn'd-logo.png" id="logo">
        </header>
        `;
    }
}

export default Header;