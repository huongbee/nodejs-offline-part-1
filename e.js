let h = 8;
for (let y = 1; y <= 8; ++y) {
    let d = '';
    for (let x = 1; x <= 8; ++x) {
        if (x <= y) {
            d += ' ' + x;
        }
    }
    console.log(d)
}

// *        y=1; x=1
// * *      y=2; x=1,2
// * * *    y=3; x=123
// * * * *
// * * * * *