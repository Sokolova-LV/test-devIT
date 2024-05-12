function NotificationException() { }
function ErrorException() { }

function primitiveMultiply(a, b) {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    } else if (rand > 0.85) {
        throw new ErrorException();
    } else {
        throw new NotificationException();
    }
};

function wrapMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch (error) {
        if (error instanceof NotificationException) {
            console.log("There is a notification exception caught");
            return wrapMultiply(a, b);
        } else if (error instanceof ErrorException) {
            console.log("There is an error exception caught");
            throw error;
        } else {
            console.log("Unknown error is caught:", error);
            throw error;
        }
    };
};

// Пример:

console.log(wrapMultiply(8, 8));