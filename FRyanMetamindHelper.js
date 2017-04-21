({
	getURL : function(component) {
		var body = component.find('txt1').get('v.value'); 

        if (body === ""){ 
	        body = "http://metamind.io/images/generalimage.jpg";
        }
        
        return body;
	},
    
    parseResponse: function(component, response) {
        var raw = JSON.parse(response);
        
        var resp = raw.map(function(x){
            return {"label":x.label, "probability":Math.round(Number(x.probability) * 10000)/100} 
        });
        
        
        //var polarity = Math.round(Number(resp.Response[0]) * 100);
		
        console.log(resp);
        return resp;
    },
    
    toggleDivs: function(component) {
        
        var inputDiv = component.find('input');
		var metamindDiv = component.find('metamind');
        
        $A.util.toggleClass(inputDiv, 'controls_hidden');
        $A.util.toggleClass(metamindDiv, 'results_visible');
    },
    toggleError: function(component) {
        $A.util.toggleClass(component.find('error'), 'error_show');
    }
})