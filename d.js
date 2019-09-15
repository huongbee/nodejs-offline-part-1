let n = 87531;
let dem = 0;
let r = '';
for (let i = 0; i <= n; i++) {
    if (i % 154 == 0) {
        r += ', ' + i;
        dem += 1; // dem = dem + 1
    }
}
// console.log('tim duoc ' + dem + ' so: ');
console.log(`tim duoc ${dem} so: `);

console.log(r)