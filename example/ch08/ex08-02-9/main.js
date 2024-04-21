let arr = [{ name: "Suzanne" }, { name: "Jim" },
            { name: "Trevor" }, { name: "Amanda" }];
console.log(arr);
arr.sort((a, b) => a.name > b.name ? 1 : (a.name === b.name ? 0 : -1));
console.log("-------");
console.log(arr);

arr.sort((a, b) => a.name[1] < b.name[1] ? 1 : (a.name[1] === b.name[1] ? 0 : -1));
console.log("------");
console.log(arr);