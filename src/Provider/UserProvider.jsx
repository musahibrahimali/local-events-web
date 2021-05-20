import React, {createContext, useEffect, useState} from "react";
import {authentication} from "../Utils/firebase";
import Loader from "./Loader";

export const UserContext = createContext({user: null});

function UserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        authentication.onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
        });
    }, []);

    if(pending){
        return (
            <>
                <Loader/>
            </>
        )
    }

    return(
        <UserContext.Provider value={currentUser}>
            {children}
        </UserContext.Provider>
    );

}

// class UserProvider extends Component {
//
//     state = {user: null}
//
//     componentDidMount = async () => {
//         authentication.onAuthStateChanged(async (firebaseUser) => {
//             const user = await generateUserDocument(firebaseUser);
//             this.setState({user: user });
//         });
//     }
//
//     render(){
//         return(
//             <UserContext.Provider value={this.state.user}>
//                 {this.props.children}
//             </UserContext.Provider>
//         );
//     }
// }

export default UserProvider;
