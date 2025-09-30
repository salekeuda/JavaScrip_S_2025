//korkauksia t1 )

function addNumbers(a, b )
    { 
      return a + b; 
    }

//t2 const message = "Heippulis keikkulis";

function printMessage() 
{ 
  const message = "Heippulis keikkulis";
    console.log(message); 
} 
printMessage();

//t3 )

for (let i = 0; i < 5; i++ )
    { 
      console.log(i); 
    }

//t4 "3"

const num1 = 5; 
const num2 = 3; 
const sum = num1 + num2; 
console.log(sum);

//t5 divideNumbers

function divideNumbers(a, b) 
{
 if (b === 0)
 {
 throw new Error("Division by zero.");
 } 
  return a / b; 
} 
try 
{
 const result = divideNumbers(10, 2);
 console.log(result); 
} 
catch (error) 
{
 console.error(error.message); }

 //t6 count++;

 let count = 0;
 while (count < 5) {
   console.log(count);
   count++;
 }

 //t7 < 5

  for (let i = 0; i < 5; i++) 
  { 
    console.log(i); 
  }

  //t8 ;

  const message = "Hello, world!" ;
  console.log(message)

  //t9 names--> name

  function greet(name) 
    {
      console.log("Hello, " + name);
    } 
    greet("Alice");

    //t10  const numbers = [] Taulukon alkiot ovat [0] = 1, [1] = 2 ja [2] = 3, taulukolla ei ole [3] alkiota

    const numbers = [1, 2, 3]; 
    console.log(numbers[2]);

    //t11 Objektilla person, ei ole address, eikä street -attribuutteja, lisää ne

   const person = {
    name: "Alice",
    age: 30,
    address: 
    {
      street: "123 Main St",
      city: "Anytown",
    },
  };
  console.log(person.address.street);

  t12 return result;

   function add(a, b) 
  {
    const result = a + b; 
    return result;
  } 
  const sum = add(3, 4); 
  console.log(sum);

  t13 console.log -lauseessa muuttujan nimi kirjoitettu väärin. Korjaa.

  const temperature = 25; 
  console.log(temperature);

  //t14 Poista x ja anna y:lle suoraan arvo

 const y = 5; 
    console.log(y);

    //t15 Funktiossa turhia lauseita, poista ne.

     function greet(name) 
  {
    console.log("Hello, " + name);   
  } 
  greet("Alice");

  //t16 break-komento puuttuu "Monday" -casesta.
 
  const day = "Monday";
  switch (day) 
  {
     case "Monday":
       console.log("It's Monday.");
       break;
     case "Tuesday":
       console.log("It's Tuesday.");
       break;
     case "Wednesday":
       console.log("It's Wednesday.");
       break;
     default:
       console.log("It's another day.");
  }

  //t17 if-lauseessa väärä koodi, nyt sijoituskoodi, eli x:lle annetaan arvo 5. Korjaa

    const x = 10; 
  if (x === 5) 
  {
    console.log("x is equal to 5."); 
  } 
  else 
  { 
    console.log("x is not equal to 5."); 
  }
 
  //t18 ,

     function multiply(a, b) 
    {
      return a * b; 
    } 
    const result = multiply(3, 4); 
    console.log(result);

    //t19 Nolla ei ole mukana loopissa. Korjaa.  =

     const numbers = [1, 2, 3]; 
    for (let i = numbers.length - 1; i >= 0; i--) 
    { 
      console.log(numbers[i]);
    }

    //t20 age: 36 ikä puuttui, person.age näyttää vain iän

     const person = { name: "Bob", age: 36 }; 
    console.log(person.age);