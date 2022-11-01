import ItemLadoDireito from './components/ItemLadoDireito'
import Navbar from './components/Navbar'
import styled from "styled-components";
import useFetch from './hooks/useFetch';
import ItemsFront from './components/ItemsFront';
import ItemsPortfolio from './components/ItemsPortfolio';

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
  .chart2 {
    display: flex;
    margin: 2rem 1.5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 5px #ccc;
  }
  .chart2 svg {
    width: 50%;
    height: 500px;
  }
`;

function App() {
  
  const url = 'https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData';
  const { data: Data, isLoading, error} = useFetch(url);

  if(isLoading){
    return <p>Carregando...</p>
  }
  if(error){
    return <p>Houve um problema...</p>
  }

  const { data }:any = Data;
  const { snapshotByPortfolio, snapshotByProduct }:any = data;

  return (
    <Wrapper>
      <Navbar data={snapshotByPortfolio}/>
      <main>
        <ItemLadoDireito/>
        <section>
          <h2 className='first__title'>Renda Fixa</h2>
          <ItemsFront data={snapshotByPortfolio}/>
          <svg className='chart1' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
          <div className='chart2'>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="596.478" height="508.236" viewBox="0 0 596.478 508.236">
              <g id="Grupo_12120" data-name="Grupo 12120" transform="translate(-219 -1308)">
                <g transform="matrix(1, 0, 0, 1, 219, 1308)" filter="url(#Statistics.BG)">
                  <rect id="Statistics.BG-2" data-name="Statistics.BG" width="536.478" height="448.236" rx="10" transform="translate(30 28)" fill="#fff"/>
                </g>
                <g id="Grupo_11084" data-name="Grupo 11084" transform="translate(328 1230.334)">
                  <path id="Caminho_3473" data-name="Caminho 3473" d="M596.926,97.506l-27,47.974a79.442,79.442,0,0,1-28.224,147.954l7.442,54.552c66.333-9.05,116.318-66.318,116.318-133.265A134.65,134.65,0,0,0,596.926,97.506Z" transform="translate(-356.468 95.778)" fill="#9e51ba"/>
                  <path id="Caminho_3474" data-name="Caminho 3474" d="M571.641,150.783l26.947-48A134.489,134.489,0,0,0,541.325,85.84l-3.51,54.945A78.964,78.964,0,0,1,571.641,150.783Z" transform="translate(-358.251 90.434)" fill="#0dd1e3"/>
                  <path id="Caminho_3475" data-name="Caminho 3475" d="M576.6,299.608a79.457,79.457,0,0,1,0-158.914c1.7,0,3.387.073,5.064.178l3.51-54.945q-4.282-.273-8.574-.274c-73.785,0-134.5,60.715-134.5,134.5s60.715,134.5,134.5,134.5a134.588,134.588,0,0,0,18.19-1.235l-7.446-54.55A80.09,80.09,0,0,1,576.6,299.608Z" transform="translate(-402.098 90.348)" fill="#ff8052"/>
                </g>
                <g id="Product" transform="translate(308 1723.334)" clip-path="url(#clip-path)">
                  <g id="Product-2" data-name="Product" transform="translate(0 1.484)">
                    <rect id="Label" width="8" height="8" rx="4" transform="translate(0 2.618)" fill="#dae0e3"/>
                    <text id="Poupança_Itaú" data-name="Poupança Itaú" transform="translate(12.066 10.516)" fill="#627179" font-size="12" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Tipo</tspan></text>
                  </g>
                  <g id="Product-3" data-name="Product" transform="translate(136 1.484)">
                    <rect id="Label-2" data-name="Label" width="8" height="8" rx="4" transform="translate(0 2.618)" fill="#dae0e3"/>
                    <text id="Poupança_Itaú-2" data-name="Poupança Itaú" transform="translate(12.066 10.516)" fill="#627179" font-size="12" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Tipo</tspan></text>
                  </g>
                  <g id="Product-4" data-name="Product" transform="translate(272 1.484)">
                    <rect id="Label-3" data-name="Label" width="8" height="8" rx="4" transform="translate(0 2.618)" fill="#dae0e3"/>
                    <text id="Poupança_Itaú-3" data-name="Poupança Itaú" transform="translate(12.066 10.516)" fill="#627179" font-size="12" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Tipo</tspan></text>
                  </g>
                  <g id="Product-5" data-name="Product" transform="translate(0 25.484)">
                    <rect id="Label-4" data-name="Label" width="8" height="8" rx="4" transform="translate(0 2.618)" fill="#dae0e3"/>
                    <text id="Poupança_Itaú-4" data-name="Poupança Itaú" transform="translate(12.066 10.516)" fill="#627179" font-size="12" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Tipo</tspan></text>
                  </g>
                  <g id="Product-6" data-name="Product" transform="translate(136 25.484)">
                    <rect id="Label-5" data-name="Label" width="8" height="8" rx="4" transform="translate(0 2.618)" fill="#dae0e3"/>
                    <text id="Poupança_Itaú-5" data-name="Poupança Itaú" transform="translate(12.066 10.516)" fill="#627179" font-size="12" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Tipo</tspan></text>
                  </g>
                  <g id="Product-7" data-name="Product" transform="translate(272 25.484)">
                    <rect id="Label-6" data-name="Label" width="8" height="8" rx="4" transform="translate(0 2.618)" fill="#dae0e3"/>
                    <text id="Poupança_Itaú-6" data-name="Poupança Itaú" transform="translate(12.066 10.516)" fill="#627179" font-size="12" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Tipo</tspan></text>
                  </g>
                </g>
                <text id="Poupança_Itaú-7" data-name="Poupança Itaú" transform="translate(267 1370.333)" fill="#627179" font-size="18" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Divisão de Carteira por Tipos</tspan></text>
                <line id="Linha_274" data-name="Linha 274" x2="535.978" transform="translate(249.5 1389.833)" fill="none" stroke="#eef2f4" stroke-width="1"/>
                <line id="Linha_275" data-name="Linha 275" x2="535.978" transform="translate(249.5 1701.833)" fill="none" stroke="#eef2f4" stroke-width="1"/>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="600" height="508.236" viewBox="0 0 600 508.236">
              <g id="Grupo_12121" data-name="Grupo 12121" transform="translate(-219 -1308)">
                <g transform="matrix(1, 0, 0, 1, 219, 1308)" filter="url(#Statistics.BG)">
                  <rect id="Statistics.BG-2" data-name="Statistics.BG" width="540" height="448.236" rx="10" transform="translate(30 28)" fill="#fff"/>
                </g>
                <g id="Grupo_11084" data-name="Grupo 11084" transform="translate(369.568 1406.333)">
                  <path id="Caminho_3473" data-name="Caminho 3473" d="M596.926,97.506l-27,47.974a79.442,79.442,0,0,1-28.224,147.954l7.442,54.552c66.333-9.05,116.318-66.318,116.318-133.265A134.65,134.65,0,0,0,596.926,97.506Z" transform="translate(-396.468 -80.222)" fill="#9e51ba"/>
                  <path id="Caminho_3474" data-name="Caminho 3474" d="M571.641,150.783l26.947-48A134.489,134.489,0,0,0,541.325,85.84l-3.51,54.945A78.964,78.964,0,0,1,571.641,150.783Z" transform="translate(-398.252 -85.566)" fill="#0dd1e3"/>
                  <path id="Caminho_3475" data-name="Caminho 3475" d="M576.6,299.608a79.457,79.457,0,0,1,0-158.914c1.7,0,3.387.073,5.064.178l3.51-54.945q-4.282-.273-8.574-.274c-73.785,0-134.5,60.715-134.5,134.5s60.715,134.5,134.5,134.5a134.588,134.588,0,0,0,18.19-1.235l-7.446-54.55A80.09,80.09,0,0,1,576.6,299.608Z" transform="translate(-442.098 -85.652)" fill="#ff8052"/>
                </g>
                <g id="Product" transform="translate(308 1723.334)" clip-path="url(#clip-path)">
                  <g id="Product-2" data-name="Product" transform="translate(0 1.484)">
                    <rect id="Label" width="8" height="8" rx="4" transform="translate(0 2.618)" fill="#dae0e3"/>
                    <text id="Poupança_Itaú" data-name="Poupança Itaú" transform="translate(12.066 10.516)" fill="#627179" font-size="12" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Título</tspan></text>
                  </g>
                  <g id="Product-3" data-name="Product" transform="translate(136 1.484)">
                    <rect id="Label-2" data-name="Label" width="8" height="8" rx="4" transform="translate(0 2.618)" fill="#dae0e3"/>
                    <text id="Poupança_Itaú-2" data-name="Poupança Itaú" transform="translate(12.066 10.516)" fill="#627179" font-size="12" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Título</tspan></text>
                  </g>
                  <g id="Product-4" data-name="Product" transform="translate(272 1.484)">
                    <rect id="Label-3" data-name="Label" width="8" height="8" rx="4" transform="translate(0 2.618)" fill="#dae0e3"/>
                    <text id="Poupança_Itaú-3" data-name="Poupança Itaú" transform="translate(12.066 10.516)" fill="#627179" font-size="12" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Título</tspan></text>
                  </g>
                  <g id="Product-5" data-name="Product" transform="translate(0 25.484)">
                    <rect id="Label-4" data-name="Label" width="8" height="8" rx="4" transform="translate(0 2.618)" fill="#dae0e3"/>
                    <text id="Poupança_Itaú-4" data-name="Poupança Itaú" transform="translate(12.066 10.516)" fill="#627179" font-size="12" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Título</tspan></text>
                  </g>
                  <g id="Product-6" data-name="Product" transform="translate(136 25.484)">
                    <rect id="Label-5" data-name="Label" width="8" height="8" rx="4" transform="translate(0 2.618)" fill="#dae0e3"/>
                    <text id="Poupança_Itaú-5" data-name="Poupança Itaú" transform="translate(12.066 10.516)" fill="#627179" font-size="12" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Título</tspan></text>
                  </g>
                  <g id="Product-7" data-name="Product" transform="translate(272 25.484)">
                    <rect id="Label-6" data-name="Label" width="8" height="8" rx="4" transform="translate(0 2.618)" fill="#dae0e3"/>
                    <text id="Poupança_Itaú-6" data-name="Poupança Itaú" transform="translate(12.066 10.516)" fill="#627179" font-size="12" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Título</tspan></text>
                  </g>
                </g>
                <text id="Poupança_Itaú-7" data-name="Poupança Itaú" transform="translate(267 1370.333)" fill="#627179" font-size="18" font-family="Montserrat-Medium, Montserrat" font-weight="500"><tspan x="0" y="0">Divisão de Carteira por Título</tspan></text>
                <line id="Linha_274" data-name="Linha 274" x2="539.5" transform="translate(249.5 1389.833)" fill="none" stroke="#eef2f4" stroke-width="1"/>
                <line id="Linha_275" data-name="Linha 275" x2="539.5" transform="translate(249.5 1701.833)" fill="none" stroke="#eef2f4" stroke-width="1"/>
              </g>
            </svg>
          </div>
        </section>
      </main>
    </Wrapper>
  )
}

export default App
