## Frontend

### Proposed tech stack

#### Non-disputed

- React
- Electron.js
- Vite
- MUI (disabled sx & style props through definitions)
- Typescript
- Emotion css

#### Under discussion / revision

- Form management
  - [ ] `react-final-form`
  - [ ] custom uncontrolled implementation
    - [ ] based possibly on `react-browser-form` ❤️
- State management
  - [ ] Zustand (if no issues found) - **CHECK ELECTRON COMPATIBILITY**
    - [ ] Persistence, devtools plugin
- Routing
  - [ ] custom electron router
- Testing
  - [ ] Cypress + playwright
  - [ ] Jest / deno-test
  - [ ] vitest
