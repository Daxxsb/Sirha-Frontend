# Sistema SIRHA - Wireframes de Baja Fidelidad

## Sistema de Reasignación de Horarios Académicos

Este proyecto contiene 21 wireframes interactivos organizados en 8 módulos funcionales que representan el flujo completo del Sistema de Reasignación de Horarios Académicos (SIRHA) para una institución universitaria.

---

## 🎯 Resumen del Sistema

- **21 Wireframes totales** - Cobertura completa del sistema
- **3 Roles de usuario** - Estudiante, Decanatura y Administrador
- **8 Módulos funcionales** - Desde autenticación hasta reportes
- **Navegación interactiva completa** - Los wireframes están conectados y se pueden recorrer

---

## 👥 Roles y Accesos

### 1. **Estudiante** (7 pantallas)
Gestiona sus solicitudes de cambio de grupo y consulta información académica.

- Dashboard Estudiante
- Mi Horario
- Semáforo Académico (avance en plan de estudios)
- Historial Académico
- Crear Solicitud de Cambio
- Estado de Solicitudes
- Historial de Solicitudes

### 2. **Decanatura** (2 pantallas)
Revisa y aprueba/rechaza solicitudes de estudiantes.

- Dashboard Decanatura
- Detalle de Solicitud

### 3. **Administrador** (9 pantallas)
Gestiona todo el sistema: usuarios, materias, grupos y reportes.

- Dashboard Administrador
- Gestión de Estudiantes (CRUD)
- Gestión de Decanos (CRUD)
- Gestión de Profesores (RUD)
- Asignación de Roles y Permisos
- Gestión de Materias y Grupos
- Asignación de Estudiantes a Grupos
- Monitoreo de Carga de Grupos
- Reportes y Estadísticas

---

## 📋 Módulos Funcionales

### 1. **Autenticación**
- Pantalla de login única para todos los roles
- Simulador de roles para navegar como Estudiante, Decanatura o Administrador

### 2. **Dashboards**
- Dashboard personalizado por rol
- Accesos rápidos a funcionalidades principales
- Estadísticas y resumen de actividad

### 3. **Módulo Académico (Estudiante)**
- Consulta de horarios actuales y anteriores
- Semáforo académico con visualización de avance
- Historial de materias cursadas con calificaciones

### 4. **Solicitudes**
- Creación de solicitudes de cambio de grupo
- Seguimiento de estado (Pendiente, Aprobada, Rechazada)
- Historial completo de solicitudes

### 5. **Gestión de Usuarios (Admin)**
- CRUD de Estudiantes y Decanos
- RUD de Profesores
- Asignación de roles y permisos

### 6. **Gestión Académica (Admin)**
- CRUD de materias y grupos
- Configuración de cupos, horarios y profesores
- Asignación y retiro de estudiantes

### 7. **Monitoreo y Alertas (Admin)**
- Visualización de carga de grupos
- Alertas automáticas cuando un grupo alcanza ≥90% de capacidad

### 8. **Reportes (Admin)**
- Grupos más solicitados
- Tasa de aprobación vs rechazo
- Avance promedio del plan de estudios
- Reporte global de reasignaciones
- Gráficos y exportación de datos

---

## 🎨 Identidad Visual

### Colores Principales
- **Rojo Institucional**: `#990000` - Color principal, headers, botones primarios
- **Blanco**: `#FFFFFF` - Fondos y textos
- **Gris**: `#F5F5F5` - Fondos secundarios

### Colores de Estado
- **Éxito**: `#17C964` - Solicitudes aprobadas, acciones positivas
- **Error**: `#F31260` - Solicitudes rechazadas, alertas críticas
- **Advertencia**: `#C4841D` - Solicitudes pendientes, alertas moderadas
- **Informativo**: `#006FEE` - Información general, enlaces

### Tipografía
- **Work Sans**
  - Regular (400) - Textos generales
  - SemiBold (600) - Subtítulos y énfasis
  - Bold (700) - Títulos principales

---

## 🔄 Flujos de Navegación

### Flujo Estudiante: Crear Solicitud
```
Login → Dashboard Estudiante → Crear Solicitud → Estado de Solicitudes
```

### Flujo Decanatura: Aprobar Solicitud
```
Login → Dashboard Decanatura → Detalle de Solicitud → Aprobar/Rechazar → Dashboard
```

### Flujo Administrador: Gestionar Grupos
```
Login → Dashboard Admin → Gestión de Materias/Grupos → Editar → Monitoreo de Carga
```

