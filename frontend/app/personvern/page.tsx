'use client';

// Gjenbrukbar Section-komponent
function Section({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: '10px', maxWidth: '800px', margin: '10px auto 0 auto' }}>
      {children}
    </div>
  );
}

// Gjenbrukbar Heading-komponent
function Heading({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`font-bold mb-5 mt-5 text-3xl ${className}`}>
      {children}
    </h1>
  );
}

function MyComponent() {
  return (
    <>
      <Section>
        <Heading className="pt-5 !text-4xl">Personvernserklæring for Utstyrssystem</Heading>
        <hr className="mb-10 border-1" />
        <p className="mb-4">
          <b>Sist oppdatert:</b> dd.mm.2026
        </p>
        <p className="mb-5">
          Denne personvernserklæringen forklarer hvordan vi samler inn, bruker, 
          deler og beskytter personopplysninger i forbindelse med ditt bruk av 
          vårt utstyrssystem for skolebruk. Ved å bruke Utstyrssystemet godtar du 
          behandlingen av dine personopplysninger som beskrevet her.
        </p>
      </Section>

      <Section>
        <Heading>1. Hvem er behandlingsansvarlig?</Heading>
        <p className="mb-5">Behandlingsansvarlig for personopplysninger som behandles i forbindelse med Utstyrssystemet er:</p>
        <b>Oslo kommune, Utdanningsetaten</b>
        <p className="mt-3"> 
          <b>Adresse:</b> Grensesvingen 6, 0663 Oslo 
        </p>
        <p className="mt-3"> 
          <b>E-post:</b> postmottak@osloskolen.no
        </p>
      </Section>

      <Section>
        <Heading>2. Hvilke personopplysninger samler vi inn?</Heading>
        <p className="mb-5">Vi samler kun inn det som er nødvendig for at Utstyrssystemet skal fungere som tiltenkt og for å oppfylle formålene nedenfor. Dette kan inkludere:</p>
      
        <b>Når du registrerer bruker:</b>
        <ul className="list-disc list-inside mb-5"> 
          <li>Navn</li>
          <li>Brukernavn og passord for autentisering</li>
          <li>Kontaktinformasjon (e-postadresse) for kommunikasjon og varsler</li>
          <li>Skolebruker-ID eller lignende</li>
          <li>Eventuelle skoleadministrative identifikatorer</li>
        </ul>

        <b>Ved utlån av utstyr:</b>
        <ul className="list-disc list-inside mb-5"> 
          <li>Hvilket utstyr som er lånt</li>
          <li>Lånedato og eventuell retur</li>
          <li>Eventuelle notater om tilstand</li>
        </ul>

        <b>Tekniske data:</b>
        <ul className="list-disc list-inside mb-5"> 
          <li>IP-adresse og nettlesertype</li>
          <li>Loggdata om bruk av Utstyrssystemet</li>
        </ul>
        <p>Denne opplysningene samles inn når du aktivt oppgir dem, eller når du bruker Utstyrssystemet.</p>
      </Section>

      <Section>
        <Heading>3. Hvordan bruker vi opplysningene?</Heading>
        <p className="mb-5">Vi bruker dine personopplysninger til følgende formål:</p>
      
        <ul className="list-disc list-inside mb-5"> 
          <li>For å administrere brukerkontoer og godkjenne utlån av utstyr</li>
          <li>For å dokumentere hvem som har ansvar for utstyr når det lånes</li>
          <li>For å sende deg varsler og kommunikasjon knyttet til bruk av Utstyrssystemet</li>
          <li>For å sikre Utstyrssystemets sikkerhet og stabilitet</li>
          <li>For å oppfylle lovpålagte krav</li>
        </ul>
        <p className="mb-5">Vi bruker ikke personopplysninger til markedsføring eller profilering uten samtykke.</p>
      </Section>

      <Section>
        <Heading>4. Rettslig grunnlag</Heading>
        <p className="mb-5">Vi behandler dine personopplysninger kun når det er faktisk nødvendig og når vi har et gyldig rettslig grunnlag for det, eksempelvis:</p>
      
        <ul className="list-disc list-inside mb-5"> 
          <li>For å oppfylle en avtale (brukervilkår for Utstyrssystemet)</li>
          <li>For å etterleve en lovpålagt forpliktelse</li>
          <li>Med ditt uttrykkelige samtykke der det er nødvendig</li>
        </ul>
      </Section>

      <Section>
        <Heading>5. Deling av personopplysninger</Heading>
        <p className="mb-5">Vi deler ikke dine personopplysninger med eksterne parter for deres egne formål. Opplysninger kan bli delt med:</p>
      
        <ul className="list-disc list-inside mb-5"> 
          <li>Systemleverandører som utfører tjenester på våre vegne (f.eks. hosting, teknisk drift)</li>
          <li>Offentlige myndigheter hvis vi er juridisk forpliktet til det</li>
        </ul>
        <p className="mb-5">Vi selger aldri dine opplysninger til tredjepart</p>
      </Section>

      <Section>
        <Heading>6. Informasjonskapsler og lignende teknologier</Heading>
        <p className="mb-5">Vi bruker informasjonskapsler («cookies») og lignende teknologier for å:</p>
      
        <ul className="list-disc list-inside mb-5"> 
          <li>Sørge for at Utstyrssystemet fungerer</li>
          <li>Forbedre brukeropplevelse</li>
          <li>Samle tekniske data om bruk</li>
        </ul>
        <p className="mb-5">Du kan kontrollere bruk av cookies via nettleserinnstillinger, men dette kan påvirke funksjonalitet.</p>
      </Section>

      <Section>
        <Heading>7. Hvor lenge lagrer vi personopplysninger?</Heading>
        <p className="mb-5">Personopplysninger lagres kun så lenge det er nødvendig for å ivareta formålene i denne erklæringen, eller for å oppfylle juridiske krav. Når opplysningene ikke lenger er nødvendig, vil de slettes eller anonymiseres.</p>
      </Section>

      <Section>
        <Heading>8. Dine rettigheter</Heading>
        <p className="mb-5">Som registrert bruker har du rett til:</p>
      
        <ul className="list-disc list-inside mb-5"> 
          <li>Innsyn i hvilke personopplysninger vi har om deg</li>
          <li>Å få opplysninger rettet eller slettet</li>
          <li>Å begrense eller protestere mot behandlingen</li>
          <li>Å trekke tilbake samtykke (hvis behandlingen er basert på dette)</li>
        </ul>
        <p className="mb-5">Ønsker du å utøve noen av disse rettighetene, kontakt oss på e-post: [kontakt@skole.no].</p>
      </Section>

      <Section>
        <Heading>9. Sikkerhet</Heading>
        <p className="mb-5">Vi iverksetter tekniske og organisatoriske tiltak for å beskytte personopplysningene dine mot uautorisert tilgang, tap eller misbruk. Dette inkluderer sikre servere, tilgangskontroll og kryptering der det er relevant.</p>
      </Section>

      <Section>
        <Heading>10. Endringer i personvernsærkleringen</Heading>
        <p className="mb-5">Vi kan oppdatere denne personvernserklæringen for å reflektere endringer i lovverket, teknologi eller Utstyrssystemets funksjoner. Den nyeste versjonen vil alltid være tilgjengelig via nettstedet.</p>
      </Section>

      <Section>
        <Heading>11. Kontaktinformasjon</Heading>
        <p className="mb-5">Har du spørsmål om personvern, vår behandling av opplysninger eller denne erklæringen, kan du kontakte:</p>
        <p>
          <b>Epost:</b> postmottak.elvebakken.vgs@osloskolen.no
        </p>
        <p className="mt-3">
          <b>Addresse:</b> Vestre Elvebakke 3, 0182
        </p>
      </Section>
      
    </>
  );
}

export default MyComponent;