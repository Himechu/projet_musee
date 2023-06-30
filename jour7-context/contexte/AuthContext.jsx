import {createContext , useState} from "react"
// createContext => permet de pouvoir partager useState sur plusieurs composants (quelquesoit leur position)
// exporter le context 
export const AuthContext = createContext();
// un composant qui stocke les données  // Provider => Fournisseur 
export function AuthContextProvider({children}){ // {children} // ça doit être écrit
    const [profil, setProfil] = useState({
        email : "toto@yahoo.fr",
        password : "azerty",
        isLogged : false,

    })

    function login(identifiants){
        if(identifiants.email === profil.email && identifiants.password === profil.password){
           //console.log("ici")
            const cloneProfil = {...profil}
            cloneProfil.isLogged = true
            setProfil(cloneProfil)
            return true
        }
        return false
    }
    function logout(){
        const cloneProfil ={...profil}
        cloneProfil.isLogged = false
        setProfil(cloneProfil)
    }
    return <AuthContext.Provider value={{ profil , login , logout }}>
        {children}
    </AuthContext.Provider>
}
// cp