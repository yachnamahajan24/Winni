var ChocolateListView = Backbone.View.extend({

		el : "#chocolateContainer",

		initialize : function(chocolateComboData, cartList, coverImage) {
            this.cartList = cartList;
            this.coverImage = coverImage;
			this.chocolateComboData = chocolateComboData;
			this.collection = new ChocolateList();
            var self = this;
            this.chocolateComboData.forEach(function(chocolate){
                chocolate.quantity = 1;
                self.collection.add(chocolate);
            });
		},

		render:function(){
            this.$el.children('div').remove();
            $("#wrapper").hide();
            $("#cartContainer").children('div').hide();
             $("#coverImage").show();
            var self = this;
			$.each(this.collection.models, function(i, chocolateModel){
                var chocolateView = new ChocolateView({model: chocolateModel, cartList: self.cartList});
                self.$el.append(chocolateView.render().el);
			}.bind(self));
            return this;
		}
    
	});

	