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
                    var i,id;
                    for(i=1;i<=12;i++)
                    {
                        id = data[i-1].pid;
                        $('.pro'+i).attr("id",id);
                        $('.pro'+i+' .proImage').attr("src","http://alfastudent.hopto.org:5566/alfastudent/"+data[i-1].imgpath);
                        $('.pro'+i+' .proName').html(data[i-1].pname);
                        $('.pro'+i+' .proPrice').html(data[i-1].price);
                        
                    }
                    console.log(data[0]);
               }
              else
              {
                  alert('Something went wrong!');
              }
        	}
        };
        xmlHttp.open("GET", "http://alfastudent.hopto.org:5566/alfastudent/rest/productService/trending/", true);
        xmlHttp.send(null);

      }else{
        setTimeout('main()', 1000);
    }
});
