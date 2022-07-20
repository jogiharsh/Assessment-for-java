function f0()
{
    let journeyType = document.getElementsByClassName('typejourney')
if (journeyType[0].checked==false && journeyType[1].checked==false)
{
    alert("Please Select The Trip");
    return false;
}
}
function f1()
{
    let passengerOne=document.getElementById("pasone").value;
     if (passengerOne== "null" || passengerOne == "")
    {
        alert("Enter First Passenger Details")
        return false;
    }
}
function f2()
{
    let passengerTwo=document.getElementById("pastwo").value;
        if (passengerTwo== "null" || passengerTwo == "")
    {
            alert("Enter Second Passenger Details")
            return false;
    }
}
/* function f3()
{
    let userJd = document.getElementById('jd1');
    if (userJd == "");
    {
        alert("Enter The Journey Date")
        return false;
    }
}*/
function f3()
{
    let todayDate = new Date();
    let tdate = todayDate.getDate();
    let tmonth = todayDate.getMonth() + 1;
    let tyear = todayDate.getFullYear();
    if (tdate < 10){
        tdate = "0"+ tdate;
    }
    if (tmonth < 10){
        tmonth = '0' + tmonth;
    }
    let minDate = tyear + "-" + tmonth + "-" + tdate;
    document.getElementById("jd1").setAttribute("min",minDate);
   /* let userJd = document.getElementById('jd1');
    if (userJd == "");
    {
        alert("Enter The Journey Date")
        return false;
    }*/
}  
/*function f4()
{
    let journeyOfType = document.getElementById("typejrn2").checked;
    let userRd1 = document.getElementById('rd1');
    if (journeyOfType== true && userRd1 == "")
    {
        alert("Please Enter Return Date")
        return false;
    };
}*/
function f4()
{
    if (document.getElementById("typejrn2").checked) {
        document.getElementById('rd1').style.visibility = 'visible';
    } else
    document.getElementById('rd1').style.visibility = 'hidden';
}
function f4A()
{
    let todayDate = new Date();
    let tdate = todayDate.getDate();
    let tmonth = todayDate.getMonth() + 1;
    let tyear = todayDate.getFullYear();
    if (tdate < 10){
        tdate = "0"+ tdate;
    }
    if (tmonth < 10){
        tmonth = '0' + tmonth;
    }
    let minDate = (tyear + "-" + tmonth + "-" + tdate);
    document.getElementById("rd1").setAttribute("min",minDate);
} 
function f5()
{
    let MobilNo = document.form.mobile.value;
    if (MobilNo.length < 10)
    {
        alert("Enter correct Mobile Number")
        return false;
    }
   
}
function f6()
{
    let myEmail = document.form.email.value;
    if (myEmail == "null" || myEmail=='')
    {
        alert("Enter correct Mail ID")
        return false;
    }
   
}
function f7()
{
    let BoardingPlace=document.getElementById("from").value;
     if (BoardingPlace== "null" || BoardingPlace == "")
    {
        alert("Enter Boarding Point")
        return false;
    }
}
function f8()
{
    let destinationPlace=document.getElementById("to").value;
     if (destinationPlace== "null" || destinationPlace == "")
    {
        alert("Enter The Destination")
        return false;
    }
}


/* var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
        var testDate = "03/17/21"
        if (date_regex.test(testDate)) {
            document.getElementById("message").innerHTML = "Date follows dd/mm/yy format";
        }
        else{
          document.getElementById("message").innerHTML = "Invalid date format";
        }
From Vasavi Prasanthi B to Everyone 10:09 AM
		// Custom validator
		.custom((sdate, { req }) => {

			// Fetch year, month and day of
			// respective dates
			const [sd, sm, sy] = sdate.split('/')
			const [ed, em, ey] = req.body.edate.split('/')

			// Constructing dates from given
			// string date input
			const startDate = new Date(sy, sm, sd)
			const endDate = new Date(ey, em, ed)
			
			// Validate start date so that it must
			// comes before end date
			if (startDate >= endDate) {
				throw new Error(
'Start date of project must be before End date')
			}
			return true
		})
}
*/