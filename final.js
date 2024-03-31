 var myWindow;
var tooltip, // global variables oh my! Refactor when deploying!
	hidetooltiptimer
	
	var tooltip, // global variables oh my! Refactor when deploying!
	hidetooltiptimer

function createtooltip(){ // call this function ONCE at the end of page to create tool tip object
	tooltip = myWindow.document.createElement('div')
	tooltip.style.cssText = 
		'position:absolute; background:black; color:white; padding:4px;z-index:10000;'
		+ 'border-radius:2px; font-size:12px;box-shadow:3px 3px 3px rgba(0,0,0,.4);'
		+ 'opacity:0;transition:opacity 0.3s'
	tooltip.innerHTML = 'Copied!'
	myWindow.document.body.appendChild(tooltip)
}

function showtooltip(e){
	var evt = e || event
	clearTimeout(hidetooltiptimer)
	tooltip.style.left = evt.pageX - 10 + 'px'
	tooltip.style.top = evt.pageY + 15 + 'px'
	tooltip.style.opacity = 1
	hidetooltiptimer = setTimeout(function(){
		tooltip.style.opacity = 0
	}, 500)
}
function getSelectionText(){
    var selectedText = ""
    if (myWindow.getSelection){ // all modern browsers and IE9+
        selectedText = myWindow.getSelection().toString()
    }
    return selectedText
}
function copySelectionText(){
    var copysuccess // var to check whether execCommand successfully executed
    try{
        copysuccess = myWindow.document.execCommand("copy") // run command to copy selected text to clipboard
    } catch(e){
        copysuccess = false
    }
    return copysuccess
}

function myFunction() {
  try{
let sub=document.getElementsByClassName('panel-body')[0].getElementsByTagName('P')[0].innerHTML.trim();
let pn=document.getElementsByClassName('insuredDP')[0].getElementsByTagName('h5')[0].innerHTML 
let mrn=document.getElementsByClassName('list-group prauthDetails')[0].getElementsByTagName('P')[0].innerHTML.trim()
let tpa=document.getElementsByClassName('list-group prauthDetails')[0].getElementsByTagName('P')[3].innerHTML.trim()
let hosp=document.getElementsByClassName('col-md-6 text-right')[0].getElementsByTagName('span')[0].innerHTML.trim()

myWindow = window.open("", "","width=600,height=600" ); 


const q=document.getElementsByClassName('query ng-scope')[0].getElementsByTagName('div')[0].innerHTML
//myWindow = window.open("", "myWindow", "width=500,height=500");   // Opens a new window
myWindow.document.documentElement.remove(); 
myWindow.document.write("<html><head><title>My Info</title></head><body>");
myWindow.document.write("<p id='buddhaquote1'>"+q+"</p>");
//alert(document.getElementById('draftLoad').rows[2].cells[15].innerHTML)
createtooltip()
var buddhaquote = myWindow.document.getElementById('buddhaquote1')
     buddhaquote.addEventListener('mouseup', function(e){
    var selected = getSelectionText() // call getSelectionText() to see what was selected
    if (selected.length > 0){ // if selected text length is greater than 0
        var copysuccess = copySelectionText() // copy user selected text to clipboard
       showtooltip(e)
    }
    
}, false)
	buildTable(sub,pn,mrn,tpa,hosp)
	Billinginfo()
	DoctorDetails()
	
myWindow.document.write("</body></html>");

  }catch(err){}
}


