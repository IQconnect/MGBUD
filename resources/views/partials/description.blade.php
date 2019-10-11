<section class="description">
	<div class="container">
			@includeWhen($data['header'] == 'tak', 'partials.title', ['title' => $data['title'], 'subtitle' => $data['subtitle'], 'class'=>'section-header section-header--addmargin section-header--primary section-header--center'])
		<div class="description__wrapper">

			<div class="description__textbox">
					{!!  $data['desc'] !!}
			</div>
		</div>
	</div>
</section>
