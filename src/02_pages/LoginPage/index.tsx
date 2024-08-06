import {Link} from "react-router-dom";
import {useForm, SubmitHandler} from "react-hook-form";
import {usePostUser} from "../../06_shared/api/queries/usePostUser.ts";

type FormValues = {
    email: string;
    password: string;
}
export const LoginPage = () => {
    const { register, handleSubmit} = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
        console.log(data);
        return data;
    };
    const {mutate} = usePostUser(register());



    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign in</h1>
                        <p className="text-xs-center">
                            <Link to="/register">Need an account?</Link>
                        </p>

                        {/*<ul className="error-messages">
                            <li>That email is already taken</li>
                        </ul>*/}

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="text" {...register("email",
                                    {
                                        required: true,
                                    }
                                )} placeholder="Email"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="password" {...register("password")} placeholder="Password"/>
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}