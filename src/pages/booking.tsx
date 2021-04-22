import Head from 'next/head';

import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup'

import api from '../services/api';

import { MainContainer } from '../styled/booking';

import swal from 'sweetalert';


export default function booking() {

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
  console.log(errors);
  const onSubmit = async (data: inputForms) => {
    try {
      const response = await api.post('/pacients', data);
      console.log(response.data)
      swal(
        "Cadastro realizado!",
        "Aguarde o contato para agendamento",
        "success"
      );
    } catch (error) {
      console.log(error.response.data)
      swal("Um momento", 'Paciente ja cadastrado', "error");
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
          </form>
        </div>
        <div className="right">
          <img src="Cadastro.svg" alt="Cadastro img" />
        </div>
      </div>
    </MainContainer>
  )
}