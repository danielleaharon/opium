function getLangClass(className, langIndex) {
    return className + ' ' + className + '-' + (langIndex === 0 ? 'eng' : 'heb');
}

exports.getLangClass = getLangClass;