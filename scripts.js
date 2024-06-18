document.addEventListener("DOMContentLoaded", function() {
    const lines = document.getElementById('lines');

    function connectNodes(node1Id, node2Id) {
        const node1 = document.getElementById(node1Id);
        const node2 = document.getElementById(node2Id);
        
        const pos1 = getCenterPosition(node1);
        const pos2 = getCenterPosition(node2);
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = `M ${pos1.x} ${pos1.y} C ${pos1.x + 50} ${pos1.y}, ${pos2.x - 50} ${pos2.y}, ${pos2.x} ${pos2.y}`;
        path.setAttribute('d', d);
        path.classList.add('line');
        lines.appendChild(path);
    }

    function getCenterPosition(element) {
        const rect = element.getBoundingClientRect();
        const parentPos = document.getElementById('mindmap').getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2 - parentPos.left,
            y: rect.top + rect.height / 2 - parentPos.top
        };
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
