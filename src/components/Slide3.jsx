import React from 'react';
import styles from '../SequenceDiagram.module.css'; // Import the CSS module

function WhenToUseSequenceDiagram() {
    return (
        <article className={`${styles.articleContainer} ${styles.bColor3}`}>
            <h2>Kādi UML elementi ir šajā diagrammā?</h2>
            <p>Aktieri (Actors): Pārstāv ārējos lietotājus vai citas sistēmas, kas mijiedarbojas ar objektiem diagrammā.</p>
            <p>Dalībnieki (Participants/Lifelines): Elementi, kas atspoguļo objektus vai klases, kuras iesaistītas mijiedarbībā. Tie tiek attēloti kā vertikāli izstieptas līnijas, uz kurām tiek norādīti objektu nosaukumi.</p>
            <p>Ziņojumi (Messages): Norāda komunikāciju starp objektiem. Ziņojumi var būt dažādi veidi, piemēram, sinhroni (ar atbildi) vai asinhroni (bez atbildes). Tie ir atzīmēti ar streli (piemēram, --> vai ->>) starp dalībniekiem, kas norāda ziņojuma virzību.</p>
            <p>Aktivizācijas (Activation): Parāda laika posmu, kad objekts ir aktīvs un veic darbības, to attēlojot ar vertikālu līniju uz dalībnieka līnijas.</p>
            <p>Deaktivizācijas (Deactivation): Norāda laika posmu, kad objekts nav aktīvs vai nav iesaistīts mijiedarbībā, parasti ar līnijas pārtraukšanu.</p>
            <p>Fragments (Fragments): Šie elementi atspoguļo noteiktus loģiskus apakšprocesus diagrammā, piemēram, paralēlās darbības, alternatīvas izvēles, ciklus vai noteiktu loģisko nosacījumu izpildi.</p>
            <p>Objekti (Objects/Entities): Atsevišķi elementi vai klases, kas mijiedarbojas secības diagrammā.</p>
        </article>
    );
}

export default WhenToUseSequenceDiagram;
