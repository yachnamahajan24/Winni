var CartListView = Backbone.View.extend({

		el : "#cartContainer",

		initialize : function(cartData) {
			this.cartData = cartData;
			this.collection = new CartList();
            var self = this;
            this.totalCount =0;
         
            this.cartData.forEach(function(cartItem){
                
                self.collection.add(cartItem);
            });
            
		},

		render:function(){
            
             $("#cartContainer").children('div').remove();
             $("#wrapper").hide();
            
            var self = this;
            this.totalCount =0;
			$.each(this.collection.models, function(i, cartModel){
                var cartView = new CartView({model: cartModel});
                if(cartModel.attributes.quantity)
                    self.totalCount += cartModel.attributes.quantity;
                self.$el.append(cartView.render().el);
			}.bind(self));
            
            $("#cartCount").text(this.totalCount);
            return this;
		},
});

	