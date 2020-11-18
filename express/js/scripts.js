document.getElementById('clicked').addEventListener('click', clicked);
function clicked() {
				var xhr = new XMLHttpRequest();
				xhr.open("GET", "https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e");
				xhr.responseType = "json";
				xhr.onload = function() 
					{
					alert('You are the' + ' ' + this.response.value +' ' +  'person to visit this site Thanks for viewing :)');
			}
				xhr.send();
			
		}




document.getElementById('visits').addEventListener('click', visits);
function visits(){
			(async () => {
				const response = await fetch('https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e')
				const json = await response.json(); {
				document.getElementById('demo').innerHTML = 'You are the' + ' ' + json.value + ' ' + 'person to visit this site Thanks for viewing';
				}


				console.log(json);
			})();
			}
