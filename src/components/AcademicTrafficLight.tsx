import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CheckCircle2, Circle, AlertCircle, ArrowLeft } from 'lucide-react';

interface AcademicTrafficLightProps {
  onNavigate?: (screen: string) => void;
}

export function AcademicTrafficLight({ onNavigate }: AcademicTrafficLightProps) {
  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('isAuthenticated');
    onNavigate?.('login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#990000] text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-white text-[#990000] flex items-center justify-center font-bold">
              S
            </div>
            <h1 className="text-xl font-bold">SIRHA - Semáforo Académico</h1>
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

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Breadcrumb con botón Volver */}
        <div className="flex items-center justify-between">
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
            Dashboard Estudiante &gt; <span className="text-[#990000] font-medium">Semáforo Académico</span>
          </div>
        </div>

        {/* Info Card */}
        <Card className="p-6 border-l-4 border-[#006FEE] bg-blue-50">
          <h3 className="text-[#990000] font-semibold mb-2">¿Qué es el Semáforo Académico?</h3>
          <p className="text-sm text-gray-700">
            El semáforo académico visualiza tu avance en el plan de estudios mediante colores: 
            <span className="text-[#17C964] font-medium"> Verde</span> (materias aprobadas), 
            <span className="text-[#006FEE] font-medium"> Azul</span> (materias en curso), 
            <span className="text-[#F31260] font-medium"> Rojo</span> (materias pendientes).
          </p>
        </Card>

        {/* Progress Overview */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-[#990000] mb-6">Avance del Plan de Estudios</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-6 border-2 border-[#17C964] rounded-lg bg-green-50">
              <CheckCircle2 className="w-12 h-12 text-[#17C964] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#17C964] mb-2">32</div>
              <div className="text-sm font-medium">Materias Aprobadas</div>
              <div className="text-xs text-gray-600 mt-1">65% del plan</div>
            </div>

            <div className="text-center p-6 border-2 border-[#006FEE] rounded-lg bg-blue-50">
              <Circle className="w-12 h-12 text-[#006FEE] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#006FEE] mb-2">4</div>
              <div className="text-sm font-medium">Materias en Curso</div>
              <div className="text-xs text-gray-600 mt-1">Semestre actual</div>
            </div>

            <div className="text-center p-6 border-2 border-[#F31260] rounded-lg bg-red-50">
              <AlertCircle className="w-12 h-12 text-[#F31260] mx-auto mb-3" />
              <div className="text-3xl font-bold text-[#F31260] mb-2">13</div>
              <div className="text-sm font-medium">Materias Pendientes</div>
              <div className="text-xs text-gray-600 mt-1">35% restante</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Progreso Total</span>
              <span className="text-[#990000] font-medium">65%</span>
            </div>
            <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#17C964] flex items-center justify-end pr-2" style={{ width: '65%' }}>
                <span className="text-xs text-white font-medium">32/49 materias</span>
              </div>
            </div>
          </div>
        </Card>

        {/* By Semester */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-[#990000] mb-4">Visualización por Semestre</h3>
          
          <div className="space-y-4">
            {/* Semester 1 */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <div className="font-medium">Semestre 1</div>
                  <div className="text-xs text-gray-600">6 materias</div>
                </div>
                <Badge className="bg-[#17C964] text-white">Completado</Badge>
              </div>
              <div className="grid grid-cols-6 gap-2">
                <div className="h-16 bg-[#17C964] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Cálculo I
                </div>
                <div className="h-16 bg-[#17C964] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Álgebra
                </div>
                <div className="h-16 bg-[#17C964] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Física I
                </div>
                <div className="h-16 bg-[#17C964] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Química
                </div>
                <div className="h-16 bg-[#17C964] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Intro Ing.
                </div>
                <div className="h-16 bg-[#17C964] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Humanidades I
                </div>
              </div>
            </div>

            {/* Semester 2 */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <div className="font-medium">Semestre 2</div>
                  <div className="text-xs text-gray-600">6 materias</div>
                </div>
                <Badge className="bg-[#17C964] text-white">Completado</Badge>
              </div>
              <div className="grid grid-cols-6 gap-2">
                <div className="h-16 bg-[#17C964] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Cálculo II
                </div>
                <div className="h-16 bg-[#17C964] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Prog. I
                </div>
                <div className="h-16 bg-[#17C964] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Física II
                </div>
                <div className="h-16 bg-[#17C964] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Est. I
                </div>
                <div className="h-16 bg-[#17C964] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Ing. Eco.
                </div>
                <div className="h-16 bg-[#17C964] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Humanidades II
                </div>
              </div>
            </div>

            {/* Semester 5 (Current) */}
            <div className="border-2 border-[#006FEE] rounded-lg p-4 bg-blue-50">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <div className="font-medium">Semestre 5 (Actual)</div>
                  <div className="text-xs text-gray-600">4 materias</div>
                </div>
                <Badge className="bg-[#006FEE] text-white">En Curso</Badge>
              </div>
              <div className="grid grid-cols-6 gap-2">
                <div className="h-16 bg-[#006FEE] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Matemáticas III
                </div>
                <div className="h-16 bg-[#006FEE] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Programación
                </div>
                <div className="h-16 bg-[#006FEE] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Física II
                </div>
                <div className="h-16 bg-[#006FEE] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Base de Datos
                </div>
              </div>
            </div>

            {/* Semester 6 (Pending) */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <div className="font-medium">Semestre 6</div>
                  <div className="text-xs text-gray-600">5 materias</div>
                </div>
                <Badge className="bg-[#F31260] text-white">Pendiente</Badge>
              </div>
              <div className="grid grid-cols-6 gap-2">
                <div className="h-16 bg-[#F31260] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Análisis Numérico
                </div>
                <div className="h-16 bg-[#F31260] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Sistemas Op.
                </div>
                <div className="h-16 bg-[#F31260] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Redes I
                </div>
                <div className="h-16 bg-[#F31260] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Ing. Soft. I
                </div>
                <div className="h-16 bg-[#F31260] rounded flex items-center justify-center text-white text-xs p-1 text-center font-medium">
                  Electiva I
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Recommendations */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-[#990000] mb-4">Recomendaciones</h3>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 border rounded-lg bg-green-50">
              <CheckCircle2 className="w-5 h-5 text-[#17C964] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Progreso Satisfactorio</div>
                <div className="text-sm text-gray-600">
                  Tu avance del 65% está dentro del rango esperado para tu semestre actual.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border rounded-lg bg-blue-50">
              <AlertCircle className="w-5 h-5 text-[#006FEE] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Materias con Prerrequisitos</div>
                <div className="text-sm text-gray-600">
                  Asegúrate de aprobar todas las materias actuales para desbloquear 8 materias del siguiente semestre.
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}