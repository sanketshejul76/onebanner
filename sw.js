// console.log(self);
self.addEventListener("install", function (event) {
    console.log("Installing...", event);
})
self.addEventListener("activate", function (event) {
    console.log("Activating.....", event);
})
self.addEventListener("fetch", function (event) {
    console.log("fetching.....", event);
})