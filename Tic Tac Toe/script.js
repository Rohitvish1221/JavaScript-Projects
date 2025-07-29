let arr = Array(9).fill(null);
let current = "X";

const checkWinner = () => {
    if( (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7] )||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8] )||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ){
        document.write(`<h1>Winner is ${current}!!!<h1/>`)
        return ;
    }
    if(!arr.some((e) => e === null)){
        document.write('<h1>Draw!!!<h1/>');
        return
    }
}


const handleClick = (el) => {
    const id = Number(el.id);
    if (arr[id - 1] !== null) return;
        arr[id - 1] = current;
        el.innerText = current;
        checkWinner(arr);  
        current = current === "X" ? "0" : "X";
        // console.log(arr);
        // console.log(el)
};
