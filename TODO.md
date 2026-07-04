# TODO - Edith AI integration (enterprise, no mocked data)

## Backend (edith-ai/)
- [x] Analyze repo structure + existing Nest setup.
- [x] Confirm Jest unit + e2e tests run and pass.
- [ ] Step 1: Implement backend foundation for real APIs (security middleware, validation, PrismaService scaffolding).
- [ ] Step 2: Implement auth (cookie-based JWT): register/login/refresh/logout + CSRF strategy.
- [ ] Step 3: Implement task CRUD endpoints (pagination/filtering/search).
- [ ] Step 4: Implement timer endpoints + Socket.IO real-time updates.
- [ ] Step 5: Implement analytics endpoints + reports downloads.
- [ ] Step 6: Implement notifications endpoints + BullMQ jobs + websocket push.
- [ ] Step 7: Implement AI endpoints (chat/insights) + streaming (if required).
- [ ] Step 8: Add tests for auth/tasks/timers/notifications + critical integration coverage.


## Frontend (frontend/)
- [ ] Create Axios API client layer (api/*).
- [ ] Create Zustand stores for auth/tasks/timers/analytics/notifications/etc.
- [ ] Create React Query hooks and wire pages/components to real APIs.
- [ ] Replace placeholder pages and in-memory mock state.
- [ ] Integrate Socket.IO client for live updates.
- [ ] Add global API error handling + toasts + loading skeletons.

## Verification
- [ ] Run backend unit+e2e+integration tests.
- [ ] Run frontend dev, verify network calls, verify auth/session flow.

