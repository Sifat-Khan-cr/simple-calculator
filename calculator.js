function getId(value) {
    return document.getElementById(value);
}

function getData(val) {
    return document.getElementById(val).value;
}
function getDataS(val) {
    return document.getElementById(val).innerText;
}
function setData(val) {
    document.getElementById('result').innerText = val.toFixed(2);
}
getId("result").innerText = "0.00";




getId("plus").addEventListener('click', function () {
    const firstData = parseFloat(getData("firstData"));
    const secData = parseFloat(getData("secData"));
    const result = firstData + secData;
    setData(result);
    getId('firstData').value = "";
    getId('secData').value = "";

})
getId("minus").addEventListener('click', function () {
    const firstData = parseFloat(getData("firstData"));
    const secData = parseFloat(getData("secData"));
    const result = firstData - secData;
    setData(result);
    getId('firstData').value = "";
    getId('secData').value = "";

})
getId("multi").addEventListener('click', function () {
    const firstData = parseFloat(getData("firstData"));
    const secData = parseFloat(getData("secData"));
    const result = firstData * secData;
    setData(result);
    getId('firstData').value = "";
    getId('secData').value = "";

})
getId("division").addEventListener('click', function () {
    const firstData = parseFloat(getData("firstData"));
    const secData = parseFloat(getData("secData"));
    if (firstData == 0) {
        alert('zero cannot divide');
        getId('firstData').value = "";
        getId('secData').value = "";
        return;
    }
    const result = firstData / secData;
    setData(result);
    getId('firstData').value = "";
    getId('secData').value = "";

})


