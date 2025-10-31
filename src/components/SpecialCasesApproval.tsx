import { ArrowLeft, AlertTriangle, FileText, CheckCircle, XCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface SpecialCasesApprovalProps {
  onBack: () => void;
  hasData?: boolean;
}

export function SpecialCasesApproval({ onBack, hasData = false }: SpecialCasesApprovalProps) {
  const sampleCases = [
    {
      id: "2024-ESP-012",
      student: "María López García",
      code: "2020123456",
      type: "Caso Médico",
      request: "Solicita cambio de Física I Grupo A (presencial) a Grupo Virtual por condición médica temporal",
      from: "Física I - Grupo A (Presencial)",
      to: "Física I - Grupo Virtual",
      documents: ["certificado_medico.pdf", "incapacidad_temporal.pdf"],
      reason: "Estudiante presenta certificado médico que indica reposo por 4 semanas. Requiere continuar sus estudios de forma virtual.",
      date: "16/05/2024 09:30",
      deadline: "20/05/2024",
      urgency: "Alta"
    },
    {
      id: "2024-ESP-011",
      student: "Carlos Ramírez Torres",
      code: "2019987654",
      type: "Situación Laboral",
      request: "Solicita cambio excepcional de horario por nueva oportunidad laboral en empresa del sector",
      from: "Programación Avanzada - Grupo B (Mañana)",
      to: "Programación Avanzada - Grupo D (Noche)",
      documents: ["carta_empresa.pdf", "contrato_trabajo.pdf"],
      reason: "Estudiante de último semestre recibió oferta laboral que requiere horario matutino. La empresa está dispuesta a apoyar finalización de estudios.",
      date: "15/05/2024 14:15",
      deadline: "22/05/2024",
      urgency: "Media"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-8">
      <div className="max-w-6xl mx-auto">
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
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-[#C4841D]" />
            <div>
              <h1 className="text-[#990000] mb-1">Casos Especiales y Excepcionales</h1>
              <p className="text-gray-600">Revisión y aprobación de solicitudes extraordinarias</p>
            </div>
          </div>
        </div>

        {!hasData ? (
          <Card className="p-12 text-center">
            <AlertTriangle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-gray-500 mb-2">No hay datos disponibles</h3>
            <p className="text-sm text-gray-400">
              Seleccione un elemento para continuar
            </p>
          </Card>
        ) : (
          <>
            {/* Alerta */}
            <Card className="p-4 mb-6 border-l-4 border-[#C4841D] bg-[#C4841D]/5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-[#C4841D] mt-0.5 flex-shrink-0" />
                <div>
                  <p style={{ fontWeight: 600 }} className="text-[#C4841D] mb-1">Casos que requieren atención especial</p>
                  <p className="text-sm text-gray-700">
                    Estos casos requieren documentación adicional y aprobación de Decanatura o Administración. 
                    Revise cuidadosamente toda la información antes de tomar una decisión.
                  </p>
                </div>
              </div>
            </Card>

            {/* Estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="p-4 text-center">
                <p className="text-3xl mb-1" style={{ fontWeight: 700 }}>12</p>
                <p className="text-sm text-gray-600">Casos Totales</p>
              </Card>
              <Card className="p-4 text-center border-l-4 border-[#C4841D]">
                <p className="text-3xl text-[#C4841D] mb-1" style={{ fontWeight: 700 }}>5</p>
                <p className="text-sm text-gray-600">Pendientes</p>
              </Card>
              <Card className="p-4 text-center border-l-4 border-[#17C964]">
                <p className="text-3xl text-[#17C964] mb-1" style={{ fontWeight: 700 }}>6</p>
                <p className="text-sm text-gray-600">Aprobados</p>
              </Card>
              <Card className="p-4 text-center border-l-4 border-[#F31260]">
                <p className="text-3xl text-[#F31260] mb-1" style={{ fontWeight: 700 }}>1</p>
                <p className="text-sm text-gray-600">Rechazados</p>
              </Card>
            </div>

            {/* Lista de Casos Especiales */}
            <div className="space-y-6">
              {sampleCases.map((caso) => (
                <Card key={caso.id} className="p-6 border-l-4 border-[#990000]">
                  {/* Header del Caso */}
                  <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-[#990000]">{caso.id}</Badge>
                      <Badge 
                        className={
                          caso.urgency === 'Alta' ? 'bg-[#F31260]' :
                          caso.urgency === 'Media' ? 'bg-[#C4841D]' :
                          'bg-[#006FEE]'
                        }
                      >
                        Urgencia {caso.urgency}
                      </Badge>
                      <Badge className="bg-[#C4841D]">{caso.type}</Badge>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p>Fecha límite de respuesta:</p>
                      <p style={{ fontWeight: 600 }} className="text-[#990000]">{caso.deadline}</p>
                    </div>
                  </div>

                  {/* Información del Estudiante */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Estudiante</p>
                      <p style={{ fontWeight: 600 }}>{caso.student}</p>
                      <p className="text-sm text-gray-600">Código: {caso.code}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fecha de solicitud</p>
                      <p style={{ fontWeight: 600 }}>{caso.date}</p>
                    </div>
                  </div>

                  {/* Solicitud */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Solicitud</p>
                    <p className="p-3 bg-gray-50 rounded-lg border-l-2 border-[#990000]">
                      {caso.request}
                    </p>
                  </div>

                  {/* Cambio Solicitado */}
                  <div className="mb-4 p-4 bg-[#006FEE]/5 rounded-lg">
                    <p className="text-sm text-gray-500 mb-2">Cambio solicitado</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">Desde:</p>
                        <p style={{ fontWeight: 600 }}>{caso.from}</p>
                      </div>
                      <div className="text-[#990000] text-2xl">→</div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">Hacia:</p>
                        <p style={{ fontWeight: 600 }}>{caso.to}</p>
                      </div>
                    </div>
                  </div>

                  {/* Justificación */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Justificación detallada</p>
                    <div className="p-3 bg-[#C4841D]/10 rounded-lg border-l-2 border-[#C4841D]">
                      <p className="text-sm text-gray-700">{caso.reason}</p>
                    </div>
                  </div>

                  {/* Documentos Adjuntos */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Documentos adjuntos</p>
                    <div className="flex flex-wrap gap-2">
                      {caso.documents.map((doc, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <FileText className="h-4 w-4 text-[#990000]" />
                          <span className="text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Área de Decisión */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-3">Comentarios de revisión (opcional)</p>
                    <textarea
                      rows={3}
                      placeholder="Agregue comentarios sobre la decisión..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#990000] mb-4"
                    />
                    
                    <div className="flex justify-end gap-3">
                      <Button
                        variant="outline"
                        className="text-gray-600 border-gray-300"
                      >
                        Solicitar más información
                      </Button>
                      <Button
                        className="bg-[#F31260] hover:bg-[#C10E4D]"
                      >
                        <XCircle className="mr-2 h-4 w-4" />
                        Rechazar Caso
                      </Button>
                      <Button
                        className="bg-[#17C964] hover:bg-[#12A150]"
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Aprobar Caso Especial
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Información Adicional */}
            <Card className="p-6 mt-6 border-l-4 border-[#006FEE]">
              <h3 className="text-[#006FEE] mb-3" style={{ fontWeight: 600 }}>Tipos de Casos Especiales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Casos Médicos:</strong> Requieren certificado médico oficial</li>
                    <li>• <strong>Situación Laboral:</strong> Requieren carta de la empresa</li>
                    <li>• <strong>Casos Familiares:</strong> Requieren documentación de soporte</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Casos Académicos:</strong> Estudiantes de último semestre</li>
                    <li>• <strong>Movilidad:</strong> Programas de intercambio</li>
                    <li>• <strong>Otros:</strong> Situaciones excepcionales documentadas</li>
                  </ul>
                </div>
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
