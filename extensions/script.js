function injectHeader() {
  let bannerMarkup = injectBanners();

  let extension = {
    title: 'TabX',
    logo: '/assets/extensions/tabx/logo.png',
    storeLink: 'https://chrome.google.com/webstore/detail/tabx/eminfcgojjkkiodcjhcllcfielmgfmhi?hl=en',
    description: 'TabX chrome extension enhances the browsing experience by changing the default search engine and add utilities such as ToDos in your browser new tab'
  };

  let { title, description, logo, storeLink } = extension;

  const markup = `
    <div class="flex flex-col sm:flex-row container mx-auto items-center">
      <div class="w-full sm:w-2/5 m-10">
        <h2 class="text-4xl"> 
          <img src=${logo} class="w-20 mb-4"> 
          ${title} 
        </h2>

        <div class="mt-10 text-3xl font-light font-running">
          ${description}
        </div>
        
        <div class="mt-10">
          <a
            href=${storeLink}
            target="_blank"
            class="border-4 inline-block p-3 px-6 text-xl border-white bg-white text-black hover:bg-black hover:text-white"
          >
            Get TabX
          </a>
        </div>
      </div>
      <div class="w-full sm:w-3/5 hidden sm:block"> ${bannerMarkup} </div>
    </div>
  `;

  document.getElementById('header').innerHTML = markup;
}

function injectBanners() {
  const banners = [
    '/assets/extensions/tabx/store.png', 
    // '/assets/extensions/tabx/b2.png', '/assets/extensions/tabx/b3.png'
  ];
  let markup = '';

  for (let index = 0; index < banners.length; index++) {
    const banner = banners[index];
    
    markup += `<img id="banner${index}" src="${banner}" alt="banner" class="w-5/6 rounded border banner-images" />`;
  }

  return markup;
}

function _injectFeatures() {
  let highlights = [{
    title: 'Refreshed tab experience',
    description: `Make you browsing and search experience a delight one by installing NewTaber extension.
        This extension will change the default search engine in your browser to <i><b>WebSearches</b></i>! to make it more easier to find
        things you are searching for`,
    illustration: '/assets/extensions/tabx/b1.png'
  }, {
    title: 'Never miss any ToDo',
    description: `Track all your ToDo at one place and never miss your ToDo. Add all your ToDo in the new tab of your browser and manage them 
        in the new tab itself`,
    illustration: '/assets/extensions/tabx/b3.png'
  }];

  let highlightsContainer = document.getElementById('highlights');
  let markup = injectFeatures(highlights);

  highlightsContainer.innerHTML = markup;
}