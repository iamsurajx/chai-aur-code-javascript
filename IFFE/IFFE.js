// IFFE Imidiate Invoke Function Expression

//This is a syntax of IFFE
(() => {})();

//****************************************
//Declaration of IFFE
(function () {
  console.log("IFFE Invoked");
})();
// Calling IFFE
//OUTPUT : IFFE Invoked

// ***************************************
// IFFE decleared using Arrow function
(() => {
  console.log("DB Is Connected....");
})();
//

//***************************************** */

// Passing Parameters in IFFE
((PORT) => {
  console.log(`Server is running on PORT: ${PORT}`);
})(8080);
