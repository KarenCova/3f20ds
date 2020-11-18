function Pascal(n) {
    r =[[1], [1, 1]];
    for (let i=3; i <= n; i++) {
        r.push(
            [...Array(i)].map((el, l, x) =>
                l==0 || l == x.length -1 ? 1 : r[i-2][l-1]+r [i-2][l]));
    }
    return r;
} console.log(Pascal(7));