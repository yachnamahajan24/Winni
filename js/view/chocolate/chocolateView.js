var ChocolateView = Backbone.View.extend({
    
        tagName: 'div',
        className: 'chocolateItem',
    
        initialize: function(chocolateModel){
          this.cartList = chocolateModel.cartList;
          this.template = _.template($('#chocolate-template2').html());
          this.render();
        },
    
        events: {
         'click #addCart' : 'addItemsToCart'
        },
    
        addItemsToCart:  function(e){
            debugger;
            var self = this;
           
            $("#chocolateContainer").children('div').remove();
            $("#coverImage").hide();
           
            var index = -1;
            var matchedIndex = this.cartList.find(function(cart, i){
                          if(cart.id == self.model['id']){
                            index = i;
                            return i;
                          }
                        });
             if (this.cartList.length == 0){
                 this.cartList.push(this.model);
             }
            if(index !=-1) {
                this.cartList[index].attributes.quantity = this.cartList[index].attributes.quantity + 1;
            }else{
                this.cartList.push(this.model);
            }

           
            let showCartListView = new CartListView(this.cartList);
            showCartListView.render();
             $("#buyNow").show();
            $("#contactPage").hide();
             $("#cartCountDiv").show();
           
        },
    
		render : function() {
            this.$el.attr("id", "chocolate"+ this.model.attributes.id);
            this.$el.html(this.template(this.model.attributes));
			return this;
		}
});