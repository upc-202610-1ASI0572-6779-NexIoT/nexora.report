#### 6.2.2.4. Development Evidence for Sprint Review

En esta sección se explican y presentan los avances en implementación con relación a los productos de la solución según el alcance del Sprint 2: Edge Service, Landing Page, Mobile App, Embedded Apps, Web Service y Web Application.

---

## Edge Service

| Repository | Branch | Commit Id | Commit Message | Commit Message Body | Commited on (Date) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| nexora.edgeservice | develop | d73e39b | feat: add voltage safety device seeding and extend telemetry record model | - | 19/06/2026 |
| nexora.edgeservice | develop | d9a7a87 | feat: implement database initialization and table creation for edge service | - | 19/06/2026 |
| nexora.edgeservice | develop | 9fdb501 | feat: add application layer for iam context | - | 19/06/2026 |
| nexora.edgeservice | develop | f10357d | feat: add infrastructure layer for monitoring context | - | 19/06/2026 |
| nexora.edgeservice | develop | d20361c | feat: add interface layer for monitoring context | - | 19/06/2026 |
| nexora.edgeservice | develop | 39a6d04 | feat: add domain layer for monitoring context | - | 17/06/2026 |
| nexora.edgeservice | develop | 7378374 | feat: add IAM interface and auth helper | - | 17/06/2026 |

---

## Landing Page

| Repository | Branch | Commit Id | Commit Message | Commit Message Body | Commited on (Date) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| nexora.website | feature/about-us | 0fbcb4f | update the video section about the team with real-time interaction | - | 01/06/2026 |
| nexora.website | feature/about-us | 4b74fe1 | refactor(landing): reorganize about and home video content | - | 02/06/2026 |
| nexora.website | feature/terms | 380ff31 | fix(terms): correct translations and content alignment | - | 05/06/2026 |
| nexora.website | feature/testimonials-section | a6bb56a | fix: load product-specific testimonials dynamically and enable navigation controls | - | 08/06/2026 |
| nexora.website | feature/faq | 8825bc8 | fix: route in footer to FAQ view | - | 10/06/2026 |

---

## Mobile App

| Repository | Branch | Commit Id | Commit Message | Commit Message Body | Commited on (Date) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| nexora.mobileapp | develop | 6851e3a | feat(automations/presentation): add automations list page and new automation flow | - | 19/06/2026 |
| nexora.mobileapp | develop | 0766e46 | feat(automations/infra): implement fake automation repository | - | 19/06/2026 |
| nexora.mobileapp | develop | a2a8dfa | feat(mobile):add profile options page | - | 19/06/2026 |
| nexora.mobileapp | develop | 6bbfce5 | Merge branch 'feature/alerts' into develop | - | 19/06/2026 |
| nexora.mobileapp | develop | 46cdcdb | feat(consumption): add consumption presentation pages | Implement ConsumptionPage with segment control and area breakdown. ConsumptionAlertPage shows high-usage warnings with comparison charts, top consumer info, and smart suggestions. | 19/06/2026 |
| nexora.mobileapp | develop | f94d555 | feat(properties/presentation): create HomePage for real-time dashboard visualization | - | 19/06/2026 |
| nexora.mobileapp | develop | 8051d4d | feat(properties/infrastructure): implement FakeNexoraApi and FakePropertiesRepository | - | 19/06/2026 |
| nexora.mobileapp | develop | 0f74d9c | feat: add device sensor domain entity | - | 19/06/2026 |
| nexora.mobileapp | develop | ae261e5 | feat: add device page presentation view | - | 19/06/2026 |
| nexora.mobileapp | develop | 6ffd666 | Migrate mobile app to DDD architecture | - | 19/06/2026 |

---

## Embedded Apps

| Repository | Branch | Commit Id | Commit Message | Commit Message Body | Commited on (Date) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| nexora.embeddedapp | develop | 45a7b76 | chore: move nexora gas safety in a new folder | - | 17/06/2026 |
| nexora.embeddedapp | develop | f0cff23 | docs: add gas-safety documentation | - | 17/06/2026 |
| nexora.embeddedapp | develop | 14a8c86 | docs: add voltage consumption documentation | - | 17/06/2026 |
| nexora.embeddedapp | develop | cb3dd4a | fix(voltage): connections with serial monitor and add wifi | - | 18/06/2026 |

---

## Web Service

| Repository | Branch | Commit Id | Commit Message | Commit Message Body | Commited on (Date) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| nexora.webservice | develop | bfcccb5 | refactor: redesign Web API endpoints to follow RESTful naming conventions and versioning v1 | - | 19/06/2026 |
| nexora.webservice | develop | 461f06a | feat(report): add Alerts PDF report generation and controller endpoint | - | 18/06/2026 |
| nexora.webservice | develop | a8af25b | feat(monitoring): add severity and type query filters to GET /api/v1/alerts backend endpoint | - | 18/06/2026 |
| nexora.webservice | develop | 3ca33dd | feat(presentation): add DevicesController and GET latest telemetry endpoint | - | 18/06/2026 |
| nexora.webservice | develop | 80ed32d | fix: add CORS after JWT, condition HTTPS redirect, and UseCors | - | 15/06/2026 |
| nexora.webservice | develop | b7b0f17 | feat: implement property management cqrs flows and analytical dashboard | - | 07/06/2026 |
| nexora.webservice | develop | af11faa | feat: implement secure identity management and jwt authentication | - | 07/06/2026 |
| nexora.webservice | develop | bbe3649 | feat: register database and ingestion dependencies in presentation host | - | 04/06/2026 |

---

## Web Application

| Repository | Branch | Commit Id | Commit Message | Commit Message Body | Commited on (Date) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| nexora.webapp | develop | f293a97 | feat(subscriptions): add payment management interface | - | 19/06/2026 |
| nexora.webapp | develop | 7541c73 | feat(service-monitoring): add dashboard presentation components (AirQualityCard, ConsumptionChart, KpiCard, RecentAlerts, SystemHealthCard) | - | 19/06/2026 |
| nexora.webapp | develop | 31e6cfe | feat(subscriptions): add payment management store | - | 19/06/2026 |
| nexora.webapp | develop | 60aa82d | feat(service-monitoring): add alerts center and alerts investigation views | - | 19/06/2026 |
| nexora.webapp | develop | ba41b13 | feat(service-monitoring): add core domain events, repositories, value objects, and health calculation service | - | 19/06/2026 |
| nexora.webapp | develop | fd53617 | feat(subscriptions): add subscription domain services and events | - | 19/06/2026 |
| nexora.webapp | develop | d46a3b0 | feat(subscriptions): add subscription payment entities | - | 19/06/2026 |
| nexora.webapp | develop | 7ee2cc3 | feat(iam-settings): add settings mapper and repository implementation | - | 19/06/2026 |
| nexora.webapp | develop | 3732f50 | feat(asset-management): add device entity and mapper | - | 19/06/2026 |
| nexora.webapp | develop | a590069 | feat(subscriptions): add payment repository infrastructure | - | 19/06/2026 |
| nexora.webapp | develop | 4fb2cd1 | feat: add analytics report use-case, mapper, store | - | 19/06/2026 |
| nexora.webapp | develop | 49f3e6f | feat(asset-management): add properties presentation components | Add reusable UI components: ActionCard, BuildingCard, InventoryTable, PropertyKpiCard, SystemHealthTrends, and TenantProfileModal. | 19/06/2026 |