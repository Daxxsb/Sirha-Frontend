/**
 * src/App.tsx
 *
 * Aplicación principal (SPA) — Punto de entrada para demostración local.
 *
 * Propósito:
 * - Centraliza la navegación entre pantallas/dashboards incluidas en `src/components`.
 * - Expone un estado interno `currentScreen` para seleccionar qué pantalla renderizar.
 *
 * Contrato y convenciones:
 * - Tipo `Screen` enumera todas las pantallas soportadas. Al añadir una pantalla,
 *   agregarla al tipo `Screen`, crear/importar el componente y añadir un case en el switch.
 * - `onNavigate: (screen: Screen) => void` es la forma estándar de navegación entre pantallas.
 *
 * Notas de mantenimiento:
 * - Evitar dejar texto de placeholder con marcas de diseño (emojis, "Figma", "WIP"). Usar mensajes neutrales
 *   y, si es necesario, un componente "ComingSoon" reutilizable.
 * - Para producción, reemplazar esta lógica por un enrutador (React Router / Next.js routes) si se requiere
 *   navegación real, o convertir cada pantalla en una ruta independiente.
 * - Mantener las importaciones de componentes agrupadas por dominio (estudiante, administración, etc.).
 */

import { useState } from 'react';
import { LoginWireframe } from "./components/LoginWireframe";
import { StudentDashboard } from "./components/StudentDashboard";
import { DecanaturaDashboard } from "./components/DecanaturaDashboard";
import { AdminDashboard } from "./components/AdminDashboard";
// Importa TODAS las pantallas del estudiante
import { StudentScheduleView } from "./components/StudentScheduleView";
import { CreateRequestForm } from "./components/CreateRequestForm";
import { RequestStatus } from "./components/RequestStatus";
import { AcademicTrafficLight } from "./components/AcademicTrafficLight";
import { AcademicHistory } from "./components/AcademicHistory";
import { RequestHistory } from "./components/RequestHistory";
// Importa pantallas de administración
import { StudentManagement } from "./components/StudentManagement";
import { DeanManagement } from "./components/DeanManagement";
import { ProfessorManagement } from "./components/ProfessorManagement";
import { RoleAssignment } from "./components/RoleAssignment";
import { SubjectGroupManagement } from "./components/SubjectGroupManagement";
import { StudentGroupAssignment } from "./components/StudentGroupAssignment";
import { GroupCapacityMonitor } from "./components/GroupCapacityMonitor";
import { ReportsDashboard } from "./components/ReportsDashboard";
import { RequestDetail } from "./components/RequestDetail";
// Importa otras pantallas
import { GlobalRequestsView } from "./components/GlobalRequestsView";
import { PriorityRequestsView } from "./components/PriorityRequestsView";
import { RequestDecisionHistory } from "./components/RequestDecisionHistory";
import { ScheduleAdministration } from "./components/ScheduleAdministration";
import { SpecialCasesApproval } from "./components/SpecialCasesApproval";
import { StudentRemoval } from "./components/StudentRemoval";
import { ProfessorAssignment } from "./components/ProfessorAssignment";
import { PeriodConfiguration } from "./components/PeriodConfiguration";
import { ReportExport } from "./components/ReportExport";
import { NavigationMap } from "./components/NavigationMap";

/**
 * Tipos de pantalla disponibles en la aplicación.
 * Añadir nuevas pantallas aquí y en el switch más abajo.
 */
type Screen = 
  | 'login' 
  | 'student-dashboard' 
  | 'decanatura-dashboard' 
  | 'admin-dashboard'
  // Pantallas del estudiante
  | 'student-schedule-view'
  | 'create-request-form' 
  | 'request-status'
  | 'academic-traffic-light'
  | 'academic-history'
  | 'request-history'
  // Pantallas de administración
  | 'student-management'
  | 'dean-management'
  | 'professor-management'
  | 'role-assignment'
  | 'subject-group-management'
  | 'student-group-assignment'
  | 'group-capacity-monitor'
  | 'reports-dashboard'
  | 'request-detail'
  // Otras pantallas
  | 'global-requests-view'
  | 'priority-requests-view'
  | 'request-decision-history'
  | 'schedule-administration'
  | 'special-cases-approval'
  | 'student-removal'
  | 'professor-assignment'
  | 'period-configuration'
  | 'report-export'
  | 'navigation-map';

