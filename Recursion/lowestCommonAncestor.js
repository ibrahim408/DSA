var lowestCommonAncestor = function(root, p, q) {
    
    function helper(node,p,q){
        if (!node || node === p || node === q) return node;
        
        let left = helper(node.left,p,q);
        let right = helper(node.right,p,q);
        
        if (!left && !right)    return null;
        if (!left && right)     return right;
        if (!right && left)     return left;
        if (left && right)      return node;
    };
        
    return helper(root,p,q)
};