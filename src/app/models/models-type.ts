export class EntidadeModel {
  idEmpresa: number;
  id: number;
  nmRazaoSocial: string;
  nmFantasia: string;
  dsLogradouro: string;
  nuLogradouro: string;
  dsComplemento: string;
  nmCidade: string;
  sgUf: string;
  nuCep: string;
  nuFone: string;
  nuCpfCnpj: string;
  nuRgIe: string;
  idStatus: number;
  dtInclusao: Date;
  dsEMail: string;
  dsHome: string;
  dsObservacao: string;
  clPessoa: string;
  tpContribuinte: number;
  tpPessoa: number;
  nmBairro: string;
  idCidade: number;
}


export class CidadeModel {
  id: string;
  iduF: string;
  sgUF: string;
  nmCidade: string;
}

export class EstadoModel {
  id: number;
  sgUF: string;
  nmEstado: string;
}

export class ViaCepModel {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;
}
