
traces =[]
i=0;
   $( window ).on( "load", function() {
        
       $.getJSON("dataPoints10.json", function (data) {
   		 $.each(data, function (index, value) {
   		 	i=i+1;
   		 	if (i==2){
   		 		//return false;
   		 	}
   	   //console.log(value['cordinates']);
    	  var  a = value['cordinates'];
    	   var xx=[];
    	   var yy= [];
    	   $.each(a,function(index,value){
    	   	xx.push(Number(value.x));
    	   	yy.push(Number(value.y));
    	   	//alert(typeof(value.x))
    	   	//window.traces.push(value)
    	   });
    	   // console.log(xx);
    	  // traces =[]
    	  var trace={
    	  	x : xx,
    	  	y:  yy,
    	  	name : value['particle_id'],
    	  // 'type': 'scatter'
    	 	 // type :'scatter'
    	 	 mode: 'lines+markers'
    	  }
    	  //console.log(trace);
    	  window.traces.push(trace);
    });
});
 console.log(traces);

var layout = {
    title: 'cell Path',
    uirevision:'true',
    xaxis: {autorange: true},
    yaxis: {autorange: true}
};
Plotly.newPlot('myDiv', traces,layout);
    });

