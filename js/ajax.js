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
        alert("cant create that object");
    else
        return xmlHttp;
}




$(document).ready(function() {
    if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
        xmlHttp.onreadystatechange =function (){
            if(xmlHttp.readyState==4){
        	   if( xmlHttp.status==200)
             {
                  var data = JSON.parse(xmlHttp.responseText);
                  var proName = "";
                  proName+= data[0].pname;
                  console.log(data[0]);
                  document.getElementById('pname').innerHTML=proName;
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
