
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
    $("#add").click(function(){
        if(P_name!=undefined || qty!=undefined || rate!=undefined||price!=undefined  ){
        var list_item = "$((<tr><td>"+P_name+"</td><td>"+qty+"</td><td>"+rate+"</td><td>"+price+"</td>";
        $(".addValue").append(list_item);
            $("#qty").val("");
            $("#rate").val("");
            $("#P_name").val("");
            $("#price").val("");
        }
    });
    function print(){
        window.print();
    }
});