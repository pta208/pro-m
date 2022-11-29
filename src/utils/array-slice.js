export const arraySplitting = (input, size = 6) => {
  const pages = Math.ceil(input.length / size);

  const res = [];
  for (let i = 0; i < pages; i++) {
    res.push(input.slice(size * i, size * (i + 1)));
  }
  return res;
};
