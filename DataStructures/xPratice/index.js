var sumNumbers = function(root) {
    var totalSum = 0;
    var currentRootToLeafSum = 0;
    
    function sumNumbersTraverse(node){
        if (node.val){
            currentRootToLeafSum += node.val;
        }
        node.left && sumNumbers(node.left);
        node.right && sumNumbers(node.right); 
        if (node.left === null && node.right === null){
            console.log
            totalSum += currentRootToLeafSum;
            currentRootToLeafSum  = currentRootToLeafSum - node.val;            
        }

    }
    sumNumbersTraverse(root);
    return totalSum;
};