// let orders = [
//   {
//     id: 1,
//     product: "iphone",
//     price: "80,000",
//   },
//   {
//     id: 2,
//     product: "Samsung",
//     price: "70,000",
//   },
// ];

// let products = orders.find((p) => p.id == 2);

// console.log(products.product);
// console.log(products);

// function aneGram(str1, str2) {
//   if(str1.length != str2.length){
//     return false;
//   }

//   for(let char1 of str1){

//   }
// }

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  //here i create a charMap or charcount
  const charCount = {}; //here charCount will have smae space as str1 so, space complexity O(n)
  for (let char of str1) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    //here if my char = undefined then it put 1 like t:1, r:1
  }
  for (let char of str2) {
    //if does'nt include char of str2 then false
    if (!charCount[char]) {
      return false;
    } //here char-- if was there
    charCount[char]--;
  }
  return true;
}
//Time complexity: O(n)
//Space Complexity: O(n)
console.log(isAnagram("traingle", "integral"));

// let check = { name: "raunak" };

// let res = !check.name;

// console.log(res)