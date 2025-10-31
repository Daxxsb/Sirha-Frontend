import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface CreateRequestFormProps {
  onNavigate?: (screen: string) => void;
}

export function CreateRequestForm({ onNavigate }: CreateRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('isAuthenticated');
    onNavigate?.('login');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envío de solicitud
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Después de 2 segundos, redirigir al dashboard
      setTimeout(() => {
        onNavigate?.('student-dashboard');
      }, 2000);
    }, 1500);
  };

  // Si está mostrando el mensaje de éxito
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-8 max-w-md text-center">
          <CheckCircle2 className="w-16 h-16 text-[#17C964] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#990000] mb-2">¡Solicitud Enviada!</h2>
          <p className="text-gray-600 mb-6">
            Tu solicitud ha sido enviada correctamente. Será revisada por la decanatura.
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-[#990000] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#990000] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-[#990000] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-4">Redirigiendo al dashboard...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#990000] text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-white text-[#990000] flex items-center justify-center font-bold">
              S
            </div>
            <h1 className="text-xl font-bold">SIRHA - Nueva Solicitud</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Juan Pérez (Est.)</span>
            <Button 
              size="sm" 
              className="bg-white text-[#990000] border border-white font-medium transition-all duration-300 ease-in-out hover:bg-[#990000] hover:text-white hover:border-white hover:scale-105 shadow-md hover:shadow-lg"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        {/* Breadcrumb con botón Volver */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-[#990000] p-0 h-auto hover:bg-transparent"
              onClick={() => onNavigate?.('student-dashboard')}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Volver al Dashboard
            </Button>
          </div>
          <div className="text-sm text-gray-600">
            Dashboard Estudiante &gt; <span className="text-[#990000] font-medium">Nueva Solicitud</span>
          </div>
        </div>

        <Card className="p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#990000] mb-2">Crear Nueva Solicitud</h2>
            <p className="text-gray-600">
              Complete el formulario para solicitar el cambio de grupo en una materia.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Información del Estudiante */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-[#990000] mb-3">Información del Estudiante</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Nombre:</span>
                  <span className="ml-2 font-medium">Juan Pérez Gómez</span>
                </div>
                <div>
                  <span className="text-gray-600">Código:</span>
                  <span className="ml-2 font-medium">2024001234</span>
                </div>
                <div>
                  <span className="text-gray-600">Programa:</span>
                  <span className="ml-2 font-medium">Ingeniería de Sistemas</span>
                </div>
                <div>
                  <span className="text-gray-600">Semestre:</span>
                  <span className="ml-2 font-medium">2024-2</span>
                </div>
              </div>
            </div>

            {/* Selección de Materia */}
            <div className="space-y-2">
              <Label htmlFor="materia" className="text-base font-semibold">
                Materia a cambiar *
              </Label>
              <Select required>
                <SelectTrigger className="h-12 border-2 focus:ring-2 focus:ring-[#990000] focus:border-transparent transition-all duration-200">
                  <SelectValue placeholder="Seleccione la materia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mat3">Matemáticas III - Grupo 01</SelectItem>
                  <SelectItem value="prog">Programación - Grupo 02</SelectItem>
                  <SelectItem value="fis2">Física II - Grupo 01</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Grupo Actual */}
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#006FEE]">
              <h4 className="font-semibold text-[#006FEE] mb-2">Grupo Actual</h4>
              <div className="text-sm space-y-1">
                <div><span className="font-medium">Materia:</span> Matemáticas III</div>
                <div><span className="font-medium">Grupo:</span> 01</div>
                <div><span className="font-medium">Horario:</span> Lun-Mié-Vie 7:00-9:00</div>
                <div><span className="font-medium">Profesor:</span> Dr. Carlos López</div>
                <div><span className="font-medium">Aula:</span> 205-A</div>
              </div>
            </div>

            {/* Grupo Destino */}
            <div className="space-y-2">
              <Label htmlFor="grupo-destino" className="text-base font-semibold">
                Grupo destino *
              </Label>
              <Select required>
                <SelectTrigger className="h-12 border-2 focus:ring-2 focus:ring-[#990000] focus:border-transparent transition-all duration-200">
                  <SelectValue placeholder="Seleccione el grupo destino" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grupo02">
                    <div className="py-1">
                      <div className="font-medium">Grupo 02</div>
                      <div className="text-xs text-gray-600">Mar-Jue 9:00-11:00 | Dr. Ana Martínez | Aula 105-B</div>
                      <div className="text-xs text-green-600 font-medium">✓ Cupos disponibles: 3/30</div>
                    </div>
                  </SelectItem>
                  <SelectItem value="grupo03">
                    <div className="py-1">
                      <div className="font-medium">Grupo 03</div>
                      <div className="text-xs text-gray-600">Sáb 8:00-12:00 | Dr. Luis Rodríguez | Aula 301-C</div>
                      <div className="text-xs text-green-600 font-medium">✓ Cupos disponibles: 8/25</div>
                    </div>
                  </SelectItem>
                  <SelectItem value="grupo04" disabled>
                    <div className="py-1">
                      <div className="font-medium text-gray-400">Grupo 04</div>
                      <div className="text-xs text-gray-400">Lun-Mié 14:00-16:00 | Dra. María Sánchez | Aula 402-A</div>
                      <div className="text-xs text-red-600 font-medium">✗ Sin cupos disponibles (30/30)</div>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Observaciones */}
            <div className="space-y-2">
              <Label htmlFor="observaciones" className="text-base font-semibold">
                Observaciones
              </Label>
              <Textarea
                id="observaciones"
                placeholder="Ingrese las razones para el cambio de grupo (opcional)"
                className="min-h-[100px] border-2 focus:ring-2 focus:ring-[#990000] focus:border-transparent transition-all duration-200"
                maxLength={500}
              />
              <p className="text-xs text-gray-500">
                Máximo 500 caracteres. Explique brevemente las razones para el cambio.
              </p>
            </div>

            {/* Botones */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <Button 
                type="button"
                variant="outline" 
                className="px-6 transition-all duration-200 hover:bg-[#990000] hover:text-white"
                onClick={() => onNavigate?.('student-dashboard')}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button 
                type="submit"
                className="px-6 bg-[#17C964] hover:bg-green-600 text-white font-semibold transition-all duration-200 hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </div>
                ) : (
                  'Enviar Solicitud'
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}