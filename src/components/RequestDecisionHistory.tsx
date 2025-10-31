import { ArrowLeft, Clock, CheckCircle, XCircle, User } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface RequestDecisionHistoryProps {
  onBack: () => void;
  hasData?: boolean;
}

export function RequestDecisionHistory({ onBack, hasData = false }: RequestDecisionHistoryProps) {
  const sampleDecisions = [
    {
      id: 1,
      date: "15/05/2024 14:30",
      actor: "Dr. Carlos Martínez",
      role: "Decano de Ingeniería",
      action: "Aprobada",
      reason: "El estudiante cumple con los requisitos académicos y hay cupo disponible en el grupo solicitado.",
      status: "success"
    },
    {
      id: 2,
      date: "14/05/2024 10:15",
      actor: "Sistema Automático",
      role: "Validación",
      action: "En Revisión",
      reason: "Solicitud enviada para revisión por Decanatura. Verificación de requisitos completada.",
      status: "info"
    },
    {
      id: 3,
      date: "14/05/2024 09:45",
      actor: "Juan Pérez",
      role: "Estudiante",
      action: "Creada",
      reason: "Solicitud de cambio creada por el estudiante.",
      status: "pending"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-4 text-[#990000] hover:text-[#990000] hover:bg-[#990000]/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[#990000] mb-1">Historial de Decisiones</h1>
              <p className="text-gray-600">Seguimiento completo de acciones sobre la solicitud</p>
            </div>
            {hasData && (
              <Badge className="bg-[#006FEE]">
                Solicitud #2024-0456
              </Badge>
            )}
          </div>
        </div>

        {/* Información de la Solicitud */}
        {hasData && (
          <Card className="p-6 mb-6 border-l-4 border-[#990000]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Estudiante</p>
                <p style={{ fontWeight: 600 }}>Juan Pérez García</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Cambio solicitado</p>
                <p style={{ fontWeight: 600 }}>Cálculo II - Grupo B → Grupo A</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Estado actual</p>
                <Badge className="bg-[#17C964]">Aprobada</Badge>
              </div>
            </div>
          </Card>
        )}

        {/* Timeline de Decisiones */}
        {!hasData ? (
          <Card className="p-12 text-center">
            <Clock className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-gray-500 mb-2">No hay datos disponibles</h3>
            <p className="text-sm text-gray-400">
              Seleccione una solicitud para ver su historial de decisiones
            </p>
          </Card>
        ) : (
          <div className="space-y-6">
            <h2 className="text-[#990000]">Línea de Tiempo</h2>
            
            <div className="relative">
              {/* Línea vertical */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {/* Eventos */}
              <div className="space-y-6">
                {sampleDecisions.map((decision, index) => (
                  <div key={decision.id} className="relative pl-12">
                    {/* Punto en la línea */}
                    <div className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center ${
                      decision.status === 'success' ? 'bg-[#17C964]' :
                      decision.status === 'info' ? 'bg-[#006FEE]' :
                      'bg-[#C4841D]'
                    }`}>
                      {decision.status === 'success' ? (
                        <CheckCircle className="h-4 w-4 text-white" />
                      ) : decision.status === 'info' ? (
                        <Clock className="h-4 w-4 text-white" />
                      ) : (
                        <User className="h-4 w-4 text-white" />
                      )}
                    </div>
                    
                    {/* Contenido */}
                    <Card className="p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 style={{ fontWeight: 600 }} className="mb-1">{decision.action}</h3>
                          <p className="text-sm text-gray-500">{decision.date}</p>
                        </div>
                        <Badge 
                          className={
                            decision.status === 'success' ? 'bg-[#17C964]' :
                            decision.status === 'info' ? 'bg-[#006FEE]' :
                            'bg-[#C4841D]'
                          }
                        >
                          {decision.action}
                        </Badge>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <User className="h-4 w-4 mr-2" />
                          <span style={{ fontWeight: 600 }}>{decision.actor}</span>
                          <span className="mx-2">•</span>
                          <span>{decision.role}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded border-l-2 border-[#990000]">
                        {decision.reason}
                      </p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Estadísticas */}
        {hasData && (
          <Card className="p-6 mt-6 bg-white">
            <h3 className="mb-4" style={{ fontWeight: 600 }}>Resumen del Proceso</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl mb-1" style={{ fontWeight: 700 }}>3</p>
                <p className="text-sm text-gray-600">Total de Acciones</p>
              </div>
              <div className="text-center p-4 bg-[#17C964]/10 rounded-lg">
                <p className="text-2xl text-[#17C964] mb-1" style={{ fontWeight: 700 }}>1</p>
                <p className="text-sm text-gray-600">Aprobaciones</p>
              </div>
              <div className="text-center p-4 bg-[#006FEE]/10 rounded-lg">
                <p className="text-2xl text-[#006FEE] mb-1" style={{ fontWeight: 700 }}>2</p>
                <p className="text-sm text-gray-600">Revisores</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl mb-1" style={{ fontWeight: 700 }}>1 día</p>
                <p className="text-sm text-gray-600">Tiempo Total</p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
