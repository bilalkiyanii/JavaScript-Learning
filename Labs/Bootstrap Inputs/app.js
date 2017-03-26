// function onlineShipping(){
//     var name = document.getElementById("name").value;
//     var quan = document.getElementById("quantity").value;
//     name = name.toLowerCase();
//     if(name  === "tshirt"){
//         var tShirt = 400; 
//         document.getElementById("display").innerHTML= "<h4>"+name + " Price is " + tShirt+"</h4>" +
//         "<h4>"+"Quantity of "+ name +" is "+ quan+"</h4>" +
//         "<h4>"+"Shipping Charges is 150"+"</h4>"+ 
//         "<h4>"+ "Total cost of your order is "+ ((quan * tShirt)+ 150)+ "</h4>";
//     }
    
// }
function markSheet(){
    var a = +document.getElementById("totalMarks").value;
    var b = +document.getElementById("obtainMarks").value;
    if(b < a){
    document.getElementById("display1").innerHTML= "<h3>" + "Total Marks " + a + "</h3>" + 
    "<h3>" + "Your Obtaining Marks " + b + "</h3>" +
    "<h3>" +"Your Percentage " + ((b * 100) / a) + "%" + "</h3>";
    }
}