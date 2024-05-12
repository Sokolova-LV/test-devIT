async function bulkRun(funcArray) {
    const results = [];

    for (const [func, args] of funcArray) {
        const result = await new Promise(resolve => {
            func(...args, (...resultArgs) => {
                resolve(resultArgs.length === 1
                    ? resultArgs[0]
                    : resultArgs
                );
            });
        });

        results.push(result);
    }

    return results;
};

// Пример:

const f1 = (cb) => { cb(1); };
const f2 = (a, cb) => { cb(a); };
const f3 = (a, b, cb) => { setTimeout(() => cb([a, b]), 1000); };

bulkRun([
    [f1, []],
    [f2, [2]],
    [f3, [3, 4]]
]).then(console.log);

// Output: [1, 2, [3, 4]];