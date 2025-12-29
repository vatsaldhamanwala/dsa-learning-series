//hashmap using object {} ------------------------

// initialization
const map: { [key: string]: number } = {}; // key -> string , value -> number

//insertion
map['a'] = 10;
map['b'] = 20;
console.log('🚀 ~ map:', map);

//get value
console.log('🚀 ~ map:', map['a']);

//check if key is exist
console.log('a' in map);

//updation
map['a'] = 40;
console.log('🚀 ~ updated map value:', map);

//deletion
delete map['a'];
console.log('🚀 ~ map value after deletion:', map);

//using loops
for (let key in map) {
  console.log(key, map[key]);
}

//hashmap using Map()--------------------------------

// initialization
const mapFunction = new Map<string, number>();

//insertion will happen using set
mapFunction.set('a', 10);
mapFunction.set('b', 20);
mapFunction.set('c', 30);

console.log('🚀 ~ mapFunction:', mapFunction);

//get value using get()
console.log('🚀 ~ mapFunction:', mapFunction.get('a')); // 10
console.log('🚀 ~ mapFunction:', mapFunction.get('x')); // undefined

//check if key is exist using has()
console.log('🚀 ~ mapFunction:', mapFunction.has('a')); // true
console.log('🚀 ~ mapFunction:', mapFunction.has('x')); // false

//updation
mapFunction.set('a', 30);
console.log('🚀 ~ updated mapFunction value:', mapFunction);

//deletion
mapFunction.delete('a');
console.log('🚀 ~ mapFunction value after deletion:', mapFunction);

//delete every thing
mapFunction.clear();

//using loops
for (let [key, value] of mapFunction) {
  console.log(key, value);
}

//access only keys in mapFunction using keys()
for (let key of mapFunction.keys()) {
  console.log(key);
}

//access only vales in mapFunction using values()
for (let value of mapFunction.values()) {
  console.log(value);
}
