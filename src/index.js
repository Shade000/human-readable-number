module.exports = function toReadable (number) {
    const number_1  = {'0':'zero', '1':'one', '2':'two', '3':'three', '4':'four', '5':'five', '6':'six', '7':'seven', '8':'eight', '9':'nine', '10':'ten', '11':'eleven', '12':'twelve', '13':'thirteen', '14':'fourteen', '15':'fifteen', '16':'sixteen', '17':'seventeen', '18':'eighteen', '19':'nineteen'};
    const number_2 = {'2':'twenty', '3':'thirty', '4':'forty', '5':'fifty', '6':'sixty', '7':'seventy', '8':'eighty', '9':'ninety'};
    let result="";
    if (number%100===0 && number>0){
	    result = number_1[number/100] + ' hundred'
    } else {
        let thousand = Math.trunc(number/1000);
        thousand > 0 ? result+= number_1[thousand.toString()] + ' thousand ' : result+=''; 
        number = number%1000;
        let hundred = Math.trunc(number/100);
        hundred > 0 ? result+= number_1[hundred.toString()] + ' hundred ' : result+='';
        number = number%100;
        if(number < 20){
        result += number_1[number.toString()];
        } else {
        let tens = Math.trunc(number/10);
        tens > 0 ? result+=number_2[tens.toString()]  : result+='';
        number = number%10;
        number > 0 ? result+=' ' + number_1[number.toString()]  : result+=''
        }
    }   
    return result;
}
