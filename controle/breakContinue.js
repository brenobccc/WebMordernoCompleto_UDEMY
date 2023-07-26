const nums = [1, 2, 3]

for (x in nums) {
    if (x == 5) break;
    console.log(`x = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue;
    }
    console.log(`y = ${nums[y]}`)
}


externo:
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo;
    }
}