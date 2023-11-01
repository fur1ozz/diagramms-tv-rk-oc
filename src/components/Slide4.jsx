import React from 'react';
import styles from '../SequenceDiagram.module.css'; // Import the CSS module

function WhenToUseSequenceDiagram() {
    return (
        <article className={`${styles.articleContainer} ${styles.bColor4}`}>
            <h2>Piemērs ar skaidrojumu</h2>
            <img src="https://guides.visual-paradigm.com/wp-content/uploads/2023/10/Sequence-Diagram-Add-Course.png" alt="" />
            <p>Note ir kā komentāri, kas izskaidro kas notiek diagrammā</p>
            <p>Actor ir lietotājs, kas lietos programmu</p>
            <p>Message dati kas tiek padoti no vienas vietas uz otru, šajā gadījumā "title" ir string un tā teksts ir "UML"</p>
            <p>Return message sekvences diagrammā ir ziņojums, kas atspoguļo atbildes vai rezultāta nosūtīšanu no lifeline atpakaļ uz actor. </p>
            <p>Lifeline ir objekts vai klase kas iesaistīta šajā procesā un veic informācijas apstrādi</p>
            <p>Activation ir brīdis kurā tiek aktivizēta programma kas attēlota diagrammā</p>
            <p>Create message" sekvences diagrammā ir ziņojums, kas parāda objekta vai jaunas instances izveidošanu kādā no saziņas procesa posmiem. </p>
        </article>
    );
}

export default WhenToUseSequenceDiagram;
