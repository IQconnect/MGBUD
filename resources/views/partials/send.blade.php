<section class="send">
		<div class="features__bg">
				{!!  $data['map'] !!}
		</div>
	<div class="container">
		@includeWhen($data['header'] == 'tak', 'partials.title', ['title' => $data['title'], 'subtitle' => $data['subtitle'], 'class'=>'section-header--center section-header--addmargin send__title'])
		<div class="send__wrapper">
			<div class=" send__form">
				<div class="form-box form-box--light">
					<form class="form">
						<div class="form__ele">
							<label class="form__label">Imie i Nazwisko</label>
							<input class="form__input" type="text" required>
							<span class="form__bar"></span>
						</div>
						<div class="form__ele">
							<label class="form__label">Email</label>
							<input class="form__input" type="text" required>
							<span class="form__bar"></span>
						</div>
						<div class="form__ele">
							<label class="form__label">Wiadomość</label>
							<textarea cols="30" rows="5" placeholder="Treść wiadomości..." class="form__textarea" required></textarea>
							<span class="form__bar"></span>
						</div>
						<div class="form__ele form__ele--position">
							<label class="form__reg">
							<p>
							Zapoznałem się z Polityką prywatności serwisu apartamentyjuno.pl oraz wyrażam zgodę na przetwarzanie przez MGBUD, z siedzibą w Olsztynie, udostępnionych przeze mnie danych osobowych na zasadach opisanych w Polityce prywatności dostępnej w Serwisie. Oświadczam, że są mi znane cele przetwarzania danych oraz moje uprawnienia. Niniejsza zgoda może być wycofana w dowolnym czasie poprzez kontakt z Administratorem pod adresem biuro@mgbud.pl, bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. Więcej informacji dotyczących przetwarzania danych osobowych - Obowiązek Informacyjny.
							</p>
							<input class="form__nocheck" type="checkbox" required>
							<span class="form__checkmark"></span>
							</label>
						</div>
						<a class="button button--buttonbg " href="">Dowiedz się więcej</a>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
