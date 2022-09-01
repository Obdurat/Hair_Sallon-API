npm install mongoose
npm install typescript
npm install ts-node
npm install @types/express
npm install joi

npm install eslint -D
npm install eslint-config-airbnb/base -D
npm install eslint-config-airbnb-typescript/base -D
npm install @typescript-eslint/eslint-plugin@^5.13.0 -D
npm install @typescript-eslint/parser@^5.0.0 -D
npm install eslint-config-airbnb-typescript --save-dev

docker run -d --name mongodb -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password -p 127.0.0.1:27017:27017 mongo