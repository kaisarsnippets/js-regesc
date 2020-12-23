// RegExp chars escape
function regesc(str) {
    var rx = /[|\\{}()[\]^$+*?.-]/gm;
    return str.replace(rx, '\\$&');
}