---

## 🗺️ Mapa de Navegación

El sistema incluye un **Mapa de Navegación Interactivo** que permite:

- Ver todas las 21 pantallas organizadas por rol
- Entender los flujos principales del sistema
- Navegar directamente a cualquier wireframe
- Visualizar la estructura jerárquica completa

**Para acceder**: Desde el índice principal, haz clic en "Ver Mapa de Navegación Completo"

---

## 🚀 Cómo Navegar el Sistema

### Desde el Índice Principal
1. Selecciona cualquier wireframe de la lista organizada por módulos
2. Haz clic en "Ver Wireframe" para navegarlo

### Dentro de un Wireframe
1. Usa los botones interactivos para navegar entre pantallas relacionadas
2. La barra superior muestra tu ubicación actual (Rol → Módulo → Pantalla)
3. Haz clic en "Índice" para volver al menú principal

### Simulación de Login
1. En la pantalla de Login, selecciona un rol (Estudiante, Decanatura o Admin)
2. Haz clic en "Iniciar Sesión" para navegar al dashboard correspondiente
3. Explora las funcionalidades específicas de ese rol

---

## 📊 Componentes Principales

### Wireframes por Categoría

**Sistema** (2)
- LoginWireframe
- NavigationMap

**Estudiante** (7)
- StudentDashboard
- StudentScheduleView
- AcademicTrafficLight
- AcademicHistory
- CreateRequestForm
- RequestStatus
- RequestHistory

**Decanatura** (2)
- DecanatureDashboard
- RequestDetail

**Administrador** (9)
- AdminDashboard
- StudentManagement
- DeanManagement
- ProfessorManagement
- RoleAssignment
- SubjectGroupManagement
- StudentGroupAssignment
- GroupCapacityMonitor
- ReportsDashboard

---

## 💡 Características Clave

### ✅ Navegación Interactiva
- Todos los wireframes están conectados
- Botones funcionales que navegan entre pantallas
- Breadcrumbs y botones de regreso
- Barra de navegación con contexto actual

### ✅ Separación por Roles
- Cada rol tiene su propio conjunto de pantallas
- Colores distintivos por rol
- Flujos de trabajo específicos

### ✅ Wireframes de Baja Fidelidad
- Enfoque en funcionalidad y flujo
- Sin imágenes decorativas innecesarias
- Componentes simples y claros
- Etiquetas descriptivas

### ✅ Identidad Visual Consistente
- Paleta de colores institucional aplicada
- Tipografía Work Sans en todos los elementos
- Estados codificados por color
- Diseño limpio y profesional

---

## 🎓 Contexto Académico

Este sistema está diseñado para una **Decanatura de Ingeniería** que necesita:

1. **Automatizar** el proceso de solicitudes de cambio de grupo
2. **Centralizar** la gestión académica y de usuarios
3. **Monitorear** la capacidad y ocupación de grupos
4. **Generar reportes** para toma de decisiones
5. **Mejorar** la experiencia del estudiante en trámites académicos

---

## 📝 Notas de Implementación

### Tecnologías Utilizadas
- React + TypeScript
- Tailwind CSS v4.0
- Componentes shadcn/ui
- Lucide Icons

### Estado del Proyecto
✅ Wireframes completos y conectados  
✅ Navegación interactiva implementada  
✅ Identidad visual aplicada  
✅ Flujos de trabajo documentados  
✅ Mapa de navegación completo  

---

## 📧 Información del Proyecto

**Sistema**: SIRHA - Sistema de Reasignación de Horarios Académicos  
**Institución**: Universidad - Decanatura de Ingeniería  
**Tipo**: Wireframes de Baja Fidelidad  
**Roles**: 3 (Estudiante, Decanatura, Administrador)  
**Pantallas**: 21 wireframes interactivos  
**Módulos**: 8 módulos funcionales  

---

## 🔍 Siguientes Pasos

Este sistema de wireframes puede evolucionar a:

1. **Prototipos de Alta Fidelidad** - Con diseño visual completo
2. **Implementación Backend** - Con base de datos y APIs
3. **Autenticación Real** - Integración con sistemas institucionales
4. **Notificaciones** - Por correo y en tiempo real
5. **Reportes Avanzados** - Con más métricas y análisis
6. **Aplicación Móvil** - Para acceso desde dispositivos móviles

---

**¡Explora el sistema y navega por todos los flujos!** 🚀
