document.addEventListener("DOMContentLoaded", function() {
    const lines = document.getElementById('lines');

    function connectNodes(node1Id, node2Id) {
        const node1 = document.getElementById(node1Id);
        const node2 = document.getElementById(node2Id);
        
        const pos1 = node1.getBoundingClientRect();
        const pos2 = node2.getBoundingClientRect();
        
        const x1 = pos1.left + pos1.width / 2;
        const y1 = pos1.top + pos1.height / 2;
        const x2 = pos2.left + pos2.width / 2;
        const y2 = pos2.top + pos2.height / 2;
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.classList.add('line');
        
        lines.appendChild(line);
    }

    // Connect RaDO to Research and Data
    connectNodes('rado', 'research');
    connectNodes('rado', 'data');
    
    // Connect Research to its nodes
    connectNodes('research', 'project-open');
    connectNodes('research', 'survey-dev');
    connectNodes('research', 'survey-prep');
    connectNodes('research', 'survey');
    connectNodes('research', 'post-survey');
    connectNodes('research', 'project-close');
    
    // Connect Data to its nodes
    connectNodes('data', 'collection');
    connectNodes('data', 'management');
    connectNodes('data', 'cleaning');
    connectNodes('data', 'sharing');
    connectNodes('data', 'analysis');
    connectNodes('data', 'reporting');
});
