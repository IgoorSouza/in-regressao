import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IHeader from "../components/iheader";
import IGrafico from "../assets/igrafico.png";

type IEntradaDeDados = {
  IArea: number;
  IRendimento: number;
  IValorproducao: number;
};

export default function IDadosCarregados() {
  const [iDados, ISetIDados] = useState<IEntradaDeDados[]>([]);

  useEffect(() => {
    fetch("/idata.json")
      .then((iResposta) => iResposta.json())
      .then((iJson) => ISetIDados(iJson));
  }, []);

  return (
    <IHeader>
      <h2 className="text-xl text-center m-2 text-white">Dados carregados</h2>

      <div className="max-h-[300px] overflow-y-scroll border border-gray-300 bg-white bg-opacity-90 rounded-md shadow-md">
        <table className="table-auto border border-gray-300">
          <thead>
            <tr className="bg-orange-300">
              <th className="px-4 py-2 border border-gray-400">
                Área plantada <br /> (Hectares)
              </th>
              <th className="px-6 py-2 border border-gray-400">
                Rendimento <br /> (Toneladas por Hectare)
              </th>
              <th className="px-4 py-2 border border-gray-400">
                Valor da Produção
              </th>
            </tr>
          </thead>
          <tbody>
            {iDados.map((ILinha, iIndice) => (
              <tr key={iIndice} className="text-center">
                <td className="border border-gray-400 px-4 py-1">
                  {ILinha.IArea}
                </td>
                <td className="border border-gray-400 px-4 py-1">
                  {ILinha.IRendimento.toLocaleString("pt-BR")}
                </td>
                <td className="border border-gray-400 px-4 py-1">
                  R$ {(ILinha.IValorproducao * 1000).toLocaleString("pt-BR")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <img src={IGrafico} className="max-w-[800px] mt-5" />

      <Link
        to="/input"
        className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-md mt-5"
      >
        Ir para o cálculo
      </Link>
    </IHeader>
  );
}
