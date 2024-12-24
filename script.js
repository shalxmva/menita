const ops = new Map();

function create_tr(n,divs,divd){
	var tr = '<tr id="tr'+n+'" style="visibility:collapse;">';
	tr+= '<td><p>&nbsp;</p>';
	tr+="<p id=\"p"+n+"\">&iquest;Cuanto es "+divd+" entre "+divs+"&quest;</p>";
	tr+='Son: <input type="text" id="a'+n+'"></input>';
	tr+='Sobran <input type="text" id="a'+n+'r"></input>';
	tr+='<button onclick="check_division('+n+')">Checar</button>';
	tr+='<span id="result'+n+'"></span>';
	tr+='</td></tr>';

	return tr;
}

function init(){
	var tablita=document.getElementById("tablita");
	ops.set("divisor2",23);
	ops.set("dividendo2",312);
	tablita.innerHTML+=create_tr(2,ops.get("divisor2"),ops.get("dividendo2"));
	
	ops.set("divisor3",48);
	ops.set("dividendo3",273);
	tablita.innerHTML+=create_tr(3,ops.get("divisor3"),ops.get("dividendo3"));

	
	ops.set("divisor4",29);
	ops.set("dividendo4",763);
	tablita.innerHTML+=create_tr(4,ops.get("divisor4"),ops.get("dividendo4"));

	
	ops.set("divisor5",51);
	ops.set("dividendo5",374);
	tablita.innerHTML+=create_tr(5,ops.get("divisor5"),ops.get("dividendo5"));

	
	ops.set("divisor6",47);
	ops.set("dividendo6",958);
	tablita.innerHTML+=create_tr(6,ops.get("divisor6"),ops.get("dividendo6"));

	
	ops.set("divisor7",60);
	ops.set("dividendo7",152);
	tablita.innerHTML+=create_tr(7,ops.get("divisor7"),ops.get("dividendo7"));

	
	ops.set("divisor8",98);
	ops.set("dividendo8",254);
	tablita.innerHTML+=create_tr(8,ops.get("divisor8"),ops.get("dividendo8"));

	
	ops.set("divisor9",1);
	ops.set("dividendo9",1);
	tablita.innerHTML+=create_tr(9,ops.get("divisor9"),ops.get("dividendo9"));

	
	ops.set("divisor10",13);
	ops.set("dividendo10",153);
	tablita.innerHTML+=create_tr(10,ops.get("divisor10"),ops.get("dividendo10"));

	
	ops.set("divisor11",52);
	ops.set("dividendo11",1024);
	tablita.innerHTML+=create_tr(11,ops.get("divisor11"),ops.get("dividendo11"));

	
	ops.set("divisor12",1);
	ops.set("dividendo12",1278943);
	tablita.innerHTML+=create_tr(12,ops.get("divisor12"),ops.get("dividendo12"));

	
	ops.set("divisor13",23);
	ops.set("dividendo13",106);
	tablita.innerHTML+=create_tr(13,ops.get("divisor13"),ops.get("dividendo13"));

	
	ops.set("divisor14",23);
	ops.set("dividendo14",508);
	tablita.innerHTML+=create_tr(14,ops.get("divisor14"),ops.get("dividendo14"));

	
	ops.set("divisor15",56);
	ops.set("dividendo15",836);
	tablita.innerHTML+=create_tr(15,ops.get("divisor15"),ops.get("dividendo15"));

	
	ops.set("divisor16",72);
	ops.set("dividendo16",152);
	tablita.innerHTML+=create_tr(16,ops.get("divisor16"),ops.get("dividendo16"));
	tablita.innerHTML+="<tr style=\"visibility:collapse;\"><td>";
	tablita.innerHTML+="<p>Eit, aun no es hora de tu regalo</p>";
	tablita.innerHTML+="</td></tr>";
}

function click_a1(){
	var a = document.getElementById("a1").value;
	var r = document.getElementById("result1");	

    v = a.trim().toLowerCase();

	if(v == "moscu" || v == "moscú")
	{
		document.getElementById("tr2").style.visibility="visible";
		r.innerHTML = "Bieeeeen";
		reveal(n+1);
	}
	else
	{

		r.innerHTML = " est&aacute;s pero bien mal Jimenitaaaa, jajajajaa";
	}
}

function reveal(n)
{
	if(n < 17)
	{
		var tr = document.getElementById("tr"+n);
		tr.style.visibility="visible";
	}
	else
	{
		//Visible final
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
		reveal(n+1);
		result.innerHTML = " Buenas!!!!! ";
	}
	else
	{
			result.innerHTML = " Est&aacute;s pero bien mal Jimena, jajajajajajaja";
	}
}