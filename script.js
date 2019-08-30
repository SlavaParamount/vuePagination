var APPLICATION_ID = '38d3798973af1f97b61e3a15b1aa915a305cf758ea7e46d495ea406964fac3ea'

new Vue ({
	el: "#app",
	data: {
		photos: [],
		totalPhotos: 0,
		perPage: 9,
		currentPage: 1
	},
	methods: {
		fetchPhotos(page){
			var options= {
				params: {
					client_id: APPLICATION_ID,
					page: page,
					per_page: this.perPage
				}
			}

			this.$http.get('https://api.unsplash.com/photos', options).then(function(response){
				this.photos = response.data;
				this.totalPhotos = response.headers.get('x-total')
				this.currentPage = page
			}, console.log)
		}
	},
	created: function(){
		this.fetchPhotos(this.currentPage)
	}
})