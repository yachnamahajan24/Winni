var LoginModel = Backbone.Model.extend({
		initialize : function() {
       
                this.email= this.attributes.email;
                this.password = this.attributes.password;
               
		}
	});