var bilu;
var letra;
function setup() {
    createCanvas(windowWidth, windowHeight);
    bilu = new Et("green", "black", "green");
    letra = new L();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background("pink");
    letra.draw();
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
var L = (function () {
    function L() {
    }
    L.prototype.draw = function () {
        var casostring = 'D';
        var ni = 0;
        var vezes = 0;
        switch (casostring) {
            case 'A':
                var np = 8;
                var ni = 3;
                var matrizPontos = [[250, 250, 0, 1],
                    [270, 50, 0, 1],
                    [310, 50, 0, 1],
                    [330, 250, 0, 1],
                    [310, 250, 0, 1],
                    [305, 200, 0, 1],
                    [275, 200, 0, 1],
                    [270, 250, 0, 1],
                    [280, 180, 0, 1],
                    [290, 100, 0, 1],
                    [300, 180, 0, 1]];
                break;
            case 'B':
                var np = 9;
                var ni = 4;
                var vezes = 2;
                var matrizPontos = [[250, 250, 0, 1],
                    [250, 50, 0, 1],
                    [300, 50, 0, 1],
                    [330, 70, 0, 1],
                    [330, 100, 0, 1],
                    [300, 150, 0, 1],
                    [330, 180, 0, 1],
                    [330, 230, 0, 1],
                    [300, 250, 0, 1],
                    [270, 220, 0, 1],
                    [270, 190, 0, 1],
                    [300, 190, 0, 1],
                    [300, 220, 0, 1],
                    [270, 80, 0, 1],
                    [270, 110, 0, 1],
                    [300, 110, 0, 1],
                    [300, 80, 0, 1]];
                break;
            case 'C':
                var np = 8;
                var matrizPontos = [[250, 250, 0, 1],
                    [250, 50, 0, 1],
                    [330, 50, 0, 1],
                    [330, 70, 0, 1],
                    [270, 70, 0, 1],
                    [270, 230, 0, 1],
                    [330, 230, 0, 1],
                    [330, 250, 0, 1]];
                break;
            case 'D':
                var np = 6;
                var ni = 6;
                var matrizPontos = [[250, 250, 0, 1],
                    [250, 50, 0, 1],
                    [310, 50, 0, 1],
                    [330, 70, 0, 1],
                    [330, 230, 0, 1],
                    [310, 250, 0, 1],
                    [280, 230, 0, 1],
                    [280, 70, 0, 1],
                    [300, 70, 0, 1],
                    [310, 90, 0, 1],
                    [310, 210, 0, 1],
                    [300, 230, 0, 1]];
                break;
            case 'E':
                var np = 12;
                var matrizPontos = [[250, 250, 0, 1],
                    [250, 50, 0, 1],
                    [330, 50, 0, 1],
                    [330, 70, 0, 1],
                    [270, 70, 0, 1],
                    [270, 130, 0, 1],
                    [330, 130, 0, 1],
                    [330, 150, 0, 1],
                    [270, 150, 0, 1],
                    [270, 230, 0, 1],
                    [330, 230, 0, 1],
                    [330, 250, 0, 1]];
                break;
            case 'F':
                var np = 10;
                var matrizPontos = [[250, 250, 0, 1],
                    [250, 50, 0, 1],
                    [330, 50, 0, 1],
                    [330, 70, 0, 1],
                    [270, 70, 0, 1],
                    [270, 130, 0, 1],
                    [330, 130, 0, 1],
                    [330, 150, 0, 1],
                    [270, 150, 0, 1],
                    [270, 250, 0, 1]];
                break;
            case 'G': break;
            case 'H':
                var np = 12;
                var matrizPontos = [[250, 250, 0, 1],
                    [250, 50, 0, 1],
                    [270, 50, 0, 1],
                    [270, 140, 0, 1],
                    [310, 140, 0, 1],
                    [310, 50, 0, 1],
                    [330, 50, 0, 1],
                    [330, 250, 0, 1],
                    [310, 250, 0, 1],
                    [310, 160, 0, 1],
                    [270, 160, 0, 1],
                    [270, 250, 0, 1]];
                break;
            case 'I':
                var np = 4;
                var matrizPontos = [[250, 250, 0, 1],
                    [250, 50, 0, 1],
                    [270, 50, 0, 1],
                    [270, 250, 0, 1]];
                break;
            case 'J':
                var np = 10;
                var matrizPontos = [[250, 250, 0, 1],
                    [230, 230, 0, 1],
                    [220, 200, 0, 1],
                    [250, 200, 0, 1],
                    [255, 220, 0, 1],
                    [280, 220, 0, 1],
                    [280, 50, 0, 1],
                    [310, 50, 0, 1],
                    [310, 230, 0, 1],
                    [290, 250, 0, 1]];
                break;
            case 'K':
                var np = 12;
                var matrizPontos = [[250, 250, 0, 1],
                    [250, 50, 0, 1],
                    [270, 50, 0, 1],
                    [270, 150, 0, 1],
                    [310, 50, 0, 1],
                    [330, 50, 0, 1],
                    [295, 150, 0, 1],
                    [330, 250, 0, 1],
                    [310, 250, 0, 1],
                    [285, 180, 0, 1],
                    [270, 200, 0, 1],
                    [270, 250, 0, 1]];
                break;
            case 'L':
                var np = 6;
                var matrizPontos = [[250, 250, 0, 1],
                    [250, 50, 0, 1],
                    [270, 50, 0, 1],
                    [270, 230, 0, 1],
                    [330, 230, 0, 1],
                    [330, 250, 0, 1]];
                break;
            case 'M':
                var np = 13;
                var matrizPontos = [[250, 250, 0, 1],
                    [250, 50, 0, 1],
                    [280, 50, 0, 1],
                    [290, 180, 0, 1],
                    [300, 50, 0, 1],
                    [330, 50, 0, 1],
                    [330, 250, 0, 1],
                    [310, 250, 0, 1],
                    [310, 120, 0, 1],
                    [300, 250, 0, 1],
                    [280, 250, 0, 1],
                    [270, 120, 0, 1],
                    [270, 250, 0, 1]];
                break;
            case 'N':
                var np = 10;
                var matrizPontos = [[250, 250, 0, 1],
                    [250, 50, 0, 1],
                    [270, 50, 0, 1],
                    [310, 180, 0, 1],
                    [310, 50, 0, 1],
                    [330, 50, 0, 1],
                    [330, 250, 0, 1],
                    [310, 250, 0, 1],
                    [270, 120, 0, 1],
                    [270, 250, 0, 1]];
                break;
            case 'O':
                var np = 8;
                var ni = 8;
                var matrizPontos = [[250, 250, 0, 1],
                    [230, 220, 0, 1],
                    [230, 80, 0, 1],
                    [250, 50, 0, 1],
                    [290, 50, 0, 1],
                    [310, 80, 0, 1],
                    [310, 220, 0, 1],
                    [290, 250, 0, 1],
                    [260, 230, 0, 1],
                    [250, 210, 0, 1],
                    [250, 90, 0, 1],
                    [260, 70, 0, 1],
                    [280, 70, 0, 1],
                    [290, 90, 0, 1],
                    [290, 210, 0, 1],
                    [280, 230, 0, 1]];
                break;
            case 'P': break;
            case 'Q': break;
            case 'R': break;
            case 'S': break;
            case 'T':
                var np = 8;
                var matrizPontos = [[250, 250, 0, 1],
                    [250, 70, 0, 1],
                    [220, 70, 0, 1],
                    [220, 50, 0, 1],
                    [300, 50, 0, 1],
                    [300, 70, 0, 1],
                    [270, 70, 0, 1],
                    [270, 250, 0, 1]];
                break;
            case 'U': break;
            case 'V':
                var np = 7;
                var matrizPontos = [[250, 250, 0, 1],
                    [230, 50, 0, 1],
                    [250, 50, 0, 1],
                    [265, 200, 0, 1],
                    [280, 50, 0, 1],
                    [300, 50, 0, 1],
                    [280, 250, 0, 1]];
                break;
            case 'W':
                var np = 13;
                var matrizPontos = [[250, 250, 0, 1],
                    [230, 50, 0, 1],
                    [250, 50, 0, 1],
                    [265, 200, 0, 1],
                    [280, 50, 0, 1],
                    [300, 50, 0, 1],
                    [315, 200, 0, 1],
                    [330, 50, 0, 1],
                    [350, 50, 0, 1],
                    [330, 250, 0, 1],
                    [300, 250, 0, 1],
                    [290, 150, 0, 1],
                    [280, 250, 0, 1]];
                break;
            case 'X':
                var np = 12;
                var matrizPontos = [[250, 250, 0, 1],
                    [280, 150, 0, 1],
                    [250, 50, 0, 1],
                    [270, 50, 0, 1],
                    [290, 110, 0, 1],
                    [310, 50, 0, 1],
                    [330, 50, 0, 1],
                    [300, 150, 0, 1],
                    [330, 250, 0, 1],
                    [310, 250, 0, 1],
                    [290, 190, 0, 1],
                    [270, 250, 0, 1]];
                break;
            case 'Y':
                var np = 9;
                var matrizPontos = [[250, 250, 0, 1],
                    [250, 150, 0, 1],
                    [220, 50, 0, 1],
                    [240, 50, 0, 1],
                    [260, 110, 0, 1],
                    [280, 50, 0, 1],
                    [300, 50, 0, 1],
                    [270, 150, 0, 1],
                    [270, 250, 0, 1]];
                break;
            case 'Z':
                var np = 10;
                var matrizPontos = [[250, 250, 0, 1],
                    [250, 230, 0, 1],
                    [300, 70, 0, 1],
                    [250, 70, 0, 1],
                    [250, 50, 0, 1],
                    [330, 50, 0, 1],
                    [330, 70, 0, 1],
                    [280, 230, 0, 1],
                    [330, 230, 0, 1],
                    [330, 250, 0, 1]];
                break;
        }
        var passo;
        for (passo = 0; passo < (np - 1); passo++) {
            line(matrizPontos[passo][0], matrizPontos[passo][1], matrizPontos[passo + 1][0], matrizPontos[passo + 1][1]);
        }
        line(matrizPontos[passo][0], matrizPontos[passo][1], matrizPontos[0][0], matrizPontos[0][1]);
        if (ni != 0) {
            var passo;
            for (passo = np; passo < (np + ni - 1); passo++) {
                line(matrizPontos[passo][0], matrizPontos[passo][1], matrizPontos[passo + 1][0], matrizPontos[passo + 1][1]);
            }
            line(matrizPontos[passo][0], matrizPontos[passo][1], matrizPontos[np][0], matrizPontos[np][1]);
            if (vezes != 0) {
                var passo;
                for (passo = np + ni; passo < (np + 2 * ni - 1); passo++) {
                    line(matrizPontos[passo][0], matrizPontos[passo][1], matrizPontos[passo + 1][0], matrizPontos[passo + 1][1]);
                }
                line(matrizPontos[passo][0], matrizPontos[passo][1], matrizPontos[np + ni][0], matrizPontos[np + ni][1]);
            }
        }
    };
    return L;
}());
//# sourceMappingURL=build.js.map