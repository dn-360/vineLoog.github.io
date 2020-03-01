var name   = document.getElementById("myName").value;
var price   = document.getElementById("myPrice").value;
var quantity   = document.getElementById("myQuantity").value;
var array = new Array(5);
for(var i = 0; i < array.length; i++){
    array[i] = [name, price, quantity, category];
}
function calculate(){
    var totalPrice, totalQuantity, i;
    largestPrice = 0;
    largestQuantity = 0;
    var percentPrice = new Array(5);
    var percentQuantity = new Array(5);
    for (i = 0; i < array.length; i++){
        totalPrice+= array[i][1];
    }
    for (i = 0; i < percent.length; i++){
        totalQuantity+= array[i][2];
    }
    console.log(array[1][1] + "" + totalPrice)
    for (i = 0; i < percentPrice.length; i++){
        percentPrice[i] = 100 * (array[i][1] / totalPrice); 
        percentQuantity[i] = 100 * (array[i][2] / totalQuantity);
    }
    for (i = 0; i < array.length; i++){
        if(i != 0){
        if(percentPrice[i] > largestPrice)
            largestPrice = percentPrice[i];
        if(percentQuantity[i] > largestQuantity)
            largestQuantity = percentQuantity[i];
        }
    }
    for(i = 0; i < array.length; i++){
    if (percentPrice[i] == largestPrice)
    console.log("The most expensive item is " + array[i][0] + "taking up" + largestPrice + " percent of the total amount.");
    if (percentPrice >= 50)
    console.log("");
    }
}

function clickAddRow(){
    $.get("/addRow"),{},function(response){
       //Implement images/design last
       //1
        var table = document.getElementById("myTable");
        var x  = table.insertRow(0);
        var a = table.rows.length-1;
        var l = table.rows[a].cells.length;

        for(var c = 0, m = 1; c < m; c++)
        {
            table.rows[0].insertCell(c);
            table.rows[0].cells[c].innerHTML = "&nbsp;&nbsp";

        }
       //2
        $(table).find('tbody').append("<tr><td>aaaa</td></tr>");
       //3
        tableRef.insertRow(tableRef.rows.length);
       //4
       var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

       var newRow = tableRef.insertRow();
    }
}

 //Stores input into quantity

function inputCategory(){

}//stores input into category

function clickAddMonth(){ //Make a function that increases the number of rows per click.
    $.get("/addMonth",{},function(response){
        row.getAddMonth("addRow").innerHTML = inputName();

    });
}

function clickFinish(){
    $.get("/finish",{},function(response){
    //Simulation starts, taking in all the variables and spitting out the output.
    //Output = graphs of past data based on total resources per month used and price, future predictions based on those graphs
   
   
    $("#finish-area").html(display);
    });
}