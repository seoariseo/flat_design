$(function(){

    // $(".nav").hide();
$(".menu_toggle_btn").click(function(){
    $(".gnb").stop().slideToggle("fast");
})//click



$(".search_select_box span").hover(function(){
    // $(this).next().stop().slideDown();
    $(".search_select_list").stop().slideDown();
},function(){
    $(".search_select_list").stop().slideUp();
})//
})//jquery