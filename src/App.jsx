import { useState } from "react";
import UserInput from "./components/UserInput";
import Result from "./components/Results";

function App() {
  const [inputs, setinputs] = useState({
    initialInvestiment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const inputIsValid = inputs.duration >= 1

  function handleChangeInput(inputIdentifier, newValue) { //aqui busca o event que possui os atributos que pego // esses dados ficam dentro do target, dados como type, value, qualquer coisa digitada dentro da tag
    setinputs(prevInput => ({ // aqui tenho que chamar o valor para atualizar, como pede no setInputs, e chamo uma função, que tem como parametro o prevInputs, que são os dados do array acima
      ...prevInput, // os dados antigos são meio que salvos novamente
      [inputIdentifier]: +newValue, // O + vai forçar a conversao à um valor numerico esses dados tem o name, e o novo valor, o name tem que coincidir com o mesmo da tabela 
    }))
  }

  return (
    <>
      <UserInput inputs={inputs} onChangeInput={handleChangeInput} /> {/** Aqui é enviada a função handleChangeInput como valor, qual é executada no outro arquivo pelo metodo onChange, mas como prop/nome onChangeInput  */}
      {!inputIsValid && <div className="input-group">Por favor adcione uma duração maior que zero!</div>}
      {inputIsValid && <Result userInput={inputs} />}
    </>
  )
}

export default App








// <div className="input-group">
//   <div id="user-input">
//     <label htmlFor="user-input">initialInvestiment</label>
//     <input
//       type="number"
//       name="initialInvestiment" // mesmo valor da tabela
//       value={inputs.initialInvestiment} // atualiza o valor do input
//       onChange={handleChangeInput} // ao ocorrer a mudança constantemente executa a função
//     />
//     <label htmlFor="user-input">annualInvestment</label>
//     <input
//       type="number"
//       name="annualInvestment"
//       value={inputs.annualInvestment}
//       onChange={handleChangeInput}
//     />
//     <label htmlFor="user-input">expectedReturn</label>
//     <input

//       type="number"
//       name="expectedReturn"
//       value={inputs.expectedReturn}
//       onChange={handleChangeInput}
//     />
//     <label htmlFor="user-input">duration</label>
//     <input
//       type="number"
//       name="duration"
//       value={inputs.duration}
//       onChange={handleChangeInput}
//     />
//   </div>