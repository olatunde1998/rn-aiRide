# One time setup
npm install --global eas-cli
eas login

# Build and deploy
npx expo export --platform web
eas deploy