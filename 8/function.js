// 1. Function Declaration
function calculateAreaDeclaration(width, height) {
    return width * height;
  }
  const area1 = calculateAreaDeclaration(5, 10);
  console.log("Area (Function Declaration):", area1);
  
  // 2. Function Expression
  const calculateAreaExpression = function (width, height) {
    return width * height;
  };
  const area2 = calculateAreaExpression(5, 10);
  console.log("Area (Function Expression):", area2);
  
  // 3. Arrow Function
  const calculateAreaArrow = (width, height) => width * height;
  const area3 = calculateAreaArrow(5, 10);
  console.log("Area (Arrow Function):", area3);
  