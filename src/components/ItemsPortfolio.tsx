import TitleItem from "./TitleItem"
import styled from "styled-components";
import { convertNumberToCurrency, editDate } from "../utils";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
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
  .subtitle {
    margin: 1.5rem 0 0 1.5rem;
    padding-right: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .subtitle svg:first-child {
    margin-right: 1rem;
  }
  .second__title {
    color: #627179;
    font-size: 18px;
    font-weight: 500;
  }
  .botons {
    display: flex;
    justify-content: center;
  }
`;

type Props = {}

const ItemsPortfolio = (props: any) => {
  console.log(props.data);

  return (
    <Wrapper>
      <div className='subtitle'>
        <h2 className='second__title'>Minhas Rendas Fixas</h2>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="155" height="32" viewBox="0 0 155 32">
            <g id="Selectbox.Filter" transform="translate(-7)">
              <g id="Selectbox.BG" transform="translate(7)" fill="#fff" stroke="#d6d9dd" stroke-width="1">
                <rect width="155" height="32" rx="10" stroke="none"/>
                <rect x="0.5" y="0.5" width="154" height="31" rx="9.5" fill="none"/>
              </g>
              <text id="Ordenar_por" data-name="Ordenar por" transform="translate(17 21)" fill="#707b81" font-size="12" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Ordenar por</tspan></text>
              <path id="Caminho_26" data-name="Caminho 26" d="M8.1,11.6,2.6,6.041,4.026,4.6,8.1,8.718,12.174,4.6,13.6,6.041Z" transform="translate(136.4 8.4)" fill="#707b81"/>
            </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="240" height="32" viewBox="0 0 240 32">
            <g id="Selectbox.Filter" transform="translate(-0.096)">
              <g id="Selectbox.BG" transform="translate(0.096)" fill="#fff" stroke="#d6d9dd" stroke-width="1">
                <rect width="240" height="32" rx="10" stroke="none"/>
                <rect x="0.5" y="0.5" width="239" height="31" rx="9.5" fill="none"/>
              </g>
              <path id="Caminho_3845" data-name="Caminho 3845" d="M323.731,11.78a5.049,5.049,0,1,0-5.049-5.049A5.063,5.063,0,0,0,323.731,11.78Zm5.3-.926,2.861,2.861a.833.833,0,0,1-1.178,1.178l-2.861-2.861a6.631,6.631,0,0,1-4.123,1.43,6.731,6.731,0,1,1,6.731-6.731A6.459,6.459,0,0,1,329.032,10.854Z" transform="translate(-308.685 8.5)" fill="#9da5ac" stroke="#9da5ac" stroke-width="1"/>
            </g>
          </svg>
        </div>
      </div>
      { props.data.map((item:any)=>{
        return (
          <div className="item">
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
                  <p className="position">{ convertNumberToCurrency(item.position.valueApplied) }</p>
                </div>
                <div>
                  <span>SALDO BRUTO</span>
                  <p className="position">{ convertNumberToCurrency(item.position.equity) }</p>
                </div>
                <div>
                  <span>RENT.</span>
                  <p className="position">{ convertNumberToCurrency(item.position.profitability) }%</p>
                </div>
                <div>
                  <span>% DA CART.</span>
                  <p className="position">{ convertNumberToCurrency(item.position.portfolioPercentage) }%</p>
                </div>
                <div>
                  <span>CDI</span>
                  <p className="position">{ convertNumberToCurrency(item.position.indexerValue) }</p>
                </div>
                <div>
                  <span>SOBRE CDI</span>
                  <p className="position">{ convertNumberToCurrency(item.position.percentageOverIndexer) }</p>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <TitleItem title={'VENCIMENTO'}/>
              <div className="terceiro">
                <div>
                  <span>DATA VENC.</span>
                  <p>{ editDate(item.due.date) }</p>
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
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="200" height="65" viewBox="0 0 200 65">
          <g id="Bt-Numero-Paginas-Medio" transform="translate(15 15)">
            <g id="Grupo_11075" data-name="Grupo 11075" transform="translate(-803 -765)">
              <g transform="matrix(1, 0, 0, 1, 788, 750)" filter="url(#Caminho_295)">
                <path id="Caminho_295-3" data-name="Caminho 295" d="M4,0H31a4,4,0,0,1,4,4V31a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z" transform="translate(59 15)" fill="#dce0e3"/>
              </g>
              <text id="_1" data-name="1" transform="translate(865 787)" fill="#fff" font-size="13" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="-2.548" y="0">1</tspan></text>
            </g>
            <g id="Grupo_11074" data-name="Grupo 11074" transform="translate(-807 -765)">
              <g transform="matrix(1, 0, 0, 1, 792, 750)" filter="url(#Caminho_295-2)">
                <g id="Caminho_295-4" data-name="Caminho 295" transform="translate(103 15)" fill="#fff">
                  <path d="M 31 34.5 L 4 34.5 C 2.070090055465698 34.5 0.5 32.92990875244141 0.5 31 L 0.5 4 C 0.5 2.070090055465698 2.070090055465698 0.5 4 0.5 L 31 0.5 C 32.92990875244141 0.5 34.5 2.070090055465698 34.5 4 L 34.5 31 C 34.5 32.92990875244141 32.92990875244141 34.5 31 34.5 Z" stroke="none"/>
                  <path d="M 4 1 C 2.345790863037109 1 1 2.345790863037109 1 4 L 1 31 C 1 32.65420913696289 2.345790863037109 34 4 34 L 31 34 C 32.65420913696289 34 34 32.65420913696289 34 31 L 34 4 C 34 2.345790863037109 32.65420913696289 1 31 1 L 4 1 M 4 0 L 31 0 C 33.20914077758789 0 35 1.790859222412109 35 4 L 35 31 C 35 33.20914077758789 33.20914077758789 35 31 35 L 4 35 C 1.790859222412109 35 0 33.20914077758789 0 31 L 0 4 C 0 1.790859222412109 1.790859222412109 0 4 0 Z" stroke="none" fill="#edeef0"/>
                </g>
              </g>
              <text id="_2" data-name="2" transform="translate(913 787)" fill="#c2c5cc" font-size="13" font-family="Montserrat-Regular, Montserrat"><tspan x="-3.692" y="0">2</tspan></text>
            </g>
            <g id="Grupo_11072" data-name="Grupo 11072" transform="translate(-857 -765)">
              <g transform="matrix(1, 0, 0, 1, 842, 750)" filter="url(#Retângulo_156)">
                <g id="Retângulo_156-3" data-name="Retângulo 156" transform="translate(150 15)" fill="#fff" stroke="#edeef0" stroke-width="1">
                  <rect width="35" height="35" rx="4" stroke="none"/>
                  <rect x="0.5" y="0.5" width="34" height="34" rx="3.5" fill="none"/>
                </g>
              </g>
              <g id="Grupo_10933" data-name="Grupo 10933" transform="translate(995.301 1305.646) rotate(-90)">
                <path id="Caminho_3521" data-name="Caminho 3521" d="M522.788,18.465a1.028,1.028,0,0,1-.728-.3l-4.472-4.471a1.03,1.03,0,1,1,1.457-1.457l3.743,3.743,3.742-3.743a1.03,1.03,0,1,1,1.457,1.457l-4.47,4.471A1.03,1.03,0,0,1,522.788,18.465Z" transform="translate(0 0)" fill="#c2c5cc"/>
              </g>
            </g>
            <g id="Grupo_11076" data-name="Grupo 11076" transform="translate(-799 -765)">
              <g transform="matrix(1, 0, 0, 1, 784, 750)" filter="url(#Retângulo_156-2)">
                <g id="Retângulo_156-4" data-name="Retângulo 156" transform="translate(15 15)" fill="#fff" stroke="#edeef0" stroke-width="1">
                  <rect width="35" height="35" rx="4" stroke="none"/>
                  <rect x="0.5" y="0.5" width="34" height="34" rx="3.5" fill="none"/>
                </g>
              </g>
              <g id="Grupo_11071" data-name="Grupo 11071" transform="translate(830.699 260.072) rotate(90)">
                <path id="Caminho_3521-2" data-name="Caminho 3521" d="M522.788,18.465a1.028,1.028,0,0,1-.728-.3l-4.472-4.471a1.03,1.03,0,1,1,1.457-1.457l3.743,3.743,3.742-3.743a1.03,1.03,0,1,1,1.457,1.457l-4.47,4.471A1.03,1.03,0,0,1,522.788,18.465Z" transform="translate(0 0)" fill="#c2c5cc"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </Wrapper>
  )
}

export default ItemsPortfolio;