var bilu;
function setup() {
    createCanvas(windowWidth, windowHeight);
    bilu = new Et("green", "black", "green");
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background("pink");
    bilu.draw();
}
var Et = (function () {
    function Et(corHead, corEyes, corBody) {
        this.corBody = corBody;
        this.corEyes = corEyes;
        this.corHead = corHead;
    }
    Et.prototype.draw = function () {
        ellipseMode("center");
        rectMode("center");
        fill(this.corBody);
        rect(240, 145, 20, 100);
        fill(this.corHead);
        ellipse(240, 115, 60, 60);
        fill(this.corEyes);
        ellipse(220, 115, 16, 32);
        ellipse(260, 115, 16, 32);
        line(230, 150, 220, 180);
        line(250, 150, 260, 180);
        line(230, 195, 220, 205);
        line(250, 195, 260, 205);
    };
    return Et;
}());
//# sourceMappingURL=build.js.map