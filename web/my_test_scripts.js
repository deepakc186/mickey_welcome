/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    $("#btn1").click(function () {
        $("#header").addClass("hover");
        $("#header").removeClass("no_hover");       
    });
    $("#btn2").click(function () {
        $("#header").removeClass("hover");
        $("#header").addClass("no_hover");
    });
 });