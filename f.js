/**
 * cho start = 0 ; end = 10
 * Viet function thuc hien cac chuc nang sau:
 * 1. In ra cac so chan
 * 2. In ra cac so le
 * 3. In ra so chia 4 dư 3
 * 4. In ra so chia 4 dư 2
 *
 */

function insoChan(n = 10) {
    for (let i = 0; i <= n; ++i) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
function insoLe(n = 10) {
    for (let i = 0; i <= n; ++i) {
        if (i % 2 === 1) {
            console.log(i)
        }
    }
}
function insoChia4Du3(n = 10) {
    for (let i = 0; i <= n; ++i) {
        if (i % 4 === 3) {
            console.log(i)
        }
    }
}

function inso(n, fn) {
    for (let i = 0; i <= n; ++i) {
        let dk = fn(i) // i % 2 === 0
        if (dk) {
            console.log(i)
        }
    }
}
// function KTsoChan(x) { // a: soChia, b: soDu
//     if (x % 2 == 0)
//         return true;
// }
// function KTsoLe(x) { 
//     if (x % 2 == 1)
//         return true;
// }

// inso(10, function (x) {
//     if (x % 9 == 8)
//         return true;
// })


// inso(10, x => x % 2 == 0)

