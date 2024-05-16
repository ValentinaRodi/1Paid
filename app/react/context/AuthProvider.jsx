import { createContext, useState, useEffect } from "react";

// Создаем контекст с начальными значениями по умолчанию
const AuthContext = createContext({
  isAuthenticated: false,
  setAuth: () => { },
  isForum: false,
  setForum: () => { },
});

// Создаем компонент провайдера, который предоставляет данные контекста всем дочерним компонентам
export const AuthProvider = ({ children }) => {

    let isLogged = false;
    (localStorage.getItem('logged')) ? isLogged = true : isLogged = false;

    let isForumOpen = false;
    (localStorage.getItem('forum')) ? isForumOpen = true : isForumOpen = false;
        
    // Используем хук useState для создания переменной isAuthenticated и функции setAuth для ее изменения
    // const [isAuthenticated, setAuth] = useState(isLogged);
    const [isAuthenticated, setAuth] = useState(true);

    const [isForum, setForum] = useState(isForumOpen);
    
    // Возвращаем контекст провайдера, передавая значения isAuthenticated и setAuth в качестве значения контекста
    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuth, isForum, setForum }}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

