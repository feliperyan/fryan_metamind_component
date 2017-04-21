({
	aloha : function(component, event, helper) {
        
        if (component.get("v.email") === ''){
            helper.toggleError(component);
            console.log('Empty settings');            
            return null;
        }
        
		var url = helper.getURL(component);
        var cert = component.get("v.cert");
        var email = component.get("v.email")

        var action = component.get("c.getCallVisionUrl");
        action.setParams({
            theURL: url,
            theCert: cert,
            theEmail: email
        });
        action.setCallback(this, function(result){
            
            console.log(result.getReturnValue());
            
            var res = helper.parseResponse(component, result.getReturnValue());
            component.set('v.results', res); 
            
            helper.toggleDivs(component);
        });

        $A.enqueueAction(action);
	},
    
    changedURL : function(component, event, helper) {
        var newURL = helper.getURL(component);
        component.set('v.image', newURL);       
    },
    
    toggleNav : function(component, event, helper){
        helper.toggleDivs(component);
    }
})