/**
 * Componente raíz
 * - Mantiene el estado de navegación local (uso didáctico).
 * - `handleNavigate` es la API que deben usar las pantallas hijas para cambiar de vista.
 */
export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  /**
   * Placeholder profesional y neutral para pantallas no implementadas.
   * - Evita emojis y referencias a herramientas de diseño (p. ej. Figma).
   * - Texto claro y acción para volver a una pantalla conocida.
   */
  const renderPlaceholder = (screenName: string, backScreen: Screen = 'student-dashboard') => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 bg-gray-200 mx-auto mb-4 flex items-center justify-center rounded-full">
          {/* decoración neutral */}
        </div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">{screenName}</h1>
        <p className="text-gray-600 mb-6">
          Esta funcionalidad aún no está disponible. Se trabajará en su implementación próximamente.
        </p>
        <button 
          onClick={() => handleNavigate(backScreen)}
          className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          aria-label="Volver al dashboard"
        >
          Volver al Dashboard
        </button>
      </div>
    </div>
  );
  
  switch (currentScreen) {
    // Dashboards principales
    case 'student-dashboard':
      return <StudentDashboard onNavigate={handleNavigate} />;
    case 'decanatura-dashboard':
      return <DecanaturaDashboard onNavigate={handleNavigate} />;
    case 'admin-dashboard':
      return <AdminDashboard onNavigate={handleNavigate} />;
    case 'login':
      return <LoginWireframe onNavigate={handleNavigate} />;
    
    // ✅ PANTALLAS DEL ESTUDIANTE YA IMPLEMENTADAS
    case 'student-schedule-view':
      return <StudentScheduleView onNavigate={handleNavigate} />;
    case 'create-request-form':
      return <CreateRequestForm onNavigate={handleNavigate} />;
    case 'request-status':
      return <RequestStatus onNavigate={handleNavigate} />;
    case 'academic-traffic-light':
      return <AcademicTrafficLight onNavigate={handleNavigate} />;
    case 'academic-history':
      return <AcademicHistory onNavigate={handleNavigate} />;
    case 'request-history':
      return <RequestHistory onNavigate={handleNavigate} />;
    
    // ✅ PANTALLAS DE ADMINISTRACIÓN
    case 'student-management':
      return <StudentManagement onNavigate={handleNavigate} />;
    case 'dean-management':
      return <DeanManagement onNavigate={handleNavigate} />;
    case 'professor-management':
      return <ProfessorManagement onNavigate={handleNavigate} />;
    case 'role-assignment':
      return <RoleAssignment onNavigate={handleNavigate} />;
    case 'subject-group-management':
      return <SubjectGroupManagement onNavigate={handleNavigate} />;
    case 'student-group-assignment':
      return <StudentGroupAssignment onNavigate={handleNavigate} />;
    case 'group-capacity-monitor':
      return <GroupCapacityMonitor onNavigate={handleNavigate} />;
    case 'reports-dashboard':
      return <ReportsDashboard onNavigate={handleNavigate} />;
    case 'request-detail':
      return <RequestDetail onNavigate={handleNavigate} />;
    
    // ✅ OTRAS PANTALLAS
    case 'global-requests-view':
      return <GlobalRequestsView onNavigate={handleNavigate} />;
    case 'priority-requests-view':
      return <PriorityRequestsView onNavigate={handleNavigate} />;
    case 'request-decision-history':
      return <RequestDecisionHistory onNavigate={handleNavigate} />;
    case 'schedule-administration':
      return <ScheduleAdministration onNavigate={handleNavigate} />;
    case 'special-cases-approval':
      return <SpecialCasesApproval onNavigate={handleNavigate} />;
    case 'student-removal':
      return <StudentRemoval onNavigate={handleNavigate} />;
    case 'professor-assignment':
      return <ProfessorAssignment onNavigate={handleNavigate} />;
    case 'period-configuration':
      return <PeriodConfiguration onNavigate={handleNavigate} />;
    case 'report-export':
      return <ReportExport onNavigate={handleNavigate} />;
    case 'navigation-map':
      return <NavigationMap onNavigate={handleNavigate} />;
    
    default:
      // fallback seguro: muestra login
      return <LoginWireframe onNavigate={handleNavigate} />;
  }
}