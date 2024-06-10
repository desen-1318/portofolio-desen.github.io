


function handleScreenSize() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    
    if (screenWidth < 767) {
        var menugambar = document.getElementById('icon-menu-image');
        var  menutext= document.getElementById('navbar-text-menu');
        
        
        menugambar.addEventListener('click', function() {
         
            if (menutext.style.display === 'none') {
                menutext.style.display = 'block';
            } else {
                 menutext.style.display = 'none';
            }
        
        });
    
        var kontenItems = document.querySelectorAll('.link-menu');
        
        
        kontenItems.forEach(function(item) {
            item.addEventListener('click', function() {
                
                menutext.style.display = 'none';
            });
        });
    } else {
        console.log("Ukuran layar tidak kurang dari 600px");
       
    }
}


handleScreenSize();


window.addEventListener('resize', handleScreenSize);