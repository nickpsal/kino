$(document).ready(function() {
    var numbers = [];
    var html = "";
    var number = 01;
    var d = new Date();
    for (let i = 0; i<20; i++) {
        do{
            temp = Math.floor(Math.random() * 80) + 1;
        }while (numbers.includes(temp));
        numbers.push(temp);
    }
    numbers.sort(function(a, b){return a - b});
    console.log(numbers);
    document.getElementById("footer").innerHTML = "© " + d.getFullYear() + " Created by Nikolaos Psaltakis";
    for (let i = 1; i<=8;i++) {
        html = "<tr>";
        $("#numbers").append(html);
        for(let j = 1; j<=10;j++) {
            if (numbers.includes(number)) {
                if (number < 10) {
                    html = "<td class='yellow'>" + 0 + number + "</td>";
                }else{
                    html = "<td class='yellow'>" + number + "</td>";
                }
            }else{
                if (number < 10) {
                    html = "<td>" + 0 + number + "</td>";
                }else{
                    html = "<td>" + number + "</td>";
                }
            }
            $("#numbers").append(html);
            number++;
        }
        html = "</tr>";
        $("#numbers").append(html);
    }
});
