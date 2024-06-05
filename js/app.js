$(function (){
  // ham 바
    $(".ham").click(function(){
      $(".submenu").show()
    })

    $(".close").click(function(){
      $(".submenu").hide()
    })

    // top
    $(window).scroll(function(){
    
      if( $(this).scrollTop() > 100 ){
        $(".top").addClass("on");
      }
      else{
        $(".top").removeClass("on");
      }
      
    });
      
  $(".top").click(function(){
    window.scrollTo({top : 0, behavior: 'smooth'}); 
  });


  $(".c1").click(function(){
    $(".fix_i img").attr('src', 'image/brand_maeil.jpg')
  })

  $(".c2").click(function(){
    $(".fix_i img").attr('src', 'image/brand_bio.jpg')
  })

  $(".c3").click(function(){
    $(".fix_i img").attr('src', 'image/brand_absolute.jpg')
  })

  $(".c4").click(function(){
    $(".fix_i img").attr('src', 'image/brand_coffee.jpg')
  })

  $(".c5").click(function(){
    $(".fix_i img").attr('src', 'image/brand_amazing.jpg')
  })


    
})