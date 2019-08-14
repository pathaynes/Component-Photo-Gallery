import Component from './Component.js';

class FilterCreatures extends Component {
    
    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        const creatures = this.props.creatures;
        const types = getUniqueTypes(creatures);
        const optionsHTML = renderOptionsHTML(types);

        return /*html*/`
        <select id="drop-down">
            <option value="all">ALL</option>
            ${optionsHTML}
        </select>
        `;
    }
}

function getUniqueTypes(creatures) {
    const hornsArray = [];
    creatures.forEach(creatures => {
        if(!hornsArray.includes(creatures.horns)) {
            hornsArray.push(creatures.horns);
        }
    });
    hornsArray.sort();
    return hornsArray;
}

function renderOptionsHTML(horns) {
    const optionsArray = horns.map(horns => {
        return /*html*/`
        <option value="${horns}">${horns}</option>
        `;
    });
    return optionsArray.join('');
}

export default FilterCreatures;