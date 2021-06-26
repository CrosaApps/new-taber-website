function injectFeatures() {
  let highlights = [{
    title: 'Security is our foremost concern',
    description: `Web security has been a challenging bubble since the initial evolution of web. We at NewTaber, strive to make t
        our extension secure by default. we didn't take security as a feature but as a core value for all of our extensions.`,
    illustration: './assets/i4.png'
  }, {
    title: 'Quality is in our roots',
    description: `Quality is built into our roots. we always place customers over the profit. Making customers happy is our ultimate
        goal. We firmly believe that Quality product will make our customer happy.`,
    illustration: './assets/i1.png'
  }, {
    title: 'Your extension will work everywhere',
    description: `With increasing number of browser vendors, it is essential to make sure our chrome extension will work in all 
        major browser vendors. We innovate at NewTaber to make sure the extension will work in all major browser without any major
        revamps`,
    illustration: './assets/i2.png'
  }, {
    title: 'We are at your service, Always',
    description: `We always listens to our customers. Be it a feedback, suggestion, complaints, just send us a quick mail, we'll 
        respond with necessary details in a timely manner. We are always glad to assist you`,
    illustration: './assets/i3.png'
  }];

  let highlightsContainer = document.getElementById('highlights');
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

  highlightsContainer.innerHTML = markup;
}


function injectBrowserList() {
  let browsers = ['./assets/chrome.png', './assets/ff.png', './assets/safari.png']

  let markup = '';

  for (let index = 0; index < browsers.length; index++) {
    const browser = browsers[index];

    markup += `
      <div class="bg-green-200 rounded-lg p-4 w-1/12 inline-block mx-5">
        <img src=${browser} alt="" class="inline">
      </div>
    `;
  }

  document.getElementById('browserlist').innerHTML = markup;
}