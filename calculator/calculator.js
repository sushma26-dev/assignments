	function calculate(val)
	{
		document.getElementById("result").value+=val;
	}
	 
	function solve()
    {
       let x = document.getElementById("result").value;
       let y = eval(x);
       document.getElementById("result").value = y;
     }
           
         //function that clear the display
     function clr()
     {
        document.getElementById("result").value = "";
     }