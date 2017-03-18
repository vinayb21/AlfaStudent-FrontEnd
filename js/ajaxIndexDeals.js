var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(xhttp.responseText);
                    var i,id;
                    for(i=1;i<=12;i++)
                    {
                        id = data[i-1].pid;
                        $('.deals'+i).attr("id",id);
                        $('.deals'+i+' .dealsProImage').attr("src","http://alfastudent.hopto.org:5566/alfastudent/"+data[i-1].imgpath);
                        $('.deals'+i+' .dealsProName').html(data[i-1].pname);
                        $('.deals'+i+' .dealsProPrice').html(data[i-1].price);
                        
                    }
                    console.log(data[0]);
    }
    else {
        //alert('Something went wrong!');
    }
  };
  xhttp.open("GET", "http://alfastudent.hopto.org:5566/alfastudent/rest/productService/discounts", true);
  xhttp.send();