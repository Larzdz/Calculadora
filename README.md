
# 🧮 Calculadora con Django + React

<table align="center">
  <tr >
    <td align="center">
      <img src="https://res.cloudinary.com/dry8bdxce/image/upload/v1748920500/calculadoraLigthMode_ctlovk.png" width="500px" alt="Captura 1" /><br />
      <em>Captura de pantalla del proyecto Calculadora Light</em>
    </td>
    <td align="center">
      <img src="https://res.cloudinary.com/dry8bdxce/image/upload/v1748920500/calculadoraDarkMode_eavu6h.png" width="500px" alt="Captura 2" /><br />
      <em>Captura de pantalla del proyecto Calculadora Dark</em>
    </td>
  </tr>
</table>


---

Este es un proyecto de calculadora web creada con Django (backend) y React (frontend). Incluye funcionalidades como:

- ✅ Operaciones básicas: suma, resta, multiplicación, división, módulo y exponenciación.
- 💡 Interfaz moderna y responsiva.
- 🌙 Modo claro/oscuro con persistencia en `localStorage`.

---

## 📁 Estructura del proyecto

```
calculadora/
├── backend/          # Configuración principal de Django (settings.py, urls.py, etc.)
├── calculadora/      # App Django principal (views.py)
├── frontend/         # Código de React (App.js, App.css, etc.)
├── manage.py
```

---

## 🚀 Cómo usar

### 1. Backend (Django)
```bash
python -m venv env
source env/bin/activate  # o env\Scripts\activate en Windows
pip install django djangorestframework corsheaders
python manage.py migrate
python manage.py runserver
```

### 2. Frontend (React)
```bash
cd frontend
npm install
npm start
```

> ⚠️ El frontend se comunica con el backend a través del endpoint:  
> `http://127.0.0.1:8000/api/calculate/`

---

## 🧠 Funcionalidades clave

- Modo oscuro con interruptor 🌙☀️ (guardado en `localStorage`)
- Manejo de errores como división por cero
- Interfaz adaptada a dispositivos móviles

---

## 📌 Código principal

- **Backend** → `views.py` usa `APIView` para recibir, procesar y devolver los resultados.
- **Frontend** → `App.js` contiene el formulario de entrada, manejo de resultados y estado.
- **Estilos** → `App.css` incluye modo claro/oscuro, transiciones y diseño responsivo.

---

## 👤 Desarrollado por

[Larz]
