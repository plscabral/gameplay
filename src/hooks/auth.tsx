import React, { createContext, useContext, useState, ReactNode } from 'react';

import * as AuthSession from 'expo-auth-session';
import { discordAuth } from '../configs';
import { api } from '../services/api';

type User = {
  id: string;
  username: string;
  firstname: string;
  avatar: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: User;
  signIn: () => Promise<void>;
  loading: boolean
}

type AuthProviderProps = {
  children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string
  }
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${discordAuth.CLIENT_ID}&redirect_uri=${discordAuth.REDIRECT_URI}&response_type=${discordAuth.RESPONSE_TYPE}&scope=${discordAuth.SCOPE}`;

      const { type, params } = await AuthSession.startAsync({ authUrl: authUrl }) as AuthorizationResponse;

      if (type === "success") {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get("/users/@me");

        const firstname = userInfo.data.username.split(' ')[0];
        userInfo.data.avatar = `${discordAuth.CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`; 

        setUser({
          ...userInfo.data,
          firstname,
          token: params.access_token
        });
        setLoading(false);
      }
      else {
        setLoading(false);
      }

    } catch {
      throw new Error("Não foi possível autenticar!")
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}