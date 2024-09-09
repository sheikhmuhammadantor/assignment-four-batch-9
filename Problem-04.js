let obj = { name: "kolimuddin", birthYear: 1999, siteName: "google" };

function password(obj) {
    if (typeof obj === 'object' &&
        !Array.isArray(obj) &&
        obj.name !== undefined &&
        obj.birthYear !== undefined &&
        obj.siteName !== undefined &&
        obj.birthYear.toString().length === 4
    ) {
        return `${obj['siteName'][0].toUpperCase() + obj['siteName'].slice(1)}#${obj['name']}@${obj['birthYear']}`;
    } else return 'Invalid';
}


console.log(password(obj));
