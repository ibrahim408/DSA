const bfs = (node) => { 
    visited[node] = true;
    queue.equeue(node); 
     while (!queue.isEmpty()) {
         let visiting = queue.dequeue();
         console.log(`we visited ${visiting}`)
         for (let j = 0; j < graphAdj[visiting].length; j++) {
            if ((graphAdj[visiting][j] === 1) && (visited[j] === false)) {  
            visited[j] = true;
            queue.equeue(j);
           }
        }
      }
 }


 