$(document).ready(function(){
    let stringToEvaluate = "", concatNumber = "";
    let numFlag = false, signFlag = false, dotflag = false;

    $('button[data-num]').on('click', function(){
        let number = $(this).text();
        
        if(number == "." && dotflag === true) {
            dotflag = true;
            return;            
        }

        if(number == "." && dotflag === false) {
            dotflag = true;
        }

        if(numFlag === false) {
            concatNumber += number;
            stringToEvaluate += concatNumber;
            numFlag = true;
        } else {
            concatNumber = stringToEvaluate = stringToEvaluate + number;
        }        

        $('div.output>div.prev-operand').text(stringToEvaluate);
        signFlag = true;
    });

    $('button[data-operation]').on('click', function(){
        let operation = $(this).text();
        numFlag = false;

        if(dotflag === true) dotflag = false;

        if(signFlag === false) {
            stringToEvaluate = stringToEvaluate.slice(0, -1);
        }

        stringToEvaluate = stringToEvaluate + operation;
        signFlag = false;
        concatNumber = "";

        $('div.output>div.prev-operand').text(stringToEvaluate);
    });

    $('button[data-all-clear]').on('click', function() {
        numFlag = false, signFlag = false, dotflag = false;
        stringToEvaluate = "", concatNumber = "";
        $('div.output>div.cur-operand').text(concatNumber);
        $('div.output>div.prev-operand').text(stringToEvaluate);
    });

    $('button[data-equals]').on('click', function() {
        $("input[name='expression']").val(stringToEvaluate);
        $("#form").submit();
    });
});