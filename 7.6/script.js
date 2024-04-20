let triangle = new Object();
triangle.a = 2;
triangle.b = 3;
triangle.c = 4;
triangle.newA = function () {
    triangle.a = Number(prompt("Введіть сторону а трикутника"));
};
triangle.newB = function () {
    triangle.b = Number(prompt("Введіть сторону b трикутника"));
};
triangle.newC = function () {
    triangle.c = Number(prompt("Введіть сторону c трикутника"));
};
triangle.outputP = function () {
    alert(`Периметр трикутника: ${triangle.a + triangle.b + triangle.c}`);
};
triangle.outputS = function () {
    let p = (triangle.a + triangle.b + triangle.c) / 2;
    alert(`Площа трикутника: ${Math.sqrt(p * (p - triangle.a) * (p - triangle.b) * (p - triangle.c))}`)
};