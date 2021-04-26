import { MainContainer, FormDiv, Heading } from '../../styled/pacient/anamnese';

import api from '../../services/api';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup'

import swal from 'sweetalert';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function anamnese() {

  const {user, login, logout} = useAuth();
  



  const [hadSympton, setHadSympton] = useState(true);
  const [hadCovid, setHadCovid] = useState(true);


  type inputForms = {
    had_symptom: boolean;
    symptoms: string;
    day_of_first_sympton: string;
    had_covid: boolean;
    date_of_diagnosis: string;
    covid_cases_cycle: boolean;
    death_case_by_covid: boolean;
  };

  const pacientFormSchema = yup.object().shape({
    had_symptom: yup.boolean().required('Campo obrigartório'),
    symptoms: 
      yup.string()
      .when('had_symptom', {
        is: true,
        then: yup.string().required('Campo inválido')
      }),
    day_of_first_sympton: 
      yup.string()
      .when('had_symptom', {
        is: true,
        then: yup.string().required('Data inválida')
      })
      .when('had_symptom', {
        is: false,
        then: yup.string().default(null)
      }),
    had_covid: yup.boolean().required('Campo obrigartório'),
    date_of_diagnosis: 
      yup.string()
      .when('had_symptom', {
        is: true,
        then: yup.string().required('Data inválida')
      })
      .when('had_symptom', {
        is: false,
        then: yup.string().default(null)
      }),
    covid_cases_cycle: yup.boolean().required('Campo obrigartório'),
    death_case_by_covid: yup.boolean().required('Campo obrigartório'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<inputForms>({
    resolver: yupResolver(pacientFormSchema)
  });
  const onSubmit = async (data) => {

   const pacient_id = user.id;
   if( !data.had_covid ) data.date_of_diagnosis = null;
   if( !data.symptoms ) data.day_of_first_sympton = null;
   
    try {
      const response = await api.post('/anamneses', {
        pacient_id,
        ...data
      });
      console.log(response.data)
      swal(
        "Anamnese realizado!",
        "Aguarde o contato para agendamento",
        "success"
      );
    } catch (error) {
      console.log(error.response)
      swal("Um momento", 'Estamos enfrentando uma instabilidade', "error");
    }
  }


  useEffect(() => {
     swal(
      `Bem vindo ${user.name}`,
      "Para garantirmos a sua segurança, precisamos que responda algumas questões antes de agendarmos sua consulta",
      "success"
    )
  }, [])

  return (
    <MainContainer>
      
      <Heading>
        <img src="../ufpi.svg" alt="" />
        <h2>Anamnese SARS COV-19</h2>
      </Heading>
      <FormDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="had_symptom">Você presentou algum sintoma nos ultimos 15 dias?</label>
          <select
            id="had_symptom"
            name="had_symptom"
            {...register('had_symptom')}
            onChange={() => { setHadSympton(!hadSympton) }}
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
          {errors.had_symptom && <span className='errorMessage'>{errors.had_symptom.message}</span>}

          {hadSympton && (<>
            
            <label htmlFor="symptoms">Descreva o que você sentiu</label>
            <textarea id="symptoms" name="symptoms"  rows={4} {...register('symptoms')}></textarea>
            {errors.symptoms && <span className='errorMessage'>{errors.symptoms.message}</span>}

            <label htmlFor="day_of_first_sympton">Data do primeiro sintoma</label>
            <input id="day_of_first_sympton" type="date" defaultValue={null}  name="day_of_first_sympton"  {...register('day_of_first_sympton')} />
            {errors.day_of_first_sympton && <span className='errorMessage'>{errors.day_of_first_sympton.message}</span>}

            
          </>
          )}

          <label htmlFor="had_covid">Você ja foi diagnosticado com covid?</label>
          <select
            id="had_covid"
            name="had_covid"
            {...register('had_covid')}
            onChange={ () => setHadCovid(!hadCovid)}
          >
            <option value="true">Sim</option>
            <option value="false">Nao</option>
          </select>
          {errors.had_covid && <span className='errorMessage'>{errors.had_covid.message}</span>}

          {hadCovid && (<>
            <label htmlFor="date_of_diagnosis">Data do exame</label>
            <input id="date_of_diagnosis" type="date" defaultValue={null} name="date_of_diagnosis"  {...register('date_of_diagnosis')} />
            {errors.date_of_diagnosis && <span className='errorMessage'>Data inválida</span>}
          </>)}



          <label htmlFor="covid_cases_cycle">Você teve algum familiar diagnosticado com covid?</label>
          <select id="covid_cases_cycle" name="covid_cases_cycle" {...register('covid_cases_cycle')} >
            <option value="true">Sim</option>
            <option value="false">Nao</option>
          </select>
          {errors.covid_cases_cycle && <span className='errorMessage'>{errors.covid_cases_cycle.message}</span>}



          <label htmlFor="death_case_by_covid">Você perdeu alguém perdeu algum familiar</label>
          <select id="death_case_by_covid" name="death_case_by_covid" {...register('death_case_by_covid')} >
            <option value="true">Sim</option>
            <option value="false">Nao</option>
          </select>
          {errors.death_case_by_covid && <span className='errorMessage'>{errors.death_case_by_covid.message}</span>}

          <button type="submit" className="button">Consultar</button>
        </form>

      </FormDiv>
    </MainContainer>
  )
}