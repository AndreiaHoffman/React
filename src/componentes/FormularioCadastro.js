import React, { useState } from "react";

const FormularioCadastro = (props) => {

    const camposIniciaisDeValores = {
        nomeCompleto: '',
        telefone: '',
        email: '',
        endereco: ''
    }

    let {values, setValues} = useState(camposIniciaisDeValores)

    const  manipuladorInputChange = e => {

        let {nomeCompleto, value} = e.target

        setValues({
            ...values,
            [nomeCompleto]: value
        })
    }

    const manipuladorFormEnvio = e => {
        e.preventDefault()
        props.addEedit(values)
    }

    return(
        <form autoComplete="off" onSubmit="{manipuladorFormEnvio}">
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>

                <input className="form-control" placeholder="Nome Completo" nome="nomeCompleto" value={values.nomeCompleto}
                onChange={manipuladorInputChange}></input>
            </div>

            <div className="row">

                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>

                    <input className="form-control" placeholder="Telefone" nome="telefone" value={values.telefone}
                    onChange={manipuladorInputChange}></input>
                </div>

                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>

                    <input className="form-control" placeholder="E-mail" nome="email" value={values.email}
                    onChange={manipuladorInputChange}></input>
                </div>
            </div>

            <div className="form-group">
                <textarea className="form-control" placeholder="endereço" nome="endereco" value={values.endereco}
                onChange={manipuladorInputChange}></textarea>
            </div>

            <div className="form-group">
                <input type="submit" value="Salvar" className="btn btn-primary btn-block"></input>
            </div>

        </form>
    )
}

export default FormularioCadastro