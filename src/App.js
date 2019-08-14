import Component from './Component.js';
import FilterCreatures from './FilterImages.js';
import hornedCreatures from '../data/hornedCreatures.js';
import CreatureList from './ImageList.js';
import Header from './Header.js';

class App extends Component {

    onRender(dom) {

        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            hornedCreatures: hornedCreatures
        };

        const creatureList = new CreatureList(props);
        const creatureListDOM = creatureList.renderDOM();
        const listArea = dom.querySelector('.list');
        listArea.appendChild(creatureListDOM);
        
        const filterCreaturesProps = {
            hornedCreatures: hornedCreatures,
            onFilter: (creatureHorns) => {
                let filteredCreatures;
                // eslint-disable-next-line 
                if(creatureHorns == 'all') {
                    filteredCreatures = hornedCreatures;
                }
                else {
                    filteredCreatures = hornedCreatures.filter(creature => {
                      // eslint-disable-next-line 
                        return creature.horns == creatureHorns;
                    });
                }  
                const updateProps = { hornedCreatures: filteredCreatures };
                creatureList.update(updateProps);
            }
        };
        const filterCreatures = new FilterCreatures(filterCreaturesProps);
        const filterCreaturesDOM = filterCreatures.renderDOM();

        const selectSection = dom.querySelector('.select-container');
        selectSection.appendChild(filterCreaturesDOM);
    }

    renderHTML() {
        return /*html*/`

    <div>
      <main class="grid-container">
        <div class="select-container"></div>
        <div class="list"></div> 
      </main>
    </div>
    `;
    }
}

export default App;