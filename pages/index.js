import Head from 'next/head'

const IndexPage = () => (
  <>
    <Head>
      <title>tyczynski.dev</title>
    </Head>

    <main style={{
      padding: 20,
    }}>
      <h1>
        Przemysław Tyczyński
      </h1>

      <h2>Front-end developer</h2>

      <p >
        Contact me: <a href="mailto:przemyslaw@tyczynski.pl">przemyslaw@tyczynski.pl</a>
      </p>

      <hr />
      <p>Find me on:</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/ptyczynski/" target="_blank" rel="noopener">LinkedIn</a></li>
        <li><a href="https://www.github.com/tyczynski/" target="_blank" rel="noopener">GitHub</a></li>
      </ul>

      <hr />
      <p>My publications (that people who know the Polish language):</p>
      <ul>
        <li><a href="https://geek.justjoin.it/vue-js-3-0-nowosci-i-zmiany-co-przyniosla-nowa-wersja" target="_blank" rel="noopener">Vue.js 3.0 – nowości i zmiany. Co przyniosła nowa wersja? </a></li>
        <li><a href="https://www.empressia.pl/blog/179-obserwowanie-zmian-rozmiaru-elementow-z-resize-observer-api" target="_blank" rel="noopener">Obserwowanie zmian rozmiaru elementów z Resize Observer API</a></li>
      </ul>

      <p style={{
        color: 'hsl(0, 0%, 100%)'
      }}>
        One day I'll be a beautiful webpage! :D
      </p>
    </main>
  </>
);

export default IndexPage;
