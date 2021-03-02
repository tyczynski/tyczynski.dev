module.exports = {
  async redirects() {
    return [
      {
        source: "/justjoin",
        destination:
          "https://geek.justjoin.it/vue-js-3-0-nowosci-i-zmiany-co-przyniosla-nowa-wersja",
        permanent: false,
      },
      {
        source: "/empressia",
        destination:
          "https://www.empressia.pl/blog/179-obserwowanie-zmian-rozmiaru-elementow-z-resize-observer-api",
        permanent: false,
      },
    ];
  },
};
