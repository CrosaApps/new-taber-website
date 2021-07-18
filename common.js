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
          <span class="text-xl ml-4">NewTaber</span>
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
        <span class="text-3xl mt-8">${pageTitle} &bull; NewTaber</span>
      </div>
    </div>
  </section>
  `;
}

function injectFeatures(highlights) {
  let markup = '';

  for (let index = 0; index < highlights.length; index++) {
    const highlight = highlights[index];
    let liftSideImage = index % 2 != 0;

    let _markup = '';
    let imgMarkup = `<img
            src=${highlight.illustration}
            class="w-2/4 md:w-2/5 rounded m-4 mb-8 md:m-0" />`;

    let contentMarkup = `<div class="w-3/4 md:w-3/5 text-2xl mx-8 font-running ${liftSideImage && 'text-right'}">
            <h3 class="mb-8 text-3xl font-running-bold">
                ${highlight.title}
            </h3>
            ${highlight.description}
            </div>`;

    _markup = `${imgMarkup}${contentMarkup}`;

    markup += `
        <div class="flex flex-col md:${liftSideImage ? 'flex-row-reverse' : 'flex-row'} mb-14 items-center">
            ${_markup}
        </div>
        `
  }

  return markup;
}