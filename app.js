//----------------- CHAPTER 1
    //task1
    //alert("Hello! Welcome to the website");
    
    //task2
    //alert("Error! Please enter a valid password");
    
    //task3
    //alert("Welcome to JS Land... \n Happy Coding!");

    //task4
    // alert("Welcome to JS Land...");
    // alert("Happy Coding!");

    //task5
    //console.log(alert("Hello... I can run JS through my web browser's console"));

    //task6
    //You can see it in action at: https://hasnain-wm12979.web.app/assignments/assignment4/index.html

    //task7
    //view index.html for this


//----------------- CHAPTER 2
    //task1
    // var username;
    
    //task2
    // var myName ="Hasnain Shafeeq";
    
    //task3
    // var message;
    // message = "Hello World!"
    // alert(message);

    //task4
    // var studentName = "Hasnain Shafeeq";
    // var studentAge = 23;
    // var studentDegree = "Certified Mobile Application Development";
    // alert(studentName);
    // alert(studentAge + " years old");
    // alert(studentDegree);

    //task5
    // var item = "PIZZA";
    // alert(item + "\n" + item.slice(0,4) + "\n" + item.slice(0,3) + "\n" + item.slice(0,2) + "\n" + item.slice(0,1));

    //task6
    // var email = "hasnainshafeeq1997@gmail.com";
    // alert("My email address is " + email);

    //task7
    // var book = "A smarter way to Learn JavaScript";
    // alert("I am trying to learn from the Book " + book);

    //task8
    // document.write("Yah! I can write HTML content through JavaScript")

    //task9
    // var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    // alert(a);


//----------------- CHAPTER 3
    //task1
    // var age = 23;
    // alert("I am "+ age +" years old");

    //task2
    //Skipped by command of Sir Ghous
    
    //task3
    // var birthYear = 1997;
    // document.write("My birth year is "+ birthYear);
    // document.write("<br>Data type of my declared variable is "+ typeof(birthYear));
    
    //task4
    // var visitorName = "Hasnain Shafeeq";
    // var productTitle = "T-Shirt";
    // var Quantity = 7;
    // document.write(visitorName + " ordered "+ Quantity + " " + productTitle +"(s) on XYZ Clothing Store");

//----------------- CHAPTER 17-20
    //task1
    // var matrix = [
    //     [0, 1, 2, 3],
    //     [1, 0, 1, 2],
    //     [2, 1, 0, 2],
    // ];

    //task2
    // var matrix = [
    //     [0, 1, 2, 3],
    //     [1, 0, 1, 2],
    //     [2, 1, 0, 2],
    // ];
    // var m;
    // for (m of matrix) {
    //     document.write(m + "<br >");
    // }

    //task3
    // for (var i = 1; i <= 10; i++) {
    //     document.write(i + "<br>");
    // }

    //task4
    // var tableOf = +prompt("Enter a number to show it's multiplication table");
    // var tableLength = +prompt("Enter length multiplication table ");
    // for (var i = 1; i <= tableLength; i++) {
    //     document.write(tableOf + "x" + i + "=" + tableOf*i + "<br>");
    // }
    
    //task5
    // var fruits = ["apple","banana","mango","orange","strawberry"];
    // for (var i = 0; i <= fruits.length-1; i++) {
    //     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
    // }

    //task6
    // document.write("<h3>Counting:</h3>");
    // for (var i = 1; i <= 15; i++) {
    //     document.write(i + ", ");
    // }

    // document.write("<h3>Reverse Counting:</h3>");
    // for (var i = 10; i >= 1; i--) {
    //     document.write(i + ", ");
    // }

    // document.write("<h3>Even:</h3>");
    // for (var i = 0; i <= 20; i = i + 2) {
    //     document.write(i + ", ");
    // }

    // document.write("<h3>Odd:</h3>");
    // for (var i = 1; i <= 20; i = i + 2) {
    //     document.write(i + ", ");
    // }
    
    // document.write("<h3>Series:</h3>");
    // for (var i = 2; i <= 20; i = i + 2) {
    //     document.write(i + "k, ");
    // }

    //task7
    // var A = ["cake", "apple pie", "cookie", "chips", "patties"];
    // var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");
    // if(A.indexOf(userInput) !== -1) {
    //     document.write(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery");
    // }
    // else {
    //     document.write("We are sorry. "+ userInput + " is not available in our bakery");    
    // }

    //task8
    // var A = [24, 53, 78, 91, 12];
    // var largest = A[0];
    // for(var i = 0; i <= A.length; i++){
    //     if(largest < A[i])
    //     {
    //         largest = A[i];
    //     }
    // }
    // document.write("Array items: " + A + "<br>");
    // document.write("The largest number is " + largest);

    //task9
    // var A = [24, 53, 78, 91, 12];
    // var smallest = A[0];
    // for(var i = 0; i <= A.length; i++){
    //     if(smallest > A[i])
    //     {
    //         smallest = A[i];
    //     }
    // }
    // document.write("Array items: " + A + "<br>");
    // document.write("The smallest number is " + smallest);

    //task10
    //method1
    // for(var i = 5; i <= 100; i = i + 5) {
    //     document.write(i + ", ");
    // }

    //method2
    // for(var i = 1; i <= 20; i++) {
    //     document.write(i*5 + ", ");
    // }
