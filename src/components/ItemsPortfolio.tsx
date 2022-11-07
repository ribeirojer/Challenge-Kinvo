import TitleItem from "./TitleItem"
import styled from "styled-components";
import { convertNumberToCurrency, editDate } from "../utils";
import { useEffect, useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import { SnapshotByProduct } from "../App";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-height: 1074px;
  margin: 1rem 1.5rem 0 1.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px #ccc;
  .item {
    display: flex;
    padding: 1rem 1rem 1rem 1.5rem;
    border-bottom: 1px solid #ccc;
  }
  .item:nth-child(odd) {
    background-color: #f5f5f5;
  }
  .wrapper {
    padding: 0.5rem;
    margin-right: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .fixedIncome {
    width: 18.5rem;
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .fixedIncome__name {
    color: #4e5b61;
    font-size: 12px;
    width: 180px;
    //font-family: 'SegoeUI';
  }
  .fixedIncome__bondType {
    color: #8a51ba;
    font-size: 14px;
    //font-family: 'SegoeUI';
  }
  span {
    color: #4e5b61;
    font-size: 9px;
    //font-family: 'SegoeUI';
    letter-spacing: 0.05em;
  }
  .position {
    color: #38bfa0;
    font-size: 16px;
    //font-family: 'SegoeUI';
  }
  .segundo {
    display: flex;
  }
  .segundo div {
    margin-right: 1rem;
  }
  .segundo div:nth-child(1),
  .segundo div:nth-child(2),
  .segundo div:nth-child(3) {
    min-width: 75px;
  }
  .segundo div:nth-child(5) {
    min-width: 40px;
  }
  .segundo div:nth-child(6) {
    min-width: 65px;
    margin-right: unset;
  }
  .terceiro {
    display: flex;
  }
  .terceiro div:nth-child(1) {
    min-width: 90px;
    margin-right: 1rem;
  }
  .terceiro span {
    letter-spacing: 0.05em;
  }
  .terceiro p {
    color: #008dcb;
    font-size: 16px;
    //font-family: 'SegoeUI';
  }
  #subtitle {
    margin: 1.5rem 0 0 1.5rem;
    padding-right: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  #subtitle svg:first-child {
    margin-right: 1rem;
  }
  #subtitle select {
    padding: 0.3rem;
    border-radius: 0.5rem;
    border: 1px solid #d6d9dd;
    color: #4e5b61;
    width: 155px;
    height: 32px;
    font-weight: 500;
    font-size: 12px;
  }
  #subtitle input {
    padding-left: 2rem;
    border-radius: 0.5rem;
    border: 1px solid #d6d9dd;
    color: #4e5b61;
    width: 240px;
    height: 32px;
    font-weight: 500;
    font-size: 12px;
    z-index: 2;
  }
  .options {
    display: flex;
    gap: 1rem;
  }
  .search {
    position: relative;
  }
  .search svg {
    color: #9da5ac;
    position: absolute;
    top: 6px;
    left: 6px;
  }
  .second__title {
    color: #627179;
    font-size: 18px;
    font-weight: 500;
  }
  .botons {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  .botons button {
    color: #ccc;
    background-color: #fff;
    box-shadow: 0px 0px 3px #ccc;
    margin: 0 0.3rem;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    padding: 0.4rem 0.8rem;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
  .botons .active {
    color: #fff;
    background-color: #ccc;
  }
`;

type Props = {}

const ItemsPortfolio = ({ data }: any) => {

  const [selected, setSelected] = useState('');
  const [search, setSearch] = useState('');
  const [pagina, setPagina] = useState(0);
  const [items, setItems] = useState<SnapshotByProduct[]>(data);
  const button1 = document.getElementById('btn-1');
  const button2 = document.getElementById('btn-2');

  useEffect(() => {
    if(pagina === 0) {
      button1?.classList.toggle('active');
      button2?.classList.toggle('active');
    }
    if(pagina === 5) {
      button1?.classList.toggle('active');
      button2?.classList.toggle('active');
    }
  }, [pagina])
  
  function handleChange (event: { target: { value: any; }; }) {
    setSelected(event.target.value);
    if(event.target.value === 'valueApplied'){
      let temp = items.sort(function(a: { position: { ['valueApplied']: number; }; },b: { position: { ['valueApplied']: number; }; }) {
        return a.position['valueApplied'] > b.position['valueApplied'] ? -1 : a.position['valueApplied'] < b.position['valueApplied'] ? 1 : 0;
      });
      setItems(temp);
    }
    if(event.target.value === 'equity'){
      let temp = items.sort(function(a: { position: { ['equity']: number; }; },b: { position: { ['equity']: number; }; }) {
        return a.position['equity'] > b.position['equity'] ? -1 : a.position['equity'] < b.position['equity'] ? 1 : 0;
      });
      setItems(temp);
    }
    if(event.target.value === 'profitability'){
      let temp = items.sort(function(a: { position: { ['profitability']: number; }; },b: { position: { ['profitability']: number; }; }) {
        return a.position['profitability'] > b.position['profitability'] ? -1 : a.position['profitability'] < b.position['profitability'] ? 1 : 0;
      });
      setItems(temp);
    }
    if(event.target.value === 'portfolioPercentage'){
      let temp = items.sort(function(a: { position: { ['portfolioPercentage']: number; }; },b: { position: { ['portfolioPercentage']: number; }; }) {
        return a.position['portfolioPercentage'] > b.position['portfolioPercentage'] ? -1 : a.position['portfolioPercentage'] < b.position['portfolioPercentage'] ? 1 : 0;
      });
      setItems(temp);
    }
    if(event.target.value === 'indexerValue'){
      let temp = items.sort(function(a: { position: { ['indexerValue']: number; }; },b: { position: { ['indexerValue']: number; }; }) {
        return a.position['indexerValue'] > b.position['indexerValue'] ? -1 : a.position['indexerValue'] < b.position['indexerValue'] ? 1 : 0;
      });
      setItems(temp);
    }
    if(event.target.value === 'percentageOverIndexer'){
      let temp = items.sort(function(a: { position: { ['percentageOverIndexer']: number; }; },b: { position: { ['percentageOverIndexer']: number; }; }) {
        return a.position['percentageOverIndexer'] > b.position['percentageOverIndexer'] ? -1 : a.position['percentageOverIndexer'] < b.position['percentageOverIndexer'] ? 1 : 0;
      });
      setItems(temp);
    }
    if(event.target.value === 'daysUntilExpiration'){
      let temp = items.sort(function(a: { due: { ['daysUntilExpiration']: number; }; },b: { due: { ['daysUntilExpiration']: number; }; }) {
        return a.due['daysUntilExpiration'] > b.due['daysUntilExpiration'] ? -1 : a.due['daysUntilExpiration'] < b.due['daysUntilExpiration'] ? 1 : 0;
      });
      setItems(temp);
    }
  }
  function handleSubmit (event: any) {
      event.preventDefault();
      let temp = data.filter((item:any)=>{
        return item.fixedIncome.name.includes(search);
      });
      setItems(temp);
  }
  function handleChangeInput (event: { target: { value: any; }; }) {
    setSearch( event.target.value);
  }

  return (
    <Wrapper>
      <div id='subtitle'>
        <h2 className='second__title'>Minhas Rendas Fixas</h2>
        <div className="options">
          <select name="order" id="order" value={selected} onChange={handleChange}>
            <option value="order">Ordenar por</option>
            <option value="valueApplied">VALOR INVES.</option>
            <option value="equity">SALDO BRUTO</option>
            <option value="profitability">RENT.</option>
            <option value="portfolioPercentage">% DA CART.</option>
            <option value="indexerValue">CDI</option>
            <option value="percentageOverIndexer">SOBRE O CDI</option>
            <option value="daysUntilExpiration">VENCIMENTO</option>
          </select>
          <form onSubmit={handleSubmit}>
            <div className="search">
              <MagnifyingGlass size={20} weight="bold"/>
              <input type="text" value={search} onChange={handleChangeInput} />
            </div>
          </form>
        </div>
      </div>
      { items && items.slice(pagina, pagina+5).map((item:SnapshotByProduct)=>{
        return (
          <div key={ item.fixedIncome.name } className="item">
            <div className="wrapper">
              <TitleItem title={'TÍTULO'}/>
              <div className="fixedIncome">
                <p className="fixedIncome__name">{ item.fixedIncome.name }</p>
                <div>
                  <span>CLASSE</span>
                  <p className="fixedIncome__bondType">{ item.fixedIncome.bondType }</p>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <TitleItem title={'MINHA POSIÇÃO'}/>
              <div className="segundo">
                <div>
                  <span>VALOR INVES.</span>
                  <p className="position">{ convertNumberToCurrency({ number: item.position.valueApplied }) }</p>
                </div>
                <div>
                  <span>SALDO BRUTO</span>
                  <p className="position">{ convertNumberToCurrency({ number: item.position.equity }) }</p>
                </div>
                <div>
                  <span>RENT.</span>
                  <p className="position">{ convertNumberToCurrency({ number: item.position.profitability }) }%</p>
                </div>
                <div>
                  <span>% DA CART.</span>
                  <p className="position">{ convertNumberToCurrency({ number: item.position.portfolioPercentage }) }%</p>
                </div>
                <div>
                  <span>CDI</span>
                  <p className="position">{ convertNumberToCurrency({ number: item.position.indexerValue }) }</p>
                </div>
                <div>
                  <span>SOBRE CDI</span>
                  <p className="position">{ convertNumberToCurrency({ number: item.position.percentageOverIndexer }) }</p>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <TitleItem title={'VENCIMENTO'}/>
              <div className="terceiro">
                <div>
                  <span>DATA VENC.</span>
                  <p>{ editDate({ date: item.due.date }) }</p>
                </div>
                <div>
                  <span>DIAS ATÉ VENC.</span>
                  <p>{ item.due.daysUntilExpiration }</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <div className="botons">
        <button onClick={()=>setPagina(pagina-5)} disabled={!pagina}>&#10094;</button>
        <button id="btn-1" className="active" onClick={()=>setPagina(0)}>1</button>
        <button id="btn-2" onClick={()=>setPagina(5)}>2</button>
        <button onClick={()=>setPagina(pagina+5)} disabled={pagina===5}>&#10095;</button>
      </div>
    </Wrapper>
  )
}

export default ItemsPortfolio;