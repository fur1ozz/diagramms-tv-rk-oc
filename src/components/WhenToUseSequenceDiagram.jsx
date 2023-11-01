import React from 'react';
import styles from '../SequenceDiagram.module.css'; // Import the CSS module

function WhenToUseSequenceDiagram() {
    return (
        <article className={`${styles.articleContainer} ${styles.bColor2}`}>
            <h2>Kad izmantot Sequence Diagrammu?</h2>
            <p>Sequence diagrammu izmanto, lai modelētu un vizualizētu sistēmas komponentu mijiedarbību un darbību secību.</p>
            <p>Tā palīdz saprast un attīstīt programmatūras darbību un savstarpējo mijiedarbību.</p>
            <p>To var izmantot gan programmatūras izstrādātāji, gan projektētāji, lai veiktu programmas analīzi un izstrādi.</p>
        </article>
    );
}

export default WhenToUseSequenceDiagram;
