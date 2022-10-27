import styled from "styled-components";

const Wrapper = styled.main`

  display: flex;
  flex-direction: column;
  margin: 2rem;
  background-color: #fff;
  .item {
    display: flex;
    margin: 0 0 1rem 2rem;
  }
  .tit {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .primeiro {
    margin-top: 0.5rem;
    display: flex;
    align-items: flex-end;
  }
  .fixedIncome__name {
    color: #4e5b61;
    font-size: 12px;
    width: 180px;
    //font-family: 'SegoeUI';
  }
  .primeiro .bondType {
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
  .terceiro {
    display: flex;
  }
  .terceiro span {
    letter-spacing: 0.05em;
  }
  .terceiro p {
    color: #008dcb;
    font-size: 16px;
    //font-family: 'SegoeUI';
  }
`;

type Props = {}

const ItemsPortfolio = (props: any) => {
  console.log(props.data);

  return (
    <Wrapper>            
      <svg key={''} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1090">
        <g id="Repetição_de_grade_147" data-name="Repetição de grade 147" clipPath="url(#clipPath)">
          <g id="Grupo_12119" data-name="Grupo 12119" transform="translate(-248.5 -688)">
            <line id="Linha_273" data-name="Linha 273" x2="1090" transform="translate(248.5 785)" fill="none" stroke="#eef2f4" strokeWidth="1"/>
            <g id="Grupo_12118" data-name="Grupo 12118" transform="translate(0 -120)">
              <text id="Poupança_Itaú" data-name="Poupança Itaú" transform="translate(277.001 858)" fill="#4e5b61" fontSize="12" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="0">Tesouro IPCA+ com Juros</tspan><tspan x="0" y="16">Semestrais 2024 (NTNB)</tspan></text>
              <text id="Poupança_Itaú-2" data-name="Poupança Itaú" transform="translate(526.065 872)" fill="#8a51ba" fontSize="14" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="0">Tesouro Direto</tspan></text>
              <text id="Poupança_Itaú-3" data-name="Poupança Itaú" transform="translate(526.001 853)" fill="#4e5b61" fontSize="9" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.05em"><tspan x="0" y="0">CLASSE</tspan></text>
              <g id="União_243" data-name="União 243" transform="translate(8177 -837)" fill="none">
                <path d="M-7899,1645h352a10,10,0,0,1,10,10v57a10,10,0,0,1-10,10h-352a10,10,0,0,1-10-10v-57A10,10,0,0,1-7899,1645Z" stroke="none"/>
                <path d="M -7899 1646 C -7903.96240234375 1646 -7908 1650.037353515625 -7908 1655 L -7908 1712 C -7908 1716.962646484375 -7903.96240234375 1721 -7899 1721 L -7547 1721 C -7542.03759765625 1721 -7538 1716.962646484375 -7538 1712 L -7538 1655 C -7538 1650.037353515625 -7542.03759765625 1646 -7547 1646 L -7899 1646 M -7899 1645 L -7547 1645 C -7541.47705078125 1645 -7537 1649.477172851562 -7537 1655 L -7537 1712 C -7537 1717.522827148438 -7541.47705078125 1722 -7547 1722 L -7899 1722 C -7904.52294921875 1722 -7909 1717.522827148438 -7909 1712 L -7909 1655 C -7909 1649.477172851562 -7904.52294921875 1645 -7899 1645 Z" stroke="none" fill="#dae0e3"/>
              </g>
              <rect id="borda-area-defesa" width="14" height="14" transform="translate(336.535 815.508)" fill="none"/>
              <path id="Caminho_3844" data-name="Caminho 3844" d="M772.757,55.128a.47.47,0,0,0-.47.47V59.02a.47.47,0,1,0,.939,0V55.6A.47.47,0,0,0,772.757,55.128Zm0-2.519a.469.469,0,0,0-.47.47v.642a.47.47,0,1,0,.939,0v-.642A.469.469,0,0,0,772.757,52.609Zm4.645-1.256A6.645,6.645,0,1,0,772.7,62.7h0a6.646,6.646,0,0,0,4.7-11.343Zm-4.7,10.4h0a5.707,5.707,0,1,1,5.705-5.708A5.713,5.713,0,0,1,772.7,61.756Z" transform="translate(-442.811 766.45)" fill="#4e5b61"/>
              <text id="Poupança_Itaú-4" data-name="Poupança Itaú" transform="translate(277.447 826)" fill="#4e5b61" fontSize="9" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.05em"><tspan x="0" y="0">TÍTULO</tspan></text>
            </g>
            <g id="Grupo_12093" data-name="Grupo 12093" transform="translate(318 34)">
              <g id="Grupo_12050" data-name="Grupo 12050" transform="translate(810.999 691)">
                <text id="Poupança_Itaú-5" data-name="Poupança Itaú" transform="translate(0 26.615)" fill="#008dcb" fontSize="16" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="0">15.05.2024</tspan></text>
                <text id="Poupança_Itaú-6" data-name="Poupança Itaú" transform="translate(0.138 9)" fill="#4e5b61" fontSize="9" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.05em"><tspan x="0" y="0">DATA VENC.</tspan></text>
              </g>
              <g id="Grupo_12051" data-name="Grupo 12051" transform="translate(910.089 691)">
                <text id="Poupança_Itaú-7" data-name="Poupança Itaú" transform="translate(0 26.615)" fill="#008dcb" fontSize="16" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="0">5762</tspan></text>
                <text id="Poupança_Itaú-8" data-name="Poupança Itaú" transform="translate(-0.09 9)" fill="#4e5b61" fontSize="9" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.05em"><tspan x="0" y="0">DIAS ATÉ VENC.</tspan></text>
              </g>
              <text id="Poupança_Itaú-9" data-name="Poupança Itaú" transform="translate(810.999 673)" fill="#4e5b61" fontSize="9" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.05em"><tspan x="0" y="0">VENCIMENTO</tspan></text>
              <g id="União_241" data-name="União 241" transform="translate(8727.999 -3506)" fill="none">
                <path d="M-7917,4160h178a10,10,0,0,1,10,10v57a10,10,0,0,1-10,10h-178a10,10,0,0,1-10-10v-57A10,10,0,0,1-7917,4160Z" stroke="none"/>
                <path d="M -7917 4161 C -7921.96240234375 4161 -7926 4165.03759765625 -7926 4170 L -7926 4227 C -7926 4231.96240234375 -7921.96240234375 4236 -7917 4236 L -7739 4236 C -7734.03759765625 4236 -7730 4231.96240234375 -7730 4227 L -7730 4170 C -7730 4165.03759765625 -7734.03759765625 4161 -7739 4161 L -7917 4161 M -7917 4160 L -7739 4160 C -7733.47705078125 4160 -7729 4164.47705078125 -7729 4170 L -7729 4227 C -7729 4232.52294921875 -7733.47705078125 4237 -7739 4237 L -7917 4237 C -7922.52294921875 4237 -7927 4232.52294921875 -7927 4227 L -7927 4170 C -7927 4164.47705078125 -7922.52294921875 4160 -7917 4160 Z" stroke="none" fill="#dae0e3"/>
              </g>
              <g id="Grupo_12089" data-name="Grupo 12089" transform="translate(123.757 613.952)">
                <rect id="borda-area-defesa-2" data-name="borda-area-defesa" width="14" height="14" transform="translate(765.242 48.548)" fill="none"/>
                <path id="Caminho_3844-2" data-name="Caminho 3844" d="M772.757,55.128a.47.47,0,0,0-.47.47V59.02a.47.47,0,1,0,.939,0V55.6A.47.47,0,0,0,772.757,55.128Zm0-2.519a.469.469,0,0,0-.47.47v.642a.47.47,0,1,0,.939,0v-.642A.469.469,0,0,0,772.757,52.609Zm4.645-1.256A6.645,6.645,0,1,0,772.7,62.7h0a6.646,6.646,0,0,0,4.7-11.343Zm-4.7,10.4h0a5.707,5.707,0,1,1,5.705-5.708A5.713,5.713,0,0,1,772.7,61.756Z" transform="translate(-0.475 -0.5)" fill="#4e5b61"/>
              </g>
            </g>
            <g id="Grupo_12094" data-name="Grupo 12094" transform="translate(-435 34)">
              <g id="Grupo_12053" data-name="Grupo 12053" transform="translate(1095 691)">
                <text id="Poupança_Itaú-10" data-name="Poupança Itaú" transform="translate(0 26.615)" fill="#38bfa0" fontSize="16" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="0">1.003,00</tspan></text>
                <text id="Poupança_Itaú-11" data-name="Poupança Itaú" transform="translate(0.434 9)" fill="#4e5b61" fontSize="9" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.05em"><tspan x="0" y="0">VALOR INVES.</tspan></text>
              </g>
              <g id="Grupo_12054" data-name="Grupo 12054" transform="translate(1182 691)">
                <text id="Poupança_Itaú-12" data-name="Poupança Itaú" transform="translate(0 26.615)" fill="#38bfa0" fontSize="16" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="0">1.124,00</tspan></text>
                <text id="Poupança_Itaú-13" data-name="Poupança Itaú" transform="translate(0 9)" fill="#4e5b61" fontSize="9" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.05em"><tspan x="0" y="0">SALDO BRUTO</tspan></text>
              </g>
              <g id="Grupo_12099" data-name="Grupo 12099" transform="translate(1350 691)">
                <text id="Poupança_Itaú-14" data-name="Poupança Itaú" transform="translate(0 26.615)" fill="#38bfa0" fontSize="16" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="0">5,33%</tspan></text>
                <text id="Poupança_Itaú-15" data-name="Poupança Itaú" transform="translate(0 9)" fill="#4e5b61" fontSize="9" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.05em"><tspan x="0" y="0">% DA CART.</tspan></text>
              </g>
              <g id="Grupo_12097" data-name="Grupo 12097" transform="translate(1272 691)">
                <text id="Poupança_Itaú-16" data-name="Poupança Itaú" transform="translate(0 26.615)" fill="#38bfa0" fontSize="16" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="0">48,55%</tspan></text>
                <text id="Poupança_Itaú-17" data-name="Poupança Itaú" transform="translate(0 9)" fill="#4e5b61" fontSize="9" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.05em"><tspan x="0" y="0">RENT.</tspan></text>
              </g>
              <g id="Grupo_12116" data-name="Grupo 12116" transform="translate(1427 691)">
                <text id="Poupança_Itaú-18" data-name="Poupança Itaú" transform="translate(0 26.615)" fill="#38bfa0" fontSize="16" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="0">1,24</tspan></text>
                <text id="Poupança_Itaú-19" data-name="Poupança Itaú" transform="translate(0 9)" fill="#4e5b61" fontSize="9" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.05em"><tspan x="0" y="0">CDI</tspan></text>
              </g>
              <g id="Grupo_12117" data-name="Grupo 12117" transform="translate(1480 691)">
                <text id="Poupança_Itaú-20" data-name="Poupança Itaú" transform="translate(0 26.615)" fill="#38bfa0" fontSize="16" fontFamily="SegoeUI, Segoe UI"><tspan x="0" y="0">118</tspan></text>
                <text id="Poupança_Itaú-21" data-name="Poupança Itaú" transform="translate(0 9)" fill="#4e5b61" fontSize="9" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.05em"><tspan x="0" y="0">SOBRE CDI</tspan></text>
              </g>
              <g id="União_242" data-name="União 242" transform="translate(9012 -3506)" fill="none">
                <path d="M-7917,4160h439a10,10,0,0,1,10,10v57a10,10,0,0,1-10,10h-439a10,10,0,0,1-10-10v-57A10,10,0,0,1-7917,4160Z" stroke="none"/>
                <path d="M -7917 4161 C -7921.96240234375 4161 -7926 4165.03759765625 -7926 4170 L -7926 4227 C -7926 4231.96240234375 -7921.96240234375 4236 -7917 4236 L -7478 4236 C -7473.03759765625 4236 -7469 4231.96240234375 -7469 4227 L -7469 4170 C -7469 4165.03759765625 -7473.03759765625 4161 -7478 4161 L -7917 4161 M -7917 4160 L -7478 4160 C -7472.47705078125 4160 -7468 4164.47705078125 -7468 4170 L -7468 4227 C -7468 4232.52294921875 -7472.47705078125 4237 -7478 4237 L -7917 4237 C -7922.52294921875 4237 -7927 4232.52294921875 -7927 4227 L -7927 4170 C -7927 4164.47705078125 -7922.52294921875 4160 -7917 4160 Z" stroke="none" fill="#dae0e3"/>
              </g>
              <text id="Poupança_Itaú-22" data-name="Poupança Itaú" transform="translate(1095 673)" fill="#4e5b61" fontSize="9" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.05em"><tspan x="0" y="0">MINHA POSIÇÃO</tspan></text>
              <g id="Grupo_12090" data-name="Grupo 12090" transform="translate(423.293 613.952)">
                <rect id="borda-area-defesa-3" data-name="borda-area-defesa" width="14" height="14" transform="translate(765.242 48.548)" fill="none"/>
                <path id="Caminho_3844-3" data-name="Caminho 3844" d="M772.757,55.128a.47.47,0,0,0-.47.47V59.02a.47.47,0,1,0,.939,0V55.6A.47.47,0,0,0,772.757,55.128Zm0-2.519a.469.469,0,0,0-.47.47v.642a.47.47,0,1,0,.939,0v-.642A.469.469,0,0,0,772.757,52.609Zm4.645-1.256A6.645,6.645,0,1,0,772.7,62.7h0a6.646,6.646,0,0,0,4.7-11.343Zm-4.7,10.4h0a5.707,5.707,0,1,1,5.705-5.708A5.713,5.713,0,0,1,772.7,61.756Z" transform="translate(-0.475 -0.5)" fill="#4e5b61"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
      { props.data.map((item:any)=>{
        return (
          <div className="item">
            <div className="tit">
              <div>
                <span>TÍTULO</span>
                <i>i</i>
              </div>
              <div className="primeiro">
                <p className="fixedIncome__name">{ item.fixedIncome.name }</p>
                <div>
                  <span>CLASSE</span>
                  <p className="bondType">{ item.fixedIncome.bondType }</p>
                </div>
              </div>
            </div>
            <div className="minpos">
              <div>
                <span>MINHA POSIÇÃO</span>
                <i>i</i>
              </div>
              <div className="segundo">
                <div>
                  <span>VALOR INVES.</span>
                  <p className="position">{ item.position.valueApplied }</p>
                </div>
                <div>
                  <span>SALDO BRUTO</span>
                  <p className="position">{ item.position.equity }</p>
                </div>
                <div>
                  <span>RENT.</span>
                  <p className="position">{ item.position.profitability }</p>
                </div>
                <div>
                  <span>% DA CART.</span>
                  <p className="position">{ item.position.portfolioPercentage }</p>
                </div>
                <div>
                  <span>CDI</span>
                  <p className="position">{ item.position.indexerValue }</p>
                </div>
                <div>
                  <span>SOBRE CDI</span>
                  <p className="position">{ item.position.percentageOverIndexer }</p>
                </div>
              </div>
            </div>
            <div className="due">
              <div>
                <span>VENCIMENTO</span>
                <i className="bi bi-info-circle"></i>
              </div>
              <div className="terceiro">
                <div>
                  <span>DATA VENC.</span>
                  <p>{ item.due.date }</p>
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
    </Wrapper>
  )
}

export default ItemsPortfolio;