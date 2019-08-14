import CreatureItems from './ImageItem.js';
import Component from './Component.js';

class CreatureList extends Component {
    onRender(dom) {
        const creatures = this.props.creatures;
        creatures.forEach(creatures => {
            const props = { creatures: creatures };
            const creatureItem = new CreatureItems(props);
            const creatureItemDOM = creatureItem.renderDOM();
            dom.appendChild(creatureItemDOM);
        });
    }
    renderHTML() {
        return /*html*/`
            <ul class="horned-creatures"></ul>
        `;
    }
}


export default CreatureList;