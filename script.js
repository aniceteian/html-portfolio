let grade = {
    math: 85,
    english: 87,
    filipino: 89,
    science: 90,
    mapeh: 86,
};

let average = 0;

for(let k in grade){
    console.log(`${k}: ${grade[k]}`);
    average += grade[k];
}


average /= Object.keys(grade).length;
console.log('');
console.log(`Average: ${average}`);