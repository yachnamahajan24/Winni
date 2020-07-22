var CartView = Backbone.View.extend({
    
    tagName: 'div',
    className: 'cartItem',
    
    initialize: function(cartItem){
         this.template = _.template($('#cart-template').html());
         this.render();
    },
    
    events: {
         'click #removeCartItem' : 'removeCartItem'
     },

	render : function() {
         this.$el.attr("id","cart"+ this.model.attributes.id);
         this.$el.html(this.template(this.model.attributes));
		return this;
	},
    
    removeCartItem : function(){
     debugger;
        this.model.clear();
        this.remove();
        
        var count = parseInt($("#cartCount").text());
        $("#cartCount").text(--count);
        
    }
});