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
                var proName1,proName1,proName1,proName1;
                var price1,price2,price3,price4;
                proName1= data[0].pname;
                proName2= data[1].pname;
                proName3= data[2].pname;
                proName4= data[3].pname;
                price1 = data[0].price;
                price2 = data[1].price;
                price3 = data[2].price;
                price4 = data[3].price;
            
                 
                  //console.log(data[0]);
                document.getElementById('proName1').innerHTML=proName1;
                document.getElementById('pro1Price').innerHTML=price1;
                document.getElementById('proName2').innerHTML=proName2;
                document.getElementById('pro2Price').innerHTML=price2;
                document.getElementById('proName3').innerHTML=proName3;
                document.getElementById('pro3Price').innerHTML=price3;
                document.getElementById('proName4').innerHTML=proName4;
                document.getElementById('pro4Price').innerHTML=price4;
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
