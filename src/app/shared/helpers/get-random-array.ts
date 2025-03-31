export const getRandomElements = (array: any[], n: number): any[] => {
  if (n > array.length) {
    throw new Error(
      'El número de elementos solicitados es mayor que el tamaño del array.'
    );
  }

  return [...array] // Copia el array original para no modificarlo
    .sort(() => Math.random() - 0.5) // Mezcla los elementos aleatoriamente
    .slice(0, n); // Toma los primeros `n` elementos
};
