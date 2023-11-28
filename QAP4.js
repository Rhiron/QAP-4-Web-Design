// Creating the MotelCustomer object and using it to create a customer description
// Criteria: (the customer’s name, birth date, gender, and room preferences  (as  an  array),  payment method, mailing  address  (as  a  sub-object), phone  number, check-in,and  check-out  date  (as  a  sub-object),  and object methods  to  determine theirage  and  duration  of  stay)
let Motel_Cust = {
    Name: "John Doe", // The customer’s name
    Birth_Date: new Date(1985, 5, 16), // The customer’s birth date
    Gender: "Male", // The customers gender 
    Room_Preferences: ["Non-smoking", "Double bed"], // The customer’s room preferences (array)
    Payment_Method: "Credit Card", // The customer’s payment method
    Mailing_Address: { // The customer’s mailing address (sub-object)
        Street: "58 Carten St", 
        City: "Cornerstone", 
        Prov: "CA",
        Zip: "A2H1K0"
    },
    Phone_Number: "709-640-9820", // The customer’s phone number
    
    dates: { // The customer’s check-in and check-out date (sub-object)
        Check_In_Date: new Date(2023, 1, 1),
        Check_Out_Date: new Date(2023, 1, 5)
    },
    // Object method to determine their age
    Get_Age: function() {
        let today = new Date();
        let Age = today.getFullYear() - this.Birth_Date.getFullYear();
        let Diff_Month = today.getMonth() - this.Birth_Date.getMonth();
        if (Diff_Month < 0 || (Diff_Month === 0 && today.getDate() < this.Birth_Date.getDate())) {
            Age--;
        }
        return Age;
    },
    // Object method to determine their duration of stay
    Get_Duration_Of_Stay: function() {
        let diffTime = Math.abs(this.dates.Check_Out_Date - this.dates.Check_In_Date);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        return diffDays; 
    }
};

let Cust_Desc = `
    Customer ${Motel_Cust.Name} is a ${Motel_Cust.Get_Age()} year old ${Motel_Cust.Gender} 
    who prefers a ${Motel_Cust.Room_Preferences.join(' and ')} room. 
    They will be staying with us for ${Motel_Cust.Get_Duration_Of_Stay()} days.
    They will be paying with ${Motel_Cust.Payment_Method}. 
    We can reach them at ${Motel_Cust.Phone_Number} and send mail to 
    ${Motel_Cust.Mailing_Address.Street}, ${Motel_Cust.Mailing_Address.City}, 
    ${Motel_Cust.Mailing_Address.Prov} ${Motel_Cust.Mailing_Address.Zip}.
`;

Val = Cust_Desc;
console.log(Val);
html = `<p>${Val}</p>`;
document.body.innerHTML = html;