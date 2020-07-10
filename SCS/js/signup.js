$.validator.setDefaults({
    submitHandler: function() {
        alert("注册成功!");
    }
});

$().ready(function () {
   $("#signupForm").validate({
       errorPlacement: function(error, element) {
           if (element.is(":radio"))
               error.appendTo(element.parent().next());
           else if (element.is(":checkbox"))
               error.appendTo(element.parent().parent());
           else
               error.appendTo(element.parent());
       },
      rules: {
           success : "valid",
          username : {
              required : true,
              minlength : 2,
              maxlength : 20
          },
          sex : "required",
          password : {
              required: true,
              minlength: 8,
              maxlength: 20
          },
          confirm_password : {
              required : true,
              minlength : 8,
              maxlength : 20,
              equalTo: "#password"
          },
          email : {
              required : true,
              email: true
          },
          agree : "required"
      },
       messages : {
          username : {
              required : "<br>(请输入用户名)",
              minlength : "<br>(用户名不能少于2个字符)",
              maxlength : "<br>(用户名不能超过20个字符)"
          },
           password : {
             required: "<br>(请输入密码)",
             minlength : "<br>(密码不能少于8位)",
             maxlength : "<br>(密码不能超过20位)"
           },
           confirm_password: {
              required : "<br>(请验证密码)",
              minlength : "<br>(密码不能少于8位)",
              maxlength : "<br>(密码不能超过20位)",
              equalTo: "<br>(两次密码不一致)"
           },
           email : {
              required : "<br>(请填写电子邮箱)",
              email : "<br>(邮箱格式不正确)"
           },
           agree : "<br>(您必须同意我们的用户协议才能注册)"
       }
   });
});