import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    prioridade: 'importante',
    status: 'Pendente',
    descricao: 'importante para o meu crescimento como dev'
  },
  {
    titulo: 'pagar a conta de luz',
    prioridade: 'urgente',
    status: 'concluida',
    descricao: 'baixar fatura no gmail'
  },
  {
    titulo: 'Ir para a academia',
    prioridade: 'importante',
    status: 'Pendente',
    descricao: 'fazer exercícios para manter a saúde'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
