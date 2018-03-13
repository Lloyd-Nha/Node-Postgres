 
 var result14;	
 var result15;	
 var result16;	
 
 $.ajax({
	             async: false,
				 type: 'GET',	
                 url: '/banks/v/gettwentyforteen',
				 datatype: "json",
				 success: function(data){
                             result14 = data;
				   //console.log(result); 
				 }     
                 
          });

$.ajax({
	             async: false,
				 type: 'GET',	
                 url: '/banks/v/gettwentyfifteen',
				 datatype: "json",
				 success: function(data){
                             result15 = data;
				   //console.log(result); 
				 }     
                 
          });		  
		  
  	  
$.ajax({
				 async: false,
				 type: 'GET',	
                 url: '/banks/v/gettwentysxteen',
				 datatype: "json",
                 success: function(data){
                             result16 = data;
				   //console.log(result16[3].Total); 
				 }     
          });
     
     console.log(result14[3][0].total);	 
		  		  
  var chart = c3.generate({
	bindto: '#chart',
	x: 'x',
    data: {
        columns: [
		     
            ['Wrote', result14[3][0].total, result15[3][0].total, result16[3][0].total],
			['Passed', result14[3][0].pass, result15[3][0].pass, result16[3][0].pass],
            ['Failed', result14[3][0].failed, result15[3][0].failed, result16[3][0].failed]
        ],
        type: 'bar',
		colors: {
               Wrote: '#0000ff',
               Passed: '#02e800',
               Failed: '#ff0000'
        },
	color: function (color, d) {
            // d will be 'id' when called for legends
            return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
        }	
    },
	
	 axis: {
        x: {
            type: 'category',
            categories: ['Year 2014', 'Year 2015', 'Year 2016']
        }
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
	
});





		  




		  

		  
   
	 



      
		  
