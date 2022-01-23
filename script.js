//Function to display country specific statistics graph
function country_graph(){
    let code=document.querySelector(".country_code").value;
    let url=`https://corona.dnsforfamily.com/graph.png?c=${code}`;
    var anchors = document.querySelectorAll('a[href*="https://corona.dnsforfamily.com/graph.png?c=IN"]');	
Array.prototype.forEach.call(anchors, function (element, index) {	   
 element.href = url;
                });
    console.log(anchors);
    return anchors;
}
