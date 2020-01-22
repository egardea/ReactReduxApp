import React from 'react'

const Summary = (props) => {
    return (
        <section id="summary">
            <h1>Summary</h1>
            <p>
                {props.summary}
            </p>
        </section>
    )
}
export default Summary;
