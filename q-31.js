// JavaScript Program to Convert Decimal to Binary 

{
    let dec_num = parseInt(prompt("Enter Decimal Number......."))
    function Binary(num) {
        return num.toString(2);
    }

    const BinStr = Binary(dec_num);
    console.log(`Decimal: ${dec_num} => Binary: ${BinStr}`);

}