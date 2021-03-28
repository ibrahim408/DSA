const BFS = () => {
    let visited = [], 
    queue = [], 
    current = 
    this.root;

    queue.push(current);
    while(queue.length){
        current = queue.shift();
        visited.push(current.val);

        if( current.left) queue.push(current.left);
        if( current.right) queue.push(current.right);
    }

    return visited;
}


const breadthFirstExample = (startingNode, callback) {
    const queue = [startingNode];

    while(queue.length){
        const node = queue.shift();
        callback(node);
        queue.push(node.children);
    }
}

const breadthFirstExampleTwo = (node,cb) => {
    const queue = [node];

    while(queue.length){
        const next = [];
        for (var node of queue){
            cb(node);
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        current = next;
    }
}

breadthFirst(root, function(node){
    console.log(node.value)
})
