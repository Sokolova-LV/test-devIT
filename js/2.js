function chunkArray(arr, size) {
    let index = 0;

    return {
        next() {
            if (index >= arr.length) {
                return { value: undefined, done: true };
            }

            const chunk = arr.slice(index, index + size);
            index += size;

            return { value: chunk, done: false };
        }
    };
};

// Пример:

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator.next()); // {value: [1, 2, 3], done: false}
console.log(iterator.next()); // {value: [4, 5, 6], done: false}
console.log(iterator.next()); // {value: [7, 8], done: false}
console.log(iterator.next()); // {value: undefined, done: true}