
var shoping =["tshirt","jeans","kurta","dress pent","coat"];

var user;
var qty;

var total, shipping=150;



function shop(){
    user = prompt("Please write your Product","Product");
    qty = +prompt("Please write your Quantity","Quantity");
    user = user.toLowerCase();
    var flag ="no";
    for(var i = 0; i< shoping.length; i++){
        //console.log(shoping[i]);
        if(user === shoping[i]){
            if(user === "tshirt"){
                flag="yes";
                total = qty * 400;
                total = total+shipping;
                alert("your Product is " + user +"\n"+ "Your Product Quantity is " + qty +"\n"+"Shipping Charges Rs."+shipping+"\n"+"Total Price Rs." + total);
            }
            else if(user === "jeans"){
                flag="yes";
                total = qty * 1000;
                total = total+shipping;
                alert("your Product is " + user +"\n"+ "Your Product Quantity is " + qty +"\n"+"Shipping Charges Rs."+shipping+"\n"+"Total Price Rs." + total);
            }
            else if(user === "kurta"){
                flag="yes";
                total = qty * 800;
                total = total+shipping;
                alert("your Product is " + user +"\n"+ "Your Product Quantity is " + qty +"\n"+"Shipping Charges Rs."+shipping+"\n"+"Total Price Rs." + total);
            }
            else if(user === "dress pent"){
                flag="yes";
                total = qty * 1500;
                total = total+shipping;
                alert("your Product is " + user +"\n"+ "Your Product Quantity is " + qty +"\n"+"Shipping Charges Rs."+shipping+"\n"+"Total Price Rs." + total);
            }
            else if(user === "coat"){
                flag="yes";
                total = qty * 2500;
                total = total+shipping;
                alert("your Product is " + user +"\n"+ "Your Product Quantity is " + qty +"\n"+"Shipping Charges Rs."+shipping+"\n"+"Total Price Rs." + total);
            }

        }
    }
    if(flag == "no"){
        alert("This Product is Not Availiable..!");
    }
}

function markSheet(){
    user = +prompt("Please Enter Total Marks","100");
    obt = +prompt("Please Enter Your Obtaining Marks","Obtain");
    
    if(obt < user && obt >= 90){
        perc = (obt * 100) / 100;
        alert("Total Marks " + user + "\n" + "Your Obtaining Marks is " + obt + "\n" + "Your Percentage is " + perc + "%" + "\n" + "Your Grade is A-One");
    }
    else if(obt < user && obt >= 80){
        perc = (obt * 100) / 100;
        alert("Total Marks " + user + "\n" + "Your Obtaining Marks is " + obt + "\n" + "Your Percentage is " + perc + "%" + "\n" + "Your Grade is A");
     }
    else if(obt <= 100 && obt >= 70){
        perc = (obt * 100) / 100;
        alert("Total Marks " + user + "\n" + "Your Obtaining Marks is " + obt + "\n" + "Your Percentage is " + perc + "%" + "\n" + "Your Grade is B");
    }
    else if(obt <= 100 && obt >= 60){
        perc = (obt * 100) / 100;
        alert("Total Marks " + user + "\n" + "Your Obtaining Marks is " + obt + "\n" + "Your Percentage is " + perc + "%" + "\n" + "Your Grade is C");
    }
    else if(obt <= 100 && obt >= 50){
        perc = (obt * 100) / 100;
        alert("Total Marks " + user + "\n" + "Your Obtaining Marks is " + obt + "\n" + "Your Percentage is " + perc + "%" + "\n" + "Your Grade is D");
    }
    else if(obt <= 100 && obt >= 40){
        perc = (obt * 100) / 100;
        alert("Total Marks " + user + "\n" + "Your Obtaining Marks is " + obt + "\n" + "Your Percentage is " + perc + "%" + "\n" + "Your Grade is E");
    }
    else if(obt <= 100 && obt >= 30){
        perc = (obt * 100) / 100;
        alert("Total Marks " + user + "\n" + "Your Obtaining Marks is " + obt + "\n" + "Your Percentage is " + perc + "%" + "\n" + "Your Grade is F");
    }
     else{
        perc = (obt * 100) / 100;
        alert("Total Marks " + user + "\n" + "Your Obtaining Marks is " + obt + "\n" + "Your Percentage is " + perc + "%" + "\n" + "Fail");
    }
}
    function ab(){
            var a = 2, b = 1;
            document.write( --a + "<br/>");
            document.write(--a - --b + "<br/>");
            document.write(--a - --b + ++b + "<br/>");
            document.write(--a - --b + ++b + b-- + "<br/>");
            var dumy_a = 2; 
            var dumy_b = 1;
            var result = --dumy_a - --dumy_b + ++dumy_b + dumy_b--;
            document.write(result + "<br/>");
    }

function user(){    
    var password = document.getElementById("password").value;

    if (password === ""|| password === ' '){
        var message = "Please enter password first";
        document.getElementById("error").innerHTML=message;
    }
    else{
        document.getElementById("error").innerHTML= '';
    }
    //  if(user === password){
    //     alert("Correct! The password you entered matches the original password");
    // }else {
    //     alert("Incorrect password");
    // }
}