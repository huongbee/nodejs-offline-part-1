function veHinh1(h = 8) {
    for (let y = 1; y <= h; ++y) {
        let d = '';
        for (let x = 1; x <= h; ++x) {
            if (x <= y) {
                d += ' ' + '*';
            }
        }
        console.log(d)
    }
}
veHinh1()

// *        y=1; x=1
// * *      y=2; x=1,2
// * * *    y=3; x=123
// * * * * =>     x<=y
// * * * * *

function veHinh2(h = 8) {
    for (let y = 1; y <= h; ++y) {
        let d = '';
        for (let x = 1; x <= h; ++x) {
            if (x >= h - y + 1) {
                d += ' ' + '*';
            }
            else {
                d += '  '
            }
        }
        console.log(d)
    }
}
veHinh2()
//         * y=1; x=5
//       * * y=2; x=54
//     * * * y=3; x=543
//   * * * * y=4; x=5432
// * * * * * =>    x >= h-y+1