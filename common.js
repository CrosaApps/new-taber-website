function injectFooter() {
  document.querySelector('footer').innerHTML = `
  <div class="bg-black text-white p-4">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <div>
          <div class="flex flex-col md:flex-row flex-wrap footer-item">
            <a href="/">
              Home
            </a>
            <a href="/privacy.html">
              Privacy Policy
            </a>
            <a href="/tos.html">
              Terms of Service
            </a>
            <a href="/about.html">
              About Us
            </a>
            <a href="/faq">
              FAQ
            </a>
          </div>

          <!-- <div class="mt-8">
              Site Created and maintained by <a href="https://bit.ly/crosaapps" class="underline" target="_blank">Crosa Apps Ltd.</a>
            </div>
            <div>
              © 2021 | NewTaber
            </div> -->
        </div>

        <div class="flex items-center">
          <img src="https://cdn.glitch.com/dceeace9-496f-4590-920c-4ca239e220fe%2Flogo.png?v=1612692524432"
            class="w-8 h-8" />
          <span class="text-xl ml-4">New Taber</span>
        </div>
      </div>
    </div>
  </div>
  `;
}

function injectPageHeader(pageTitle) {
  document.querySelector('header').innerHTML = `
  <section class="bg-black text-white  p-8">
    <div class="container mx-auto">
      <div class="flex flex-col justify-center items-center mt-10">
        <img src="https://cdn.glitch.com/dceeace9-496f-4590-920c-4ca239e220fe%2Flogo.png?v=1612692524432"
          class="w-20 h-20" />
        <span class="text-3xl mt-8">${pageTitle} &bull; New Taber</span>
      </div>
    </div>
  </section>
  `;
}