import React,{FC} from 'react';
import {Container,Text, ContainerInformation} from './style'
import Input from '../../Components/Input';
import Button from '../../Components/Button';
const PersonalInformation : FC = () => {
    return (
        <Container> 
            <Text title>Informações Pessoais</Text>
            <Text>As informações pessoais são usadas para validação na aplicação</Text>
            <ContainerInformation>
                <Input label="Nome Completo" placeholder="" />
                <Input label="Natural" placeholder="" />
                <Input label="Data de aniversario" placeholder="" />
                <Input label="Genero" placeholder="" />
            </ContainerInformation>
            <Button text="Continuar" onPress = {() => console.warn("Continuar a Candidatura")}/>
        </Container>
    )
}   

export default PersonalInformation;