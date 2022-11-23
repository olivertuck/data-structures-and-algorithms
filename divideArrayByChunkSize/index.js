const divideArrayByChunkSize = (array, chunkSize) => {
  const chunks = [];
  let index = 0;

  while (index < array.length) {
    chunks.push(array.slice(index, index + chunkSize));

    index += chunkSize;
  }

  return chunks;
};

module.exports = divideArrayByChunkSize;
