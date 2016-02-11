
$(document).ready(function(){
    var rate,qty,price,P_name;
    $(".bill_no").text(Math.floor((Math.random() * 1000) + 1));
    $(".date").text(new Date());
    $("#rate").blur(function(){
        qty=$("#qty").val();
        rate = $("#rate").val();
        P_name=$("#P_name").val();
    if((qty!="")&& rate!="")
    {
        price =qty*rate;
        $("#price").val(price);
    }
    });
    $("button").click(function(){
        var list_item = "$((<tr><td>"+P_name+"</td><td>"+qty+"</td><td>"+rate+"</td><td>"+price+"</td>";
        $(".addValue").append(list_item);
    });
});