$(function(){
    //设置默认显示首页界面
    $('.col-sm-2').height($(window).height());
    $('.nav-b').load('shouye.html');

    $('li:nth-child(1)').click(function(){        
        $('.nav-b').load('shouye.html');       
    });

    $('li:nth-child(2)').click(function(){        
        $('.nav-b').load('category.html');       
    });

    $('li:nth-child(3)').click(function(){        
        $('.nav-b').load('consult.html');       
    });

    $('li:nth-child(4)').click(function(){        
        $('.nav-b').load('users.html');       
    });   
   
});