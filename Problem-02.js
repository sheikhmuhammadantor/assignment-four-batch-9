let name = 'Jhankar';

function checkName(name) {
    if (typeof name === 'string') {
        const vowels = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        return vowels.includes(name[name.length - 1]) ? 'Good Name' : 'Bad Name';
    } else return 'Invalid Name';
}

console.log(checkName(name));
