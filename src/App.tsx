import ItemLadoDireito from './components/ItemLadoDireito'
import Navbar from './components/Navbar'
import styled from "styled-components";
import useFetch from './hooks/useFetch';
import ItemsFront from './components/ItemsFront';
import ItemsPortfolio from './components/ItemsPortfolio';
import LastChart from './components/LastChart';

const Wrapper = styled.main`
  width: 100%;
  main {
    display: flex;
  }
  .chart1 {
    margin: 2rem 0 1rem 1.5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 5px #ccc;
    width: 96%;
    height: 350px;
  }
  .first__title {
    margin: 2rem 0 1.5rem 1.5rem;
    color: #4c309b;
    font-size: 20px;
    font-weight: 700;
  }
`;
export interface RootObject { 
  isLoading: boolean;
  data: Data;
  error?: null;
}
export interface Data { 
  snapshotByPortfolio: SnapshotByPortfolio;
  dailyEquityByPortfolioChartData?: (DailyEquityByPortfolioChartData)[] | null;
  snapshotByProduct?: (SnapshotByProduct)[] | null;
}
export interface SnapshotByPortfolio { 
  equity: number;
  valueApplied: number;
  equityProfit: number;
  percentageProfit: number;
  indexerValue: number;
  percentageOverIndexer: number;
}
export interface DailyEquityByPortfolioChartData { 
  correctedQuota: number;
  dailyReferenceDate: number;
  movementTypeId: number;
  portfolioProductId: number;
  productName: string;
  value: number;
}
export interface Due { 
  date: string;
  daysUntilExpiration: number;
}
export interface SnapshotByProduct { 
  due: Due;
  fixedIncome: FixedIncome;
  hasBalance: number;
  position: Position;
  productHasQuotation: number;
}
export interface FixedIncome { 
  bondType: string;
  name: string;
  portfolioProductId: number;
}
export interface Position { 
  equity: number;
  indexerLabel: string;
  indexerValue: number;
  percentageOverIndexer: number;
  portfolioPercentage: number;
  profitability: number;
  valueApplied: number;
}

