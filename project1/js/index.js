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
          number : {
              digits : true,
              minlength : 11,
              maxlength : 11
          },
          agree : "required"
      },
       messages : {
          username : {
              required : "(请输入用户名)",
              minlength : "(用户名不能少于2个字符)",
              maxlength : "(用户名不能超过20个字符)"
          },
           sex : "(请选择性别)",
           password : {
             required: "(请输入密码)",
             minlength : "(密码不能少于8位)",
             maxlength : "(密码不能超过20位)"
           },
           confirm_password: {
              required : "(请验证密码)",
              minlength : "(密码不能少于8位)",
              maxlength : "(密码不能超过20位)",
              equalTo: "(两次密码不一致)"
           },
           email : {
              required : "(请填写电子邮箱)",
              email : "(邮箱格式不正确)"
           },
           number : {
              minlength : "(号码格式不正确)",
              maxlength : "(号码格式不正确"
           },
           agree : "(您必须同意我们的用户协议才能继续提交)"
       }
   });
});