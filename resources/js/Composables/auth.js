import { usePage } from "@inertiajs/vue3";

export const useAuth = () => {
    const page = usePage();
    
    return {
        isLoggedIn: page.props.auth.user !== null,
        isAdmin: page.props.auth.user?.is_admin ?? false,
    };
}