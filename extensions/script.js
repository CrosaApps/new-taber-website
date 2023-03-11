function injectHeader(extensionName) {
  let bannerMarkup = injectBanners(extensionName);

  let extensions = [{
    title: 'Fox Tab',
    id: 'foxtab',
    logo: '/assets/extensions/foxtab/logo.png',
    storeLink: 'https://chrome.google.com/webstore/detail/fox-tab/pecgmnihbokhfnemdmjbkhcgpehlcokj',
    description: 'Fox Tab chrome extension enhances the browsing experience by changing the default search engine and add utilities such as ToDos in your browser new tab'
  }, {
    title: 'Jot On Tab',
    id: 'jotontab',
    logo: '/assets/extensions/jot-on-tab/logo.png',
    storeLink: 'https://chrome.google.com/webstore/detail/jot-on-tab/mmhjlcabfcfjikojifodkhiekphghemo?hl=en',
    description: 'Jot On Tab chrome extension enhances the browsing experience by changing the default search engine and enables option to add notes in your browser new tab'
  }];

  let extension = extensions.find(ext => ext.id === extensionName);

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
            class="
              border-4 inline-block p-3 px-6 text-xl 
              border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
          >
            Get ${title}
          </a>
        </div>
      </div>
      <div class="w-full sm:w-3/5 hidden sm:block"> ${bannerMarkup} </div>
    </div>
  `;

  document.getElementById('header').innerHTML = markup;
}

function injectBanners(extensionName) {
  const bannersMap = {
    foxtab: ['/assets/extensions/foxtab/store.png'],
    jotontab: ['/assets/extensions/jot-on-tab/store.png']
  };

  const banners = bannersMap[extensionName];

  let markup = '';

  for (let index = 0; index < banners.length; index++) {
    const banner = banners[index];
    
    markup += `<img id="banner${index}" src="${banner}" alt="banner" class="w-5/6 rounded border banner-images" />`;
  }

  return markup;
}

function _injectFeatures(extensionName) {
  const highlightsMap = {
    foxtab: [{
      title: 'Refreshed tab experience',
      description: `Make you browsing and search experience a delight one by installing Fox Tab extension.
          This extension will change the default search engine in your browser to <i><b>WebSearches</b></i>! to make it more easier to find
          things you are searching for`,
      illustration: '/assets/extensions/foxtab/b1.png'
    }, {
      title: 'Never miss any ToDo',
      description: `Track all your ToDo at one place and never miss your ToDo. Add all your ToDo in the new tab of your browser and manage them 
          in the new tab itself`,
      illustration: '/assets/extensions/foxtab/b3.png'
    }],

    jotontab: [{
      title: 'Refreshed tab experience',
      description: `Make you browsing and search experience a delight one by installing Jot On Tab extension.
        This extension will change the default search engine in your browser to <i><b>Bing</b></i>! to make it more easier to find
        things you are searching for`,
      illustration: '/assets/extensions/jot-on-tab/b1.png'
    }, {
      title: 'Never miss any thoughts',
      description: `Track all your notes at one place and never miss any of your thoughts. Add all your notes, update, delete them in the new tab of your browser and manage them 
      in the new tab itself`,
      illustration: '/assets/extensions/jot-on-tab/b2.png'
    }]
  };

  const highlights = highlightsMap[extensionName];

  let highlightsContainer = document.getElementById('highlights');
  let markup = injectFeatures(highlights);

  highlightsContainer.innerHTML = markup;
}