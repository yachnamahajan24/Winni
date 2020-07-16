var Cart = Backbone.Model.extend({
		initialize : function() {
                this.id = this.attributes.id;
                this.description = this.attributes.description;
                this.price = this.attributes.price;
                this.image = this.attributes.image;
                this.quantity = 1;
		}
	});