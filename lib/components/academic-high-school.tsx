import TimeLineTile from "./time-line.tile";

export function HighSchool() {
  return (
    <div>
        <div className="border-4 border-yellow-300 rounded-lg p-20">
            <ol className="relative border-s border-black dark:black">
                <TimeLineTile>
                    <ol>
                    <li>Animation 1 - ANIANI01</li>
                    <li>Animation 2 - ANIANI02</li>
                    <li>Bildteori - BIDBIT0</li>
                    <li>Bild - BILBIL0</li>
                    <li>Bild och form 1b - BILBIL01B</li>
                    <li>Form - BILFOM0</li>
                    <li>Design 1 - DESDES01</li>
                    <li>Digitalt skapande 1 - DIGDIG01</li>
                    <li>Digitalt skapande 2 - DIGDIG02</li>
                    <li>Engelska 5 - ENGENG05</li>
                    <li>Engelska 6 - ENGENG06</li>
                    <li>Estetisk kommunikation 1 - ESTEST01</li>
                    <li>Historia 1b - HISHIS01B</li>
                    <li>Historia 2b - kultur - HISHIS02B</li>
                    <li>Idrott och hälsa 1 - IDRIDR01</li>
                    <li>Konstarterna och samhället - KOSKOS0</li>
                    <li>Matematik 1b - MATMAT01B</li>
                    <li>Matematik 2b - MATMAT02B</li>
                    <li>Matematik 3b - MATMAT03B</li>
                    <li>Naturkunskap 1b - NAKNAK01B</li>
                    <li>Religionskunskap 1 - RELREL01</li>
                    <li>Samhällskunskap 1b - SAMSAM01B</li>
                    <li>Svenska 1 - SVESVE01</li>
                    <li>Svenska 2 - SVESVE02</li>
                    <li>Svenska 3 - SVESVE03</li>
                    <li>Gymnasiearbete - GYARES</li>
                    </ol>
                </TimeLineTile>
            </ol>
            <div>
                <img src="/images/logo_LBS.png" alt="LBS Logo" className="w-36"/>
            </div>
        </div>
    </div>
  );
}