import CreatureItems from './ImageItem.js';
import Component from './Component.js';

class CreatureList extends Component {
    onRender(dom) {
        const hornedCreatures = this.props.hornedCreatures;
        hornedCreatures.forEach(hornedCreatures => {
            const props = { hornedCreatures: hornedCreatures };
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