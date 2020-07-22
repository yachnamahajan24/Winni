var LoginView = Backbone.View.extend({

		el : "#loginPage",

		initialize : function() {
             this.template = _.template($('#login-template').html());
            this.log = 1;
            this.div = document.getElementById('acc');
		},
    
    
       events: {
         'click #signIn' : 'login',
         'change #email' : 'setEmail',
         'change #pass' : 'setPassword'
        },

		render:function(){
             this.$el.append(this.template());
			
        },
    
       login: function(){
          
                                                                                          // Use a logical AND operator ---- 5 Points

            if (this.email != "" && this.pass == "1234") {                                  // if ....else if ------  5 Points
                    this.log = 0;
                    this.check();
                } else if(this.email == "" && this.pass == ""){
                   this.log = 1;                                                           // Use this keyword effectively ---- 5 points
                    alert("Please Fill up Both the Fields");
                    this.check();
                }else{
                    this.log = 1;
                    alert("Incorrect Email or Password..!!");
                    this.check();
                }
        },
    
       setEmail :function(e){
           this.email = e.currentTarget.value;                                                       // Event Target Property --- 5 points
           e.stopPropagation();                                                                       // Use event stopPropagation method--- 5 points
       },
        setPassword :function(e){
           this.pass = e.currentTarget.value;
            e.stopPropagation();
       },
    
        check: function() {
         var form=$(".form");
         var track=document.getElementById("track_option");
            if (this.log == 0){
                track.style.visibility="visible";
                $('.log_head').html("Hello  "+this.email+"\t you are logged in!!!!");
                form[0].style.display = "none";
                $("#guest").html("Hello,\t"+this.email);
                
                                                                                                                        //use local/session storage --- 5points
                sessionStorage.setItem("email", this.email);
                sessionStorage.setItem("password", this.pass);
                
            } else {
                $('.log_head').html("Sign IN");
                form[0].style.display = "visible";
                track.style.visibility="hidden";

            }
        }

                                     
    
	});

	