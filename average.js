//Calculemos promedio
const arr = [100, 300, 200, 500, 650];

const caclAverage = (list) => {
  //usando reduce

  const arrSum = list.reduce(function (valor_acumulado = 0, nuevo_elemento) {
    return valor_acumulado + nuevo_elemento;
  });

  //usando for

  //   let arrSum = 0;
  //   for (i = 0; i < arr.length; i++) {
  //     arrSum = arrSum + arr[i];
  //   }

  return arrSum / arr.length; //promedio
};

const average = caclAverage(arr);
