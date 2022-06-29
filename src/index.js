module.exports = function reverse(n) {
    n = Math.abs(n);
    str = String(n);
    mus = str.split("");
    musReverse = mus.reverse();
    return Number(musReverse.join(''));
}
