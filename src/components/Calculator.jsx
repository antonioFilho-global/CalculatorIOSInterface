import React, { useState } from "react";
import './Calculator.css'
/* Biblioteca mui para ajudar na consitrução da interface */
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculator() {
    /* Variáveis comuns não iriam redenrizar direito nos componentes,
    sendo necessário usar useState */
    
    /*guadar o valor digitado */
    const [num,setNum]= useState(0);
     /*guadar o valor anterior*/
    const [oldnum, setoldNum]= useState(0);
    /* Define o operador matemático */
    const [operator, setOperator] = useState();

    /* Função que pega os números digitados */
    function inputNum(e) {
        var input = e.target.value;
       /* Tratando o primeiro input, para não ficar o 0 a esqueda */ 
        if (num===0) {
            setNum(input);
        } else {
            setNum(num + input); 
        }
    } 

    /* Função AC, que limpa os numeros digitados, setando o valor 0*/
    function clear() {
        setNum(0);
    }

   /*  Função +/-, inverte o sinal do número digitado */
   function changeSign() {
        /* verifica se não é 0 o numero digitado,
        pq 0 não pode ser negativo */
        if (num>0) {
           /*  Deixando o valor digitado negativo */
            setNum(-num);
        } else {
            /* Deixando o valor digitado positivo */
            setNum(Math.abs(num));
        }
   }

    /* Função da % */
    function porcentage() {
        setNum(num / 100);
    }

    /* Para realizar a conta é necessário: primeiro numero + (operador matemático) + segundo número
    Pega qual operador matemático vai ser usado, e o número anterior e zera o atual */
    function operadorHandler(e) {
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setoldNum(num);
        setNum(0);
    } 

    /* Em mãos do numero anterior , operador e numeroatual, é so calculatar o resultado */
    function calculate() {
        /* Para evitar erro na hora de fazer os calculos, foi feito 
        a conversão para float as variáveis oldnum e num */
        if (operator === "/") {
           let div = parseFloat(oldnum) /  parseFloat(num);
           setNum(div.toFixed(2))
        } else if (operator === "X"){
            let mul = parseFloat(oldnum) /  parseFloat(num);
            setNum(mul.toFixed(2))
        } else if (operator === "+"){
            setNum(parseFloat(oldnum) +  parseFloat(num));
        } else if (operator === "-"){
            let sub = parseFloat(oldnum) - parseFloat(num);
            setNum(sub.toFixed(2));
        }
    }
    return (
        <div>
            {/* Componente Box do material UI */}
            <Box m={5}/>
            <Container maxWidth="xs">
                {/* wrapper = embrulhador */}
                <div className="wrapper">
                    <Box m={4}/>
                    <h1 className="result">{num}</h1>
                    <button onClick={clear}> AC </button>
                    <button onClick={changeSign} >+/- </button>
                    <button onClick={porcentage}> % </button>
                    <button className="orange" onClick={operadorHandler} value="/"> / </button>
                    <button className="gray" onClick={inputNum} value={7}> 7 </button>
                    <button className="gray" onClick={inputNum} value={8}> 8</button>
                    <button className="gray" onClick={inputNum} value={9}> 9</button>
                    <button className="orange" onClick={operadorHandler}  value="X"> X </button>
                    <button className="gray" onClick={inputNum} value={4} > 4</button>
                    <button className="gray" onClick={inputNum} value={5}> 5</button>
                    <button className="gray" onClick={inputNum} value={6} >6</button>
                    <button className="orange" onClick={operadorHandler} value="-"> - </button>
                    <button className="gray" onClick={inputNum} value={1}> 1</button>
                    <button className="gray" onClick={inputNum} value={2} >2</button>
                    <button className="gray" onClick={inputNum} value={3} >3</button>
                    <button className="orange" onClick={operadorHandler} value="+"> + </button>
                    <button className="gray" onClick={inputNum} value={0}> 0</button>
                    <button className="gray" onClick={inputNum} value={"."}> . </button>
                    <button className="gray" id="hidden" >1</button>
                    <button className="orange" onClick={calculate}> = </button>
                </div>
            </Container>
        </div>
    )
}