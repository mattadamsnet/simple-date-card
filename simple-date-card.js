class SimpleDateCard extends HTMLElement {

	set hass(hass) {

		if (!this.content) {
			var config = this.config;
			const card = document.createElement('HA-card');
			this.content = document.createElement('div');
			this.content.style.padding = this.config.padding_size ? this.config.padding_size : '16px';
			this.content.style.fontSize = this.config.font_size ? this.config.font_size : '4rem' ;
			this.style.textAlign = 'center';
			this.content.style.display = 'inline-block';
			card.appendChild(this.content);
			this.appendChild(card);
			var content = this.content;
			startTime();
			setInterval(startTime, 1000);
	
			function addZero(i){
				if (i < 10){
					i = "0" + i;
				}
				return i;
			}

			function startTime() {
				var today = new Date(),
				d = today.getDay(),
				m = today.getMonth(),
				D = today.getDate(),
				y = today.getYear();
				
				let  use_military = config.use_military !== undefined ? config.use_military : true;
				let  hide_seconds = config.hide_seconds !== undefined ? config.hide_seconds : false;

				let time_str =  d + ", " + m + " " + D + ", " + y;
				content.innerHTML = time_str;
			}
		}
	}

    setConfig(config) {
        this.config = config;
    }

    getCardSize() {
        return 1;
    }
}

customElements.define('simple-date-card', SimpleDateCard);
