import { NavigationBar } from '../Components/Components'
import { Outlet } from 'react-router-dom' 

export default function Layout() {
    return (
        <>
            <NavigationBar />
            <Outlet />
        </>
    )
}