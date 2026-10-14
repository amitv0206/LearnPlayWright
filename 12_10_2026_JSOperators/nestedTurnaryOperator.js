
let userName=`Uday`;
let age=`28`;

let condition = (age >=18) ?(age >=25 ? `Goa and Drink` : `Goa Only`) : `No Goa`;

console.log(`${userName} can enjoy ${condition}` );

//============================================

let statusCode = 404;

let category = statusCode <300 ? "Success" : 
                  statusCode <404 ? "Redirect" :
                  statusCode <500 ? "Client Error" : "Server Error";

console.log(` Status ${statusCode} : ${category}`);

//==================================================================================

let temp =35;
let feel =(temp>=40) ? "Very Hot" :
             (temp>=30) ? "Hot" :
             (temp>=20) ? "Good" :
             (temp>=10) ? "Cool" : "Very Cool";

             console.log(`Temperature : ${temp} | Feel : ${feel}`);

