//Selecteer de header
let titleChange = document.querySelector('header');
let textChange = document.querySelector('h1');
//Wacht tot iemand scrollt
            window.addEventListener('scroll', function (){
                //Verander de size, verklein de h1
                if (this.window.scrollY > 0) {
                    document.querySelector('h1').classList.add('change')
                }else {
                    document.querySelector('h1').classList.remove('change')
                }
                if (this.window.scrollY > 0) {
                    document.querySelector('svg').classList.add('small')
                }else {
                    document.querySelector('svg').classList.remove('small')
                }


            })
            



//Filter
let filterDrop = document.querySelector('.introduction');
            filterDrop.addEventListener('click', function(){
                document.querySelector('.dropdown-content').classList.toggle('show');
            })
            