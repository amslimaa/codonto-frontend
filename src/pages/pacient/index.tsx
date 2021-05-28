import Head from 'next/head';

import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup'

import api from '../../services/api';

import { MainContainer } from '../../styled/pacient/booking';

import swal from 'sweetalert';
import Link from 'next/link';

import { useRouter } from 'next/router'

import { useAuth } from '../../context/AuthContext';

import * as dateFns from 'date-fns'

export default function pacient() {

  const router = useRouter();

  const {user, login, logout} = useAuth();

  
  type inputForms = {
    name: string,
    phone: string,
    email: string,
    birth: string,
    gen: string,
  };

  const pacientFormSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório.'),
    phone: yup.string().required('Telefone é obrigatório.'),
    birth: yup.date().required('Data de nascimento é obrigatório.'),
    gen: yup.string().required().max(1),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<inputForms>({
    resolver: yupResolver(pacientFormSchema)
  });

  

  const onSubmit = async (data: inputForms) => {
    let age = dateFns.differenceInCalendarYears(new Date(), Date.parse(data.birth));
    if( age >= 60 ){

      swal(
        "Desculpe",
        "Pacientes com mais de 60 anos só devem ser atendidos na fase de desaceleração da epidemia!",
        "error"
      ).then(() => {
        router.push('/')
      });

    }else {
      try {
        const response = await api.post('/pacients', data);
        login(response.data);
        swal(
          "Cadastro realizado!",
          "Pra agilizar seu atentimento precisamos que responda algumas perguntas!",
          "success"
        ).then(() => {
          router.push('/pacient/anamnese')
        });
      } catch (error) {
        swal(
          "Paciente ja cadastrado", 
          'Tente consultar seu agendamento com o seu numero de telefone e data de nascimento!', 
          "error")
          .then(() => {
            router.push('/pacient/consult')
          });
      }
    }
    
  }

  return (
    <MainContainer>
      <Head>
        <title>Agendamento CE - UFPI</title>
      </Head>

      <div className="section">
        <div className="left">
          <img src="ufpi.svg" alt="" />
          <h2>Agendamento Clínica Escola UFPI</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" placeholder="Nome" {...register('name')}/>
            {errors.name && <span className='errorMessage'>{errors.name.message}</span> }

            <label htmlFor="telefone">Telefone</label>
            <input type="text" name="telefone" placeholder="(00) 9 0000-0000"   {...register('phone')} />
            {errors.phone && <span className='errorMessage'>{errors.phone.message}</span> }

            <label htmlFor="date-born">Data de Nascimento</label>
            <input type="date" name="date-born" placeholder="Data de nascimento" {...register('birth')} />
            {errors.birth && <span className='errorMessage'>Data inválida</span> }


            <label htmlFor="sex">Sexo</label>
            <select name="sex" {...register('gen')} >
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
            {errors.gen && <span className='errorMessage'>{errors.gen.message}</span> }

            <button className="button" type="submit">Continuar para anmnese</button>
            <button className="button">
              <Link href="/pacient/consult" passHref>
                <a>Consultar andamento</a> 
              </Link>
            </button>     
          </form>
        </div>
        <div className="right">
          <img src="../Cadastro.svg" alt="Cadastro img" />
        </div>
      </div>
    </MainContainer>
  )
}

