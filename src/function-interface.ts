interface MathFunction {
  (value1: number, value2: number): number;
}

const tambah: MathFunction = (x: number, y: number): number => {
  return x + y;
};

const kurang: MathFunction = (x: number, y: number): number => {
  return x - y;
};

const kali: MathFunction = (x: number, y: number): number => {
  return x * y;
};

const bagi: MathFunction = (x: number, y: number): number => {
  return x / y;
};

console.info(tambah(33, 77));
console.info(kurang(77, 33));
console.info(kali(33, 77));
console.info(bagi(1000, 77));

