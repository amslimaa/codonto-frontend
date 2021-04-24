import { MainContainer, FormDiv, Heading } from '../../styled/pacient/consult';

import api from '../../services/api';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup'

import swal from 'sweetalert';

export default function consult(){

  type inputForms = {
    phone: string,
    birth: string,
  };
  const pacientFormSchema = yup.object().shape({
    phone: yup.string().required('Telefone é obrigatório.'),
    birth: yup.date().required('Data de nascimento é obrigatório.'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<inputForms>({
    resolver: yupResolver(pacientFormSchema)
  });
  const onSubmit = async (data: inputForms) => {
    try {
      const response = await api.get('/pacients',{
        params: {
          phone: data.phone,
          birth: data.birth
        }
      });
      console.log(response);
      swal(
        `${response.data.name}`,
        "Aguarde o contato da nossa equipe com informações de agendamento!",
        "success"
      );
    } catch (error) {
      console.log(error.response.data)
      swal("Desculpe", 'Não encontramos nenhum paciente com esses dados!', "error");
    }
  }
  return (
    <MainContainer>
      <Heading>
        <img src="../ufpi.svg" alt=""/>
        <h2>Consultar Agendamento</h2>
      </Heading>
      <FormDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="phone">Telefone</label>
          <input type="text" name='phone ' placeholder="(86) 9 9999-9999" {...register('phone')}/>
          {errors.phone && <span className='errorMessage'>{errors.phone.message}</span> }
          
          <label htmlFor="date" >Data de nascimento</label>
          <input type="date" name="birth"{...register('birth')} />
          {errors.birth && <span className='errorMessage'>Data inválida</span> }
          <button type="submit" className="button">Consultar</button>
        </form>
      </FormDiv>
    </MainContainer>
  )
}