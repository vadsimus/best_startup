# docker/frontend/Dockerfile

FROM node:carbon

WORKDIR /app
# Копируем package.json и package-lock.json и делаем npm install, чтобы зависимости закешировались.
COPY docker/frontend/package*.json ./
RUN npm install
RUN npm cache clean -f
RUN npm install -g n
RUN n stable
# Наши исходники мы примонтируем в другую папку,
# так что надо задать PATH.
ENV PATH /app/node_modules/.bin:$PATH

# Финальный слой содержит билд нашего приложения.
ADD docker/frontend ./src
WORKDIR /app/src

RUN npm install --save react react-dom
RUN npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/polyfill @babel/preset-env @babel/preset-react
RUN npm install --save redux react-redux redux-thunk redux-devtools-extension

RUN npm run build
CMD npm run start