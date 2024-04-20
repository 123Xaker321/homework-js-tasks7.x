function filterSpam(inputStr) {
    if (inputStr.toLowerCase().includes("spam")) {
        let filteredStr = inputStr.replace(/spam/gi, '***');
        return true, alert(filteredStr);
    } else {
        return false, alert(inputStr);
    }
}