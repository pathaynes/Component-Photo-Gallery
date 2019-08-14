import Component from '../src/Component.js';

class CreatureItems extends Component {
    renderHTML() {
        const hornedCreatures = this.props.creatures;
        return /*html*/`
  <li>
      <h2 title="${hornedCreatures.description}">${hornedCreatures.title}</h2>
      <img src="${hornedCreatures.url}">
      <p>Number of Horns: ${hornedCreatures.horns}</p>
  </li>
  `;
    }
}
export default CreatureItems;