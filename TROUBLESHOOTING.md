# Troubleshooting (Node/npm missing)

## Symptom
Commands like `node`, `npm`, `pnpm`, `yarn` fail with:
- `zsh: command not found: node`
- `zsh: command not found: npm`

## Fix (macOS)
1. Install Node.js (includes npm):
   - Recommended: https://nodejs.org/
   - Or install with Homebrew:
     - `brew install node`
2. Verify:
   - `node -v`
   - `npm -v`
3. Restart VSCode terminal/session if needed.

## How to run backend
```bash
cd /Users/harsh/Desktop/task/edith-ai
npm install
npm run start:dev
```

## How to run frontend
```bash
cd /Users/harsh/Desktop/task/frontend
npm install
npm run dev
```

## Expected endpoints
- Backend: http://localhost:3000/
- Frontend (Vite default): http://localhost:5173/

