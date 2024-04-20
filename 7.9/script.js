let maxWidthOfStr = 256;
function setMaxWidthOfString(value) {
    maxWidthOfStr = value;
}
function normalizeString(str) {
    let spaceIndex = maxWidthOfStr;
    let strSymbols = str.substring(0, maxWidthOfStr).split("");
    if (strSymbols[strSymbols.length - 1] != " ") {
        for (let i = strSymbols.length - 1; i > 0; i--) {
            if (strSymbols[i] == " ") {
                spaceIndex = i;
                break;
            }
        }
    }
    alert(str.substring(0, spaceIndex) + "...")
}