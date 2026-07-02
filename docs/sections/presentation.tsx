import JSX from "docs/jsx.ts";
import U2 from "../images/U2.png";
import GrandSlam from "../images/GrandSlam.png";
import Wreckage from "../images/Wreckage.png";
import GaryPowers from "../images/GaryPowers.png";
import Khrushchev from "../images/Khrushchev.png";

export function presentation(){
  return [
    <section>1. Mai 1960</section>,
    <section>3. Mai 1960</section>,
    <section>
      <a
        href={
          "https://cdn.britannica.com/86/10486-050-31BED824/Nikita-Khrushchev-1960.jpg"
        }
      >
        <img
          src={Khrushchev}
          style="height: 540px; margin: 0 auto 0 auto; background: transparent;"
          target="_blank"
          rel="noopener noreferrer"
        ></img>
      </a>
    </section>,
    <section>5. Mai 1960</section>,
    <section>
      <a
        href={
          "https://de.wikipedia.org/wiki/Datei:U-2_Spy_Plane_With_Fictitious_NASA_Markings_-_GPN-2000-000112.jpg"
        }
      >
        <img
          src={U2}
          style="height: 540px; margin: 0 auto 0 auto; background: transparent;"
          target="_blank"
          rel="noopener noreferrer"
        ></img>
      </a>
    </section>,
    <section>7. Mai 1960</section>,
    <section>
      <a
        href={
          "https://cdn.britannica.com/31/176431-004-497A10CE/wreckage-reconnaissance-plane-Francis-Gary-Powers.jpg?s=1500x700&q=85"
        }
      >
        <img
          src={Wreckage}
          style="height: 540px; margin: 0 auto 0 auto; background: transparent;"
          target="_blank"
          rel="noopener noreferrer"
        ></img>
      </a>
    </section>,
    <section>
      <a
        href={
          "https://cdn.britannica.com/07/134807-004-39CD4ACF/Francis-Gary-Powers.jpg?s=1500x700&q=85"
        }
      >
        <img
          src={GaryPowers}
          style="height: 540px; margin: 0 auto 0 auto; background: transparent;"
          target="_blank"
          rel="noopener noreferrer"
        ></img>
      </a>
    </section>,
    <section>
      <a href={"https://en.wikipedia.org/wiki/File:OperationGrandSlam1960.jpg"}>
        <img
          src={GrandSlam}
          style="height: 540px; margin: 0 auto 0 auto; background: transparent;"
          target="_blank"
          rel="noopener noreferrer"
        ></img>
      </a>
    </section>,
    <section>
      <span class={"fragment"}>16. Mai 1960</span>
    </section>,
    <section>
      <section>
        Sollten staatliche wissenschaftlich-technologische Institutionen im
        Namen von nationalen Interesse Desinformation verbreiten?
      </section>
      <section>
        <h2>Quellen</h2>
        <p>
          <b>CIA / U-2-Programm</b>
        </p>
        <p>
          <a
            href="https://web.archive.org/web/20090211205137/https://www.cia.gov/library/center-for-the-study-of-intelligence/csi-publications/books-and-monographs/the-cia-and-the-u-2-program-1954-1974/u2.pdf"
            target="_blank"
            rel="noreferrer"
          >
            The CIA and the U-2 Program, 1954–1974
          </a>
        </p>
        <p>
          <b>Weitere Quellen</b>
        </p>
        <p>Wikipedia — Überblick und Kontext zum U-2-Zwischenfall</p>
        <p>
          Ben R. Rich / Leo Janos:{" "}
          <i>Skunk Works: A Personal Memoir of My Years at Lockheed</i>
        </p>
      </section>
      <section>
        <h2>Quellen: New York Times Archiv I</h2>
        <p>
          <a
            href="https://www.nytimes.com/1960/04/27/archives/washington-hails-de-gaulles-visit-capital-impressed-with-his-frank.html?searchResultPosition=1"
            target="_blank"
            rel="noreferrer"
          >
            Washington Hails de Gaulle’s Visit
          </a>{" "}
          — 27.04.1960
        </p>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/01/archives/stalin-was-terrible-but-nikita-isnt-all-he-might-be-khrushchevs.html?searchResultPosition=12"
            target="_blank"
            rel="noreferrer"
          >
            Stalin Was Terrible, But Nikita Isn’t All He Might Be
          </a>{" "}
          — 01.05.1960
        </p>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/04/archives/the-national-defense-ii.html?searchResultPosition=20"
            target="_blank"
            rel="noreferrer"
          >
            The National Defense II
          </a>{" "}
          — 04.05.1960
        </p>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/06/archives/why-khrushchev-flexes-his-rockets.html?searchResultPosition=25"
            target="_blank"
            rel="noreferrer"
          >
            Why Khrushchev Flexes His Rockets
          </a>{" "}
          — 06.05.1960
        </p>
      </section>
      <section>
        <h2>Quellen: New York Times Archiv II</h2>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/07/archives/mr-k-thunders-on-the-left.html?searchResultPosition=26"
            target="_blank"
            rel="noreferrer"
          >
            Mr. K Thunders on the Left
          </a>{" "}
          — 07.05.1960
        </p>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/07/archives/a-day-after-tomorrow-in-soviet-russia.html?searchResultPosition=27"
            target="_blank"
            rel="noreferrer"
          >
            A Day After Tomorrow in Soviet Russia
          </a>{" "}
          — 07.05.1960
        </p>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/07/archives/foreignbased-u2s-grounded-for-study-us-is-grounding-its-u2s-abroad.html?searchResultPosition=29"
            target="_blank"
            rel="noreferrer"
          >
            Foreign-Based U-2s Grounded for Study
          </a>{" "}
          — 07.05.1960
        </p>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/08/archives/london-troubled-fears-that-us-stance-for-summit-parley-will-be.html?searchResultPosition=42"
            target="_blank"
            rel="noreferrer"
          >
            London Troubled
          </a>{" "}
          — 08.05.1960
        </p>
      </section>
      <section>
        <h2>Quellen: New York Times Archiv III</h2>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/09/archives/many-here-decry-timing-of-flight-but-a-test-of-opinion-also-finds.html?searchResultPosition=50"
            target="_blank"
            rel="noreferrer"
          >
            Many Here Decry Timing of Flight
          </a>{" "}
          — 09.05.1960
        </p>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/09/archives/turkey-denies-acquiesence.html?searchResultPosition=51"
            target="_blank"
            rel="noreferrer"
          >
            Turkey Denies Acquiesence
          </a>{" "}
          — 09.05.1960
        </p>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/10/archives/the-enigmas-in-the-pilot-powers-case.html?searchResultPosition=57"
            target="_blank"
            rel="noreferrer"
          >
            The Enigmas in the Pilot Powers Case
          </a>{" "}
          — 10.05.1960
        </p>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/10/archives/u2-maker-doubts-soviet-plane-story-u2-maker-doubts-soviet-on-plane.html?searchResultPosition=58"
            target="_blank"
            rel="noreferrer"
          >
            U-2 Maker Doubts Soviet Plane Story
          </a>{" "}
          — 10.05.1960
        </p>
      </section>
      <section>
        <h2>Quellen: New York Times Archiv IV</h2>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/11/archives/the-impasse-of-mistrust.html?searchResultPosition=60"
            target="_blank"
            rel="noreferrer"
          >
            The Impasse of Mistrust
          </a>{" "}
          — 11.05.1960
        </p>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/12/archives/transcript-of-elsenhowers-news-conference-on-foreign-and-domestic.html?searchResultPosition=61"
            target="_blank"
            rel="noreferrer"
          >
            Transcript of Eisenhower’s News Conference
          </a>{" "}
          — 12.05.1960
        </p>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/12/archives/the-issue-is-the-iron-curtain.html?searchResultPosition=62"
            target="_blank"
            rel="noreferrer"
          >
            The Issue Is the Iron Curtain
          </a>{" "}
          — 12.05.1960
        </p>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/15/archives/the-news-of-the-week-in-review-spy-and-summit.html?searchResultPosition=88"
            target="_blank"
            rel="noreferrer"
          >
            The News of the Week in Review: Spy and Summit
          </a>{" "}
          — 15.05.1960
        </p>
      </section>
      <section>
        <h2>Quellen: New York Times Archiv V</h2>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/17/archives/capital-angered-both-parties-condemn-insult-as-a-plot-to-wreck.html?searchResultPosition=94"
            target="_blank"
            rel="noreferrer"
          >
            Capital Angered
          </a>{" "}
          — 17.05.1960
        </p>
        <p>
          <a
            href="https://www.nytimes.com/1960/05/17/archives/crisis-at-the-summit.html?searchResultPosition=98"
            target="_blank"
            rel="noreferrer"
          >
            Crisis at the Summit
          </a>{" "}
          — 17.05.1960
        </p>
      </section>
      <section>
        <h2>Bildquellen </h2>

        <p>
          <a
            href="https://cdn.britannica.com/86/10486-050-31BED824/Nikita-Khrushchev-1960.jpg"
            target="_blank"
            rel="noreferrer"
          >
            Nikita Khrushchev, 1960
          </a>
        </p>

        <p>
          <a
            href="https://de.wikipedia.org/wiki/Datei:U-2_Spy_Plane_With_Fictitious_NASA_Markings_-_GPN-2000-000112.jpg"
            target="_blank"
            rel="noreferrer"
          >
            U-2 Spy Plane with fictitious NASA markings
          </a>
        </p>

        <p>
          <a
            href="https://cdn.britannica.com/31/176431-004-497A10CE/wreckage-reconnaissance-plane-Francis-Gary-Powers.jpg?s=1500x700&q=85"
            target="_blank"
            rel="noreferrer"
          >
            Wreckage of Francis Gary Powers’ U-2 reconnaissance plane
          </a>
        </p>

        <p>
          <a
            href="https://cdn.britannica.com/07/134807-004-39CD4ACF/Francis-Gary-Powers.jpg?s=1500x700&q=85"
            target="_blank"
            rel="noreferrer"
          >
            Francis Gary Powers
          </a>
        </p>

        <p>
          <a
            href="https://en.wikipedia.org/wiki/File:OperationGrandSlam1960.jpg"
            target="_blank"
            rel="noreferrer"
          >
            Operation Grand Slam, 1960
          </a>
        </p>
      </section>
    </section>,
  ];
}


