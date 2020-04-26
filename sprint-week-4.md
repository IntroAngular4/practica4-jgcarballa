# Sprint - W4

## Data Management

Práctica para el sprint de la segunda semana, correspondiente a los temas **6-Flow** y **7-Inject**.

### Objetivos

- Comunicación con servidor REST.

- Envío de datos con POST.

- Obtención mediante GET

- El servicio expone observables y oculta el uso de httpClient

- Los componentes contendores envían datos (no los observables) a los presentadores

### Requisitos previos

- Partir de la funcionalidad de la aplicación del sprint 3.

- usar el API libre propuesta https://api-base.herokuapp.com/api/pub/projects



### Tareas

- [ ] import _HttpClientModule_
- [ ] Make *ProjectsService* dependent on _HttpClient_
- [ ] use this [public projects API]('https://api-base.herokuapp.com/api/pub/projects')
- [ ] perform a **post** call to create a new project
- [ ] perform a **get** call to retireve the list of projects


### Recursos

- [public API for projects]('https://api-base.herokuapp.com/api/pub/projects')
- Its a **shared non secured** server
- Every user may see each other data
- Don't store sensitive data
- Memory only service
- Data removed after 30 minutes of inactivity

> Recomendación: Seguir los guiones de las lecciones 6 y 7.
