const clockwiseIds = ["btn1", "btn2", "btn3", "btn6", "btn9", "btn8", "btn7", "btn4"];
const middleBtn = document.getElementById("btn5");
middleBtn.addEventListener("click", () => {
    const currVal = clockwiseIds.map(i => document.getElementById(i).innerHTML);
    console.log(clockwiseIds.filter(i => i == "btn1"));
    const n = clockwiseIds.length;
    for (let i = 0; i < n; i++) {
        const targetIdx = (i+1) % n;
        document.getElementById(clockwiseIds[targetIdx]).innerHTML = currVal[i];
    }
});
