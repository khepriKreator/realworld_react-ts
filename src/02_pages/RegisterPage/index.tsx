import {Link} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

type FormValues = {
    username: string;
    email: string;
    password: string;
}

export const RegisterPage = () => {
    const { register, handleSubmit} = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);


    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <Link to="/login">Have an account?</Link>
                        </p>

                        {/*<ul className="error-messages">
                            <li>That email is already taken</li>
                        </ul>*/}

                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="text" {...register('username')} placeholder="Username"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="text" {...register('email')} placeholder="Email"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="password" {...register('password')} placeholder="Password"/>
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}