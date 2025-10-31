import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { User, Shield, Settings } from 'lucide-react';

interface LoginWireframeProps {
  /**
   * Función opcional para cambiar la pantalla principal.
   * Ej: onNavigate('student-dashboard')
   */
  onNavigate?: (screen: string) => void;
}

/**
 * LoginWireframe
 *
 * Componente de autenticación simulado para el wireframe. Permite seleccionar rol,
 * ingresar credenciales y navegar a pantallas específicas según rol.
 *
 * Props:
 * - onNavigate?: (screen: string) => void
 *
 * Detalles de implementación:
 * - Mantiene estado local para username, password, role, error e isLoading.
 * - handleLogin simula la autenticación; en demo acepta usuario: demo / demo123.
 * - Guarda 'userRole' e 'isAuthenticated' en localStorage al autenticarse.
 *
 * Ejemplo:
 * <LoginWireframe onNavigate={(s) => setScreen(s)} />
 */
export function LoginWireframe({ onNavigate }: LoginWireframeProps) {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    { id: 'estudiante', name: 'Estudiante', icon: User },
    { id: 'decanatura', name: 'Decanatura', icon: Shield },
    { id: 'administrador', name: 'Administrador', icon: Settings }
  ];

  /**
   * Maneja el proceso de autenticación simulado.
   * Guarda role e isAuthenticated en localStorage si las credenciales son correctas.
   */
  const handleLogin = async () => {
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Por favor ingrese usuario y contraseña');
      return;
    }

    if (!selectedRole) {
      setError('Por favor seleccione un tipo de usuario');
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (username === 'demo' && password === 'demo123') {
        localStorage.setItem('userRole', selectedRole);
        localStorage.setItem('isAuthenticated', 'true');
        
        if (onNavigate) {
          switch(selectedRole) {
            case 'estudiante':
              onNavigate('student-dashboard');
              break;
            case 'decanatura':
              onNavigate('decanatura-dashboard');
              break;
            case 'administrador':
              onNavigate('admin-dashboard');
              break;
          }
        }
      } else {
        setError('Credenciales incorrectas. Use usuario: demo, contraseña: demo123');
      }
      
    } catch {
      setError('Error al iniciar sesión. Por favor intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Envía el formulario al presionar Enter.
   */
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  const clearError = () => setError('');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 border-2">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#990000] mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-xl">SIRHA</span>
          </div>
          <h1 className="text-2xl font-bold text-[#990000] mb-2">Sistema de Reasignación</h1>
          <p className="text-gray-600">de Horarios Académicos</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex justify-between items-start">
              <span className="text-red-700 text-sm">{error}</span>
              <button 
                onClick={clearError}
                className="text-red-500 hover:text-red-700 ml-2 text-sm"
              >
                ×
              </button>
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="usuario" className="font-semibold">Usuario</Label>
            <Input 
              id="usuario" 
              type="text" 
              placeholder="Ingrese su usuario"
              className="h-12 border-2 focus:ring-2 focus:ring-[#990000] focus:border-transparent"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                clearError();
              }}
              onKeyPress={handleKeyPress}
              autoComplete="username"
              disabled={isLoading}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="font-semibold">Contraseña</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Ingrese su contraseña"
              className="h-12 border-2 focus:ring-2 focus:ring-[#990000] focus:border-transparent"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                clearError();
              }}
              onKeyPress={handleKeyPress}
              autoComplete="current-password"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-3">
            <Label className="font-semibold">Tipo de usuario</Label>
            <div className="grid grid-cols-3 gap-2">
              {roles.map((role) => {
                const IconComponent = role.icon;
                const isSelected = selectedRole === role.id;
                
                return (
                  <Button
                    key={role.id}
                    type="button"
                    variant={isSelected ? "default" : "outline"}
                    className={`flex flex-col items-center justify-center h-16 p-2 focus:ring-2 focus:ring-[#990000] focus:ring-offset-2 focus:outline-none ${
                      isSelected 
                        ? 'bg-[#990000] hover:bg-[#770000] text-white' 
                        : 'border-gray-300 text-gray-700 hover:bg-[#990000] hover:text-white hover:border-[#990000]'
                    } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => {
                      setSelectedRole(role.id);
                      clearError();
                    }}
                    disabled={isLoading}
                  >
                    <IconComponent className="w-4 h-4 mb-1" />
                    <span className="text-xs">{role.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          <Button 
            className="w-full h-12 bg-[#990000] hover:bg-[#770000] text-white font-semibold text-base focus:ring-2 focus:ring-[#990000] focus:ring-offset-2 focus:outline-none"
            onClick={handleLogin}
            disabled={!selectedRole || !username || !password || isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Iniciando sesión...
              </div>
            ) : (
              'Iniciar Sesión'
            )}
          </Button>

          <div className="text-center space-y-2">
            <a href="#" className="block text-sm text-[#990000] hover:underline focus:outline-none focus:ring-2 focus:ring-[#990000] focus:ring-offset-2 rounded">
              ¿Olvidaste tu contraseña?
            </a>
            <a href="#" className="block text-sm text-gray-600 hover:underline focus:outline-none focus:ring-2 focus:ring-[#990000] focus:ring-offset-2 rounded">
              ¿Problemas para acceder?
            </a>
          </div>
        </div>

        <div className="mt-6 p-3 bg-gray-50 rounded-lg border text-center">
          <div className="text-xs text-gray-600">
            <strong>Demo:</strong> usuario: <span className="font-mono">demo</span> / contraseña: <span className="font-mono">demo123</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            Universidad - Decanatura de Ingeniería
          </p>
        </div>
      </Card>
    </div>
  );
}