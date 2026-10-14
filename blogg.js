/* Bloggen: skrivs för hand och läses av både den privata och den publika upplagan. Inga belopp ur portföljen, inga
   regler och inga namn hör hemma här.
   Per innehav:
   - datum, sv, en, kallor: senaste rapportmottagandet eller viktiga händelsen (E-A-R), rutan Senaste. Siffrorna är
     kontrollerade mot källorna 2026-10-05; reaktionerna är egna beräkningar ur stängningskurser (Yahoo Finance): aktien
     mot S&P 500 i USA och mot STOXX 600 för Siemens Energy, stängning till stängning. Ett rapportdatum som bolaget inte
     har bekräftat skrivs "väntas" (Palantir 2 november är Yahoos uppskattning; Nvidia har inte publicerat 17 november).
   - rubrik: händelsen som rubrik. Förstasidans huvudrubrik väljer den händelse som ligger närmast upplagans dag, den här
     bakåt (högst 30 dagar) eller kalenderns nästa rapport framåt; skriv rubriken när händelsen skrivs.
   - tankar: korta inlägg, ett per datum, nyast först eller i valfri ordning (sidan sorterar). Ett nytt inlägg är en ny
     rad överst: { datum: 'ÅÅÅÅ-MM-DD', sv: '...', en: '...' }. De första inläggen (2026-10-04) är positionskortens ord
     om medelvärdena, ordagrant, med vecko- eller dagsgrafen utskriven framför.
   Applied Materials, Amazon och Global Water Resources (köpta 9 okt, inlagda 2026-10-14): siffrorna ur bolagens 8-K,
   lästa på sec.gov 2026-10-14; alla tre rapporterna kom efter stängning (SEC:s mottagning 16:03, 16:06 och 20:02 New
   York-tid), så reaktionen är dagen efter. Inga tankar, eftersom ägaren inte har skrivit några. Bitcoin har inga
   rapporter: texten säger hur innehavet ägs och räknas (valour.com, läst 2026-10-14), och har ingen rubrik, så att den
   inte tävlar om förstasidans huvudrubrik. */
