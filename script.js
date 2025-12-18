//Selecteer de header
let titleChange = document.querySelector('header');
let textChange = document.querySelector('h1');
//Wacht tot iemand scrollt
            window.addEventListener('scroll', function (){
                //Verander de size, verklein de h1
                if (this.window.scrollY > 0) {
                    document.querySelector('h1').classList.add('change')
                    // Vergroot h1 bij terugscrollen
                }else {
                    document.querySelector('h1').classList.remove('change')
                }
                // Verklein logo
                if (this.window.scrollY > 0) {
                    document.querySelector('svg').classList.add('small')
                    // vergroot logo bij terugscrollen
                }else {
                    document.querySelector('svg').classList.remove('small')
                }


            })
            



//Filter
    // Selecteer introduction
let filterDrop = document.querySelector('.introduction');
    // Wacht tot iemand klikt
            filterDrop.addEventListener('click', function(){
                // Toggle de filter dropdown
                document.querySelector('.dropdown-content').classList.toggle('show');
            })
            