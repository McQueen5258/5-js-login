

$(".login").click(function() {
    let yongHuMing = $("input").val();
    alert(yongHuMing+("\n请确认您的用户名"));
    $(".login-text").text(yongHuMing+"，登陆成功");
    $("input,.login,.qingChu").hide();
});

$(".qingChu").click(function(){
    $(".username").val("");
});



