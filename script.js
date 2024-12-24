const ops = new Map();

function init(){
	ops.set("divisor2",23);
	ops.set("dividendo2",312);
}

function click_a1(){
	var a = document.getElementById("a1").value;
	var r = document.getElementById("result1");	

    v = a.trim().toLowerCase();

	if(v == "moscu" || v == "moscú")
	{
		document.getElementById("tr2").style.visibility="visible";	
	}
	else
	{

		r.innerHTML = "resultado esta mal ";
	}
}

function check_division(n)
{
	var q="p"+n;
	var a="a"+n;
	var ar="a"+n+"r";
	var r="result"+n;

	var n1 = document.getElementById(a).value.trim();
	var n2 = document.getElementById(ar).value.trim();
	var result = document.getElementById(r);

	
	var tagdivis = "divisor"+n;
	var tagdivid = "dividendo"+n;
	var divisor = ops.get(tagdivis);
	var dividendo = ops.get(tagdivid);
	var valor1= Math.trunc(dividendo / divisor);
	var valor2 = dividendo % divisor;

	if(n1 == valor1 && n2 == valor2)
	{
			result.innerHTML = "resultado esta bien ";	
	}
	else
	{
			result.innerHTML = "resultado esta mal ";
	}
}