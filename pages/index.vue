<template>
  <div class="wrapperr">
      <my-navbar/>

      <my-hero/>

      <section class="section-layer wow fadeIn animated" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" id='easy'>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src="~/assets/img/easy-message.png" class="img-responsive center-block featured">
            </div>
            <div class="col-md-6">
              <div class="section-content desc">  
                  <h2 class="title">Envía mensajes fácil<span>.</span></h2>
                  <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  llamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-layer" id='keep'>
        <div class="container">
          <div class="row">
            <div class="col-md-6 wow fadeInLeft animated" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
              <div class="section-content desc">  
                <h2 class="title">Mantente en contacto<span>.</span></h2>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  llamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          <div class="col-md-6 wow fadeInRight animated" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInRight;">
            <img src="~/assets/img/keep.png" class="img-responsive center-block featured">
          </div>
          </div>
        </div>
      </section>

      <section class="section-layer wow fadeIn animated" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" id='people'>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-content">  
                  <h2 class="title">¿Qué opina la gente?<span>.</span></h2>
              </div>
            </div>
          </div>
          <div class="row row-testimonial">
            <div class="col-md-4">
              <div class="item">
              <img src="~/assets/img/quote-symbol.png" class="symbol">
                <div class="content">
                  <div class="quote">Lorem ipsum dolor sit amet, onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
                  <a href="#!" class="link">Booking.com</a>         
                  <div class="author">
                    <figure><img src="~/assets/img/testimonal01.jpg" class="img-circle"></figure>
                    <div class="name">John Doe <br> <span>CEO</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="item">
              <img src="~/assets/img/quote-symbol.png" class="symbol">
                <div class="content">
                  <div class="quote">Lorem ipsum dolor sit amet, onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
                  <a href="#!" class="link">Booking.com</a>         
                  <div class="author">
                    <figure><img src="~/assets/img/testimonal02.jpg" class="img-circle"></figure>
                    <div class="name">John Doe <br> <span>CEO</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="item">
              <img src="~/assets/img/quote-symbol.png" class="symbol">
                  <div class="content">
                  <div class="quote">Lorem ipsum dolor sit amet, onsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
                  <a href="#!" class="link">Booking.com</a>         
                  <div class="author">
                    <figure><img src="~/assets/img/testimonal03.jpg" class="img-circle"></figure>
                    <div class="name">John Doe <br> <span>CEO</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-layer bg features" id='features'>
        <div class="container">
          <div class="row row-features">
            <div class="col-md-4">
              <div class="media item text-right wow fadeInLeft animated" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                <div class="media-body">
                  <h3 class="media-heading">Empieza una conversación</h3>
                  <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                </div>
                <div class="media-right">
                  <a href="#">
                    <img class="media-object" src="~/assets/img/feature01.png" alt="...">
                  </a>
                </div>
              </div>
              <div class="media item text-right wow fadeInLeft animated" data-wow-delay="0.9s" style="visibility: visible; animation-delay: 0.9s; animation-name: fadeInLeft;">
                <div class="media-body">
                  <h3 class="media-heading">Haz llamadas gratis</h3>
                  <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                </div>
                <div class="media-right">
                  <a href="#">
                    <img class="media-object" src="~/assets/img/feature02.png" alt="...">
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 hidden-sm hidden-xs">
              <img src="~/assets/img/iphone-features.png" class="img-responsive center-block img-feature">
            </div>
            <div class="col-md-4">
              <div class="media item text-left wow fadeInRight animated" data-wow-delay="0.6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInRight;">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object" src="~/assets/img/feature03.png" alt="...">
                  </a>
                </div>
                <div class="media-body">
                  <h3 class="media-heading">Toma fotos</h3>
                  <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                </div>
              </div>
              <div class="media item text-left wow fadeInRight animated" data-wow-delay="1.2s" style="visibility: visible; animation-delay: 1.2s; animation-name: fadeInRight;">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object" src="~/assets/img/feature04.png" alt="...">
                  </a>
                </div>
                <div class="media-body">
                  <h3 class="media-heading">Envía videos</h3>
                  <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <my-subs/>
      <section class="section-layer wow fadeIn animated" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;" id='download'>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div class="section-content">  
                  <img src="~/assets/img/app-logo.png" class="img-responsive center-block app-logo">
                  <h2 class="title text-center">Descarga HeyU ahora<span>.</span></h2>
                  <p class="description text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <br><a href="#!"><img src="~/assets/img/playstore-logo.png" class="img-responsive center-block"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <my-footer/>

  </div>
</template>

<script>
  //Components
  import MyNavbar from '~/components/MyNavbar.vue'
  import MyHero from '~/components/MyHero.vue'
  import MySubs from '~/components/MySubs.vue'
  import MyFooter from '~/components/MyFooter.vue'
  //CSS
  import 'normalize.css/normalize.css'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'animate.css/animate.min.css'
  import 'font-awesome/css/font-awesome.min.css'
  import '~/assets/sass/app.scss'

  export default {
    components: {
      MyNavbar,
      MyHero,
      MySubs,
      MyFooter
    }
  }
</script>

<style>

</style>
