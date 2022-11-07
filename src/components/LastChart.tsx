import { useState } from "react";
import { Chart } from "react-google-charts";
import styled from "styled-components";
import { SomaPorTipo } from "../utils";

type Props = {}

const Wrapper = styled.main`
    height: 500px;
    display: flex;
    justify-content: center;
    margin: 2rem 1.5rem;
    box-shadow: 0px 0px 5px #ccc;
    background-color: #fff;
    border-radius: 0.5rem;
    h2 {
        margin: 2rem 1.5rem;
        padding: 0 0 1rem 1rem;
        border-bottom: 2px solid #DAE0E3;
        color:#627179;
        font-size: 18px;
        font-family: 'Montserrat';
        font-weight: 500;
    }
`;

const LastChart = ({ data }: any) => {
    
    const [options, setOptions] = useState({
      pieHole: 0.6,
      height:380,
      chartArea:{left:0, top:0, width:'100%',height:'75%'},
      is3D: false,
      colors: ['#0DD1E3', '#9E51BA', '#FF8052'],
      legend: {position: 'bottom', textStyle: {fontSize: 12}}
    });
    const [options2, setOptions2] = useState({
        pieHole: 0.6,
        height:380,
        chartArea:{left:0, top:0, width:'100%',height:'75%'},
        is3D: false,
        colors: ['#0DD1E3', '#9E51BA', '#FF8052', '#CCCCCC', '#5D41AC', '#89D5FD'],
        legend: {position: 'bottom', textStyle: {fontSize: 12}}
    });
    const equityTesouroDireto = SomaPorTipo({ data, tipo: "Tesouro Direto" });
    const equityRendaFixaPre = SomaPorTipo({ data, tipo: "Renda Fixa Pré" });
    const equityRendaFixaPos = SomaPorTipo({ data, tipo: "Renda Fixa Pós" });

    const [dataChart1, setData] = useState([
        ['Tipos', 'Quantidade'],
        ['Tesouro Direto', equityTesouroDireto],
        ['Renda Fixa Pré', equityRendaFixaPre],
        ['Renda Fixa Pós', equityRendaFixaPos],
    ]);

    const titulos = data.map((item:any)=>{
        return [ item.fixedIncome.name, item.position.equity];
    });

    const [dataChart2, setData2] = useState([
        ['Tipos', 'Quantidade'], ...titulos
    ]);

  return (
    <Wrapper>
        <div>
            <h2>Divisão de Carteira por Tipos</h2>
            <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            data={dataChart1}
            options={options}
            />
        </div>
        <div>
            <h2>Divisão de Carteira por Título</h2>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                data={dataChart2}
                options={options2}
            />
        </div>
    </Wrapper>
  )
}

export default LastChart;