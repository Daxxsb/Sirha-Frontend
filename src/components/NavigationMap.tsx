import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  LogIn, 
  User, 
  Shield, 
  Settings,
  Calendar,
  TrendingUp,
  BookOpen,
  FileText,
  ClipboardList,
  Clock,
  Eye,
  Users,
  UserCog,
  GraduationCap,
  Layers,
  UserPlus,
  AlertCircle,
  BarChart3,
  ArrowRight
} from 'lucide-react';

interface NavigationMapProps {
  onNavigate?: (screen: string) => void;
}

export function NavigationMap({ onNavigate }: NavigationMapProps) {
  const flowSections = [
    {
      role: 'Sistema',
      color: 'bg-gray-100 border-gray-300',
      textColor: 'text-gray-800',
      screens: [
        { id: 'login', name: 'Login', icon: LogIn, description: 'Punto de entrada único' }
      ]
    },
    {
      role: 'Estudiante',
      color: 'bg-blue-50 border-blue-300',
      textColor: 'text-blue-800',
      screens: [
        { id: 'student-dashboard', name: 'Dashboard', icon: User, description: 'Panel principal' },
        { id: 'student-schedule', name: 'Mi Horario', icon: Calendar, description: 'Consultar horarios' },
        { id: 'academic-traffic-light', name: 'Semáforo', icon: TrendingUp, description: 'Avance del plan' },
        { id: 'academic-history', name: 'Historial', icon: BookOpen, description: 'Materias cursadas' },
        { id: 'create-request', name: 'Nueva Solicitud', icon: FileText, description: 'Crear cambio' },
        { id: 'request-status', name: 'Estado', icon: ClipboardList, description: 'Ver estado' },
        { id: 'request-history', name: 'Historial', icon: Clock, description: 'Todas las solicitudes' }
      ]
    },
    {
      role: 'Decanatura',
      color: 'bg-green-50 border-green-300',
      textColor: 'text-green-800',
      screens: [
        { id: 'decanatura-dashboard', name: 'Dashboard', icon: Shield, description: 'Solicitudes pendientes' },
        { id: 'request-detail', name: 'Detalle', icon: Eye, description: 'Revisar y decidir' }
      ]
    },
    {
      role: 'Administrador',
      color: 'bg-purple-50 border-purple-300',
      textColor: 'text-purple-800',
      screens: [
        { id: 'admin-dashboard', name: 'Dashboard', icon: Settings, description: 'Panel de control' },
        { id: 'student-management', name: 'Estudiantes', icon: Users, description: 'CRUD estudiantes' },
        { id: 'dean-management', name: 'Decanos', icon: Shield, description: 'CRUD decanos' },
        { id: 'professor-management', name: 'Profesores', icon: GraduationCap, description: 'RUD profesores' },
        { id: 'role-assignment', name: 'Roles', icon: UserCog, description: 'Asignar permisos' },
        { id: 'subject-group-management', name: 'Materias/Grupos', icon: Layers, description: 'Gestión académica' },
        { id: 'student-group-assignment', name: 'Asignaciones', icon: UserPlus, description: 'Asignar estudiantes' },
        { id: 'group-capacity-monitor', name: 'Monitoreo', icon: AlertCircle, description: 'Alertas de cupos' },
        { id: 'reports-dashboard', name: 'Reportes', icon: BarChart3, description: 'Estadísticas' }
      ]
    }
  ];

  const mainFlows = [
    {
      name: 'Flujo Estudiante: Crear Solicitud',
      steps: [
        { id: 'login', label: 'Login' },
        { id: 'student-dashboard', label: 'Dashboard' },
        { id: 'create-request', label: 'Nueva Solicitud' },
        { id: 'request-status', label: 'Ver Estado' }
      ],
      color: 'border-blue-500'
    },
    {
      name: 'Flujo Decanatura: Aprobar Solicitud',
      steps: [
        { id: 'login', label: 'Login' },
        { id: 'decanatura-dashboard', label: 'Dashboard' },
        { id: 'request-detail', label: 'Revisar Detalle' },
        { id: 'decanatura-dashboard', label: 'Volver' }
      ],
      color: 'border-green-500'
    },
    {
      name: 'Flujo Administrador: Gestionar Grupos',
      steps: [
        { id: 'login', label: 'Login' },
        { id: 'admin-dashboard', label: 'Dashboard' },
        { id: 'subject-group-management', label: 'Materias/Grupos' },
        { id: 'group-capacity-monitor', label: 'Ver Alertas' }
      ],
      color: 'border-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#990000] text-white p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-bold">Mapa de Navegación - Sistema SIRHA</h1>
          <p className="text-sm text-white/80 mt-1">
            Explora todas las pantallas y flujos del sistema organizados por rol
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Resumen del Sistema */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-[#990000] mb-4">Resumen del Sistema</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg bg-gray-50">
              <div className="text-3xl font-bold text-[#990000] mb-1">21</div>
              <div className="text-sm text-gray-600">Wireframes Totales</div>
            </div>
            <div className="text-center p-4 border rounded-lg bg-blue-50">
              <div className="text-3xl font-bold text-blue-600 mb-1">7</div>
              <div className="text-sm text-gray-600">Pantallas Estudiante</div>
            </div>
            <div className="text-center p-4 border rounded-lg bg-green-50">
              <div className="text-3xl font-bold text-green-600 mb-1">2</div>
              <div className="text-sm text-gray-600">Pantallas Decanatura</div>
            </div>
            <div className="text-center p-4 border rounded-lg bg-purple-50">
              <div className="text-3xl font-bold text-purple-600 mb-1">9</div>
              <div className="text-sm text-gray-600">Pantallas Admin</div>
            </div>
          </div>
        </Card>

        {/* Flujos Principales */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-[#990000] mb-4">Flujos Principales de Navegación</h2>
          <div className="space-y-4">
            {mainFlows.map((flow, index) => (
              <div key={index} className={`p-4 border-2 ${flow.color} rounded-lg bg-white`}>
                <h3 className="font-semibold mb-3">{flow.name}</h3>
                <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                  {flow.steps.map((step, stepIndex) => (
                    <React.Fragment key={stepIndex}>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onNavigate?.(step.id)}
                        className="whitespace-nowrap hover:bg-gray-100"
                      >
                        {step.label}
                      </Button>
                      {stepIndex < flow.steps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Mapa Completo por Roles */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#990000]">Mapa Completo de Wireframes</h2>
          
          {flowSections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className={`p-6 border-2 ${section.color}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-semibold ${section.textColor}`}>
                  {section.role}
                </h3>
                <Badge variant="outline" className={section.textColor}>
                  {section.screens.length} pantallas
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {section.screens.map((screen, screenIndex) => {
                  const IconComponent = screen.icon;
                  return (
                    <Button
                      key={screenIndex}
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-start space-y-2 hover:bg-white hover:shadow-md transition-all"
                      onClick={() => onNavigate?.(screen.id)}
                    >
                      <div className="flex items-center space-x-2 w-full">
                        <IconComponent className="w-5 h-5 text-[#990000]" />
                        <span className="font-medium">{screen.name}</span>
                      </div>
                      <span className="text-xs text-gray-600 text-left">{screen.description}</span>
                    </Button>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>

        {/* Leyenda */}
        <Card className="p-6 bg-gray-50">
          <h3 className="font-semibold text-[#990000] mb-3">Cómo usar este mapa</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Haz clic en cualquier pantalla para navegarla directamente</li>
            <li>• Los flujos principales muestran las rutas más comunes de navegación</li>
            <li>• Cada rol tiene su propio conjunto de pantallas codificadas por color</li>
            <li>• Usa el botón "Índice" en la barra superior para volver al menú principal</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
