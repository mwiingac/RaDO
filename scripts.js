document.addEventListener("DOMContentLoaded", () => {
    const mindmapContainer = document.getElementById('mindmap-container');

    const nodes = [
        { id: 'data-node', text: 'Data', x: '40%', y: '60%' },
        { id: 'research-node', text: 'Research', x: '60%', y: '60%' },
        // Add other nodes here
        { id: 'case-104570', text: 'Case 104570 - Investigate adding Matomo to Base Platform', x: '30%', y: '70%' },
        // More nodes...
    ];

    nodes.forEach(node => {
        const newNode = document.createElement('div');
        newNode.classList.add('node');
        newNode.id = node.id;
        newNode.style.left = node.x;
        newNode.style.top = node.y;
        newNode.textContent = node.text;
        mindmapContainer.appendChild(newNode);

        createLine('center-node', node.id);
    });
});

function createLine(fromId, toId) {
    const container = document.getElementById('mindmap-container');
    const fromNode = document.getElementById(fromId);
    const toNode = document.getElementById(toId);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("id", `line-${fromId}-${toId}`);
    line.setAttribute("x1", fromNode.offsetLeft + fromNode.offsetWidth / 2);
    line.setAttribute("y1", fromNode.offsetTop + fromNode.offsetHeight / 2);
    line.setAttribute("x2", toNode.offsetLeft + toNode.offsetWidth / 2);
    line.setAttribute("y2", toNode.offsetTop + toNode.offsetHeight / 2);
    line.classList.add('line');

    const svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgContainer.setAttribute("class", "line-container");
    svgContainer.appendChild(line);
    container.appendChild(svgContainer);
}
