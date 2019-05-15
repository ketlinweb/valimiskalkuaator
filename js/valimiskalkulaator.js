$(document).ready(function(){

	var Valjad = ["ASKO", "LIISI", "ASDF"]; /*inimesed kes on valjad*/
	var vanus = 0;	/*teen kaks väärtust millele panen alguses väärtuse 0*/
	var nimi = 0;


	$('.age').keypress(function(){ /*kasutame keypress funktsiooni , mis tähendab et minki key vajutuse peale teeb midaki*/
		if(event.which == 13){ /*kui vajutad enter siis läheb järgmised asjad tööle*/
			var	displayAge = $(this).val(); /*salvestas ära et dispalyAeg on $(this).val , ehk väärtus mis sai inimese poolt sisestatud*/

			if (displayAge >= 21 && displayAge <=120){
				$('.error-aeg').html("<p> Sa oled valimisealine " + displayAge+". vana</p>");
				$('.error-aeg').addClass("succses");
				vanus = 1; /*kui sai õige vastuse siis nüüd annab vanuse väärtuse 1 võib ka öelda true*/
			}
			else {
				$('.error-aeg').html("<p>Sa ei ole valimisealine "+displayAge+". vana</p>");
				$('.error-aeg').addClass("warning");
			}
		}
	})

	$('.name').keypress(function(){
		if (event.which == 13){
			var displayName = $(this).val().toUpperCase(); /*salvestan inimese poolt kirjutatud nime */

			$.each(Valjad, function(index, value) { /*vaatan mis on Valjad väärtuse sees, märgin ära indexi ja selle index väärtuse et nt index 1 väärtus oleks LIISI*/
				if (value == displayName) { /*this on siin value ,  ta vaatab esimest ja hindab kas on sama mis displayName*/
					$('.error-name').html("<p> Sa oled valja " + displayName+"</p>");
					$('.error-name').addClass("succses");
					 nimi = 1;
					return false; /*lõpetab selle funktsionni kui leiab õige, muidu liikub edasi*/
				}
				else{
					$('.error-name').html("<p> Sa ei ole valija " + displayName+"</p>");
					$('.error-name').addClass("warning");
				}
			});			
		}
	})
	$('.tere').click(function(){
		if (vanus == 1 && nimi == 1){ /*eelnevalt tegin need väärtused ja kui vastused eelmistest funktsioonides olid õiged siis mõlema väärtus peaks olema 1 ja saab näitada et on õige*/
			$(".fa-thumbs-up").fadeToggle();
		}
		else{
			$(".fa-ban").fadeToggle();
		}
	})
})