window.PORTFOLJ_BLOGG = {
  uppdaterad: '2026-10-14',
  innehav: {
    ENR: {
      datum: '2026-08-05',
      rubrik: { sv: 'Siemens Energy slog förväntningarna, men aktien stod still', en: 'Siemens Energy beat expectations, but the shares went nowhere' },
      sv: 'Rapporten 5 augusti slog förväntningarna: ordern blev 6 % och vinsten 18 % högre än analytikerna väntat. Aktien steg 5 % i öppningen men stängde oförändrad, andra rapporten i rad som marknaden inte belönade. Nästa rapport 11 november.',
      en: 'The 5 August report beat expectations: orders came in 6% and profit 18% above analyst forecasts. The shares opened 5% higher but closed flat, the second report in a row the market did not reward. Next report 11 November.',
      kallor: [
        { sv: 'Siemens Energy, rapport Q3 2026', en: 'Siemens Energy, Q3 FY2026 release', url: 'https://www.siemens-energy.com/global/en/home/press-releases/earnings-release-q3-fy-2026.html' },
        { sv: 'Siemens Energys sammanställning av analytikernas förväntningar', en: "Siemens Energy's consensus summary", url: 'https://assets.siemens-energy.com/dam/42012d6d-c863-4d27-9045-b49600ece6a6/2026-07-29-SE-Consensus_Summary---Q3-FY26_FINAL-pdf_Original%20file.pdf' },
      ],
      tankar: [
        { datum: '2026-10-04',
          sv: 'Veckografen: bra reaktion från SMA 52. Dagsgrafen: en räddning av SMA 252. Vi ligger på gränsen verkligen.',
          en: 'Weekly chart: a good reaction from the SMA 52. Daily chart: a rescue at the SMA 252. We really are right at the edge.' },
      ],
    },
    PLTR: {
      datum: '2026-08-03',
      rubrik: { sv: 'Palantir steg 30 % efter rapporten', en: 'Palantir rose 30% after its report' },
      sv: 'Rapporten 3 augusti: intäkterna steg 93 % till 1,94 miljarder dollar och bolaget höjde helårsprognosen till 8,15 miljarder. Aktien steg 30 % dagen efter, 28 procentenheter mer än S&P 500. Nästa rapport väntas 2 november.',
      en: 'The 3 August report: revenue rose 93% to $1.94 billion and the company raised its full-year forecast to $8.15 billion. The shares rose 30% the next day, 28 percentage points more than the S&P 500. The next report is expected on 2 November.',
      kallor: [
        { sv: 'Palantir, rapport Q2 2026 (SEC 8-K)', en: 'Palantir, Q2 2026 release (SEC 8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0001321655/000132165526000039/a2026q2ex991pressrelease.htm' },
      ],
      tankar: [
        { datum: '2026-10-04',
          sv: 'Veckografen: den gav nästan en reaktion på SMA 126 men vi är äntligen över SMA 52. Dagsgrafen: vi är äntligen över SMA 252.',
          en: 'Weekly chart: it almost reacted at the SMA 126, but we are finally above the SMA 52. Daily chart: we are finally above the SMA 252.' },
      ],
    },
    NVDA: {
      datum: '2026-08-26',
      rubrik: { sv: 'Nvidia steg 9 % efter rapporten', en: 'Nvidia rose 9% after its report' },
      sv: 'Rapporten 26 augusti: intäkterna steg 106 % till 96 miljarder dollar och prognosen för nästa kvartal blev 108 miljarder. Aktien steg 9 % dagen efter, 8 procentenheter mer än S&P 500. Nästa rapport väntas 17 november.',
      en: 'The 26 August report: revenue rose 106% to $96 billion and the forecast for next quarter is $108 billion. The shares rose 9% the next day, 8 percentage points more than the S&P 500. The next report is expected on 17 November.',
      kallor: [
        { sv: 'Nvidia, rapport Q2 räkenskapsåret 2027 (SEC 8-K)', en: 'Nvidia, Q2 fiscal 2027 release (SEC 8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000073/q2fy27pr.htm' },
      ],
      tankar: [
        { datum: '2026-10-04',
          sv: 'Veckografen: senaste veckorna har vi respekterat fint SMA 52. Dagsgrafen: SMA 252 har varit anledningen till att hypotesen lever.',
          en: 'Weekly chart: in recent weeks we have respected the SMA 52 nicely. Daily chart: the SMA 252 is the reason the hypothesis is still alive.' },
      ],
    },
    EME: {
      datum: '2026-07-30',
      rubrik: { sv: 'Emcor steg 19 % på rapporten', en: 'Emcor rose 19% on its report' },
      sv: 'Rapporten 30 juli: intäkterna steg 20 %, orderstocken 44 % och bolaget höjde helårsprognosen. Aktien steg 19 % samma dag, 18 procentenheter mer än S&P 500. Nästa rapport i slutet av oktober.',
      en: 'The 30 July report: revenue rose 20%, the order backlog 44% and the company raised its full-year forecast. The shares rose 19% the same day, 18 percentage points more than the S&P 500. Next report in late October.',
      kallor: [
        { sv: 'Emcor, rapport Q2 2026 (SEC 8-K)', en: 'Emcor, Q2 2026 release (SEC 8-K)', url: 'https://www.sec.gov/Archives/edgar/data/0000105634/000010563426000112/eme-ex991_2026630xq2.htm' },
      ],
      tankar: [
        { datum: '2026-10-04',
          sv: 'Veckografen: EME respekterade SMA 52 vilket räddade hela hypotesen. Dagsgrafen: EME respekterade SMA 252 vilket räddade hela hypotesen.',
          en: 'Weekly chart: EME respected the SMA 52, which saved the whole hypothesis. Daily chart: EME respected the SMA 252, which saved the whole hypothesis.' },
      ],
    },
    FLKR: {
      datum: '2026-10-01',
      rubrik: { sv: 'Sydkoreas export slog rekord i september', en: "South Korea's exports hit a record in September" },
      sv: '1 oktober: Sydkoreas export slog rekord i september, +84 % till 121 miljarder dollar, och chipexporten gick för första gången över 60 miljarder. Koreas börs steg 2 % samma dag. Nästa viktiga datum är centralbankens räntebesked 22 oktober.',
      en: "1 October: South Korea's exports hit a record in September, up 84% to $121 billion, and chip exports passed $60 billion for the first time. Korea's stock market rose 2% the same day. The next key date is the central bank's rate decision on 22 October.",
      kallor: [
        { sv: 'The Korea Times, 1 oktober 2026', en: 'The Korea Times, 1 October 2026', url: 'https://www.koreatimes.co.kr/economy/20261001/koreas-sept-exports-hit-record-1209-bil-on-robust-chip-sales' },
      ],
      tankar: [
        { datum: '2026-10-04',
          sv: 'Veckografen: SMA 52 ligger på ett bra avstånd från priset och är den viktigaste nivån just nu. Dagsgrafen: bra avstånd från SMA 52. SMA 21 har kramat priset en längre tid, vilket är okej. SMA-strukturen stödjer fortfarande den bullish hypotesen.',
          en: 'Weekly chart: the SMA 52 is at a good distance from the price and is the most important level right now. Daily chart: a good distance from the SMA 52. The SMA 21 has hugged the price for a long time, which is fine. The SMA structure still supports the bullish hypothesis.' },
      ],
    },
    AMAT: {
      datum: '2026-08-13',
      rubrik: { sv: 'Applied Materials föll 5 % trots rekordrapport', en: 'Applied Materials fell 5% despite a record report' },
      sv: 'Rapporten 13 augusti: rekordintäkter på 9,12 miljarder dollar, 25 % mer än året innan, och prognosen för nästa kvartal blev 10,25 miljarder. Aktien föll ändå 5 % dagen efter, medan S&P 500 nästan stod still. Nästa rapport väntas i mitten av november.',
      en: 'The 13 August report: record revenue of $9.12 billion, 25% more than a year earlier, and a forecast of $10.25 billion for the next quarter. The shares still fell 5% the next day, while the S&P 500 barely moved. The next report is expected in mid-November.',
      kallor: [
        { sv: 'Applied Materials, rapport Q3 räkenskapsåret 2026 (SEC 8-K)', en: 'Applied Materials, Q3 fiscal 2026 release (SEC 8-K)', url: 'https://www.sec.gov/Archives/edgar/data/6951/000162828026056699/exhibit991q32026earningsre.htm' },
      ],
      tankar: [],
    },
    AMZN: {
      datum: '2026-07-30',
      rubrik: { sv: 'Amazon steg 15 % efter rapporten', en: 'Amazon rose 15% after its report' },
      sv: 'Rapporten 30 juli: försäljningen steg 20 % till 200,6 miljarder dollar och molntjänsten AWS växte 37 %. Rörelseresultatet blev 27,5 miljarder mot 19,2 miljarder året innan. Aktien steg 15 % dagen efter, 15 procentenheter mer än S&P 500. Nästa rapport väntas i slutet av oktober.',
      en: 'The 30 July report: net sales rose 20% to $200.6 billion and the AWS cloud business grew 37%. Operating income was $27.5 billion, against $19.2 billion a year earlier. The shares rose 15% the next day, 15 percentage points more than the S&P 500. The next report is expected in late October.',
      kallor: [
        { sv: 'Amazon, rapport Q2 2026 (SEC 8-K)', en: 'Amazon, Q2 2026 release (SEC 8-K)', url: 'https://www.sec.gov/Archives/edgar/data/1018724/000101872426000024/amzn-20260630xex991.htm' },
      ],
      tankar: [],
    },
    GWRS: {
      datum: '2026-08-12',
      rubrik: { sv: 'Global Water Resources steg 17 % efter rapporten', en: 'Global Water Resources rose 17% after its report' },
      sv: 'Rapporten 12 augusti: intäkterna steg 25 % till 17,8 miljoner dollar, varav 2,1 miljoner från avtal om ny infrastruktur; de reglerade intäkterna steg 10 %. Anslutningarna blev 5,8 % fler, mest genom köpet av sju vattensystem i Tucson. Aktien steg 17 % dagen efter, 16 procentenheter mer än S&P 500. Nästa rapport väntas i november.',
      en: 'The 12 August report: revenue rose 25% to $17.8 million, of which $2.1 million came from agreements on new infrastructure; regulated revenue rose 10%. Connections grew 5.8%, mostly through the purchase of seven water systems in Tucson. The shares rose 17% the next day, 16 percentage points more than the S&P 500. The next report is expected in November.',
      kallor: [
        { sv: 'Global Water Resources, rapport Q2 2026 (SEC 8-K)', en: 'Global Water Resources, Q2 2026 release (SEC 8-K)', url: 'https://www.sec.gov/Archives/edgar/data/1434728/000162828026056434/earningsrelease2026-q2.htm' },
      ],
      tankar: [],
    },
    BTC: {
      datum: '2026-10-09',
      reaktion: false,
      sv: 'Köpt 9 oktober som Valour Bitcoin Zero SEK på Spotlight Stock Market, där varje andel är 0,0001 bitcoin och förvaltningsavgiften är noll. Bitcoin har inga rapporter, så sidan tar priset vid New Yorks stängning, samma klockslag som aktierna, och ställer det mot samma insats i MSCI World.',
      en: 'Bought on 9 October as Valour Bitcoin Zero SEK on the Spotlight Stock Market, where each unit is 0.0001 bitcoin and the management fee is zero. Bitcoin has no reports, so the page takes the price at the New York close, the same time as the shares, and sets it against the same money in MSCI World.',
      kallor: [
        { sv: 'Valour, Bitcoin Zero SEK', en: 'Valour, Bitcoin Zero SEK', url: 'https://valour.com/en/products/bitcoin-zero-sek' },
      ],
      tankar: [],
    },
  },
};
