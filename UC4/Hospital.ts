// Atividade 1 -> Criar um sistema para um cliente leigo sem Jargão tecnico(Sistema Hospital)

class Hospital{
    // Informações Paciente:
    private nome_paciente:string;
    private cpf_paciente:string;
    descricao_paciente:string;
    idade_paciente:number;
    // Informação Medico:
    nome_medico:string;
    idade_medico:number;
    area_medico:string;
    motivo_visita:string;
    prescricao_medica:string;
    medicamento:string;

    // Construtor para os itens do Hospital
    constructor(nome_paciente:string,cpf_paciente:string,descricao_paciente:string,idade_paciente:number,nome_medico:string,idade_medico:number,area_medico:string,motivo_visita:string,prescricao_medica:string,medicamento:string){

    // Referencia ao Objeto
    this.area_medico = area_medico;
    this.cpf_paciente = cpf_paciente;
    this.idade_medico = idade_medico;
    this.motivo_visita = motivo_visita;
    this.nome_medico = nome_medico;
    this.nome_paciente = nome_paciente;
    this.idade_paciente = idade_paciente;
    this.descricao_paciente = descricao_paciente;
    this.prescricao_medica = prescricao_medica;
    this.medicamento = medicamento;

        
    }

    atendimento(){
        console.log(`Paciente ${this.nome_paciente} foi atendido por ${this.nome_medico}`)
    }

    ficha(){
        console.log(`Paciente ${this.nome_paciente} Foi feito a ficha, para ser atendido por ${this.nome_medico}`)
    }

     getNomePaciente(): string {
        return this.nome_paciente;
    }

    setNomePaciente(novoNome: string): void {
        this.nome_paciente = novoNome;
    }

    getCpfPaciente(): string {
        return this.cpf_paciente;
    }

    setCpfPaciente(novoCpf: string): void {
        this.cpf_paciente = novoCpf;
    }


}

const paciente1 = new Hospital("Jian Machado Silva","1212121212","Homem Adulto",26,"Oswaldo Pereira",39,"Clinico Geral","Dor na Coluna","Repouso e Hidratação","Dipirona");
const paciente2 = new Hospital("Erica Macho Silva Lima","1212121212","Adolescente",17,"Luis Pereira Lima silva",59,"Clinico Geral","Dor na Coluna","Repouso e Hidratação","Dipirona");
const paciente3 = new Hospital("Kalleo Pentecostal Pinto","1212121212","Adolescente",16,"Oswaldo Pereira",39,"Clinico Geral","Dor na Coluna","Repouso e Hidratação","Dipirona");
const paciente4 = new Hospital("Sidnei Jacinto Biruleibe ","1212121212","Homem Adulto",27,"Luis Pereira Lima silva",59,"Clinico Geral","Dor na Coluna","Repouso e Hidratação","Dipirona");

paciente1.atendimento();
paciente2.ficha();
