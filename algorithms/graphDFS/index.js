const dfs = (node) => { 
    stack.push(node);
    while (!stack.isEmpty()) {
       node = stack.pop();
       if (visited[node] == false) {
          visited[node] = true;
          console.log(`we visited ${node}`)
          for (let j = 0; j < graphAdj[node].length; j++) {
             if (graphAdj[node][j] === 1){
                 stack.push(j);
              }
           }
      }
    }
}