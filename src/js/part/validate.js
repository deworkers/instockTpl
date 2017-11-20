$(document).ready(function() {
    $("#order-form").validate({
       rules:{
            name:{
                required: true
            },
            phone:{
                required: true
            },
            personal:{
                required: true
            },
       },

       messages:{
            name:{
                required: "Поле обязательное для заполнения",
            },
            phone:{
                required: "Поле обязательное для заполнения",
            },
            personal:{
                required: "Вы должны дать согласие на обработку персональных данных"
            }
       }
    });

    $("#order-call").validate({
       rules:{
            name:{
                required: true
            },
            phone:{
                required: true
            },
            personal:{
                required: true
            },
       },

       messages:{
            name:{
                required: "Поле обязательное для заполнения",
            },
            phone:{
                required: "Поле обязательное для заполнения",
            },
            personal:{
                required: "Вы должны дать согласие на обработку персональных данных"
            }
       }
    });

    $("#cart-order").validate({
       rules:{
            name:{
                required: true
            },
            phone:{
                required: true
            },
            personal:{
                required: true
            },
       },

       messages:{
            name:{
                required: "Поле обязательное для заполнения",
            },
            phone:{
                required: "Поле обязательное для заполнения",
            },
            personal:{
                required: "Вы должны дать согласие на обработку персональных данных"
            }
       }
    });


	$("#login_in").validate({
       rules:{
            login:{
                required: true
            },
            password:{
                required: true
            }
       },

       messages:{
            name:{
                required: "Введите ваш логин",
            },
            phone:{
                required: "Введите ваш пароль",
            }
       }
    });



});