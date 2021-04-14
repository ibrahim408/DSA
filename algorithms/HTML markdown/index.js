function helper(str){
    let result = "";
    const stack = [];
    const lines = str.split('\n');
    let addOpeningPara = true;
    lines.forEach(line => {  
          
        if (addOpeningPara){
            stack.push('<p>');
            addOpeningPara = false;
        } 
        
        if (line === "") {
            stack.push("</p>");
            addOpeningPara = true;
        };
         
        stack.push(line);
    });
  stack.push('');

  stack.forEach(line => {
    if (line === '') result += '\n';
    else result += line;
  });

  console.log(stack);
  console.log(result);
  return 'hi';
};

const input = `This is a paragraph with a soft
line break.

This is another paragraph that has
> Some text that
> is in a
> block quote.

This is another paragraph with a ~~strikethrough~~ word.`;

console.log(helper(input));

