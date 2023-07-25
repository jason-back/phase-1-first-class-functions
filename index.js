

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction () {
    return (function a(){
        console.log("hi")
    })
}

function returnsAnAnonymousFunction () {
    return (function() {
        return "Hi"
    })
}

console.log(returnsANamedFunction())
console.log(returnsAnAnonymousFunction())