console.log("app running......");
// console.log(navigator);
if ("serviceWorker" in navigator) {
    navigator
        .serviceWorker
        .register("./sw.js")
        .then(function () {
            console.log("welcome to the world of service");
        })
        .catch(function () {
            console.log("something went wrong");
        })
} else {
    console.log("serviece worker not suported");
}