
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

