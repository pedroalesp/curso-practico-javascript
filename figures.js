//Cuadrado

function perimetroCuadrado(lados) {
  return lados * lados;
}

function areaCuadrada(lados) {
  return lados * 4;
}

//Triangulo

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function alturaTriangulo(a, b, c) {
  if (a == b) {
    if (b !== c) {
      alert("Its isosceless");
    } else {
      alert("Its not isosceless");
    }
  } else if (b !== c) {
    alert("Its not isosceless");
  } else {
    alert("Its isosceless");
  }
}
//Círculo

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * pi;
}
function areaCirculo(radio) {
  return pi * (radio * radio);
}

//____________Integración en HTML__________

//Square

const calcSquareArea = () => {
  const inputSquare = document.getElementById("SquareInput");
  const valueSquare = inputSquare.value;
  const squareArea = areaCuadrada(valueSquare);
  alert(`The area of the square is ${squareArea}`);
};

const calcSquarePerimeter = () => {
  const inputSquare = document.getElementById("SquareInput");
  const valueSquare = inputSquare.value;
  const squarePerimeter = perimetroCuadrado(valueSquare);
  alert(`The perimeter of the square is ${squarePerimeter}`);
};

//Triangle

const calcTrianglePerimeter = () => {
  const inputTriangle = {
    side1: document.getElementById("TriangleInputSide1").value,
    side2: document.getElementById("TriangleInputSide2").value,
    base: document.getElementById("TriangleInputBase").value,
  };

  const trianglePerimeter = perimetroTriangulo(
    parseInt(inputTriangle.side1),
    parseInt(inputTriangle.side2),
    parseInt(inputTriangle.base)
  );
  alert(`The perimeter of the triangle is ${trianglePerimeter}`);
};

const calcTriangleArea = () => {
  const inputTriangle = {
    height: document.getElementById("TriangleInputHeigth").value,
    base: document.getElementById("TriangleInputBase").value,
  };

  const triangleArea = areaTriangulo(
    parseInt(inputTriangle.height),
    parseInt(inputTriangle.base)
  );
  alert(`The area of the triangle is ${triangleArea}`);
};

const caclTriangleHeight = () => {
  const inputTriangle = {
    side1: document.getElementById("TriangleInputSide1").value,
    side2: document.getElementById("TriangleInputSide2").value,
    base: document.getElementById("TriangleInputBase").value,
  };
  const triangleHeight = alturaTriangulo(
    parseInt(inputTriangle.side1),
    parseInt(inputTriangle.side2),
    parseInt(inputTriangle.base)
  );
};

//Circle
const pi = Math.PI;

const calcCircleArea = () => {
  const inputCircle = document.getElementById("CircleInput");
  const valueCircle = inputCircle.value;
  const circleArea = areaCirculo(valueCircle);
  alert(`The area of the circle is ${circleArea}`);
};

const calcCirclePerimeter = () => {
  const inputCircle = document.getElementById("CircleInput");
  const valueCircle = inputCircle.value;
  const circleArea = perimetroCirculo(valueCircle);
  alert(`The area of the circle is ${circleArea}`);
};
