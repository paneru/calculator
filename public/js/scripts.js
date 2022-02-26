$(document).ready(function(){
    let stringToEvaluate = "", concatNumber = "", lastString = "";
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

        //console.log(number);
        console.log("FinalToEvaluate: " + stringToEvaluate);
        
        // Set values in the out boxes
        // $('div.output>div.cur-operand').text(concatNumber);
        $('div.output>div.prev-operand').text(stringToEvaluate);
        signFlag = true;
        // numFlag = true;
        console.log("signFlag: " + signFlag);
    });

    $('button[data-operation]').on('click', function(){
        let operation = $(this).text();
        numFlag = false;

        if(dotflag === true) dotflag = false;

        //stringToEvaluate = concatNumber;

        if(signFlag === false) {
            console.log("WE NEED to slice: " + stringToEvaluate);
            stringToEvaluate = stringToEvaluate.slice(0, -1);
            console.log("After Slicing: " + stringToEvaluate);
            //lastOperand = true;
        }

        //console.log(operation);

        stringToEvaluate = stringToEvaluate + operation;
        signFlag = false;
        concatNumber = "";

        $('div.output>div.prev-operand').text(stringToEvaluate);
        // $('div.output>div.cur-operand').text(concatNumber);
        console.log("Updating signflag to FALSE");
        
        console.log("signFlag: " + signFlag);
    });

    $('button[data-all-clear]').on('click', function() {
        // resetCalulator();
        numFlag = false, signFlag = false, dotflag = false;
        stringToEvaluate = "", concatNumber = "";
        $('div.output>div.cur-operand').text(concatNumber);
        $('div.output>div.prev-operand').text(stringToEvaluate);
    });

    $('button[data-equals]').on('click', function() {
        var oldValue = $("input[name=expression]").val();
        console.log(oldValue);
        $("input[name='expression']").val(stringToEvaluate);
        $("#form").submit();
    });


});

function resetCalulator() {
    numFlag = false, signFlag = false, dotflag = false;
    stringToEvaluate = "", concatNumber = "";
    // $('div.output>div.cur-operand').text(concatNumber);
    $('div.output>div.prev-operand').text(stringToEvaluate);
}



/*

  <div class="output">
      <div data-prev-operand class="prev-operand"></div>
      <div data-cur-operand class="cur-operand"></div>
    </div>

*/