function App() {
  
  const url = 'https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData';
  const { data: datas, isLoading, error} = useFetch(url);

  if(isLoading){
    return <p>Carregando...</p>
  }
  if(error){
    return <p>Houve um problema...</p>
  }

  const { data }:any = datas;
  const { snapshotByPortfolio, snapshotByProduct }:Data = data;

  return (
    <Wrapper>
      <Navbar data={snapshotByPortfolio}/>
      <main>
        <ItemLadoDireito/>
        <section>
          <h2 className='first__title'>Renda Fixa</h2>
          <ItemsFront data={snapshotByPortfolio}/>
          <svg className='chart1' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <filter id="Chart.BG" x="0" y="0" width="1108" height="366" filterUnits="userSpaceOnUse">
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity="0.039"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
              <clipPath id="clip-path">
                <rect width="984" height="14" fill="none"/>
              </clipPath>
              <linearGradient id="linear-gradient" x1="0.5" y1="-0.833" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#a3a1fb"/>
                <stop offset="1" stop-color="#a3a1fb" stop-opacity="0.102"/>
              </linearGradient>
              <linearGradient id="linear-gradient-2" x1="0.5" y1="-0.833" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stop-color="#56d9fe"/>
                <stop offset="1" stop-color="#56d9fe" stop-opacity="0.11"/>
              </linearGradient>
              <clipPath id="clip-path-2">
                <rect width="1002" height="225.953" fill="none"/>
              </clipPath>
            </defs>
            <g id="Grupo_4343" data-name="Grupo 4343" transform="translate(9 7)">
              <g transform="matrix(1, 0, 0, 1, -9, -7)" filter="url(#Chart.BG)">
                <rect id="Chart.BG-2" data-name="Chart.BG" width="1090" height="348" rx="10" transform="translate(9 7)" fill="#fff"/>
              </g>
              <rect id="Retângulo_1470" data-name="Retângulo 1470" width="984.24" height="1.172" transform="translate(67 70.999)" fill="#eaf0f4"/>
              <text id="_12_000" data-name="12,000" transform="translate(53 75)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-34.87" y="0">12,000</tspan></text>
              <rect id="Retângulo_1470-2" data-name="Retângulo 1470" width="984.24" height="1.172" transform="translate(67 115.999)" fill="#eaf0f4"/>
              <text id="_10_000" data-name="10,000" transform="translate(53 120)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-35.651" y="0">10,000</tspan></text>
              <rect id="Retângulo_1470-3" data-name="Retângulo 1470" width="984.24" height="1.172" transform="translate(67 160.999)" fill="#eaf0f4"/>
              <text id="_8_000" data-name="8,000" transform="translate(53 165)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-31.57" y="0">8,000</tspan></text>
              <rect id="Retângulo_1470-4" data-name="Retângulo 1470" width="984.24" height="1.172" transform="translate(67 205.999)" fill="#eaf0f4"/>
              <text id="_6_000" data-name="6,000" transform="translate(53 210)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-31.273" y="0">6,000</tspan></text>
              <rect id="Retângulo_1470-5" data-name="Retângulo 1470" width="984.24" height="1.172" transform="translate(67 250.999)" fill="#eaf0f4"/>
              <text id="_4_000" data-name="4,000" transform="translate(53 255)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-31.955" y="0">4,000</tspan></text>
              <rect id="Retângulo_1470-6" data-name="Retângulo 1470" width="984.24" height="1.172" transform="translate(67 295.999)" fill="#eaf0f4"/>
              <text id="_0" data-name="0" transform="translate(51 300)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-7.337" y="0">0</tspan></text>
              <g id="page" transform="translate(89 308)" clipPath="url(#clipPath)">
                <g transform="translate(-295 -466)">
                  <text id="Mês" transform="translate(307 477)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-11.374" y="0">Mês</tspan></text>
                </g>
                <g transform="translate(-213 -466)">
                  <text id="Mês-2" data-name="Mês" transform="translate(307 477)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-11.374" y="0">Mês</tspan></text>
                </g>
                <g transform="translate(-131 -466)">
                  <text id="Mês-3" data-name="Mês" transform="translate(307 477)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-11.374" y="0">Mês</tspan></text>
                </g>
                <g transform="translate(-49 -466)">
                  <text id="Mês-4" data-name="Mês" transform="translate(307 477)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-11.374" y="0">Mês</tspan></text>
                </g>
                <g transform="translate(33 -466)">
                  <text id="Mês-5" data-name="Mês" transform="translate(307 477)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-11.374" y="0">Mês</tspan></text>
                </g>
                <g transform="translate(115 -466)">
                  <text id="Mês-6" data-name="Mês" transform="translate(307 477)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-11.374" y="0">Mês</tspan></text>
                </g>
                <g transform="translate(197 -466)">
                  <text id="Mês-7" data-name="Mês" transform="translate(307 477)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-11.374" y="0">Mês</tspan></text>
                </g>
                <g transform="translate(279 -466)">
                  <text id="Mês-8" data-name="Mês" transform="translate(307 477)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-11.374" y="0">Mês</tspan></text>
                </g>
                <g transform="translate(361 -466)">
                  <text id="Mês-9" data-name="Mês" transform="translate(307 477)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-11.374" y="0">Mês</tspan></text>
                </g>
                <g transform="translate(443 -466)">
                  <text id="Mês-10" data-name="Mês" transform="translate(307 477)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-11.374" y="0">Mês</tspan></text>
                </g>
                <g transform="translate(525 -466)">
                  <text id="Mês-11" data-name="Mês" transform="translate(307 477)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-11.374" y="0">Mês</tspan></text>
                </g>
                <g transform="translate(607 -466)">
                  <text id="Mês-12" data-name="Mês" transform="translate(307 477)" fill="#707b81" fontSize="11" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="-11.374" y="0">Mês</tspan></text>
                </g>
              </g>
              <g id="chart" transform="translate(67.818 71.388)">
                <path id="Caminho_383" data-name="Caminho 383" d="M-757.182,11775.262s81.606,115.928,160.99,115.928,83.307-113.945,166.263-113.945,99.039,127.66,162.58,121.838,83.281-49.169,167.542-53.768,130.487,5.484,168.969,6.618,157.079-36.384,157.079-36.384" transform="translate(757.182 -11775.262)" fill="none" stroke="#a3a1fb" strokeWidth="1"/>
                <path id="Caminho_384" data-name="Caminho 384" d="M226.24,11815.549s-118.6,37.516-157.079,36.384-86.042-10.789-170.3-6.188-102.667,47.515-166.208,53.338-79.358-122.29-162.314-122.29-87.145,114.4-166.529,114.4-160.99-115.928-160.99-115.928v224.754H226.24Z" transform="translate(757.182 -11775.262)" fill="url(#linear-gradient)"/>
              </g>
              <g id="chart-2" data-name="chart" transform="translate(67.818 114.952)">
                <path id="Caminho_383-2" data-name="Caminho 383" d="M-757.182,11743.464s81.606,69.467,160.99,69.467,84.018-115.979,166.974-115.979,98.328,124.2,161.869,120.707,84.446-52,168.707-54.759,129.322,25.827,167.8,26.506,157.079-21.8,157.079-21.8" transform="translate(757.182 -11696.952)" fill="none" stroke="#56d9fe" strokeWidth="1"/>
                <path id="Caminho_384-2" data-name="Caminho 384" d="M226.24,11767.6s-118.6,22.48-157.079,21.8-83.543-29.262-167.8-26.506-105.167,51.27-168.707,54.759-78.913-120.707-161.869-120.707-87.59,115.979-166.974,115.979-160.99-69.467-160.99-69.467v134.678H226.24Z" transform="translate(757.182 -11696.952)" fill="url(#linear-gradient-2)"/>
              </g>
              <g id="Repetição_de_grade_79" data-name="Repetição de grade 79" transform="translate(61.55 70.895)" clipPath="url(#clipPath-2)">
                <g transform="translate(-95.55 -460.895)">
                  <path id="Caminho_350" data-name="Caminho 350" d="M-768.547,11164.811v-225.953" transform="translate(870.097 -10477.963)" fill="none" stroke="#d6d9dd" strokeWidth="1"/>
                </g>
                <g transform="translate(-13.55 -460.895)">
                  <path id="Caminho_350-2" data-name="Caminho 350" d="M-768.547,11164.811v-225.953" transform="translate(870.097 -10477.963)" fill="none" stroke="#d6d9dd" strokeWidth="1"/>
                </g>
                <g transform="translate(68.45 -460.895)">
                  <path id="Caminho_350-3" data-name="Caminho 350" d="M-768.547,11164.811v-225.953" transform="translate(870.097 -10477.963)" fill="none" stroke="#d6d9dd" strokeWidth="1"/>
                </g>
                <g transform="translate(150.45 -460.895)">
                  <path id="Caminho_350-4" data-name="Caminho 350" d="M-768.547,11164.811v-225.953" transform="translate(870.097 -10477.963)" fill="none" stroke="#d6d9dd" strokeWidth="1"/>
                </g>
                <g transform="translate(232.45 -460.895)">
                  <path id="Caminho_350-5" data-name="Caminho 350" d="M-768.547,11164.811v-225.953" transform="translate(870.097 -10477.963)" fill="none" stroke="#d6d9dd" strokeWidth="1"/>
                </g>
                <g transform="translate(314.45 -460.895)">
                  <path id="Caminho_350-6" data-name="Caminho 350" d="M-768.547,11164.811v-225.953" transform="translate(870.097 -10477.963)" fill="none" stroke="#d6d9dd" strokeWidth="1"/>
                </g>
                <g transform="translate(396.45 -460.895)">
                  <path id="Caminho_350-7" data-name="Caminho 350" d="M-768.547,11164.811v-225.953" transform="translate(870.097 -10477.963)" fill="none" stroke="#d6d9dd" strokeWidth="1"/>
                </g>
                <g transform="translate(478.45 -460.895)">
                  <path id="Caminho_350-8" data-name="Caminho 350" d="M-768.547,11164.811v-225.953" transform="translate(870.097 -10477.963)" fill="none" stroke="#d6d9dd" strokeWidth="1"/>
                </g>
                <g transform="translate(560.45 -460.895)">
                  <path id="Caminho_350-9" data-name="Caminho 350" d="M-768.547,11164.811v-225.953" transform="translate(870.097 -10477.963)" fill="none" stroke="#d6d9dd" strokeWidth="1"/>
                </g>
                <g transform="translate(642.45 -460.895)">
                  <path id="Caminho_350-10" data-name="Caminho 350" d="M-768.547,11164.811v-225.953" transform="translate(870.097 -10477.963)" fill="none" stroke="#d6d9dd" strokeWidth="1"/>
                </g>
                <g transform="translate(724.45 -460.895)">
                  <path id="Caminho_350-11" data-name="Caminho 350" d="M-768.547,11164.811v-225.953" transform="translate(870.097 -10477.963)" fill="none" stroke="#d6d9dd" strokeWidth="1"/>
                </g>
                <g transform="translate(806.45 -460.895)">
                  <path id="Caminho_350-12" data-name="Caminho 350" d="M-768.547,11164.811v-225.953" transform="translate(870.097 -10477.963)" fill="none" stroke="#d6d9dd" strokeWidth="1"/>
                </g>
                <g transform="translate(888.45 -460.895)">
                  <path id="Caminho_350-13" data-name="Caminho 350" d="M-768.547,11164.811v-225.953" transform="translate(870.097 -10477.963)" fill="none" stroke="#d6d9dd" strokeWidth="1"/>
                </g>
              </g>
              <text id="Poupança_Itaú" data-name="Poupança Itaú" transform="translate(19 36)" fill="#627179" fontSize="18" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500"><tspan x="0" y="0">Rentabilidade dos Títulos</tspan></text>
            </g>
          </svg>
          <ItemsPortfolio data={snapshotByProduct}/>
          <LastChart data={snapshotByProduct}></LastChart>
        </section>
      </main>
    </Wrapper>
  )
}

export default App
