<template>
	<div>
		<section class="about section " id="about">
			<h2 class="section-title">About</h2>

			<div class="about__container bd-grid">
				<div class="about__img">
					<img :src="require('@/assets/images/artwork.jpeg')" alt="">
				</div>

				<div>
					<h2 class="about__subtitle">I'am {{profiles.name}}</h2>
					<blockquote class="blockquote-footer">
						{{profiles.about.header}}
					</blockquote>
					<span v-html="profiles.about.text"></span>
				</div>
			</div>

			<div class="container gallery__about">
				<div class="row justify-content-center">
					<div class="col-lg-12 col-md-12 col-sm-12 mb-3">
						<h2>Gallery & History</h2>
					</div>

					<div class="col-lg-12 col-md-12 col-sm-12">
						<div class="row justify-content-center gallery__content">
							<div
							v-for="(src, index) in gallery"
							:key="index"
							class="col-md-4 col-sm-12 mb-4"
							@click="() => showImg(index)"
							>
							<img :src="src.src" />
						</div>
					</div>
					<vue-easy-lightbox
					:visible="visible"
					:imgs="gallery"
					:index="index"
					@hide="handleHide"
					></vue-easy-lightbox>

				</div>
			</div>
		</div>

	</section>
</div>
</template>

<script>
	import { reactive, ref } from 'vue'

	export default{
		props: {
			profiles: Object,
			gallery: Array
		},

		data(){
			return {
				visible: false,
				index: 0,
				imgs: [
				'https://via.placeholder.com/450.png/',
				'https://via.placeholder.com/300.png/',
				'https://via.placeholder.com/150.png/',
				]
			}
		},

		methods: {
			showImg(index) {
				this.index = index
				this.visible = true
			},
			handleHide() {
				this.visible = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gallery__about{
		margin-top: 1rem;
		margin-bottom: 2rem;
		margin-left: 1rem;
		h2{
			font-weight: 800;
			word-spacing: 3px;
		}
		.gallery__content{
			width: 100%;
		}
	}

	@media (min-width: 992px) {
		.gallery__about{
			margin-top: 3rem;
			margin-bottom: 4rem;
			margin-left: 7rem;
			h2{
				font-weight: 800;
				word-spacing: 3px;
			}
			.gallery__content{
				width: 90%;
			}
		}
	}
</style>