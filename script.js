

    var kontenItems = document.querySelectorAll('#tag');
        
        
        kontenItems.forEach(function(item) {
            window.addEventListener('scroll', function() {
                // Cek apakah scroll telah mencapai posisi tertentu
                if (window.scrollY > 100) { // Ubah 100 dengan posisi yang diinginkan
                    item.classList.add('scrolled'); // Tambahkan class untuk melakukan transformasi
                } else {
                    item.classList.remove('scrolled'); // Hapus class jika scroll telah kembali ke posisi semula
                }
            });
        });



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