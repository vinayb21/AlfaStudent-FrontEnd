var xmlHttp = createXmlHttpRequestObject()

function createXmlHttpRequestObject(){
    var xmlHttp;

    if(window.ActiveXObject){
        try{
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
            xmlHttp = false;
        }
    }else{
        try{
            xmlHttp = new XMLHttpRequest();
        }catch(e){
            xmlHttp = false;
        }
    }

    if(!xmlHttp)
        alert("can't create that object");
    else
        return xmlHttp;
}




$(document).ready(function() {
    
    var pid;
    
    var queryString = new Array();
    $(function () {
        if (queryString.length == 0) {
            if (window.location.search.split('?').length > 1) {
                var params = window.location.search.split('?')[1].split('&');
                for (var i = 0; i < params.length; i++) {
                    var key = params[i].split('=')[0];
                    var value = decodeURIComponent(params[i].split('=')[1]);
                    queryString[key] = value;
                }
            }
        }
        if (queryString["pid"] != null) {
            pid = queryString["pid"]-200; 
            //alert(pid);
        }
    });
    
    if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
        xmlHttp.onreadystatechange =function (){
            if(xmlHttp.readyState==4){
        	   if( xmlHttp.status==200)
               {
                  var data = JSON.parse(xmlHttp.responseText);
                  var proName = "";
                  var price = " ";
                  proName+= data[pid].pname;
                  price += data[pid].price;
                  console.log(data[pid]);
                  document.getElementById('pname').innerHTML=proName;
                  document.getElementById('price').innerHTML=price;
                  //$("#imgdynamic").attr('src','http://alfastudent.hopto.org:5566/alfastudent/images/pen1.jpg'); 
               }
               else
               {
                  alert('Something went wrong!');
               }
        	}
        };
        xmlHttp.open("GET", "http://alfastudent.hopto.org:5566/alfastudent/rest/productService/products/", true);
        xmlHttp.send(null);

      }else{
        setTimeout('main()', 1000);
    }
});