function Billinginfo()
{
   try{
let a = document.getElementsByClassName('col-lg-4 col-md-4 col-sm-4')[51].getElementsByTagName('p')[0].innerHTML;

let b = document.getElementsByClassName('col-lg-4 col-md-4 col-sm-4')[55].getElementsByTagName('p')[0].innerHTML;

let c=document.getElementsByClassName('col-lg-4 col-md-4 col-sm-4')[53].getElementsByTagName('p')[0].innerHTML;
let d=document.getElementsByClassName('col-lg-4 col-md-4 col-sm-4')[57].getElementsByTagName('p')[0].innerHTML;
let e=document.getElementsByClassName('col-lg-3 col-md-3 col-sm-3')[7].getElementsByTagName('p')[0].innerHTML;
let f=document.getElementsByClassName('small text-white ng-binding')[0].innerHTML;
let g= document.getElementsByClassName('col-lg-4 col-md-4 col-sm-4')[52].getElementsByTagName('p')[0].innerHTML;
let h=document.getElementsByClassName('col-lg-4 col-md-4 col-sm-4')[49].getElementsByTagName('p')[0].innerHTML;
//alert(a + " "+h+"+b+ " "+c+" "+d+" "+e+" "+f+" "+g);
  let i= document.getElementsByClassName('col-lg-7 col-md-6 col-sm-6')[1].getElementsByTagName('p')[0].innerHTML;
 let j= document.getElementsByClassName('col-lg-7 col-md-6 col-sm-6')[3].getElementsByTagName('p')[0].innerHTML;
 
  // Opens a new window

myWindow.document.write("<p id='buddhaquote2' style='color:green;font-size:20px'>"+"Type of Admission: "+a+'<br />'+"Date of Admission: "+"<span style='font-weight: bold;'>"+h+'</span><br />'+"Date of Discharge: "+"<span style='font-weight: bold;'>"+b+'</span><br />'+"Room Type: "+c+'<br />'+d+'<br />'+"Contact number: "+e+'<br />'+"Requested Amount: "+f+'<br />'+"Duration of stay in days: "+g+'<br />'+"Diagnosis: "+i+" "+j+"</p>");
 createtooltip()
var buddhaquote = myWindow.document.getElementById('buddhaquote2')
     buddhaquote.addEventListener('mouseup', function(e){
    var selected = getSelectionText() // call getSelectionText() to see what was selected
    if (selected.length > 0){ // if selected text length is greater than 0
        var copysuccess = copySelectionText() // copy user selected text to clipboard
       showtooltip(e)
    }
    
}, false)
     
     
   }catch(err){myWindow.document.write(err);}
  
}

	function buildTable(a,b,c,d,e){
	 
try{
//div.innerHTML = `<table border=><tr><td>${a}</td><td>${b}</td><td>${c}</td><td>${d}</td><td>${e}/td></tr></table>`;
// set style
str="${a}${b}${c}${d}${e}"
//alert(a+'\t'+b+'\t'+c+'\t'+d+'\t'+e)

//myWindow = window.open("", "myWindow", "width=500,height=500");   // Opens a new window

//myWindow.document.write("<table border='5' id='buddhaquote3'><tr><td>"+a+'</td><td>'+b+'</td><td>'+c+'</td><td>'+d+'</td><td>'+e+"</td></tr><table>");
myWindow.document.write("<table id='buddhaquote3'><tr><td style='border: 1px solid black; padding: 20px;'>"+a+"</td><td style='border: 1px solid black; padding: 20px;'>"+b+"</td><td style='border: 1px solid black; padding: 20px;'>"+c+"</td><td style='border: 1px solid black; padding: 20px;'>"+d+"</td><td style='border: 1px solid black; padding: 20px;'>"+e+"</td></tr><table>");
	
		createtooltip()
var buddhaquote = myWindow.document.getElementById('buddhaquote3')
     buddhaquote.addEventListener('mouseup', function(e){
    var selected = getSelectionText() // call getSelectionText() to see what was selected
    if (selected.length > 0){ // if selected text length is greater than 0
        var copysuccess = copySelectionText() // copy user selected text to clipboard
       showtooltip(e)
    }
    
}, false)

}catch(err){myWindow.document.write(err);}
		
	}
//window.onload = function() { myFunction() };
function DoctorDetails()
{
  try{
  
    const a = document.getElementsByClassName('table-responsive m-b-10')[0].getElementsByClassName('table table-condensed')[0].getElementsByTagName('p')[0].innerHTML.trim()
    const b=document.getElementsByClassName('table-responsive m-b-10')[0].getElementsByClassName('table table-condensed')[0].getElementsByTagName('p')[1].innerHTML.trim()
    const c=document.getElementsByClassName('table-responsive m-b-10')[0].getElementsByClassName('table table-condensed')[0].getElementsByTagName('p')[2].innerHTML.trim()
    const d=document.getElementsByClassName('table-responsive m-b-10')[0].getElementsByClassName('table table-condensed')[0].getElementsByTagName('p')[3].innerHTML.trim()
    const e=document.getElementsByClassName('table-responsive m-b-10')[0].getElementsByClassName('table table-condensed')[0].getElementsByTagName('p')[4].innerHTML.trim()
//myWindow = window.open("", "myWindow", "width=500,height=500");   // Opens a new window

myWindow.document.write("<p id='buddhaquote4' style='color:red;font-size:20px'>"+"Department: "+a+'<br />'+
"Treating Doctor: "+b+'<br />'+"Contact Number: "+c+'<br />'+
"Registration Number: "+d+'<br />'+"Medical Council: "+e+"</p>");
createtooltip()
var buddhaquote = myWindow.document.getElementById('buddhaquote4')
     buddhaquote.addEventListener('mouseup', function(e){
    var selected = getSelectionText() // call getSelectionText() to see what was selected
    if (selected.length > 0){ // if selected text length is greater than 0
        var copysuccess = copySelectionText() // copy user selected text to clipboard
       showtooltip(e)
    }
    
}, false)
}catch(err){myWindow.document.write(err);}

			// alert(a+" "+b+" "+c+" "+d+" "+e)
}

window.onload=myFunction()
