import React from 'react';
import styles from '../SequenceDiagram.module.css'; // Import the CSS module

function SequenceDiagramExplanation() {
    return (
        <article className={`${styles.articleContainer} ${styles.bColor1}`}>
            <h2>Sequence Diagramma</h2>
            <p>Tas ir viens no UML (Unified Modeling Language) diagrammu veidiem un ir uzvedības modeļa daļa.</p>
            <p>Sequence diagramma attēlo, kādas sistēmas vai programmatūras komponentes mijiedarbību un secību, kurā tās izpilda konkrētus uzdevumus vai darbības.</p>
            <p>Tā ir noderīga, lai izprastu, kā dažādas sistēmas komponentes mijiedarbojas viena ar otru attiecībā uz laika secību.</p>
        </article>
    );
}

export default SequenceDiagramExplanation;
