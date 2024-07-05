
export default function UserInput({ onChangeInput, inputs }) {
    console.log(inputs)
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label >Investimento inicial</label>
                <input type="number" required value={inputs.initialInvestiment} onChange={(event) => { onChangeInput('initialInvestiment', event.target.value) }} /> {/* Aqui, é passada dois valores na função, o identificador, e o valor digitado*/}
            </p>
            <p>
                <label >Retorno esperado</label>
                <input type="number" required value={inputs.expectedReturn} onChange={(event) => { onChangeInput('expectedReturn', event.target.value) }} /> {/*  é chamado uma arrowFunction com o valor do evento, qual, possui os dados do input */}
            </p>
        </div>
        <div className="input-group">
            <p>
                <label >Investimento anual</label>
                <input type="number" required value={inputs.annualInvestment} onChange={(event) => { onChangeInput('annualInvestment', event.target.value) }} />
            </p>
            <p>
                <label >Duração</label>
                <input type="number" required value={inputs.duration} onChange={(event) => { onChangeInput('duration', event.target.value) }} />
            </p>
        </div>
    </section>
}