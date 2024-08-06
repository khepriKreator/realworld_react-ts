import {RouterProvider} from 'react-router-dom';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {routerConfig} from "../02_pages";

const queryClient = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={routerConfig} />
        </QueryClientProvider>
    )
}

export default App
