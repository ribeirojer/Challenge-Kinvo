import styled from "styled-components";
import { convertNumberToCurrency } from "../utils"
import { SnapshotByPortfolio } from '../App'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1.5rem;
  padding-right: 1.5rem;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    padding: 4px 10px 4px 16px;
    border-radius: 10px;
    height: 82px;
    width: 162px;
    box-shadow: 0px 0px 4px #bbb;
  }
  #t1 {
    color: #4e5b61;
    font-size: 9px;
    font-family: 'Montserrat';
    font-weight: 500;
    letter-spacing: 0.05em;
    margin-bottom: 4px;
  }
  #t2 {
    color:#4c309b;
    font-size: 14px;
    font-family: 'Montserrat';
    font-weight: 700;
  }
  .border {
    display: flex;
    flex-direction: column;
    padding: 4px 10px 4px 8px;
    border-left: 2px solid #dae0e3;
  }
`;

type Props = {}

const ItemsFront = ({ data }:any) => {

  const { equity, valueApplied, percentageProfit, equityProfit, indexerValue, percentageOverIndexer }:SnapshotByPortfolio = data;

  return (
    <Wrapper>
        <div className="item">
            <div className="border">
                <p id="t1">SALDO BRUTO</p>
                <p id="t2">R$ { convertNumberToCurrency({ number: equity }) }</p>
            </div>
        </div>
        <div className="item">
            <div className="border">
                <p id="t1">VALOR APLICADO</p>
                <p id="t2">R$ { convertNumberToCurrency({ number: valueApplied }) }</p>        
            </div>
        </div>
        <div className="item">
            <div className="border">
                <p id="t1">RESULTADO</p>
                <p id="t2">R$ { convertNumberToCurrency({ number: equityProfit }) }</p>        
            </div>
        </div>
        <div className="item">
            <div className="border">
                <p id="t1">RENTABILIDADE</p>
                <p id="t2">{ percentageProfit }%</p>        
            </div>
        </div>
        <div className="item">
            <div className="border">
                <p id="t1">CDI</p>
                <p id="t2">{ indexerValue }%</p>        
            </div>
        </div>
        <div className="item">
            <div className="border">
                <p id="t1">% SOBRE CDI</p>
                <p id="t2">{ percentageOverIndexer }%</p>        
            </div>
        </div>
    </Wrapper>
  )
}

export default ItemsFront;