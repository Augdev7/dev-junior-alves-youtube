if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, c) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[n]) return;
    let t = {};
    const r = (e) => a(e, n),
      f = { module: { uri: n }, exports: t, require: r };
    s[n] = Promise.all(i.map((e) => f[e] || r(e))).then((e) => (c(...e), t));
  };
}
define(['./workbox-7028bf80'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/BsnkPFfIqoc41Y0TDu8HH/_buildManifest.js',
          revision: '41a8b92cf6fedfb8089ce63cfda25244'
        },
        {
          url: '/_next/static/BsnkPFfIqoc41Y0TDu8HH/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933'
        },
        {
          url: '/_next/static/chunks/155-30f33e26a395dcc2.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/41-14e2201e4abdbff6.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/515-15507875e44f09f1.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/700-aba28384f69f47d5.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/815-3d0b8155020bf739.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/915d2dc2-2901f8849c674cec.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/app/(about)/about/layout-fcd2e6527cf8e6be.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/app/(about)/about/page-0daf3cb27177cb3a.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/app/(blog)/articles/%5BpostId%5D/not-found-fefdce2d207ed39d.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/app/(blog)/articles/%5BpostId%5D/page-8f08b3486de0d20b.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/app/(blog)/articles/page-d0f6fa4d560ba131.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/app/(blog)/articles/page/%5Bpage%5D/page-dfaf782a1c6c15b5.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/app/(categories)/categories/%5B...category%5D/not-found-f151f21f800c82d2.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/app/(categories)/categories/%5B...category%5D/page-31df92a12c0c3bda.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/app/(categories)/categories/page-219064212c400042.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/app/(contact)/contact/page-3a7f32016daf98ba.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/app/(courses)/courses/page-fc431610bb68bdd1.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/app/layout-edb3eacf8db801c2.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/app/page-366e4bc832baba1a.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/main-412caedd08cc35c8.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/main-app-a7c7c41dd1e8575d.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/pages/404-92d12f53b48883f5.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/pages/_app-641861c914e57993.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/pages/_error-eb923a0bc0b1c1ce.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0'
        },
        {
          url: '/_next/static/chunks/webpack-ad075467a7ce32c5.js',
          revision: 'BsnkPFfIqoc41Y0TDu8HH'
        },
        {
          url: '/_next/static/css/300d5120f53aa39e.css',
          revision: '300d5120f53aa39e'
        },
        {
          url: '/_next/static/css/592ce1ccf2ff8b9a.css',
          revision: '592ce1ccf2ff8b9a'
        },
        {
          url: '/_next/static/css/6a4b7c252970cb88.css',
          revision: '6a4b7c252970cb88'
        },
        {
          url: '/_next/static/css/a0fc09313e520942.css',
          revision: 'a0fc09313e520942'
        },
        {
          url: '/_next/static/media/09f7b6b7f4b56175-s.p.woff2',
          revision: 'ceedb0aac1b044daf23883e32006fbed'
        },
        {
          url: '/_next/static/media/2aaf0723e720e8b9-s.p.woff2',
          revision: 'e1b9f0ecaaebb12c93064cd3c406f82b'
        },
        {
          url: '/_next/static/media/9c4f34569c9b36ca-s.woff2',
          revision: '2c1fc211bf5cca7ae7e7396dc9e4c824'
        },
        {
          url: '/_next/static/media/ae9ae6716d4f8bf8-s.woff2',
          revision: 'b0c49a041e15bdbca22833f1ed5cfb19'
        },
        {
          url: '/_next/static/media/b1db3e28af9ef94a-s.woff2',
          revision: '70afeea69c7f52ffccde29e1ea470838'
        },
        {
          url: '/_next/static/media/b967158bc7d7a9fb-s.woff2',
          revision: '08ccb2a3cfc83cf18d4a3ec64dd7c11b'
        },
        {
          url: '/_next/static/media/c0f5ec5bbf5913b7-s.woff2',
          revision: '8ca5bc1cd1579933b73e51ec9354eec9'
        },
        {
          url: '/_next/static/media/d1d9458b69004127-s.woff2',
          revision: '9885d5da3e4dfffab0b4b1f4a259ca27'
        },
        {
          url: '/admin/config.yml',
          revision: '40db9a1076e603101220ce703d427152'
        },
        {
          url: '/admin/index.html',
          revision: '9be304421eb7f77a7a538065fe0388dc'
        },
        {
          url: '/assets/images/0.jpeg',
          revision: '77a5673f7674aa61cf32ee3f3c1365dd'
        },
        {
          url: '/assets/images/01-react-hook-flow.png',
          revision: '04c2f8b3b0b0adc5d0b0154038aa5e6d'
        },
        {
          url: '/assets/images/02-console-01.png',
          revision: 'aee02c5329096ab2afa4c862407623ff'
        },
        {
          url: '/assets/images/03-console-02.png',
          revision: 'e694fe8e69c071b4df6d59577fc756f0'
        },
        {
          url: '/assets/images/04-console-03.png',
          revision: 'a1491f6bcda5abf2470a79f8d1410d11'
        },
        {
          url: '/assets/images/1-nlw-03-1920x1080.jpg',
          revision: '678f073b65af45262f7831b38b5c3cf3'
        },
        {
          url: '/assets/images/1-reactrodando.png',
          revision: '6aaaa8bc1349c114ee721cade7707097'
        },
        {
          url: '/assets/images/1-servidor-antigo.png',
          revision: '9c5eb2eec6f45eb2c578ca828dd6bdfa'
        },
        {
          url: '/assets/images/1.jpg',
          revision: '1bf90d02df8aa9a94c9336603904ea41'
        },
        {
          url: '/assets/images/1.png',
          revision: '6c91c3440e6c0db43cef22099c24f7a2'
        },
        {
          url: '/assets/images/2-api-rest-example.png',
          revision: 'bc93fa7a07462e04ca0397955430cbf0'
        },
        {
          url: '/assets/images/2-vscode.png',
          revision: 'e19fa7d205895ab0969d7b0f5e78fe98'
        },
        {
          url: '/assets/images/2.png',
          revision: 'f81ad14e2ead5507555cbd19f6026a28'
        },
        {
          url: '/assets/images/3-indexhtml.png',
          revision: 'c054c3caf5c9cec7610e27c3b73a31c6'
        },
        {
          url: '/assets/images/3.png',
          revision: '2450ad1d0931579e98e08b4bab2354b8'
        },
        {
          url: '/assets/images/4-indexjs.png',
          revision: 'c97de22687567765a7deb92d5fcbdd0b'
        },
        {
          url: '/assets/images/4.png',
          revision: '8fc19d08ecccf1ba67870d7b504d35ef'
        },
        {
          url: '/assets/images/5-appeditado.png',
          revision: 'a2acb0d9c3ad58767c4b295aeca771be'
        },
        {
          url: '/assets/images/6-appeditado.png',
          revision: '7480bf980a863293327d7566ddbd7c2b'
        },
        {
          url: '/assets/images/banner-youtube.png',
          revision: '06f207bbe96165fa2dd2b3add122ba57'
        },
        {
          url: '/assets/images/ben-white-qdy9ahp0mto-unsplash.jpg',
          revision: '61a98b78a89a45b6c3906db480c778ba'
        },
        {
          url: '/assets/images/bg-teste.png',
          revision: 'f62f75e18b1e405955f46eeb434e170c'
        },
        {
          url: '/assets/images/capa-0.jpg',
          revision: 'cd601a2e6eea65a818f9df280129aea6'
        },
        {
          url: '/assets/images/capa.jpg',
          revision: '35c8f7f517715efef2a693d1d152d0bf'
        },
        {
          url: '/assets/images/chi-lok-tsang-koxxmfunspa-unsplash.jpeg',
          revision: '16464d65f8a8c21df51bc4311fbf8ea2'
        },
        {
          url: '/assets/images/christopher-gower-m_hrflhgabo-unsplash.jpeg',
          revision: '395b842905e9bbece60c0c6e10b4059b'
        },
        {
          url: '/assets/images/compound-effect.jpg',
          revision: '19c6facb0b917a4b16db1d2e868ca88c'
        },
        {
          url: '/assets/images/cover.jpg',
          revision: '1aa364f185b711794ab420940cb89c4a'
        },
        {
          url: '/assets/images/criatividade.jpg',
          revision: 'ce4e639f3330811f3f47b6c8ad781286'
        },
        {
          url: '/assets/images/david-travis-wc6mj0krzgw-unsplash.jpg',
          revision: '3338d2d8702e8c07f9be093f8f2b4146'
        },
        {
          url: '/assets/images/devin-pickell-1eRS74C-alQ-unsplash.jpeg',
          revision: '3e96a90eaaedf2a49e8fdec5c778566f'
        },
        {
          url: '/assets/images/diana-polekhina-dw6tvk_puxm-unsplash.jpg',
          revision: '322906e27a50a980c8ea92595e326411'
        },
        {
          url: '/assets/images/dim-hou-bjd3khntikg-unsplash.jpeg',
          revision: 'b969d767ff593aa6b4a873235b8c7629'
        },
        {
          url: '/assets/images/douglas-lopes-ehyv_xoz4ia-unsplash.jpeg',
          revision: '21c5dcd3bc552798086ffca8f9fefcb0'
        },
        {
          url: '/assets/images/download.png',
          revision: 'e84f5224f289fd4377c78512af74096f'
        },
        {
          url: '/assets/images/end.jpg',
          revision: '257e0a78744c35539f905a0479fbc983'
        },
        {
          url: '/assets/images/eugen-str-crhsiry3jwy-unsplash.jpeg',
          revision: 'a73bb2ffa1565d0d7d3134d609016707'
        },
        {
          url: '/assets/images/habits.jpg',
          revision: '1b4cd25fde8f0b77491f286d8010324e'
        },
        {
          url: '/assets/images/habitsapp.jpg',
          revision: '9f3c0343fea03f7d949f79c1180bd53f'
        },
        {
          url: '/assets/images/ilustracao.png',
          revision: '89d2a9f97fe413c7af66fd3ad49e9e68'
        },
        {
          url: '/assets/images/image-error.png',
          revision: '8ec6b6d8cd7c5e43978dbf1cd530a6b0'
        },
        {
          url: '/assets/images/imagem1.png',
          revision: '6d7a03fa79b9abb78b5ac524ed45492f'
        },
        {
          url: '/assets/images/imagem2.png',
          revision: 'c64daef00548359a762a8b5426e1056c'
        },
        {
          url: '/assets/images/imagem3.png',
          revision: '165173ac004071814231f75973695743'
        },
        {
          url: '/assets/images/imagem4.png',
          revision: '3debdafb68e70ed8d1845b883d22b82b'
        },
        {
          url: '/assets/images/imagemaddbranco.png',
          revision: 'e9688e6a5d10ba2b3b866e7417ae14c7'
        },
        {
          url: '/assets/images/imagemcomponentes copy.jpg',
          revision: 'defb968824d9550e0d3a034b28d6d51f'
        },
        {
          url: '/assets/images/imagemcomponentes.jpg',
          revision: 'defb968824d9550e0d3a034b28d6d51f'
        },
        {
          url: '/assets/images/imagemfeitacomponentes.png',
          revision: '9c0c3093bba59cfcf4f58fbd167866d7'
        },
        {
          url: '/assets/images/img2.png',
          revision: 'bf8cf83e80258b6e060016dd561ea621'
        },
        {
          url: '/assets/images/img3.png',
          revision: '2181d2064185ad8ac4d4f01ed6f9f1ff'
        },
        {
          url: '/assets/images/insomina-1.png',
          revision: 'bd5d42453aafba64d8c7ea2e52ba47c5'
        },
        {
          url: '/assets/images/insomina-2.png',
          revision: '21ddf4017f1b22e8fcb92a2e85793a91'
        },
        {
          url: '/assets/images/insomina-3.png',
          revision: 'bdb63b7badeb15b482161a2afc980230'
        },
        {
          url: '/assets/images/isaac-chou-7aqiapdxfzq-unsplash.jpg',
          revision: 'c1aa6ff2e2285a3c9632148e77878078'
        },
        {
          url: '/assets/images/iteration.jpg',
          revision: 'a0b574a898d2dbb51baa3582c857c094'
        },
        {
          url: '/assets/images/james-harrison-vpoexr5wmr4-unsplash.jpg',
          revision: '015106147c0e061750584920c2e5c664'
        },
        {
          url: '/assets/images/jsmutator.jpg',
          revision: '929c0825dd91df9740d0b81735581403'
        },
        {
          url: '/assets/images/jsx.jpg',
          revision: '1471ff30cd0479a32de5fe048042c77e'
        },
        {
          url: '/assets/images/kelly-sikkema-pxl_s152jnm-unsplash.jpeg',
          revision: '61886be7de5f7d36e2b4dfa0cf9b7afd'
        },
        {
          url: '/assets/images/lautaro-andreani-uysbcu9rp3y-unsplash.jpeg',
          revision: 'ba26fd44a5be792048b4702c5401fa2d'
        },
        {
          url: '/assets/images/leon-dewiwje-lddmtgf89gu-unsplash.jpeg',
          revision: '35f516f3203a3e321aea4329efd41d85'
        },
        {
          url: '/assets/images/nick-morrison-fhnnjk1yj7y-unsplash.jpg',
          revision: '6392f4a679a6e85f8acb46a5b5bcf0b9'
        },
        {
          url: '/assets/images/piramide-de-glasser.png',
          revision: 'c5fdd560e44ba1b795ea5fadf4c5b935'
        },
        {
          url: '/assets/images/pmv-chamara-qomic8mcr0y-unsplash.jpeg',
          revision: '371697bb8c217eb21ad4f4c61e5de77c'
        },
        {
          url: '/assets/images/profile.png',
          revision: '8ecbbcfeb108cb0d18a18f57c82686d2'
        },
        {
          url: '/assets/images/rocket-capa.jpg',
          revision: 'fd93a12e947f4f3c096467b7054fd10c'
        },
        {
          url: '/assets/images/safar-safarov-msn8tfhj0is-unsplash.jpg',
          revision: 'cb176140f9d33bb90c8149dc51cc88fb'
        },
        {
          url: '/assets/images/screen-shot-2020-10-13-at-08.59.50.png',
          revision: 'f4bcdc0a6ad61222f26ac3b66fe486eb'
        },
        {
          url: '/assets/images/screen-shot-2020-12-31-at-6.22.42-am.png',
          revision: '6597552f7930436209263b11c955b1a6'
        },
        {
          url: '/assets/images/screen-shot-2020-12-31-at-6.33.18-am.png',
          revision: 'bee9fd5f25722f10f2dfb191b61c7dee'
        },
        {
          url: '/assets/images/screen-shot-2021-11-20-at-7.11.21-am.png',
          revision: '617af902c47287c73b1a70893a9c7eef'
        },
        {
          url: '/assets/images/screen-shot-2021-12-30-at-8.27.40-am.png',
          revision: '81af87b5256c91f3ac5ebf917e9b51dc'
        },
        {
          url: '/assets/images/screen-shot-2021-12-31-at-8.49.12-am.png',
          revision: '49f9b496aa14194a0b98d5ba0f30898a'
        },
        {
          url: '/assets/images/screen-shot-2022-02-10-at-7.40.14-am.png',
          revision: '3aff122125af7a5edb62813b438f57ed'
        },
        {
          url: '/assets/images/screen-shot-2022-02-10-at-7.41.11-am.png',
          revision: '37ec890fe09e0aa4e2f2bb57d501f106'
        },
        {
          url: '/assets/images/screen-shot-2022-10-17-at-8.28.22-am.png',
          revision: '2da9f81523ef10e753470d9f00d4ca34'
        },
        {
          url: '/assets/images/screen-shot-2022-10-17-at-8.28.23-am.png',
          revision: '2da9f81523ef10e753470d9f00d4ca34'
        },
        {
          url: '/assets/images/screen-shot-2022-10-17-at-8.44.10-am.png',
          revision: '34ded7da922b1cc12de3220def95361f'
        },
        {
          url: '/assets/images/sessoes-eua.png',
          revision: '4043f729d279e9729f4ff7f22161fb32'
        },
        {
          url: '/assets/images/sincerely-media-lq3go6mnpzo-unsplash.jpg',
          revision: 'da2fca11bca87e51f907173af58f8ce7'
        },
        {
          url: '/assets/images/tatiana-rodriguez-txzjvxnwyq4-unsplash.jpeg',
          revision: '07b597c2ad717bdc8734a8966c223e6d'
        },
        {
          url: '/assets/images/tdd.png',
          revision: '585f62b6f4ea721b77b8c596f491d793'
        },
        {
          url: '/assets/images/todolist.png',
          revision: 'd4bbac18d54f3326366b5449eb625309'
        },
        {
          url: '/assets/images/unicornio.png',
          revision: 'c76a2a97380a6f840dae8f753563e505'
        },
        {
          url: '/assets/images/vivencia.jpg',
          revision: '769297a1736ed5ebabb7d5a8eb2ae2e9'
        },
        {
          url: '/assets/images/yancy-min-842ofhc6mai-unsplash.jpg',
          revision: '82d3ef752c36817ca811b5bf88636e99'
        },
        {
          url: '/assets/images/yannik-mika-gjfbkfi874o-unsplash.jpeg',
          revision: 'cfb5647d6f46f03717815593867c24d6'
        },
        { url: '/feed.xml', revision: '1bdb3934d1d402698958e588d4524f0d' },
        {
          url: '/img/darth-vader.jpg',
          revision: 'f9e7bf04c2157a995e891755cc1888f4'
        },
        { url: '/img/icon.png', revision: '09335648392979ad8dc31af871cc45f1' },
        {
          url: '/img/kratos.jpg',
          revision: '734d4f1543fe32c916cf209e606ad918'
        },
        { url: '/manifest.json', revision: '856cf3f23bccf0ecb16c2e478b62fe91' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/robots.txt', revision: '72cd14ec16ce234ca1ed198fcd149e70' },
        { url: '/sitemap-0.xml', revision: '1b3a4f54b4225a806e13ae3d46c9e1b1' },
        { url: '/sitemap.xml', revision: 'af74054fdbadfe089ddea198d0205a9f' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers
                  })
                : s
          }
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })
        ]
      }),
      'GET'
    );
});
