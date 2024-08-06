import {
    createBrowserRouter,
} from "react-router-dom";
import {HomePage} from "./HomePage";
import {Layout} from "../03_widgets";
import {Arcticle} from "./Article";
import {LoginPage} from "./LoginPage";
import {RegisterPage} from "./RegisterPage";
import {EditorPage} from "./EditorPage";

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                element: <HomePage />,
                index: true
            },
            {
                path: 'article/:slug',
                element: <Arcticle/>

            },
            {
                element: <LoginPage/>,
                path: 'login'
            },
            {
                element: <RegisterPage/>,
                path: 'register'
            },
            {
                element: <EditorPage/>,
                path: 'editor/:slug?',
            }
        ]
    }
])