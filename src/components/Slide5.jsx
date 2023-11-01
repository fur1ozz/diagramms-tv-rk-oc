import React from 'react';
import styles from '../SequenceDiagram.module.css'; // Import the CSS module

function WhenToUseSequenceDiagram() {
    return (
        <article className={`${styles.articleContainer} ${styles.bColor1}`}>
            <h2>Diagramma</h2>
            <img src="diagram.png" alt=""/>
        </article>
    );
}

export default WhenToUseSequenceDiagram;
