export default function renderImage(hornedCreatures) {
    const html = /*html*/`
        <li>
            <h2 title="${hornedCreatures.description}">${hornedCreatures.title}</h2>
            <img src="${hornedCreatures.url}">
            <p>Number of Horns: ${hornedCreatures.horns}</p>
        </li>
        `;
    return html;
}