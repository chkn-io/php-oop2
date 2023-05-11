$('#input').keypress(function(e){
    if(e.keyCode == 13){
        var message = $(this).val()
        $.ajax({
            url:'router/router.php?ind=send',
            type:'POST',
            data:{
                'message':message
            },
            success:function(result){
                $('#input').val('')
                $('#input').focus()
            }
        })
    }
})


setInterval(function(){
    $.ajax({
        url:'router/router.php?ind=refresh',
        type:'GET',
        success:function(result){
            $('.messages').html(result)
        }
    })
},1000)